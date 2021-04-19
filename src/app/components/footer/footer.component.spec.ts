import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCard } from '@angular/material/card';
import { MockComponents } from 'ng-mocks';
import { ParametersServiceMock } from 'src/app/mocks/parameters-mock';
import { ParametersService } from 'src/app/services/parameters.service';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent,
        MockComponents(
          MatCard  
        ),
      ],

      providers: [{
        provide: ParametersService,
        useClass: ParametersServiceMock
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check social network logo', () => {
   const img = fixture.debugElement.nativeElement.querySelector(".img-social");
   console.log(img)
   expect(img['src']).toContain('https://imobzi.storage.googleapis.com/image/redes-sociais/facebook_gray.svg');
});

it('should check phone format ', () => {
  const fone = fixture.nativeElement.getElementsByClassName("fone")[0].textContent;
  console.log(fone)
  expect(fone).toContain('+55 (11) 4063-4100');
});

it('should check trademark', () => {
  const trademark = fixture.nativeElement.querySelector(".trademark").textContent
  console.log(trademark)
  expect(trademark).toContain('@Petstore');
});

});
