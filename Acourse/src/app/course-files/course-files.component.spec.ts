import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFilesComponent } from './course-files.component';

describe('CourseFilesComponent', () => {
  let component: CourseFilesComponent;
  let fixture: ComponentFixture<CourseFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseFilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
