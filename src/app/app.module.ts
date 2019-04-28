import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatDialogModule, MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleDialogComponent } from './components/simple-dialog/simple-dialog.component';

@NgModule({
  declarations: [AppComponent, SimpleDialogComponent],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SimpleDialogComponent]
})
export class AppModule {}
