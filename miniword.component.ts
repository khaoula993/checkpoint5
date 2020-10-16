import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miniword',
  templateUrl: './miniword.component.html',
  styleUrls: ['./miniword.component.css']
})
export class MiniwordComponent implements OnInit {
color:"blue";
taille:12;
style:"Verdana";
  constructor() { }

  ngOnInit(): void {
  }

}
