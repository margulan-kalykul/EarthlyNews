import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { LoginService } from '../services/login.service';
import { COURSE } from '../database/courses';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent implements OnInit {
  courses!: COURSE[];
  username!: string;
  user: any;

  constructor(private courseService: CourseService, public loginService: LoginService) {
  }

  ngOnInit(): void {
    this.getCourses();
    var token;
    if (typeof window !== 'undefined' && window.localStorage) {
      token = localStorage.getItem('token');
    }
    if (token) {
      this.username = this.loginService.getUsername();
    }
  }

  getCourses(): void {
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses);
  }
}
