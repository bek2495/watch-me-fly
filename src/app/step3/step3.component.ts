import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { BoxOption } from "../box-option/box-option.component";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Component({
  selector: "app-step3",
  templateUrl: "./step3.component.html",
  styleUrls: ["./step3.component.css"],
})
export class Step3Component implements OnInit {
  private servicesUrl =
    "https://watch-me-fly-tech.herokuapp.com/api/estimation/support";
  public boxes: BoxOption[] = [];
  @Input() suppClickObserver: Observable<string> = new Observable<string>();
  @Output() selectedSupp : EventEmitter<BoxOption> = new EventEmitter<BoxOption>();
  @Output() removedSupp : EventEmitter<BoxOption> = new EventEmitter<BoxOption>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
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

  boxClick(supp: BoxOption) {
    this.selectedSupp.emit(supp);
  }

  boxRemove(supp: BoxOption) {
    this.removedSupp.emit(supp);
  }
}
