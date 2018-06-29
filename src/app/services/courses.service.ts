import { Injectable } from '@angular/core';

import { AngularFirestore,   } from 'angularfire2/firestore';
import {Course} from '../shared/model/course';
import {Lesson} from '../shared/model/lesson';
import { map, first } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private db: AngularFirestore) { }

  findAllCourses()  {
    return  this.db.collection('courses', ref => ref.limit(2))
    .snapshotChanges()
    .pipe(
      first(),
      map( arr => {
        return arr.map( snap => {
           const data = snap.payload.doc.data();
           const id = snap.payload.doc.id;
           return { id, ...data };
        }); }
    ));

  }

  findLatestLessons()  {
   return  this.db.collection('lessons', ref => ref.limit(3))
        .snapshotChanges()
        .pipe(
          first(),
          map( array => {
            return array.map( narr => {
              const data = narr.payload.doc.data();
              const id = narr.payload.doc.id;
              return { id, ...data };
            });
          } )
        );
  }

  findCourseByUrl(courseUrl: String)   {
   return this.db.collection('courses', ref => ref.where('url', '==', courseUrl))
    .snapshotChanges()
    .pipe(
      first(),
      map( arr => {
         return arr.map( snap => {
           const data = snap.payload.doc.data();
           const id   = snap.payload.doc.id;
           return  data;
         });
      }
    ),
    map( data => data[0])
  );
  }

  findLessonsForCourse(courseId: string)  {
   return  this.db.collection('lessons', ref => ref.where('id', '==', courseId))
      .valueChanges()
      .pipe(
        first(),
         map( arr => {
          return arr.map( smap => {
             return smap;
          });
         })
      );
  }


}

