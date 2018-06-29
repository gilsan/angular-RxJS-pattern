import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import { BrowserEventExperimentsComponent } from './browser-event-experiments/browser-event-experiments.component';
import { EventBusExperimentsComponent } from './event-bus-experiments/event-bus-experiments.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonsCounterComponent } from './lessons-counter/lessons-counter.component';
import { Config } from './config/config';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireStorageModule} from 'angularfire2/storage';
import { AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { HomeComponent } from './home/home.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { AppRoutingModule } from './app.routing.module';
import { FireinputComponent } from './fireinput/fireinput.component';
import { CoursesService } from './services/courses.service';
import { CourseListComponent } from './course-list/course-list.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.service';
import { NewsletterService } from './services/newsletter.service';
import { CourseDetailHeaderComponent } from './course-detail-header/course-detail-header.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { CourseComponent } from './course/course.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './services/message.service';
import { LessonsPagerService } from './services/lessons-pager.service';
import { CoursesHttpService } from './services/courses-http.service';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';
import { AllLessonsComponent } from './all-lessons/all-lessons.component';
import { SafeUrlPipe } from './shared/pipes/safe-url.pipe';
import { CourseDetailResolve } from './course-detail/course-detail.resolve';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    BrowserEventExperimentsComponent,
    EventBusExperimentsComponent,
    LessonsListComponent,
    LessonsCounterComponent,
    HomeComponent,
    CourseDetailComponent,
    FireinputComponent,
    CourseListComponent,
    LessonListComponent,
    TopMenuComponent,
    LoginComponent,
    CourseDetailHeaderComponent,
    NewsletterComponent,
    CourseComponent,
    MessagesComponent,
    LessonDetailComponent,
    AllLessonsComponent,
    SafeUrlPipe,
    LoadingComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(Config.config),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    CoursesService,
    UserService,
    NewsletterService,
    MessageService,
    CoursesHttpService,
    CourseDetailResolve


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
