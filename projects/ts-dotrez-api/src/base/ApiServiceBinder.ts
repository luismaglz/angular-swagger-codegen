import { interfaces } from 'inversify';

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

export class ApiServiceBinder {
  public static withAccountService(container: interfaces.Container) {
    container
      .bind<AccountService>('AccountService')
      .to(AccountService)
      .inSingletonScope();
  }
  public static withAddOnsService(container: interfaces.Container) {
    container
      .bind<AddOnsService>('AddOnsService')
      .to(AddOnsService)
      .inSingletonScope();
  }
  public static withApoService(container: interfaces.Container) {
    container
      .bind<ApoService>('ApoService')
      .to(ApoService)
      .inSingletonScope();
  }
  public static withAvailabilityService(container: interfaces.Container) {
    container
      .bind<AvailabilityService>('AvailabilityService')
      .to(AvailabilityService)
      .inSingletonScope();
  }
  public static withBookingService(container: interfaces.Container) {
    container
      .bind<BookingService>('BookingService')
      .to(BookingService)
      .inSingletonScope();
  }
  public static withBookingboardingpassesService(
    container: interfaces.Container
  ) {
    container
      .bind<BookingboardingpassesService>('BookingboardingpassesService')
      .to(BookingboardingpassesService)
      .inSingletonScope();
  }
  public static withBookingcheckinService(container: interfaces.Container) {
    container
      .bind<BookingcheckinService>('BookingcheckinService')
      .to(BookingcheckinService)
      .inSingletonScope();
  }
  public static withBookingcontactsService(container: interfaces.Container) {
    container
      .bind<BookingcontactsService>('BookingcontactsService')
      .to(BookingcontactsService)
      .inSingletonScope();
  }
  public static withBookingjourneysService(container: interfaces.Container) {
    container
      .bind<BookingjourneysService>('BookingjourneysService')
      .to(BookingjourneysService)
      .inSingletonScope();
  }
  public static withBookingpassengersService(container: interfaces.Container) {
    container
      .bind<BookingpassengersService>('BookingpassengersService')
      .to(BookingpassengersService)
      .inSingletonScope();
  }
  public static withBookingpaymentsService(container: interfaces.Container) {
    container
      .bind<BookingpaymentsService>('BookingpaymentsService')
      .to(BookingpaymentsService)
      .inSingletonScope();
  }
  public static withBookingretrieveService(container: interfaces.Container) {
    container
      .bind<BookingretrieveService>('BookingretrieveService')
      .to(BookingretrieveService)
      .inSingletonScope();
  }
  public static withBookingsService(container: interfaces.Container) {
    container
      .bind<BookingsService>('BookingsService')
      .to(BookingsService)
      .inSingletonScope();
  }
  public static withBookingssrsService(container: interfaces.Container) {
    container
      .bind<BookingssrsService>('BookingssrsService')
      .to(BookingssrsService)
      .inSingletonScope();
  }
  public static withBundlesService(container: interfaces.Container) {
    container
      .bind<BundlesService>('BundlesService')
      .to(BundlesService)
      .inSingletonScope();
  }
  public static withCollectionService(container: interfaces.Container) {
    container
      .bind<CollectionService>('CollectionService')
      .to(CollectionService)
      .inSingletonScope();
  }
  public static withConfigurationService(container: interfaces.Container) {
    container
      .bind<ConfigurationService>('ConfigurationService')
      .to(ConfigurationService)
      .inSingletonScope();
  }
  public static withCurrencyService(container: interfaces.Container) {
    container
      .bind<CurrencyService>('CurrencyService')
      .to(CurrencyService)
      .inSingletonScope();
  }
  public static withFareRulesService(container: interfaces.Container) {
    container
      .bind<FareRulesService>('FareRulesService')
      .to(FareRulesService)
      .inSingletonScope();
  }
  public static withGraphService(container: interfaces.Container) {
    container
      .bind<GraphService>('GraphService')
      .to(GraphService)
      .inSingletonScope();
  }
  public static withHealthService(container: interfaces.Container) {
    container
      .bind<HealthService>('HealthService')
      .to(HealthService)
      .inSingletonScope();
  }
  public static withManifestService(container: interfaces.Container) {
    container
      .bind<ManifestService>('ManifestService')
      .to(ManifestService)
      .inSingletonScope();
  }
  public static withMessagesService(container: interfaces.Container) {
    container
      .bind<MessagesService>('MessagesService')
      .to(MessagesService)
      .inSingletonScope();
  }
  public static withOneTimeTravelNotificationsService(
    container: interfaces.Container
  ) {
    container
      .bind<OneTimeTravelNotificationsService>(
        'OneTimeTravelNotificationsService'
      )
      .to(OneTimeTravelNotificationsService)
      .inSingletonScope();
  }
  public static withOrganizationsService(container: interfaces.Container) {
    container
      .bind<OrganizationsService>('OrganizationsService')
      .to(OrganizationsService)
      .inSingletonScope();
  }
  public static withOrganizations2Service(container: interfaces.Container) {
    container
      .bind<Organizations2Service>('Organizations2Service')
      .to(Organizations2Service)
      .inSingletonScope();
  }
  public static withPersonsService(container: interfaces.Container) {
    container
      .bind<PersonsService>('PersonsService')
      .to(PersonsService)
      .inSingletonScope();
  }
  public static withPromotionsService(container: interfaces.Container) {
    container
      .bind<PromotionsService>('PromotionsService')
      .to(PromotionsService)
      .inSingletonScope();
  }
  public static withQueuesService(container: interfaces.Container) {
    container
      .bind<QueuesService>('QueuesService')
      .to(QueuesService)
      .inSingletonScope();
  }
  public static withRedirectService(container: interfaces.Container) {
    container
      .bind<RedirectService>('RedirectService')
      .to(RedirectService)
      .inSingletonScope();
  }
  public static withRedisService(container: interfaces.Container) {
    container
      .bind<RedisService>('RedisService')
      .to(RedisService)
      .inSingletonScope();
  }
  public static withResourcesService(container: interfaces.Container) {
    container
      .bind<ResourcesService>('ResourcesService')
      .to(ResourcesService)
      .inSingletonScope();
  }
  public static withSeatmapsService(container: interfaces.Container) {
    container
      .bind<SeatmapsService>('SeatmapsService')
      .to(SeatmapsService)
      .inSingletonScope();
  }
  public static withSettingsService(container: interfaces.Container) {
    container
      .bind<SettingsService>('SettingsService')
      .to(SettingsService)
      .inSingletonScope();
  }
  public static withTokenService(container: interfaces.Container) {
    container
      .bind<TokenService>('TokenService')
      .to(TokenService)
      .inSingletonScope();
  }
  public static withTripService(container: interfaces.Container) {
    container
      .bind<TripService>('TripService')
      .to(TripService)
      .inSingletonScope();
  }
  public static withUserService(container: interfaces.Container) {
    container
      .bind<UserService>('UserService')
      .to(UserService)
      .inSingletonScope();
  }
  public static withUserpersonService(container: interfaces.Container) {
    container
      .bind<UserpersonService>('UserpersonService')
      .to(UserpersonService)
      .inSingletonScope();
  }
  public static withUsersService(container: interfaces.Container) {
    container
      .bind<UsersService>('UsersService')
      .to(UsersService)
      .inSingletonScope();
  }
  public static withUtilitiesService(container: interfaces.Container) {
    container
      .bind<UtilitiesService>('UtilitiesService')
      .to(UtilitiesService)
      .inSingletonScope();
  }
  public static withVoucherIssuanceService(container: interfaces.Container) {
    container
      .bind<VoucherIssuanceService>('VoucherIssuanceService')
      .to(VoucherIssuanceService)
      .inSingletonScope();
  }
  public static withVouchersService(container: interfaces.Container) {
    container
      .bind<VouchersService>('VouchersService')
      .to(VouchersService)
      .inSingletonScope();
  }
}
