import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestItem } from './test-item';

describe('TestItem', () => {
  let component: TestItem;
  let fixture: ComponentFixture<TestItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
