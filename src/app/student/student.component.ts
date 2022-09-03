import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  showAdd!: boolean;
  showUpdate!: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  add() {
    this.showAdd = true;
    this.showUpdate = false;
  }
  update() {
    this.showUpdate = true;
    this.showAdd=false;
  }

}
