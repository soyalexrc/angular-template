import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalServiceEditComponent } from './external-service-edit.component';

describe('ExternalServiceEditComponent', () => {
  let component: ExternalServiceEditComponent;
  let fixture: ComponentFixture<ExternalServiceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalServiceEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalServiceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
