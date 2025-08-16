import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanchonetesInfoComponent } from './lanchonetes-info.component';

describe('LanchonetesInfoComponent', () => {
  let component: LanchonetesInfoComponent;
  let fixture: ComponentFixture<LanchonetesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanchonetesInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanchonetesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
