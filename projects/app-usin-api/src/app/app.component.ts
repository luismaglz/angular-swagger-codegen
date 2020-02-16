import { Component, OnInit } from "@angular/core";
import { BookingretrieveService, TokenService } from "dotrez-api";
import { take } from "rxjs/operators";
import { AppSessionService } from "./services/app-session.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app-usin-api";

  constructor(
    protected tokenService: TokenService,
    protected bookingRetrieveService: BookingretrieveService,
    protected appSession: AppSessionService
  ) {}

  ngOnInit(): void {
    this.getTokenAndCallBooking();
  }

  async getTokenAndCallBooking(): Promise<void> {
    const tokenResponse = await this.tokenService
      .apiNskV1TokenPost(null, "body")
      .pipe(take(1))
      .subscribe(value => {
        debugger;
        this.appSession.token = value.token;
        // debugger;
        const booking = this.bookingRetrieveService.apiNskV2BookingRetrieveGet(
          "G5E22Z",
          undefined,
          undefined,
          "tylar",
          "hiss"
        );
        booking.pipe(take(1)).subscribe(b => {
          b.journeys[0].designator.arrival;
        });
      });
  }
}
