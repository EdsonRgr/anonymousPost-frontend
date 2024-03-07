import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdatePostComponent } from './dialog-update-post.component';

describe('DialogUpdatePostComponent', () => {
  let component: DialogUpdatePostComponent;
  let fixture: ComponentFixture<DialogUpdatePostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogUpdatePostComponent]
    });
    fixture = TestBed.createComponent(DialogUpdatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
