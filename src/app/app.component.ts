import { Component, signal, inject } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/footer/footer.component';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Onde-tem-na-UFMG';
  showFooter = signal(true);

  constructor() {
    const router = inject(Router);
    const activatedRoute = inject(ActivatedRoute);

    router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      mergeMap(route => route.data)
    ).subscribe(data => {
      // Handle the scroll reset
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }

      this.showFooter.set(!data['hideFooter']);
    });
  }
}
