import { Component, HostListener, Inject } from '@angular/core';
import { WINDOW } from '@ng-toolkit/universal';
import { LanguagesEnum } from '../../../enums/language.enum';

// import { LanguageService } from '../../services';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
	public isCollapsed: boolean = true;

	public sortOrders: string[] = Object.values(LanguagesEnum);
	public selectedSortOrder: string = '';

	public constructor(@Inject(WINDOW) private window: Window) {
		this.selectedSortOrder = this.sortOrders[0];
	}

	// @HostListener('window:scroll', ['$event'])
	// public onWindowScroll(scrollEvent: Event): void {
	// 	scrollEvent.stopPropagation();
	// 	const pos = window.pageYOffset;
	// 	if (pos > 300 && !this.isCollapsed) {
	// 		this.isCollapsed = true;
	// 	}
	// }

	public changeSortOrder(newSortOrder: string): void {
		this.selectedSortOrder = newSortOrder;
		// this.languageService.useLanguage(this.selectedSortOrder);
	}
}
