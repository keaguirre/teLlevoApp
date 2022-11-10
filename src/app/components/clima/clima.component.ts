import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'clima-component',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss'],
})
export class ClimaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

}
