import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;  

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log("Toggle Menu "+this.isMenuOpen);
  }
}
