import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GraphDialogComponent } from '../graph-dialog/graph-dialog.component';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit {
  showSpinner: boolean;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(GraphDialogComponent, {
      width: '100%',
      // height: '40%',
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
