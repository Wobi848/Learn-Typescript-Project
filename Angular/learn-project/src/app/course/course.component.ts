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
  isActive = true;

  email = "email@adress.com";

  course = {
    title: "The Complete Angular Course",
    rating: 4.96444,
    students: 123123,
    price: 991.29,
    releaseDate: new Date(2020, 2, 1)
  }

  costumPipe = `Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Impedit sequi animi deserunt mollitia explicabo,
                illum, pariatur officia qui, aliquam eos rerum iure
                sed culpa enim officiis ea asperiores a veritatis `;

  constructor(private service: CoursesService) { }

  ngOnInit(): void {
    this.courses = this.service.getCourses();
  }

  onEvent($event: any) {
    $event.stopPropagation();
    console.log("Button clicked", $event);
  }

  onKeyUp() {
    console.log(this.email);
  }

}
