import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AccountService } from './api/account.service';
import { AddOnsService } from './api/addOns.service';
import { ApoService } from './api/apo.service';
import { AvailabilityService } from './api/availability.service';
import { BookingService } from './api/booking.service';
import { BookingboardingpassesService } from './api/bookingboardingpasses.service';
import { BookingcheckinService } from './api/bookingcheckin.service';
import { BookingcontactsService } from './api/bookingcontacts.service';
import { BookingjourneysService } from './api/bookingjourneys.service';
import { BookingpassengersService } from './api/bookingpassengers.service';
import { BookingpaymentsService } from './api/bookingpayments.service';
import { BookingretrieveService } from './api/bookingretrieve.service';
import { BookingsService } from './api/bookings.service';
import { BookingssrsService } from './api/bookingssrs.service';
import { BundlesService } from './api/bundles.service';
import { CollectionService } from './api/collection.service';
import { ConfigurationService } from './api/configuration.service';
import { CurrencyService } from './api/currency.service';
import { FareRulesService } from './api/fareRules.service';
import { GraphService } from './api/graph.service';
import { HealthService } from './api/health.service';
import { ManifestService } from './api/manifest.service';
import { MessagesService } from './api/messages.service';
import { OneTimeTravelNotificationsService } from './api/oneTimeTravelNotifications.service';
import { OrganizationsService } from './api/organizations.service';
import { Organizations2Service } from './api/organizations2.service';
import { PersonsService } from './api/persons.service';
import { PromotionsService } from './api/promotions.service';
import { QueuesService } from './api/queues.service';
import { RedirectService } from './api/redirect.service';
import { RedisService } from './api/redis.service';
import { ResourcesService } from './api/resources.service';
import { SeatmapsService } from './api/seatmaps.service';
import { SettingsService } from './api/settings.service';
import { TokenService } from './api/token.service';
import { TripService } from './api/trip.service';
import { UserService } from './api/user.service';
import { UserpersonService } from './api/userperson.service';
import { UsersService } from './api/users.service';
import { UtilitiesService } from './api/utilities.service';
import { VoucherIssuanceService } from './api/voucherIssuance.service';
import { VouchersService } from './api/vouchers.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
