import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet
  ],
  templateUrl: './test.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  constructor() {}
  ngOnInit(): void {
  }
}