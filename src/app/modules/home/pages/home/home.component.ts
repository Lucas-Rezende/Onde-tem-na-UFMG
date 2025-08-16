import { Component, ElementRef, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NavigationPagesService } from './../../../../services/navigation-pages/navigation-pages.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private navigationService: NavigationPagesService){}

  GoTo(route: string) {
    this.navigationService.navigateTo(route);
  }
 }
