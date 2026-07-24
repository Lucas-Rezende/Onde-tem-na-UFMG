import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-floating-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './floating-nav.component.html',
  styleUrl: './floating-nav.component.css'
})
export class FloatingNavComponent {
  @Input() backRoute: string = '/';
  @Input() showBack: boolean = true;
  @Input() showHome: boolean = true;
}