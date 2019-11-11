import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// App External Modules
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Components
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SectionAComponent } from './section-a/section-a.component';

// Services

@NgModule({
	imports: [BsDropdownModule.forRoot(), CommonModule, FormsModule, FontAwesomeModule, RouterModule],
	declarations: [HomeComponent, NavbarComponent, FooterComponent, SectionAComponent],
	providers: [],
	exports: [CommonModule, FormsModule, NavbarComponent, FooterComponent],
})
export class CoreModule {}
