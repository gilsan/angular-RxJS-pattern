
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { LoginComponent } from './login/login.component';
import { CourseComponent } from './course/course.component';
import { AllLessonsComponent } from './all-lessons/all-lessons.component';
import { CourseDetailResolve } from './course-detail/course-detail.resolve';

export const route: Routes = [
           {
             path: 'home',
             component: HomeComponent
         },
         { path: 'allLessons', component: AllLessonsComponent },
         { path: 'login', component: LoginComponent},
         { path: 'course', component: CourseComponent },
         {
             path: 'course/:id',
             component: CourseDetailComponent,
             resolve: { detail: CourseDetailResolve }
         },
         {
             path: '',
             pathMatch: 'full',
             redirectTo: '/login'
         },
         {
             path: '**',
             pathMatch: 'full',
             redirectTo: '/login'
         }
];

@NgModule({
  imports: [
    RouterModule.forRoot(route)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}


