import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boutton-action',
  templateUrl: './boutton-action.component.html',
  styleUrls: ['./boutton-action.component.scss']
})
export class BouttonActionComponent implements OnInit {

  @Output() 
  clickevent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  bouttonNouveauClick(): void {
    this.clickevent.emit();
  }

}
