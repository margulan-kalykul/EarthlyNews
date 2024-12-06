import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWaveComponent } from './main-wave.component';

describe('MainWaveComponent', () => {
  let component: MainWaveComponent;
  let fixture: ComponentFixture<MainWaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainWaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainWaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
