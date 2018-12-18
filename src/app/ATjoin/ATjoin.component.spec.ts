/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ATjoinComponent } from './ATjoin.component';

describe('ATjoinComponent', () => {
  let component: ATjoinComponent;
  let fixture: ComponentFixture<ATjoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ATjoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ATjoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
