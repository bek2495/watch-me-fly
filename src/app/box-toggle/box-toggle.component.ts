import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
export interface BoxToggle {
  name: string;
  required: boolean;
  description: string;
  maxNum: number;
  value: number;
}

@Component({
  selector: "app-box-toggle",
  templateUrl: "./box-toggle.component.html",
  styleUrls: ["./box-toggle.component.css"],
})
export class BoxToggleComponent implements OnInit {
  @Input() boxToggle: BoxToggle = {
    name: "",
    description: "",
    required: false,
    maxNum: 100,
    value: 0,
  };

  @Output() rangeSelected: EventEmitter<BoxToggle> = new EventEmitter<
    BoxToggle
  >();
  @Output() rangeUnselected: EventEmitter<BoxToggle> = new EventEmitter<
    BoxToggle
  >();

  selected: number = 0;
  sliderShow: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSliderShow() {
    this.sliderShow = !this.sliderShow;

    if(!this.sliderShow) { 
      this.boxToggle.value = 0;
      this.rangeUnselected.emit(this.boxToggle);
     }
  }

  onChange() {
    if (this.selected > 0) {
      this.boxToggle.value = this.selected;
      this.rangeSelected.emit(this.boxToggle);
    } else {
      this.boxToggle.value = 0;
      this.rangeUnselected.emit(this.boxToggle);
    }
  }
}
