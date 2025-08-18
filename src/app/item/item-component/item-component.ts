import { Component } from '@angular/core';
import { ItemModule } from '../item-module';
import { CommonModule } from '@angular/common';

import { EventService } from "../../../shared/services/EventService";
import { ItemService } from '../../item-service';
import { testItem } from '../../../shared/models/testItem';

import { AddForm } from '../add-form/add-form';
import { ItemList } from "../item-list/item-list";
import { ItemFilter } from "../item-filter/item-filter";
import { RouterLink } from '@angular/router';




@Component({
  selector: 'item-component',
  imports: [
    CommonModule,
    ItemModule,
    AddForm,
    ItemFilter,
    ItemList,
    RouterLink
  ],
  providers: [
    EventService
  ],
  templateUrl: './item-component.html',
  styleUrl: './item-component.css'
})
export class ItemComponent {
  constructor(events: EventService, 
              private itemService: ItemService) {
    events.listen('removeItem', (item : any) => {
      let index = this.items.indexOf(item);
      this.items.splice(index, 1);
    });
  }
  items: testItem[] = [];
  filter: any;
  ngOnInit(): void {
    this.itemService.getItems().subscribe(
      (data: any) =>{
        this.items = data;
      },
      (error: any) =>{
        alert(error.message);
      },
    );
  }
}
