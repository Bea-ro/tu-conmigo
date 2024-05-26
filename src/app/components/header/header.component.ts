import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      console.log(event);
    });
  }

  public navigateToAnimal() {
    this.router.navigate(['/adoptando-tu-animal']);
  }
}
