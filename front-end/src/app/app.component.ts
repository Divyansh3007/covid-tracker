import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { GraphDialogComponent } from './components/graph-dialog/graph-dialog.component';
import { SpinnerComponent } from './components/spinner/spinner/spinner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'front-end';
  showSpinner: boolean = false;
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(GraphDialogComponent, {
      width: '90%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog Closed');
    });
  }

  openSpinner() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
  }
}
