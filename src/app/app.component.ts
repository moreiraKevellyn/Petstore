import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationExtras, Router, ActivatedRoute, RouterModule } from '@angular/router';
//import { AppComponent } from './app.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Petstore';
  menus = [
    { 'name': 'Home', 'router': '/' },
    { 'name': 'Contato', 'router': '/contact' }
  ];
  constructor(private router: Router,  private route: ActivatedRoute) {
    
  }

  showPage(pageName: string, sidenav: MatSidenav) {
    this.router.navigate([pageName]);
    sidenav.close();
  }

}
