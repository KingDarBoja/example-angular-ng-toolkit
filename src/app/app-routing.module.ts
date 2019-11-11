import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from '../modules/core/home/home.component';
import { SectionAComponent } from '../modules/core/section-a/section-a.component';
import { AppComponent } from './app.component';

const routes: Routes = [
	{
		path: '',
		component: AppComponent,
		children: [
			{ path: '', pathMatch: 'full', redirectTo: 'home' },
			{
				path: 'home',
				component: HomeComponent,
			},
			{
				path: 'section-a',
				component: SectionAComponent,
			},
		],
	},
	{ path: '**', redirectTo: '' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
