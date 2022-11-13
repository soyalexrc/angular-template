import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopedComponentBComponent } from './scoped-component-b.component';

describe('ScopedComponentBComponent', () => {
  let component: ScopedComponentBComponent;
  let fixture: ComponentFixture<ScopedComponentBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScopedComponentBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScopedComponentBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
