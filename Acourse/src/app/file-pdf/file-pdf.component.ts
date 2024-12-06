import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';
import { FormsModule } from '@angular/forms';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { FILE } from '../database/files';

@Component({
  selector: 'app-file-pdf',
  standalone: true,
  imports: [FormsModule, NgxExtendedPdfViewerModule, CommonModule],
  templateUrl: './file-pdf.component.html',
  styleUrl: './file-pdf.component.css'
})
export class FilePdfComponent implements OnInit {
  filename!: string;

  constructor(private route: ActivatedRoute,
              private courseService: CourseService,
              private location: Location) { }

  ngOnInit(): void {
    // this.getFile();
    this.filename = "Lab 6";
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
