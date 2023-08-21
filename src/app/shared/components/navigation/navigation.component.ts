import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ThemingDialogComponent } from '../theming-dialog/theming-dialog.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor(private dialog: MatDialog) {
    this.openDialog();
  }

  openDialog(): void {
    const config: MatDialogConfig = {
      panelClass: "theming-dialog-responsive"
    }

    const dialogRef = this.dialog.open(ThemingDialogComponent, config);

    dialogRef.backdropClick().subscribe(() => {
      // Close the dialog
      dialogRef.close();
    })
  }
}
