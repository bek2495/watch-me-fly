import { Component, OnInit, Input } from '@angular/core';
export interface PortfolioItem {
  name: string;
  description: string;
}

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent implements OnInit {

  @Input() item: PortfolioItem = {
    name: "",
    description: ""
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
