import { NgModule } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';

// Enviroment variables.
import { environment } from '../environments/environment';

// App Internal Modules
import { CoreModule } from '../modules/core/core.module';
import { AppRoutingModule } from './app-routing.module';

// App Components
import { RootComponent } from '../root.component';
import { AppModule } from './app.module';

@NgModule({
	imports: [
		AppRoutingModule,
		CoreModule,
		AppModule,
		BrowserTransferStateModule,
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
	],
	providers: [],
	bootstrap: [RootComponent],
})
export class AppBrowserModule {}
