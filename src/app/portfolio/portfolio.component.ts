import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PortfolioItem } from '../portfolio-item/portfolio-item.component';

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.css"],
})
export class PortfolioComponent implements OnInit {
  private portfolioUrl =
    "https://watch-me-fly-tech.herokuapp.com/api/portofolio";
  public items: PortfolioItem[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(this.portfolioUrl)
      .toPromise()
      .then((data: PortfolioItem[]) => {
        this.setItems(data);
      })
      .catch((err) => {});
  }

  setItems(data: PortfolioItem[]) {
    this.items = data;
  }
}
