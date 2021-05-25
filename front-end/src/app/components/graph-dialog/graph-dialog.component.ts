import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { CommonService } from '../../services/common.service';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';

@Component({
  selector: 'app-graph-dialog',
  templateUrl: './graph-dialog.component.html',
  styleUrls: ['./graph-dialog.component.scss'],
})
export class GraphDialogComponent implements OnInit {
  data: any;

  constructor(
    public dialogRef: MatDialogRef<GraphDialogComponent>,
    public commService: CommonService
  ) {}

  ngOnInit(): void {
    this.commService.LoadData().subscribe((Response) => {
      this.data = Response;
      console.log(this.data);
    });
  }
  chartOptions = {
    responsive: true,
    layout: {
      padding: {
        left: 5,
        right: 5,
        top: 0,
        bottom: 0,
      },
    },
  };
  chartLabels = ['Jan', 'Feb', 'March', 'April'];
  chartData = [
    {
      data: [1800, 2255, 3000, 3500],
      label: 'Vaccination- 1 Dose',
    },
    {
      data: [1212, 1700, 2200, 3250],
      label: 'Vaccination- 2 Dose',
    },
  ];

  onNoClick(): void {
    this.dialogRef.close();
  }
}
