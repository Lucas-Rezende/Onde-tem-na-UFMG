import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalistNavbarComponent } from './minimalist-navbar.component';

describe('MinimalistNavbarComponent', () => {
  let component: MinimalistNavbarComponent;
  let fixture: ComponentFixture<MinimalistNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinimalistNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinimalistNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
