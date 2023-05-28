import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-theme-settings-modal',
  templateUrl: './theme-settings-modal.component.html',
  styleUrls: ['./theme-settings-modal.component.scss']
})
export class ThemeSettingsModalComponent {
  constructor(private dialogRef: MatDialogRef<ThemeSettingsModalComponent>) { }

  // Add your dialog close logic here
  closeDialog(): void {
    this.dialogRef.close();
  }
}
