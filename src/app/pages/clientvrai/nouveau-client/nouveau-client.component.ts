import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-client',
  templateUrl: './nouveau-client.component.html',
  styleUrls: ['./nouveau-client.component.scss']
})
export class NouveauClientComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cancelClick(): void {
    this.router.navigate(['clients']);
  }

}
