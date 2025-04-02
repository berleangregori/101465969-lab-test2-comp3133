import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionfilterComponent } from './components/missionfilter/missionfilter.component';
import { MissionlistComponent } from './components/missionlist/missionlist.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MissionfilterComponent,
    MissionlistComponent
  ],
  template: `
    <mat-toolbar color="primary">
      🚀 SpaceX Mission Explorer
    </mat-toolbar>

    <app-missionfilter (yearSelected)="onYearSelected($event)"></app-missionfilter>
    <app-missionlist [selectedYear]="selectedYear"></app-missionlist>
  `
})
export class AppComponent {
  selectedYear: string | null = null;

  onYearSelected(year: string) {
    this.selectedYear = year;
  }
}
