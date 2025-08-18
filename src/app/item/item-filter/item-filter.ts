import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { testItem } from '../../../shared/models/testItem';

const filters = [
  (item: testItem) => item,
  (item: testItem) => item.isComplete,
  (item: testItem) => !item.isComplete
];

@Component({
  selector: 'item-filter',
  imports: [FormsModule],
  templateUrl: './item-filter.html',
  styleUrl: './item-filter.css'
})
export class ItemFilter implements OnInit {
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();
  listFilter: any = '0';
  ngOnInit(): void {
    this.uptdateFilter('0');
  }
  uptdateFilter(value: any) {
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }
}