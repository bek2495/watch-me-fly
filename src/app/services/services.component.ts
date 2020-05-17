import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ServicesItem } from '../services-item/services-item.component';

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"],
})
export class ServicesComponent implements OnInit {
  private servicesUrl = "https://watch-me-fly-tech.herokuapp.com/api/tech";
  public items: ServicesItem[] = [];

  constructor(private http: HttpClient) {
    http
      .get(this.servicesUrl)
      .toPromise()
      .then((data: ServicesItem[]) => {
        this.setItems(data);
      })
      .catch((err) => {});
  }

  setItems(data: ServicesItem[]) {
    this.items = data;
  }

  ngOnInit(): void {}
}

