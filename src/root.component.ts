import { Component } from '@angular/core';

@Component({
	selector: 'super-root',
	templateUrl: 'root.component.html',
	styleUrls: ['./root.component.scss'],
})
export class RootComponent {
	public isLoading: boolean = false;

	public constructor() {}
}
