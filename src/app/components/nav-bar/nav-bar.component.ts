import { Component } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent {
    public navBarCollapsed: boolean = true;

    constructor(
      public authService: AuthService
    ) { }

    toggleNavBarCollapsed() {
        this.navBarCollapsed = !this.navBarCollapsed;
    }
}