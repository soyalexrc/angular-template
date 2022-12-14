import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalServicesListComponent } from './external-services-list.component';

describe('ExternalServicesListComponent', () => {
  let component: ExternalServicesListComponent;
  let fixture: ComponentFixture<ExternalServicesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalServicesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalServicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
