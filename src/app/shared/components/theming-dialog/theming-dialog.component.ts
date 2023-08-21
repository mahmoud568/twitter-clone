import { Component, ViewEncapsulation  } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

import * as moment from 'moment';

@Component({
  selector: 'app-theming-dialog',
  templateUrl: './theming-dialog.component.html',
  styleUrls: ['./theming-dialog.component.scss']
})
export class ThemingDialogComponent {
  constructor(private dialogRef: MatDialogRef<ThemingDialogComponent>) {}

  // Add your dialog close logic here
  closeDialog(): void {
    this.dialogRef.close();
  }

  tweetCreatedAt!: string;
  tweetTime!: string;

  ngOnInit() {
    const now = moment();
    const createdAt = now.subtract(10,'m');
    this.tweetCreatedAt = createdAt.format('YYYY-MM-DD HH:mm:ss');
    this.updateTweetTime();
  }

  updateTweetTime() {
    const now = moment();
    const createdAt = moment(this.tweetCreatedAt, 'YYYY-MM-DD HH:mm:ss');
    const duration = moment.duration(now.diff(createdAt));
    let tweetTime;

    if (duration.asSeconds() < 60) {
      tweetTime = `${Math.floor(duration.asSeconds())} s`;
    } else if (duration.asMinutes() < 60) {
      tweetTime = `${Math.floor(duration.asMinutes())} m`;
    } else if (duration.asHours() < 24) {
      tweetTime = `${Math.floor(duration.asHours())} h`;
    } else {
      const currentYear = now.year();
      const tweetYear = createdAt.year();

      if (currentYear === tweetYear) {
        tweetTime = createdAt.format('MMM DD'); // Display day and month
      } else {
        tweetTime = createdAt.format('MMM DD, YYYY'); // Display month, day, and year
      }
    }

    this.tweetTime = tweetTime;
    setTimeout(() => {
      this.updateTweetTime();
    }, 1000); // Update the time every second
  }

  selectedFontSize: number = 2; // Assign the default value of "Medium" (index 2 in the range 0-4)
  fontSizes: string[] = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large'];
  onFontSizeChange(event: any) {
    console.log(event);
  }

  selectedColor: string = 'Blue';
  onColorChange(event: any) {
    this.selectedColor = event.value;
  }

  selectedBackgroundColor: string = 'lightTheme';
  onBackgroundColorChange(event: any) {
    this.selectedBackgroundColor = event.value;
  }
}
