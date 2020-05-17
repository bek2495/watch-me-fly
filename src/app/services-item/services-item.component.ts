import { Component, OnInit, Input } from '@angular/core';
export interface ServicesItem {
  name: string;
  description: string;
}

@Component({
  selector: 'app-services-item',
  templateUrl: './services-item.component.html',
  styleUrls: ['./services-item.component.css']
})
export class ServicesItemComponent implements OnInit {

  @Input() item: ServicesItem = {
    name: "",
    description: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
