import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() searchBy: string;
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();
  query: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.searchBy.firstChange) {
      this.query = this.searchBy;
    }
  }

  applyFilter(value: any): void {
    this.submitted.emit(this.query);
  }

}
