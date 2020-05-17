import { Component, OnInit, Input } from '@angular/core';
export interface MemberItem {
  name: string;
  role: string;
  description: string;
}

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.css']
})
export class TeamItemComponent implements OnInit {

  @Input() member: MemberItem = {
    name: "",
    role: "",
    description: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
