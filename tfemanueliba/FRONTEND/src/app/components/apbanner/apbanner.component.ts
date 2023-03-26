import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apbanner',
  templateUrl: './apbanner.component.html',
  styleUrls: ['./apbanner.component.css']
})
export class ApbannerComponent implements OnInit {
  constructor(private router:Router){ }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/login'])
  }
}
