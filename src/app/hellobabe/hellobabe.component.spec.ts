import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HellobabeComponent } from './hellobabe.component';

describe('HellobabeComponent', () => {
  let component: HellobabeComponent;
  let fixture: ComponentFixture<HellobabeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HellobabeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HellobabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
