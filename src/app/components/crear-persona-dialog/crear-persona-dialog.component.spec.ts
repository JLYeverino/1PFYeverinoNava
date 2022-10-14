import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPersonaDialogComponent } from './crear-persona-dialog.component';

describe('CrearPersonaDialogComponent', () => {
  let component: CrearPersonaDialogComponent;
  let fixture: ComponentFixture<CrearPersonaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPersonaDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearPersonaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
