import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lesson } from 'src/app/shared/model/lesson';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, publishLast, refCount, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LessonsPagerService {

  lessons: Lesson[];

  private static readonly PAGE_SIZE = 2;
  private subject = new BehaviorSubject<Lesson[]>([]);
  lessonsPage$: Observable<Lesson[]> = this.subject.asObservable();
  currentPageNumber = 1;
  private courseId: number;

  constructor(private http: HttpClient) {
     console.log(' LessonsPager 서비스 ......');
   }

   loadFirstPage(courseId: number) {
     this.courseId = courseId;
     this.currentPageNumber = 1;
     return this.loadPage(this.currentPageNumber);
   }


   previous() {
     if (this.currentPageNumber - 1 >= 1) {
       this.currentPageNumber -= 1;
     }
     return this.loadPage(this.currentPageNumber);
   }

   next() {
     this.currentPageNumber += 1;
     return this.loadPage(this.currentPageNumber);
   }

   loadPage(pageNumber: number)  {
     return this.http.get('/api/lessons', {
       params: {
         courseId: this.courseId,
         pageNumber,
         pageSize: LessonsPagerService.PAGE_SIZE
       }
     })
     .pipe(

       tap( lessons => {

        this.subject.next(lessons.payload);
        } ),
       publishLast(),
       refCount()
     );
   }



}
