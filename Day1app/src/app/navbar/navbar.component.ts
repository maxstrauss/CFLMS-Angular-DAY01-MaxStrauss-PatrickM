import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  projectName: string;
  constructor() {
    this.projectName = 'Day1App'; }

  ngOnInit(): void {
  }

}
