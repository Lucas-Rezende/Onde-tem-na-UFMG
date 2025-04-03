import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './app/modules/home/pages/home/home.component';

import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(HomeComponent, {
  providers: [provideRouter(routes)]
});
