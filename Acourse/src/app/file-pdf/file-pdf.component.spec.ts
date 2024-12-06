import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilePdfComponent } from './file-pdf.component';

describe('FilePdfComponent', () => {
  let component: FilePdfComponent;
  let fixture: ComponentFixture<FilePdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilePdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
