import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { RootComponent } from '../root.component';
import { AppModule } from './app.module';

@NgModule({
	imports: [AppModule, ServerModule, ModuleMapLoaderModule, ServerTransferStateModule],
	bootstrap: [RootComponent],
})
export class AppServerModule {}
