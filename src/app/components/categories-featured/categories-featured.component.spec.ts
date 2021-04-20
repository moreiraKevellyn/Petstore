import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesServiceMock } from 'src/app/mocks/categories-mocks';
import { CategoriesService } from 'src/app/services/categories.service';
import { CategoriesFeaturedComponent } from './categories-featured.component';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { MockComponents } from 'ng-mocks';

describe('CategoriesFeaturedComponent', () => {
  let component: CategoriesFeaturedComponent;
  let fixture: ComponentFixture<CategoriesFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CategoriesFeaturedComponent,
        MockComponents()
      ],
      providers: [{
        provide: CategoriesService,
        useClass: CategoriesServiceMock
      }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show component title in html', () => {
    // Código
    // const fixture = TestBed.createComponent(CategoriesFeaturedComponent);
    // fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Categorias em Destaque');
  });

  it('should check category item count in HTML', () => {
    const html = fixture.nativeElement;
    // Eu coloquei uma classe na div referente a cada item de categoria, por isso consegui obter pela classe
    expect(html.getElementsByClassName('category-item').length).toEqual(2);
  });

  it('should check  first item HTML', () => {
    const fixture = TestBed.createComponent(CategoriesFeaturedComponent);
    fixture.detectChanges();
    const html = fixture.nativeElement;
    const result = html.getElementsByClassName('category-item')[0].textContent;
    //console.log(result)
    expect(result).toContain("Ração");
  });

});
