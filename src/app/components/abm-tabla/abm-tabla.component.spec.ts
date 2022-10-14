import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmTablaComponent } from './abm-tabla.component';

describe('AbmTablaComponent', () => {
  let component: AbmTablaComponent;
  let fixture: ComponentFixture<AbmTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbmTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
