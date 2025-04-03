import { NavigationPagesService } from './../../../../services/navigation-pages/navigation-pages.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-404',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-404.component.html',
  styleUrls: ['./error-404.component.css']
})
export class Error404Component {
  constructor(private navigationService: NavigationPagesService){}

  voltarParaHome() {
    this.navigationService.navigateTo('/');
  }
}
