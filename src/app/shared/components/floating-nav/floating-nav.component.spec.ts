import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingNavComponent } from './floating-nav.component';

describe('FloatingNavComponent', () => {
  let component: FloatingNavComponent;
  let fixture: ComponentFixture<FloatingNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
