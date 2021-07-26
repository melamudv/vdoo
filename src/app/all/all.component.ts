import {Component, OnInit} from '@angular/core';
import {DataService} from '../core/data.service';
import {IResponse} from '../shared/interfaces';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  data: IResponse[] = [];
  searchBy: string;
  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getData()
      .subscribe((data: any[]) => this.data = data);
  }

  tabChanged(event): void {
    this.searchBy = '';
  }

  onSubmitted(event: string): void {
    this.searchBy = event;
  }

}
