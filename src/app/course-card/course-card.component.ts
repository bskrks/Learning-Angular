import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  @Input()
  course: Course;

  @Output()
  courseSelected = new EventEmitter<Course>();

  onCourseViewed() {
    console.log("course-card component button worked");
    this.courseSelected.emit(this.course);
  }
}
