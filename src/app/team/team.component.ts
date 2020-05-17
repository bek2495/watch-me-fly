import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"],
})
export class TeamComponent implements OnInit {
  private teamUrl = "https://watch-me-fly-tech.herokuapp.com/api/team";
  public team: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.executeQueries();
  }

  async executeQueries() {
    try {
      let data;
      data = await this.http.get(this.teamUrl).toPromise();
      this.team = data;
    } catch (err) {
    } finally {
    }
  }
}

/*
this.http
      .get(this.teamUrl)
      .toPromise()
      .then(data: MemberItem[]) => {
          this.team = data })
      .catch((err) => {})

this.http
      .delete(this.teamUrl + "?name=John1")
      .toPromise()
      .then(() => {})
      .catch(() => {})
      .finally(() => {
        this.http
          .delete(this.teamUrl + "?name=John2")
          .toPromise()
          .then(() => {})
          .catch(() => {})
          .finally(() => {
            this.http
              .get(this.teamUrl)
              .toPromise()
              .then((data: MemberItem[]) => {
                this.team = data;
              })
              .catch();
          });
      });*/

// this.http
// .post(this.teamUrl, {
//   name: "John1",
//   role: "Ceo1",
// })
// .toPromise()
// .then((data) => {})
// .catch((err) => {})
// .finally(() => {
//   this.http
//     .post(this.teamUrl, {
//       name: "John2",
//       role: "Ceo2",
//     })
//     .toPromise()
//     .then((data) => {})
//     .catch((err) => {})
//     .finally(() => {
//       this.http
//         .get(this.teamUrl)
//         .toPromise()
//         .then((data: MemberItem[]) => {
//           this.team = data;
//         })
//         .catch();
//     });
// });

// .delete(this.teamUrl+ "?name=John%20Doe")
// .toPromise()
// .then((data) => {})
// .catch((err) => {})
// .finally(() => {
//   this.inquiryTeam();
// });

// this.http
// .post(this.teamUrl, {
//   name: "John Doe",
//   role: "Ceo",
// })
// .toPromise()
// .then((data) => {})
// .catch((err) => {})
// .finally(() => {
//   this.inquiryTeam();
// });

//   this.http
//     .put(this.teamUrl + "?name=Adem%20Hoxha", {
//       role: "Founder, Full Stack Developer",
//     })
//     .toPromise()
//     .then((data: any) => {
//       this.inquiryTeam();
//     })
//     .catch((err) => {});

//   setTeam(data: MemberItem[]) {
//     this.team = data;
//   }

//   inquiryTeam() {
//     this.http
//       .get(this.teamUrl)
//       .toPromise()
//       .then((data: MemberItem[]) => {
//         this.setTeam(data);
//       })
//       .catch((err) => {});
//   }
