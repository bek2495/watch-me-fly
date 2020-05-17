import { Component, OnInit } from "@angular/core";
import { BoxOption } from "../box-option/box-option.component";
import { BoxToggle } from "../box-toggle/box-toggle.component";
import { Subject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-estimate",
  templateUrl: "./estimate.component.html",
  styleUrls: ["./estimate.component.css"],
})
export class EstimateComponent implements OnInit {
  public nextDisabled = true;
  choicesApp: BoxOption[] = [];
  choicesSupp: BoxOption;
  choicesFunc: BoxToggle[] = [];
  courses = [1];
  price = {
    cost: 0,
  }
  public show: boolean[] = [true, false, false, false, false];
  private estimateUrl =
    "https://watch-me-fly-tech.herokuapp.com/api/estimation/estimate";

  private subject$: Subject<string> = new Subject<string>();
  public suppClickObserver: Observable<string> = this.subject$.asObservable();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onSelect(box: BoxOption) {
    this.nextDisabled = false;
    this.choicesApp.push(box);
  }

  onToggle(toggle: BoxToggle) {
    this.nextDisabled = false;
    let x = this.choicesFunc.find((e) => e.name == toggle.name);
    if (x) {
      x.value = toggle.value;
    } else {
      this.choicesFunc.push(toggle);
    }
  }

  onSelectSupp(supp: BoxOption) {
    this.nextDisabled = false;
    this.choicesSupp = supp;

    this.subject$.next(supp.name);
  }

  onRemove(box: BoxOption) {
    this.choicesApp = this.choicesApp.filter((e) => {
      if (e.name !== box.name) {
        return true;
      } else {
        return false;
      }
    });
    if (this.choicesApp.length === 0) {
      this.nextDisabled = true;
    } else {
      this.nextDisabled = false;
    }
  }

  onUntoggled(toggle: BoxToggle) {
    this.choicesFunc = this.choicesFunc.filter((e) => e.name !== toggle.name);
    if (this.choicesFunc.length === 0) {
      this.nextDisabled = true;
    } else {
      this.nextDisabled = false;
    }
  }

  onRemoveSupp(supp: BoxOption) {
    if (this.choicesSupp) {
      this.nextDisabled = true;
    } else {
      this.nextDisabled = false;
    }
  }

  onNext() {
    let i = this.show.findIndex((e) => e);
    this.show[i] = false;
    if (this.show.length - 1 !== i) {
      this.show[i + 1] = true;
    }
    this.nextDisabled = true;
  }

  onBack() {
    let i = this.show.findIndex((e) => e);
    this.show[i] = false;
    this.show[i-1] = true;

    if (i == 1) {
      this.choicesApp = [];
    } else if (i == 2) {
      this.choicesFunc = [];
    } else if (i == 3) {
      this.choicesSupp = undefined;
    }

  }

  onEstimate() {
    let body = {
      app: this.choicesApp.map((e) => e.name),
      func: this.choicesFunc.map((e) => {
        return { name: e.name, value: e.value };
      }),
      supp: this.choicesSupp.name,
      email: "adem.hoxha@hotmail.it",
      company: "watch me fly",
      phone: "3287314829",
    };

    this.http
      .post(this.estimateUrl, body )
      .toPromise()
      .then((data) => {
        this.price.cost = data["cost"];
        this.show[3] = false;
        this.show[4] = true;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  choicesAppName() {
    return this.choicesApp.map((e) => e.name);
  }

  onNewEstimation() {
    this.show = [true, false, false, false, false];
    this.choicesApp = [];
    this.choicesFunc = [];
    this.choicesSupp = undefined;
    this.price.cost = 0;
    this.nextDisabled = true;
  }
}
