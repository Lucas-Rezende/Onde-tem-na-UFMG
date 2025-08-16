import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanchonetesComponent } from './lanchonetes.component';

describe('LanchonetesComponent', () => {
  let component: LanchonetesComponent;
  let fixture: ComponentFixture<LanchonetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanchonetesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanchonetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
