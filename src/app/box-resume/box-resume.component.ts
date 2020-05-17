import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box-resume',
  templateUrl: './box-resume.component.html',
  styleUrls: ['./box-resume.component.css']
})
export class BoxResumeComponent implements OnInit {

  @Input() data: any = {}

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
