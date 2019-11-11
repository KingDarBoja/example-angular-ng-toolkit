import { DOCUMENT, isPlatformServer } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	public constructor(@Inject(PLATFORM_ID) private platformId: any, @Inject(DOCUMENT) private document: any) {}

	public ngOnInit(): void {
		if (isPlatformServer(this.platformId)) {
			const bases = this.document.getElementsByTagName('base');

			if (bases.length > 0) {
				bases[0].setAttribute('href', environment.baseHref);
			}
		}
	}
}
