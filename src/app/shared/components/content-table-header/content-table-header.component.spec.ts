import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTableHeaderComponent } from './content-table-header.component';

describe('ContentTableHeaderComponent', () => {
  let component: ContentTableHeaderComponent;
  let fixture: ComponentFixture<ContentTableHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTableHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
