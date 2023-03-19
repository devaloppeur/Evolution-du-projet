import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
 @Input('imageSource') imageSource:any;
constructor() { }

  private newMethod() {
    return "assets/images/oko.jpg";
  }

  ngOnInit(): void {
  }





}
