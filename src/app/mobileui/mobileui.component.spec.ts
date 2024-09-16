import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileuiComponent } from './mobileui.component';

describe('MobileuiComponent', () => {
  let component: MobileuiComponent;
  let fixture: ComponentFixture<MobileuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileuiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
