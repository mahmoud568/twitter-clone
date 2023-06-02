import { Component } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-theming-dialog',
  templateUrl: './theming-dialog.component.html',
  styleUrls: ['./theming-dialog.component.scss'],
})
export class ThemingDialogComponent {
  constructor(private dialogRef: MatDialogRef<ThemingDialogComponent>) {}

  // Add your dialog close logic here
  closeDialog(): void {
    this.dialogRef.close();
  }
}
