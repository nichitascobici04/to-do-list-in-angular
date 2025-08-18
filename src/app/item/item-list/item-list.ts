import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { testItem } from '../../../shared/models/testItem';
import { TestItem } from '../test-item/test-item';
@Component({
  selector: 'item-list',
  imports: [  
    TestItem
  ],
  templateUrl: './item-list.html',
  styleUrl: './item-list.css'
})
export class ItemList implements OnInit {
  @Input() items: testItem[] = []; 
  ngOnInit(): void {
  }
}