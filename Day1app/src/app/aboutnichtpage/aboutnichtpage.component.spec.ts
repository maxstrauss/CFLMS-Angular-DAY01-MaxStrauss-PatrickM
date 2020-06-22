import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutnichtpageComponent } from './aboutnichtpage.component';

describe('AboutnichtpageComponent', () => {
  let component: AboutnichtpageComponent;
  let fixture: ComponentFixture<AboutnichtpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutnichtpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutnichtpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
