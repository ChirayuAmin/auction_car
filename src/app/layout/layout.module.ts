import { NgModule, Optional, SkipSelf } from '@angular/core';

//import { throwIfAlreadyLoaded } from '../core/guard/module-import-guard';

import { LayoutComponent } from './layout.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { ROUTES } from './layout-route';

@NgModule({
  imports: [
    SharedModule,
    ROUTES
  ],
  declarations: [
    LayoutComponent,
    PageHeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class LayoutModule { 
  constructor(@Optional() @SkipSelf() parentModule:LayoutModule){
    //throwIfAlreadyLoaded(parentModule,'LayoutModule');
  }
}
