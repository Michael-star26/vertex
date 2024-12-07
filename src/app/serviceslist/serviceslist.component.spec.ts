import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceslistComponent } from './serviceslist.component';

describe('ServiceslistComponent', () => {
  let component: ServiceslistComponent;
  let fixture: ComponentFixture<ServiceslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
