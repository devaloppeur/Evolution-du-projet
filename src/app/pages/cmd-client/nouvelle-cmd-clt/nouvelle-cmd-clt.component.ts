import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-cmd-clt',
  templateUrl: './nouvelle-cmd-clt.component.html',
  styleUrls: ['./nouvelle-cmd-clt.component.scss']
})
export class NouvelleCmdCltComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cancelClick(): void {
    this.router.navigate(['cmd']);
  }

}
