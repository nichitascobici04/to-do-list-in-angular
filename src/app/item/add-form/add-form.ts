import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { testItem } from '../../../shared/models/testItem';

@Component({
  selector: 'add-form',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './add-form.html',
  styleUrl: './add-form.css'
})
export class AddForm {
  @Output() addTheItem = new EventEmitter<testItem>();
  //items: testItem[] = []; 
  newTitle: string = '';
  addItem() {
    //this.items.push(new testItem(this.newTitle));
    this.addTheItem.emit(new testItem(this.newTitle));
    this.newTitle = '';
  }
}