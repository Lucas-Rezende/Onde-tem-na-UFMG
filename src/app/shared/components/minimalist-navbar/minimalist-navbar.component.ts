import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-minimalist-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './minimalist-navbar.component.html',
  styleUrl: './minimalist-navbar.component.css'
})
export class MinimalistNavbarComponent { }