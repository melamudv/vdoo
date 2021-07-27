import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {ICar} from '../shared/interfaces';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() cars: ICar[] | undefined;
  @Input() searchBy: string | undefined;
  dataSource: MatTableDataSource<ICar> | undefined;
  displayedColumns: string[] = ['vendor', 'name', 'price', 'is_hybrid'];
  @ViewChild(MatSort) sort: any;
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.cars);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.searchBy.firstChange) {
      const filterValue = this.searchBy;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }
}
