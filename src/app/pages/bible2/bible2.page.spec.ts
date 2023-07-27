import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bible2Page } from './bible2.page';

describe('Bible2Page', () => {
  let component: Bible2Page;
  let fixture: ComponentFixture<Bible2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bible2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
