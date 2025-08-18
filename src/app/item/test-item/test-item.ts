import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { testItem } from '../../../shared/models/testItem';
import { EventService } from "../../../shared/services/EventService";

@Component({
  selector: 'test-item',
  imports: [
    CommonModule
  ],
  templateUrl: './test-item.html',
  styleUrl: './test-item.css'
})
export class TestItem {
  constructor(private events: EventService) {}
  @Input() item! : testItem;

  get cssTitle() {
    //return this.check ? ['strikeout', 'text-muted'] : [''];
    return {'strikeout text-muted': this.item.isComplete};
  }
  removeItem() {
    this.events.emit('removeItem', this.item);
  }
  sayMyName() {
    this.item.isComplete = !this.item.isComplete;
  }
}
