import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AboutComponent } from "./about/about.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { EstimateComponent } from "./estimate/estimate.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ServicesComponent } from "./services/services.component";
import { TeamItemComponent } from "./team-item/team-item.component";
import { TeamComponent } from "./team/team.component";
import { PortfolioItemComponent } from "./portfolio-item/portfolio-item.component";
import { ServicesItemComponent } from './services-item/services-item.component';
import { Step1Component } from './step1/step1.component';
import { BoxOptionComponent } from './box-option/box-option.component';
import { Step2Component } from './step2/step2.component';
import { BoxToggleComponent } from './box-toggle/box-toggle.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';
import { EstimationResumeComponent } from './estimation-resume/estimation-resume.component';
import { BoxResumeComponent } from './box-resume/box-resume.component';
import { Step5Component } from './step5/step5.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ServicesComponent,
    PortfolioComponent,
    AboutComponent,
    TeamComponent,
    ContactUsComponent,
    FooterComponent,
    EstimateComponent,
    TeamItemComponent,
    PortfolioItemComponent,
    ServicesItemComponent,
    Step1Component,
    BoxOptionComponent,
    Step2Component,
    BoxToggleComponent,
    Step3Component,
    Step4Component,
    EstimationResumeComponent,
    BoxResumeComponent,
    Step5Component,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
