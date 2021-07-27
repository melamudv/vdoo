import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {ILaptop} from '../shared/interfaces';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.scss']
})
export class LaptopsComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() laptops: ILaptop[];
  @Input() searchBy: string;
  dataSource: MatTableDataSource<ILaptop>;
  displayedColumns: string[] = ['vendor', 'name', 'price', 'system'];

  @ViewChild(MatSort) sort: any;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.laptops);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.searchBy.firstChange) {
      const filterValue = this.searchBy;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }
}
