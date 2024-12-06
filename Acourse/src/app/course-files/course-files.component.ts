import { Component, OnInit } from '@angular/core';
import { COURSE } from '../database/courses';
import { FILE } from '../database/files';
import { LINK } from '../database/links';
import { NOTE } from '../database/note';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';
import { LoginService } from '../services/login.service';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-files',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './course-files.component.html',
  styleUrl: './course-files.component.css'
})
export class CourseFilesComponent implements OnInit{
  courses!: COURSE;
  files!: FILE[];
  links!: LINK[];
  notes!: NOTE[];
  note!: string;
  isLogged: boolean = false;

  constructor(private route: ActivatedRoute, private courseService: CourseService, private location: Location, public loginService: LoginService) { }

  ngOnInit(): void {
    this.isLogged = this.loginService.logged;
    this.getCourse();
    this.getFiles();
    this.getLinks();
    this.getNotes();
  }

  deleteCourse(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.courseService.deleteCourse(name!);
  }

  getFiles(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.courseService.getCourseFiles(name!).subscribe(files => this.files = files);
  }

  getLinks(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.courseService.getCourseLinks(name!).subscribe(links => this.links = links);
  }

  getCourse(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.courseService.getCourse(name!)
      .subscribe(courses => this.courses = courses);
  }

  updateCourse(): void {
    this.courseService.updateCourse(this.courses)
      .subscribe(() => alert('renamed the course to ' + this.courses.name));
  }

  getNotes(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.courseService.getCourseNotes(name!)
      .subscribe(notes => this.notes = notes);
  }

  addNote(): void {
    this.courseService.addNote({note: this.note, course: this.courses.short_name})
      .subscribe(note => this.notes.push(note));
    ((document.getElementById('notes') as HTMLInputElement).value as string | null) = null;
  }

  goBack(): void {
    this.location.back();
  }
}
