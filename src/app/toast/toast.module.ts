import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ToastService } from './toast.service';
import { ToastComponent } from './toast.component';
import { MatSnackBarModule, MatSnackBar } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  exports: [ToastComponent],
  declarations: [ToastComponent],
  providers: [ToastService, MatSnackBar]
})
export class ToastModule {
  constructor(@Optional() @SkipSelf() parentModule: ToastModule) {
  }
}
