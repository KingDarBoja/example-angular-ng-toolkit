import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// App External Modules
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebookSquare, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

// App Internal Modules
import { CoreModule } from '../modules/core/core.module';
import { AppRoutingModule } from './app-routing.module';

// App Components
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { RootComponent } from '../root.component';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent, RootComponent],
	imports: [
		AppRoutingModule,
		BrowserModule.withServerTransition({ appId: 'serverApp' }),
		CoreModule,
		CommonModule,
		TransferHttpCacheModule,
		HttpClientModule,
		NgtUniversalModule,
	],
	providers: [],
	bootstrap: [RootComponent],
})
export class AppModule {
	public constructor(library: FaIconLibrary) {
		library.addIcons(faCopyright, faFacebookSquare, faTwitter, faLinkedin, faInstagram);
	}
}
