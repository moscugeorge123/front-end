import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSidePanelComponent } from './side-panel.component';

describe('ProductsSidePanelComponent', () => {
  let component: ProductsSidePanelComponent;
  let fixture: ComponentFixture<ProductsSidePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsSidePanelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsSidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
