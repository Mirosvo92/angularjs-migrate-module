import './app';

import {enableProdMode, NgZone} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { UrlService, UIRouter } from '@uirouter/core';

declare const window: any;

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(platformRef => {
    // Ensure Angular destroys itself on hot reloads.
    window['platformRef'] && window['platformRef'].destroy();
    window['platformRef'] = null;

    // get() UrlService from DI (this call will create all the UIRouter services)
    const urlService = platformRef.injector.get(UrlService);

    // Instruct UIRouter to listen to URL changes
    function startUIRouter() {
      urlService.listen();
      urlService.sync();
    }

    const ngZone: NgZone = platformRef.injector.get(NgZone);
    ngZone.run(startUIRouter);

    // Otherise, log the boot error
  }).catch(err => console.error('Error bootstrapping AppModule', err));
