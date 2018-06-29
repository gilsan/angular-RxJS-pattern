import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,  AngularFirestoreDocument } from 'angularfire2/firestore';
import { Lesson } from '../shared/model/lesson';
import { Course } from '../shared/model/course';
import { COURSES, LESSONS } from '../shared/model/dbData';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fireinput',
  templateUrl: './fireinput.component.html',
  styleUrls: ['./fireinput.component.css']
})
export class FireinputComponent implements OnInit {
  lessons: Lesson[] ;
  courses: Course[] ;

 // courseCollection: AngularFireCollection<Course>;
 // courseObservable: Observable<Course[]>;

  constructor(private db: AngularFirestore) { }


  ngOnInit() {
     this.courses = Object.values(COURSES);

     this.lessons = Object.values(LESSONS);

  //   this.courses.forEach((course) => {
  //    this.db.collection('courses').add(course);
  //   });
  //  this.lessons.forEach((lesson) => {
  //    this.db.collection('lessons').add(lesson);
  //  });
  }

}
