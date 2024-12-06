import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-file-pdf',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './file-pdf.component.html',
  styleUrl: './file-pdf.component.css'
})
export class FilePdfComponent implements OnInit {
  // file: any;

  constructor(private route: ActivatedRoute,
              private courseService: CourseService,
              private location: Location) { }

  ngOnInit(): void {
    // this.getFile();
  }

  // getFile(): void {
  //   this.route.paramMap.subscribe(params => {
  //     this.file = files[+params.get('id')];
  //   });
  // }

  goBack(): void {
    this.location.back();
  }
}
