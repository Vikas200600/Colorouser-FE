import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmdialog',
  templateUrl: './confirmdialog.component.html',
  styleUrls: ['./confirmdialog.component.scss'],
})
export class ConfirmdialogComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<ConfirmdialogComponent>) {}

  ngOnInit(): void {}

  onConfirmClick() {
    this.dialogRef.close(true);
  }
}
