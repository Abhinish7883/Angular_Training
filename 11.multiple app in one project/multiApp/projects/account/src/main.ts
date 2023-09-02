import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AccountAppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AccountAppModule)
  .catch(err => console.error(err));
