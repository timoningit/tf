import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApbannerComponent } from './apbanner.component';

describe('ApbannerComponent', () => {
  let component: ApbannerComponent;
  let fixture: ComponentFixture<ApbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApbannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
