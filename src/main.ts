import { enableProdMode } from '@angular/core'; 
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { ApplicationRef } from '@angular/core';

if (environment.production) {
  enableProdMode();  
} else {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .then(moduleRef => {
      const appRef = moduleRef.injector.get(ApplicationRef);
      const appComponent = appRef.components[0];
    })
    .catch(err => console.error(err));
}
