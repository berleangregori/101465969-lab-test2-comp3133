import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpacexService } from '../../services/spacex.service';
import { Launch } from '../../models/launch';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    RouterModule
  ],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnChanges {
  @Input() selectedYear: string | null = null;
  launches: Launch[] = [];
  isLoading = false;

  constructor(private spacexService: SpacexService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.fetchLaunches();
  }

  private fetchLaunches(): void {
    this.isLoading = true;

    const fetch$ = this.selectedYear
      ? this.spacexService.getLaunchesByYear(this.selectedYear)
      : this.spacexService.getLaunches();

    fetch$.subscribe(data => {
      this.launches = data;
      this.isLoading = false;
    });
  }
}
