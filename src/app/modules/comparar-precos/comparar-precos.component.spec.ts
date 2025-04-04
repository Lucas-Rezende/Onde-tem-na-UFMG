import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompararPrecosComponent } from './comparar-precos.component';

describe('CompararPrecosComponent', () => {
  let component: CompararPrecosComponent;
  let fixture: ComponentFixture<CompararPrecosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompararPrecosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompararPrecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
