import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BoxToggle } from '../box-toggle/box-toggle.component';

@Component({
  selector: "app-step2",
  templateUrl: "./step2.component.html",
  styleUrls: ["./step2.component.css"],
})
export class Step2Component implements OnInit {
  @Input() selectedApp: string[] = [];
  @Output() toggled: EventEmitter<BoxToggle> = new EventEmitter<BoxToggle>();
  @Output() untoggled: EventEmitter<BoxToggle> = new EventEmitter<BoxToggle>();

  private servicesUrl = "https://watch-me-fly-tech.herokuapp.com/api/estimation/function";
  public boxes: BoxToggle[] = [];
  
  constructor(private http: HttpClient) {}

  setItems(data: BoxToggle[]) {

    data.forEach(d => {
      if (!this.boxes.find(b => b.name === d.name )) {
        this.boxes.push(d);
      }
    })
  }

  ngOnInit(): void {
    this.selectedApp.forEach( e => {
      this.http
      .get(this.servicesUrl + "?appTypeName=" + e)
      .toPromise()
      .then((data: BoxToggle[]) => {
        this.setItems(data);
      })
      .catch((err) => {});
    })
  }

  rangeSelect(toggle: BoxToggle) {
    this.toggled.emit(toggle);
  }

  rangeUnselect(untoggle: BoxToggle) {
    this.untoggled.emit(untoggle);
  }
}

// @ViewChild("On", { read: ElementRef, static: false })
// onRef: ElementRef<HTMLElement>;

// @ViewChild("Off", { read: ElementRef, static: false })
// offRef: ElementRef<HTMLElement>;

// this.render.addClass(this.onRef.nativeElement, "toggle-off");
// this.render.addClass(this.offRef.nativeElement, "toggle-on");

//   toogleClick() {
//     console.log(this.offRef.nativeElement.classList)
//    if(this.offRef.nativeElement.classList.contains("toggle-on")) {
//      this.render.removeClass(this.offRef.nativeElement, "toggle-on");
//      this.render.addClass(this.offRef.nativeElement, "toggle-off");

//      this.render.removeClass(this.onRef.nativeElement, "toggle-off");
//      this.render.addClass(this.onRef.nativeElement, "toggle-on");
//    } else {
//     this.render.removeClass(this.onRef.nativeElement, "toggle-on");
//     this.render.addClass(this.onRef.nativeElement, "toggle-off");

//     this.render.removeClass(this.offRef.nativeElement, "toggle-off");
//     this.render.addClass(this.offRef.nativeElement, "toggle-on");

//    }
//   }
