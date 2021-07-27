import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {IPhone} from '../shared/interfaces';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})
export class PhonesComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() phones: IPhone[];
  @Input() searchBy: string;
  dataSource: MatTableDataSource<IPhone>;
  displayedColumns: string[] = ['vendor', 'name', 'price'];
  @ViewChild(MatSort) sort: any;
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.phones);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.searchBy.firstChange) {
      const filterValue = this.searchBy;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }
}
