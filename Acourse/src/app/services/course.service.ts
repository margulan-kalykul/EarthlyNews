import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { COURSE } from '../database/courses';
import { FILE } from '../database/files';
import { LINK } from '../database/links';
import { NOTE } from '../database/note';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  BASE_URL = 'https://d5a1b872-690b-4e46-bb64-d63b244db87d.mock.pstmn.io';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getCourse(name: string): Observable<COURSE> {
    return this.http.get<COURSE>(`${this.BASE_URL}/api/courses/${name}/`);
  }

  getCourses(): Observable<COURSE[]> {
    return this.http.get<COURSE[]>(`${this.BASE_URL}/api/courses/`);
  }

  getCourseFiles(name: string): Observable<FILE[]> {
    return this.http.get<FILE[]>(`${this.BASE_URL}/api/courses/${name}/files/`);
  }

  getCourseLinks(name: string): Observable<LINK[]> {
    return this.http.get<LINK[]>(`${this.BASE_URL}/api/courses/${name}/links/`);
  }

  getCourseByName(name: string): Observable<COURSE> {
    return this.http.get<COURSE>(`${this.BASE_URL}/api/courses/${name}/`);
  }

  updateCourse(course: COURSE): Observable<any> {
    return this.http.put(`${this.BASE_URL}/api/courses/${course.short_name}/`, course, this.httpOptions);
  }

  deleteCourse(course: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/courses/${course}/`);
  }

  addLink(link: LINK): Observable<LINK> {
    return this.http.post<LINK>(`${this.BASE_URL}/api/links/`, link, this.httpOptions);
  }

  updateLink(link: LINK): Observable<any> {
    return this.http.put(`${this.BASE_URL}/api/links/${link.name}/`, link, this.httpOptions);
  }

  deleteLink(link: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/links/${link}/`);
  }

  addFile(file: FILE): Observable<FILE> {
    return this.http.post<FILE>(`${this.BASE_URL}/api/files/`, file, this.httpOptions);
  }

  getCourseNotes(name: string): Observable<NOTE[]> {
    return this.http.get<NOTE[]>(`${this.BASE_URL}/api/courses/${name}/notes/`);
  }

  addNote(note: NOTE): Observable<NOTE> {
      return this.http.post<NOTE>(`${this.BASE_URL}/api/notes/`, note, this.httpOptions);
    }

  updateNote(note: NOTE): Observable<any> {
    return this.http.put(`${this.BASE_URL}/api/notes/${note.note}/`, note, this.httpOptions);
  }

  deleteNote(note: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/notes/${note}/`);
  }
}
