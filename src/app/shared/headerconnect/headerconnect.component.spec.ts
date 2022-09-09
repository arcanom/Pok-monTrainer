import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderconnectComponent } from './headerconnect.component';

describe('HeaderconnectComponent', () => {
  let component: HeaderconnectComponent;
  let fixture: ComponentFixture<HeaderconnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderconnectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderconnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
