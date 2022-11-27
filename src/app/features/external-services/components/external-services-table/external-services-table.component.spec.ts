import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalServicesTableComponent } from './external-services-table.component';

describe('ExternalServicesTableComponent', () => {
  let component: ExternalServicesTableComponent;
  let fixture: ComponentFixture<ExternalServicesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalServicesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalServicesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
