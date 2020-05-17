import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BoxOption } from '../box-option/box-option.component';


@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  private servicesUrl = "https://watch-me-fly-tech.herokuapp.com/api/estimation/type";
  public boxes: BoxOption[] = [];
  @Output() selected: EventEmitter<BoxOption> = new EventEmitter<BoxOption>();
  @Output() removed: EventEmitter<BoxOption> = new EventEmitter<BoxOption>();

  constructor(private http: HttpClient) {
    http
      .get(this.servicesUrl)
      .toPromise()
      .then((data: BoxOption[]) => {
        this.setItems(data);
      })
      .catch((err) => {});
  }

  setItems(data: BoxOption[]) {
    this.boxes = data;
  }

  ngOnInit(): void {}

  boxClick(box: BoxOption) {
    this.selected.emit(box)
  }

  boxRemove(box: BoxOption) {
    this.removed.emit(box)
  }

}

