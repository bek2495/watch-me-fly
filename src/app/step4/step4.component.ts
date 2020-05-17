import { Component, OnInit, Input } from '@angular/core';
import { BoxOption } from '../box-option/box-option.component';
import { BoxToggle } from '../box-toggle/box-toggle.component';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {

  @Input() app: BoxOption[] = [];
  @Input() func: BoxToggle[] = [];
  @Input() supp: BoxOption;
  

  constructor() { }

  ngOnInit(): void {
  }

}
