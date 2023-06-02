import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ThemingDialogComponent } from '../theming-dialog/theming-dialog.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(ThemingDialogComponent, {
      width: '500px', // Set the desired width for your dialog
    });

    dialogRef.backdropClick().subscribe(() => {
      // Close the dialog
      dialogRef.close();
    })
  }
}
