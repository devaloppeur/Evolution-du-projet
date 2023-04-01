import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvel-artcle',
  templateUrl: './nouvel-artcle.component.html',
  styleUrls: ['./nouvel-artcle.component.scss']
})
export class NouvelArtcleComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveClick(): void {

  }

  cancelClick(): void {
    this.router.navigate(['articles']);
  }

}
