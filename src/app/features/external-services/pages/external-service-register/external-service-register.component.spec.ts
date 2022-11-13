import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalServiceRegisterComponent } from './external-service-register.component';

describe('ExternalServiceRegisterComponent', () => {
  let component: ExternalServiceRegisterComponent;
  let fixture: ComponentFixture<ExternalServiceRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalServiceRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalServiceRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
