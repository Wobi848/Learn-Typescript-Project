import { Component, OnInit } from '@angular/core';

import { CoursesService } from './courses.service';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass']
})
export class CourseComponent implements OnInit {
  title = "I'm a Title";
  courses: any;
  imageUrl = "https://4wobi.com/wp-content/uploads/2021/08/Wobi_Logo-croped.svg";
  colSpan = 2;

  constructor(private service: CoursesService) { }

  ngOnInit(): void {
    this.courses = this.service.getCourses();
  }

}
