import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryVenteComponent } from './category-vente.component';

describe('CategoryVenteComponent', () => {
  let component: CategoryVenteComponent;
  let fixture: ComponentFixture<CategoryVenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryVenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
