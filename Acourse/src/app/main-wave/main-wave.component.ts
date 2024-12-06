import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-wave',
  standalone: true,
  imports: [],
  templateUrl: './main-wave.component.html',
  styleUrl: './main-wave.component.css'
})
export class MainWaveComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  toCourses(): void {
    this.router.navigate(['courses']);
  }
}
