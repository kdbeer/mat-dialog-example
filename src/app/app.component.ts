import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SimpleDialogComponent } from './components/simple-dialog/simple-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mat-dialog-example';

  constructor(private dialog: MatDialog) {}

  openSimpleDialog() {
    this.dialog.open(SimpleDialogComponent, {
      width: '950px',
      data: { author: 'KDBEER' }
    });
  }
}
