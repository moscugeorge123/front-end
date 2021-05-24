import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizeCommandComponent } from './finalize-command.component';

describe('FinalizeCommandComponent', () => {
  let component: FinalizeCommandComponent;
  let fixture: ComponentFixture<FinalizeCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalizeCommandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizeCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
