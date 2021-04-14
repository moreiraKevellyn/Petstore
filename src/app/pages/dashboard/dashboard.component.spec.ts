import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';
import { CategoriesFeaturedComponent } from 'src/app/components/categories-featured/categories-featured.component';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent,
      MockComponents(
        CategoriesFeaturedComponent
      ) ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
