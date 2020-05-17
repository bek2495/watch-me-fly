import { Component, OnInit, Input } from "@angular/core";
import { BoxOption } from "../box-option/box-option.component";
import { BoxToggle } from "../box-toggle/box-toggle.component";

@Component({
  selector: "app-estimation-resume",
  templateUrl: "./estimation-resume.component.html",
  styleUrls: ["./estimation-resume.component.css"],
})
export class EstimationResumeComponent implements OnInit {
  @Input() app: BoxOption[] = [];
  @Input() func: BoxToggle[] = [];
  @Input() supp: BoxOption;

  public appsData: any[] = [];
  public funcsData: any[] = [];
  public suppData: any = {};

  constructor() {}

  ngOnInit(): void {
    this.appsData = this.app.map((e) => {
      return { title: e.name };
    });

    this.funcsData = this.func.map((e) => {
      return { title: e.value.toString() + " " + e.name };
    });

    this.suppData = {title: this.supp.name};
  }
}
