import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptFormComponent } from './adopt-form.component';

describe('AdoptFormComponent', () => {
  let component: AdoptFormComponent;
  let fixture: ComponentFixture<AdoptFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdoptFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdoptFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
