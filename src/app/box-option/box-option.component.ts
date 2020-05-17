import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
export interface BoxOption {
  name: string;
  description: string;
}


@Component({
  selector: 'app-box-option',
  templateUrl: './box-option.component.html',
  styleUrls: ['./box-option.component.css']
})
export class BoxOptionComponent implements OnInit, OnDestroy {
  

  @Input() boxOption: BoxOption = {
    name: "",
    description: ""
  }
  @Input() clickObserver: Observable<string> = new Observable<string>();

  @Output() boxClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() boxRemoved: EventEmitter<any> = new EventEmitter<any>();


  public box: any = {
    hover: false,
    click: false,
  }

  private subscription: Subscription = new Subscription();
  
  constructor() { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.clickObserver.subscribe((e: string) => {
      if ( e !== this.boxOption.name) {
        this.box.click = false;
      }
    } );
  }

  onHover() {
    if (!this.box.click) {
      this.box.hover = true;
      this.box.click = false;
    }
  }

  onMouseOut() {
    this.box.hover = false;
  }

  onClick() {
    this.box.hover = false;
    this.box.click = !this.box.click;
    if (this.box.click) {
      this.boxClicked.emit(this.boxOption)
    } else {
      this.boxRemoved.emit(this.boxOption)
    }
  }


}
