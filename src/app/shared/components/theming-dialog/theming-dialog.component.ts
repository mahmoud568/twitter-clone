import { Component, ViewEncapsulation  } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

import * as moment from 'moment';

@Component({
  selector: 'app-theming-dialog',
  templateUrl: './theming-dialog.component.html',
  styleUrls: ['./theming-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
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
    const createdAt = now.subtract(10, 'minutes');
    this.tweetCreatedAt = createdAt.format('YYYY-MM-DD HH:mm:ss');
    this.updateTweetTime();
  }

  updateTweetTime() {
    const now = moment();
    const createdAt = moment(this.tweetCreatedAt, 'YYYY-MM-DD HH:mm:ss');
    const duration = moment.duration(now.diff(createdAt));
    let tweetTime;

    if (duration.asSeconds() < 60) {
      tweetTime = `${Math.floor(duration.asSeconds())} seconds ago`;
    } else if (duration.asMinutes() < 60) {
      tweetTime = `${Math.floor(duration.asMinutes())} minutes ago`;
    } else if (duration.asHours() < 24) {
      tweetTime = `${Math.floor(duration.asHours())} hours ago`;
    } else if (duration.asDays() < 30) {
      tweetTime = `${Math.floor(duration.asDays())} days ago`;
    } else if (duration.asMonths() < 12) {
      tweetTime = `${Math.floor(duration.asMonths())} months ago`;
    } else {
      tweetTime = `${Math.floor(duration.asYears())} years ago`;
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
