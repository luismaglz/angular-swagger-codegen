import * as Enums from './enums';

export type Dictionary<T> = { [key: string]: T };

export interface AccountChangePasswordRequest {
  credentials: Credentials;
  newPassword: string;
}
export interface Credentials {
  username?: string;
  alternateIdentifier?: string;
  password?: string;
  domain?: string;
  location?: string;
  channelType?: Enums.ChannelType;
  loginRole?: string;
}
export interface IJsonResponse {
  errors?: undefined[];
  messages?: Message[];
  data?: any;
  metadata?: any;
}
export interface Message {
  code?: string;
  type?: string;
  value?: string;
  status?: 'General' | 'Warning' | 'Critical';
}
export interface AccountForgotPasswordRequest {
  username?: string;
  domainCode: string;
  alternateIdentifier?: string;
}
export interface AccountTransactionCode {
  transactionCode: string;
  name?: string;
  expirationType?: Enums.CreditExpirationType;
  expirationDays?: number;
  expirationDate?: string;
  inActive?: boolean;
}
export interface ActivitySimpleRequest {
  station: string;
  vendorCode?: string;
  companyCode?: string;
  beginDate: string;
  cultureCode?: string;
  discountCode?: string;
  endDate?: string;
  sort?: Enums.SearchSortType;
  promotionCode?: string;
  participants?: ParticipantCriteria[];
  countryCode?: string;
  catalogCode?: string;
  currencyCode?: string;
  categoryCode?: string;
  departmentCode?: string;
  ratingCode?: string;
  keyword?: string;
  maxPrice?: number;
  minPrice?: number;
  quantity?: number;
  parameters?: Dictionary<string>;
}
export interface ParticipantCriteria {
  name?: Name;
  participantTypeCode: string;
  isPrimary?: boolean;
  dateOfBirth?: string;
  residentCountry?: string;
}
export interface Name {
  first?: string;
  middle?: string;
  last?: string;
  title?: string;
  suffix?: string;
}
export interface ActivityProduct {
  productKey?: string;
  isPreferred?: boolean;
  isNew?: boolean;
  externalLocator?: string;
  cultureCode?: string;
  vendorCode?: string;
  descriptions?: Descriptions;
  thumbnailFileName?: string;
  amounts?: ProductPriceBreakdown;
  address?: OrderAddress;
  phoneNumbers?: PhoneNumber[];
  images?: Image[];
  locations?: LocationBase[];
  participants?: ParticipantBase[];
  productVariations?: ProductVariation[];
  criteria?: AddOnCriteria;
  category?: Category;
  warning?: Warning;
  productOrderKey?: string;
}
export interface Descriptions {
  short?: string;
  long?: string;
  formatType?: string;
}
export interface ProductPriceBreakdown {
  minPrice?: number;
  maxPrice?: number;
  displayPrice?: number;
}
export interface OrderAddress {
  coordinates?: Coordinate;
  lineOne?: string;
  lineTwo?: string;
  lineThree?: string;
  countryCode?: string;
  provinceState?: string;
  city?: string;
  postalCode?: string;
}
export interface PhoneNumber {
  type: Enums.PhoneNumberType;
  number: string;
}
export interface Image {
  imageKey: string;
  fileName?: string;
  fileExtension?: string;
  data?: string;
  description?: string;
  typeCode?: string;
  isDefault?: boolean;
}
export interface LocationBase {
  code: string;
  usageDate: string;
}
export interface ParticipantBase {
  participantTypeCode: string;
  isPrimary?: boolean;
  dateOfBirth?: string;
  residentCountry?: string;
}
export interface ProductVariation {
  productVariationKey?: string;
  descriptions?: Descriptions;
  attributes?: ProductVariationAttribute[];
  catalog?: ProductVariationCatalog[];
}
export interface AddOnCriteria {
  departmentCode?: string;
  companyCode?: string;
  ratingCode?: string;
  currencyCode?: string;
  categoryCode?: string;
}
export interface Category {
  code?: string;
  cultureCode?: string;
  currencyCode?: string;
  description?: string;
  displaySequence?: number;
  minimumPrice?: number;
  maximumPrice?: number;
}
export interface Warning {
  code?: string;
  description?: string;
  text?: string;
  chargeOrigin?: Enums.ChargeOrigin;
}
export interface Coordinate {
  latitude: string;
  longitude: string;
}
export interface ProductVariationAttribute {
  code?: string;
  typeCode?: string;
  description?: string;
  typeDescription?: string;
}
export interface ProductVariationCatalog {
  catalogKey?: string;
  code?: string;
  comparisonKey?: string;
  descriptions?: Descriptions;
  amounts?: ProductVariationCatalogAmounts;
  inventoryGrouping?: Enums.InventoryQuantityGrouping;
  inventoryQuantity?: number;
  sellQuantity?: number;
  usageDate?: string;
  paymentAction?: Enums.PaymentAction;
}
export interface ProductVariationCatalogAmounts {
  basePrice?: number;
  listingPrice?: number;
  markupAmount?: number;
  estimatedTotalTaxes?: number;
  estimatedTotalFees?: number;
  estimatedPrice?: number;
  discount?: Discount;
}
export interface Discount {
  code?: string;
  discountTypeCode?: string;
  description?: string;
  amount?: number;
}
export interface QuoteTokenRequest {
  items?: QuoteTokenCatalogRequest[];
  productKey: string;
  cultureCode?: string;
}
export interface QuoteTokenCatalogRequest {
  catalogKey: string;
  quantity: number;
  personalizations?: SelectedPersonalization[];
}
export interface SelectedPersonalization {
  personalizationKey: string;
  parameterKey: string;
  value?: string;
  quantity: number;
}
export interface QuotedProduct {
  productKey?: string;
  address?: OrderAddress;
  phoneNumbers?: PhoneNumber[];
  locations?: OrderLocation[];
  orders?: QuotedOrder[];
}
export interface OrderLocation {
  description?: string;
  code: string;
  utcOffset?: number;
  usageDate: string;
}
export interface QuotedOrder {
  catalogKey?: string;
  orderKey?: string;
  type?: Enums.ProductTypeCode;
  active?: boolean;
  isValid?: boolean;
  criteria?: OrderCriteria;
  isNew?: boolean;
  thumbnailFileName?: string;
  cultureCode?: string;
  quantity?: number;
  personalizations?: Personalization[];
  usageDate?: string;
  parameters?: Parameter[];
  externalLocator?: string;
  description?: string;
  descriptionFormatType?: string;
  productDescription?: string;
  productVariationDescription?: string;
  paymentAction?: Enums.PaymentAction;
  amounts?: OrderPriceBreakdown;
  terms?: Term[];
  cancellationTerms?: Term[];
  details?: ProductVariationDetail[];
  fees?: OrderFee[];
  notes?: OrderNote[];
  productVariationKey?: string;
  productOrderKey?: string;
}
export interface OrderCriteria {
  catalogCode?: string;
  countryCode?: string;
  supplierCode?: string;
  departmentCode?: string;
  vendorCode?: string;
  companyCode?: string;
  ratingCode?: string;
  discountCode?: string;
  promotionCode?: string;
  currencyCode?: string;
  categoryCode?: string;
}
export interface Personalization {
  personalizationKey?: string;
  amount?: number;
  limit?: number;
  description?: string;
  dataType?: Enums.PersonalizationDataType;
  inputRequired?: boolean;
  options?: PersonalizationParameter[];
}
export interface Parameter {
  code?: string;
  description?: string;
}
export interface OrderPriceBreakdown {
  display?: Amount;
  initial?: Amount;
  markup?: Amount;
  listed?: Amount;
  listedDiscount?: Amount;
  discount?: Amount;
  handling?: Amount;
  handlingDiscount?: Amount;
  dueNow?: AmountDue;
  dueLater?: AmountDue;
  personalizations?: number;
  taxable?: number;
  services?: number;
  fees?: number;
  total?: number;
  taxRate?: number;
  taxExempt?: boolean;
  taxAtUnitPrice?: boolean;
}
export interface Term {
  code?: string;
  description?: string;
  terms?: string;
}
export interface ProductVariationDetail {
  code?: string;
  styleCode?: string;
  description?: string;
}
export interface OrderFee {
  code?: string;
  feeCategoryCode?: string;
  description?: string;
  amount?: Amount;
  foreignAmount?: Amount;
  type?: Enums.OrderFeeType;
  isWaiveable?: boolean;
  foreignCurrencyCode?: string;
  currencyCode?: string;
  isChargeable?: boolean;
}
export interface OrderNote {
  text?: string;
  description?: string;
  created?: string;
  modified?: string;
}
export interface PersonalizationParameter {
  parameterKey?: string;
  description?: string;
  default?: boolean;
}
export interface Amount {
  value?: number;
  total?: number;
}
export interface AmountDue {
  preTax?: number;
  tax?: number;
  total?: number;
}
export interface SellTokenRequest {
  items?: SellTokenCatalogRequest[];
  productKey: string;
  primaryPassengerKey?: string;
  cultureCode?: string;
}
export interface SellTokenCatalogRequest {
  parameters?: Dictionary<string>;
  catalogKey: string;
  quantity: number;
  personalizations?: SelectedPersonalization[];
}
export interface AddOn {
  readonly paymentRequired?: boolean;
  readonly status?: Enums.AddOnStatus;
  addOnKey?: string;
  type?: Enums.ProductTypeCode;
  summary?: AddOnOrderSummary;
  reference?: string;
  created?: CreatedAddOnDetails;
  source?: AddOnDetails;
  declinedText?: string;
  cultureCode?: string;
  modifiedDate?: string;
  modifiedAgentReference?: string;
  order?: Order;
  isHistorical?: boolean;
  charges?: AddOnCharge[];
}
export interface AddOnOrderSummary {
  total?: number;
  held?: number;
  charged?: number;
  supplierCode?: string;
  beginDate?: string;
  beginLocation?: string;
  endDate?: string;
  endLocation?: string;
  externalReference?: string;
  description?: string;
}
export interface CreatedAddOnDetails {
  agentReference?: string;
  agentCode?: string;
  date?: string;
  organizationCode?: string;
  domainCode?: string;
  locationCode?: string;
}
export interface AddOnDetails {
  agentCode?: string;
  organizationCode?: string;
  domainCode?: string;
  locationCode?: string;
}
export interface Order {
  address?: OrderAddress;
  orderKey?: string;
  phoneNumbers?: PhoneNumber[];
  active?: boolean;
  locations?: OrderLocation[];
  criteria?: OrderCriteria;
  customer?: OrderCustomer;
  thumbnailFileName?: string;
  participants?: Dictionary<OrderParticipant>;
  quantity?: number;
  history?: OrderHistory[];
  usageDate?: string;
  payment?: OrderPayment;
  externalLocator?: string;
  description?: string;
  descriptionFormatType?: string;
  productDescription?: string;
  productVariationDescription?: string;
  paymentAction?: Enums.PaymentAction;
  amounts?: OrderPriceBreakdown;
  terms?: Term[];
  cancellationTerms?: Term[];
  details?: ProductVariationDetail[];
  fees?: OrderFee[];
  notes?: OrderNote[];
  parameters?: InputedParameter[];
  productVariationKey?: string;
  productOrderKey?: string;
}
export interface AddOnCharge {
  type?:
    | 'FarePrice'
    | 'Discount'
    | 'IncludedTravelFee'
    | 'IncludedTax'
    | 'TravelFee'
    | 'Tax'
    | 'ServiceCharge'
    | 'PromotionDiscount'
    | 'ConnectionAdjustmentAmount'
    | 'AddOnsPrice'
    | 'FarePoints'
    | 'DiscountPoints'
    | 'IncludedAddOnsFee'
    | 'AddOnsFee'
    | 'AddOnsMarkup'
    | 'FareSurcharge'
    | 'Loyalty'
    | 'AddOnsCancelFee'
    | 'Calculated'
    | 'Note'
    | 'Points'
    | 'DynamicFareAdjustment';
  code?: string;
  ticketCode?: string;
  collection?: Enums.CollectType;
  currencyCode?: string;
  amount?: number;
  details?: string;
}
export interface OrderCustomer {
  customerKey?: string;
  name?: Name;
  customerNumber?: string;
  address?: ConsumerAddress;
  dateOfBirth?: string;
  emailAddress?: string;
  companyName?: string;
  type?: string;
  homePhone?: string;
  workPhone?: string;
  fax?: string;
}
export interface OrderParticipant {
  participantKey?: string;
  description?: string;
  name?: Name;
  participantTypeCode?: string;
  address?: ConsumerAddress;
  isPrimary?: boolean;
  dateOfBirth?: string;
  document?: ParticipantDocument;
  emailAddress?: string;
  companyName?: string;
  type?: string;
  homePhone?: string;
  workPhone?: string;
  fax?: string;
}
export interface OrderHistory {
  code?: string;
  previousCode?: string;
  note?: string;
  created?: string;
  hasError?: boolean;
}
export interface OrderPayment {
  paymentKey?: string;
  type: string;
  currencyCode?: string;
  name?: Name;
  number: string;
  expiration?: string;
  cvv?: string;
  amount?: number;
  description?: string;
  issueNumber?: string;
  address?: Address;
  emailAddress?: string;
  phoneNumbers?: PhoneNumber[];
}
export interface InputedParameter {
  value?: string;
  code?: string;
  description?: string;
}
export interface ConsumerAddress {
  county?: string;
  lineOne?: string;
  lineTwo?: string;
  lineThree?: string;
  countryCode?: string;
  provinceState?: string;
  city?: string;
  postalCode?: string;
}
export interface ParticipantDocument {
  number?: string;
  issuedByCode?: string;
  documentTypeCode?: string;
}
export interface Address {
  lineOne?: string;
  lineTwo?: string;
  lineThree?: string;
  countryCode?: string;
  provinceState?: string;
  city?: string;
  postalCode?: string;
}
export interface AddressType {
  addressTypeCode: string;
  name?: string;
  inActive?: boolean;
}
export interface AgentSettingType {
  agentSettingTypeCode?: string;
  name?: string;
  inActive?: boolean;
  schema?: string;
}
export interface Station {
  stationCode: string;
  inActive?: boolean;
  allowed?: boolean;
  icaoCode?: string;
  fullName?: string;
  shortName?: string;
  macCode?: string;
  currencyCode?: string;
  conversionCurrencyCode?: string;
  cultureCode?: string;
  class?: string;
  locationDetails?: StationLocationDetails;
}
export interface StationLocationDetails {
  coordinates?: Coordinate;
  zoneCode?: string;
  subZoneCode?: string;
  countryCode?: string;
  provinceStateCode?: string;
  cityCode?: string;
  timeZoneCode?: string;
  thirdPartyControlled?: boolean;
  customsRequiredForCrew?: boolean;
  weightType?: Enums.WeightType;
}
export interface ResourceEntriesStationDetail {
  expiration?: string;
  values?: StationDetail[];
  eTag?: string;
}
export interface StationDetail {
  categories?: string[];
  feeZones?: string[];
}
export interface AncillaryPricingOptionsContext {
  inputParameters?: Dictionary<string>;
}
export interface Area {
  areaCode?: string;
  description?: string;
  name?: string;
  zones?: Zone[];
}
export interface Zone {
  areaCode: string;
  name?: string;
  subZones?: SubZone[];
  zoneCode: string;
}
export interface SubZone {
  areaCode: string;
  name?: string;
  stations?: Station[];
  subZoneCode: string;
  zoneCode: string;
}
export interface AutoAssignRequest {
  preferences?: SeatPreferences;
  waiveFee?: boolean;
  seatedNearPrimary?: string[];
  inventoryControl?: Enums.UnitInventoryControlType;
  seatAssignmentMode?: Enums.SeatAssignmentMode;
}
export interface SeatPreferences {
  seat?: Enums.SimpleSeatPreference;
  travelClass?: Enums.TravelClassSeatPreference;
  advancedPreferences?: SeatPreference[];
}
export interface SeatPreference {
  seatMapCode: string;
  value: string;
}
export interface AvailabilitySimpleRequestv2 {
  origin: string;
  destination: string;
  searchDestinationMacs?: boolean;
  searchOriginMacs?: boolean;
  beginDate: string;
  endDate?: string;
  passengers: PassengerTypeCriteria;
  codes?: AvailabilityCodeCriteriav2;
  filters?: AvailabilityCriteriaFilter;
  taxesAndFees?: Enums.TaxesAndFeesRollupMode;
  lowFarePrice?: number;
  ssrCollectionsMode?: Enums.AvailabilitySsrCollectionsMode;
  numberOfFaresPerJourney?: number;
}
export interface PassengerTypeCriteria {
  types: PassengerSearchCriteria[];
  residentCountry?: string;
}
export interface AvailabilityCodeCriteriav2 {
  currencyCode?: string;
  promotionCode?: string;
  sourceOrganization?: string;
  currentSourceOrganization?: string;
}
export interface AvailabilityCriteriaFilter {
  fareInclusionType?: Enums.AvailabilityType;
  compressionType?: Enums.FareClassControl;
  maxPrice?: number;
  minPrice?: number;
  loyalty?: Enums.LoyaltyFilter;
  includeAllotments?: boolean;
  exclusionType?: Enums.AvailabilityFilter;
  sortOptions?: Enums.JourneySortKey[];
  productClasses?: string[];
  travelClasses?: string[];
  fareTypes?: string[];
  classesOfService?: string[];
  carrierCode?: string;
  identifier?: string;
  type?: Enums.FlightType;
  connectionType?: Enums.SoldAsConnectionType;
  maxConnections?: number;
}
export interface PassengerSearchCriteria {
  type: string;
  discountCode?: string;
  count: number;
}
export interface Availabilityv2 {
  results?: TripResult[];
  faresAvailable?: Dictionary<FareReference>;
  currencyCode?: string;
  includeTaxesAndFees?: boolean;
}
export interface TripResult {
  trips?: TripDateMarket[];
}
export interface FareReference {
  readonly totals?: FareReferenceTotals;
  readonly isSumOfSector?: boolean;
  fareAvailabilityKey?: string;
  fares?: FareAvailabilityv2[];
}
export interface TripDateMarket {
  readonly multipleOriginStations?: boolean;
  readonly multipleDestinationStations?: boolean;
  date?: string;
  journeysAvailableByMarket?: Dictionary<AvailableJourney[]>;
}
export interface FareReferenceTotals {
  readonly fareTotal?: number;
  readonly revenueTotal?: number;
  readonly publishedTotal?: number;
  readonly loyaltyTotal?: number;
  readonly discountedTotal?: number;
}
export interface FareAvailabilityv2 {
  readonly isGoverning?: boolean;
  fareBasisCode?: string;
  classOfService?: string;
  classType?: string;
  fareApplicationType?: Enums.FareApplicationType;
  fareStatus?: Enums.FareStatus;
  productClass?: string;
  ruleNumber?: string;
  ruleTariff?: string;
  passengerFares?: PassengerFareAvailability[];
  travelClassCode?: string;
  isAllotmentMarketFare?: boolean;
  reference?: string;
}
export interface AvailableJourney {
  readonly flightType?: Enums.FlightType;
  readonly stops?: number;
  readonly designator?: TransportationDesignator;
  journeyKey?: string;
  segments?: AvailableSegment[];
  fares?: AvailableJourneyFare[];
  notForGeneralUser?: boolean;
}
export interface PassengerFareAvailability {
  fareDiscountCode?: string;
  passengerDiscountCode?: string;
  passengerType: string;
  fareAmount?: number;
  revenueFare?: number;
  publishedFare?: number;
  loyaltyPoints?: number;
  discountedFare?: number;
  serviceCharges?: ServiceCharge[];
  multiplier?: number;
}
export interface TransportationDesignator {
  destination?: string;
  origin?: string;
  arrival?: string;
  departure?: string;
}
export interface AvailableSegment {
  readonly isChangeOfGauge?: boolean;
  readonly isBlocked?: boolean;
  readonly isHosted?: boolean;
  readonly designator?: TransportationDesignator;
  readonly isSeatmapViewable?: boolean;
  segmentKey?: string;
  identifier?: TransportationIdentifier;
  cabinOfService?: string;
  externalIdentifier?: TransportationIdentifier;
  international?: boolean;
  segmentType?: Enums.SegmentTypes;
  legs?: Leg[];
}
export interface AvailableJourneyFare {
  fareAvailabilityKey?: string;
  details?: AvailableJourneyFareDetail[];
  isSumOfSector?: boolean;
}
export interface ServiceCharge {
  amount?: number;
  code?: string;
  detail?: string;
  type?:
    | 'FarePrice'
    | 'Discount'
    | 'IncludedTravelFee'
    | 'IncludedTax'
    | 'TravelFee'
    | 'Tax'
    | 'ServiceCharge'
    | 'PromotionDiscount'
    | 'ConnectionAdjustmentAmount'
    | 'AddOnsPrice'
    | 'FarePoints'
    | 'DiscountPoints'
    | 'IncludedAddOnsFee'
    | 'AddOnsFee'
    | 'AddOnsMarkup'
    | 'FareSurcharge'
    | 'Loyalty'
    | 'AddOnsCancelFee'
    | 'Calculated'
    | 'Note'
    | 'Points'
    | 'DynamicFareAdjustment';
  collectType?: Enums.CollectType;
  currencyCode?: string;
  foreignCurrencyCode?: string;
  foreignAmount?: number;
  ticketCode?: string;
}
export interface TransportationIdentifier {
  identifier: string;
  carrierCode: string;
  opSuffix?: string;
}
export interface Leg {
  legKey?: string;
  operationsInfo?: OperationsInformation;
  designator?: TransportationDesignator;
  legInfo?: LegInformation;
  nests?: LegNest[];
  ssrs?: LegSsr[];
  seatmapReference?: string;
  flightReference?: string;
}
export interface AvailableJourneyFareDetail {
  availableCount?: number;
  status?: Enums.ClassStatus;
  reference?: string;
}
export interface OperationsInformation {
  arrivalGate?: GateInformation;
  estimatedArrivalTime?: string;
  departureGate?: GateInformation;
  actualOffBlockTime?: string;
  actualOnBlockTime?: string;
  actualTouchDownTime?: string;
  airborneTime?: string;
  arrivalNote?: string;
  arrivalStatus?: Enums.ArrivalStatus;
  baggageClaim?: string;
  departureNote?: string;
  departureStatus?: Enums.DepartureStatus;
  departureTimes?: DepartureEvent;
  standardArrivalTime?: string;
  tailNumber?: string;
}
export interface LegInformation {
  readonly departureTimeUtc?: string;
  readonly arrivalTimeUtc?: string;
  adjustedCapacity?: number;
  arrivalTerminal?: string;
  arrivalTimeVariant?: number;
  backMoveDays?: number;
  capacity?: number;
  changeOfDirection?: boolean;
  codeShareIndicator?: Enums.CodeShareIndicator;
  departureTerminal?: string;
  departureTimeVariant?: number;
  equipmentType?: string;
  equipmentTypeSuffix?: string;
  eTicket?: boolean;
  irop?: boolean;
  lid?: number;
  marketingCode?: string;
  marketingOverride?: boolean;
  onTime?: string;
  operatedByText?: string;
  operatingCarrier?: string;
  operatingFlightNumber?: string;
  operatingOpSuffix?: string;
  outMoveDays?: number;
  arrivalTime?: string;
  departureTime?: string;
  prbcCode?: string;
  scheduleServiceType?: string;
  sold?: number;
  status?: Enums.LegStatus;
  subjectToGovtApproval?: boolean;
}
export interface LegNest {
  adjustedCapacity?: number;
  classNest?: number;
  lid?: number;
  travelClassCode?: string;
  nestType?: Enums.NestType;
  legClasses?: LegClass[];
}
export interface LegSsr {
  readonly available?: number;
  ssrNestCode?: string;
  lid?: number;
  sold?: number;
  unitSold?: number;
}
export interface GateInformation {
  estimatedGate?: string;
  actualGate?: string;
}
export interface DepartureEvent {
  scheduled?: string;
  estimated?: string;
}
export interface LegClass {
  classNest?: number;
  classAllotted?: number;
  classType?: string;
  classAuthorizedUnits?: number;
  classOfService: string;
  classRank?: number;
  classSold?: number;
  cnxSold?: number;
  latestAdvancedReservation?: number;
  status?: Enums.ClassStatus;
  thruSold?: number;
}
export interface AvailabilityRequestv2 {
  passengers: PassengerTypeCriteria;
  criteria: AvailabilityCriteria[];
  codes?: AvailabilityCodeCriteriav2;
  taxesAndFees?: Enums.TaxesAndFeesRollupMode;
  numberOfFaresPerJourney?: number;
}
export interface AvailabilityCriteria {
  stations: AvailabilityStationCriteria;
  dates: AvailabilityDateCriteria;
  filters?: AvailabilityCriteriaFilter;
  lowFarePrice?: number;
  ssrCollectionsMode?: Enums.AvailabilitySsrCollectionsMode;
}
export interface AvailabilityStationCriteria {
  destinationStationCodes: string[];
  originStationCodes: string[];
  searchDestinationMacs?: boolean;
  searchOriginMacs?: boolean;
}
export interface AvailabilityDateCriteria {
  beginDate: string;
  startTimeInterval?: string;
  endDate?: string;
  endTimeInterval?: string;
  daysOfWeek?: Enums.DayOfWeek[];
}
export interface LowFareCacheRequest {
  startDate: string;
  origin: string;
  endDate: string;
  destination: string;
  currencyCode: string;
  numberOfPassengers?: number;
  includeTaxesAndFees: boolean;
}
export interface LowFareCacheAvailability {
  lowFares?: LowFareAvailabilityByDate[];
}
export interface LowFareAvailabilityByDate {
  date?: string;
  price?: number;
  available?: number;
  noFlights?: boolean;
  soldOut?: boolean;
}
export interface LowFareAvailabilitySearchSimpleRequest {
  origin: string;
  destination: string;
  beginDate: string;
  endDate?: string;
  passengers: PassengerSearchCriteria[];
  promotionCode?: string;
  currencyCode?: string;
  loyaltyFilter?: Enums.LoyaltyFilter;
  daysToLeft?: number;
  daysToRight?: number;
}
export interface LowFareAvailability {
  lowFareDateMarkets?: LowFareDateMarket[];
  includeTaxesAndFees?: boolean;
  currencyCode?: string;
}
export interface LowFareDateMarket {
  readonly lowestFareAmount?: LowFareAmount;
  lowFares?: LowFare[];
  destination?: string;
  origin?: string;
  departureDate?: string;
}
export interface LowFareAmount {
  fareAmount?: number;
  farePointAmount?: number;
  taxesAndFeesAmount?: number;
}
export interface LowFare {
  passengers?: Dictionary<LowFarePassenger>;
  bookingClasses?: string[];
  arrivalTime?: string;
  departureTime?: string;
  legs?: LowFareLeg[];
  availableCount?: number;
  productClass?: string;
}
export interface LowFarePassenger {
  discountCode?: string;
  fareAmount?: number;
  type?: string;
  farePointAmount?: number;
  taxesAndFeesAmount?: number;
}
export interface LowFareLeg {
  arrivalTime?: string;
  departureTime?: string;
  destination?: string;
  origin?: string;
  flightNumber?: string;
  carrierCode?: string;
  equipmentType?: string;
  operatingCarrier?: string;
}
export interface LowFareAvailabilityRequest {
  bypassCache?: boolean;
  getAllDetails?: boolean;
  includeTaxesAndFees?: boolean;
  passengers: PassengerTypeCriteria;
  codes?: LowFareAvailabilityCodeCriteria;
  filters?: LowFareAvailabilityFilterCriteria;
  criteria: LowFareAvailabilityCriteria[];
}
export interface LowFareAvailabilityCodeCriteria {
  currency?: string;
  sourceOrganization?: string;
  promotionCode?: string;
}
export interface LowFareAvailabilityFilterCriteria {
  groupByDate?: boolean;
  flightFilter?: Enums.LowFareFlightFilter;
  loyalty?: Enums.LoyaltyFilter;
  bookingClasses?: string[];
  productClasses?: string[];
  fareTypes?: string[];
}
export interface LowFareAvailabilityCriteria {
  destinationStationCodes: string[];
  originStationCodes: string[];
  beginDate: string;
  endDate?: string;
}
export interface PassengerBag {
  identifier?: string;
  baggageKey?: string;
  nonStandard?: boolean;
  type?: string;
  osTag?: string;
  osTagDate?: string;
  taggedToStation?: string;
  stationCode?: string;
  weight?: number;
  taggedToCarrierCode?: string;
  weightType?: Enums.WeightType;
}
export interface PassengerBagRequest {
  bagCount?: number;
  iataIdentifier?: string;
  limitedReleaseTag?: boolean;
  weightType?: Enums.WeightType;
  weight?: number;
}
export interface BaggageType {
  baggageTypeCode: string;
  bagWeightType?: Enums.WeightType;
  freeBag?: boolean;
  inActive?: boolean;
  name?: string;
  weightReducedBy?: number;
}
export interface BoardingPassPassengerFilterRequest {
  passengerKeys?: string[];
  source?: string;
  skipLogToHistory?: boolean;
}
export interface BoardingPassesM2D {
  boardingPasses?: BoardingPassM2D[];
  recordLocator?: string;
  currencyCode?: string;
  contactPhoneNumber?: string;
}
export interface BoardingPassM2D {
  segments?: BoardingPassSegment[];
  passenger?: BoardingPassPassengerDetailsBase;
  userName?: string;
  barCode?: string;
  iataCode?: string;
  fareBasisCode?: string;
  fareClass?: string;
  baseFare?: number;
  totalFare?: number;
  totalCost?: number;
  discountedFare?: number;
  totalTax?: number;
  receiptNumber?: string;
  serviceCharges?: ServiceCharge[];
}
export interface BoardingPassSegment {
  readonly designator?: BoardingPassTransportationDesignator;
  transportationName?: string;
  departureGate?: string;
  boardingTime?: string;
  type?: Enums.SegmentTypes;
  international?: boolean;
  ticketNumber?: string;
  infantTicketNumber?: string;
  ticketIndicator?: string;
  cabinOfService?: string;
  classOfService?: string;
  externalClassOfService?: string;
  fareClassName?: string;
  productClassName?: string;
  externalRecordLocator?: string;
  program?: BoardingPassProgram;
  hasInfant?: boolean;
  identifier?: TransportationIdentifier;
  legs?: BoardingPassLeg[];
  externalIdentifier?: BoardingPassTransportationIdentifier;
}
export interface BoardingPassPassengerDetailsBase {
  type?: string;
  name?: Name;
  selecteeString?: string;
  isoName?: Name;
  customerNumber?: string;
  dateOfBirth?: string;
  score?: BoardingPassPassengerScore;
  gender?: Enums.Gender;
  infant?: BoardingPassInfantDetails;
  documents?: PassengerTravelDocument[];
}
export interface BoardingPassTransportationDesignator {
  destinationStationName?: string;
  destination?: string;
  originStationName?: string;
  origin?: string;
  arrival?: string;
  departure?: string;
}
export interface BoardingPassProgram {
  name?: string;
  number?: string;
  levelName?: string;
}
export interface BoardingPassLeg {
  seat?: BoardingPassSeatDetails;
  boarding?: BoardingPassBoardingDetails;
  designator?: TransportationDesignator;
  liftStatus?: Enums.LiftStatus;
  operatedByText?: string;
  subjectToGovernmentApproval?: boolean;
  codeShareIndicator?: string;
  bppr?: string;
  identifier?: BoardingPassTransportationIdentifier;
  bags?: OperationBag[];
  ssrs?: SsrGlance[];
}
export interface BoardingPassTransportationIdentifier {
  carrierName?: string;
  identifier: string;
  carrierCode: string;
  opSuffix?: string;
}
export interface BoardingPassPassengerScore {
  name?: string;
  code?: string;
}
export interface BoardingPassInfantDetails {
  name?: Name;
  isoName?: Name;
  dateOfBirth?: string;
  gender?: Enums.Gender;
  documents?: PassengerTravelDocument[];
}
export interface PassengerTravelDocument {
  passengerTravelDocumentKey?: string;
  documentTypeCode: string;
  birthCountry?: string;
  issuedByCode?: string;
  name?: Name;
  nationality?: string;
  expirationDate?: string;
  number?: string;
  issuedDate?: string;
  gender?: Enums.Gender;
  dateOfBirth?: string;
}
export interface BoardingPassSeatDetails {
  column?: string;
  row?: number;
  designator?: string;
}
export interface BoardingPassBoardingDetails {
  boardingSequence?: number;
  boardingZone?: number;
  externalBoardingZone?: string;
}
export interface OperationBag {
  operationBagKey?: string;
  identifier?: string;
  baggageStatus?: Enums.BaggageStatus;
  nonStandard?: boolean;
  checkInDate?: string;
  osTag?: string;
  compartment?: number;
  taggedToStation?: string;
  taggedToStationCity?: string;
  weight?: number;
  weightType?: Enums.WeightType;
}
export interface SsrGlance {
  note?: string;
  ssrCode?: string;
  ssrDetail?: string;
}
export interface BoardingPassesS2D {
  boardingPasses?: BoardingPassS2D[];
  recordLocator?: string;
  currencyCode?: string;
  contactPhoneNumber?: string;
}
export interface BoardingPassS2D {
  segments?: BoardingPassS2DSegment[];
  passenger?: BoardingPassPassengerDetailsBase;
  userName?: string;
  iataCode?: string;
  fareBasisCode?: string;
  fareClass?: string;
  baseFare?: number;
  totalFare?: number;
  totalCost?: number;
  discountedFare?: number;
  totalTax?: number;
  receiptNumber?: string;
  serviceCharges?: ServiceCharge[];
}
export interface BoardingPassS2DSegment {
  readonly designator?: BoardingPassTransportationDesignator;
  barCode?: string;
  transportationName?: string;
  departureGate?: string;
  boardingTime?: string;
  type?: Enums.SegmentTypes;
  international?: boolean;
  ticketNumber?: string;
  infantTicketNumber?: string;
  ticketIndicator?: string;
  cabinOfService?: string;
  classOfService?: string;
  externalClassOfService?: string;
  fareClassName?: string;
  productClassName?: string;
  externalRecordLocator?: string;
  program?: BoardingPassProgram;
  hasInfant?: boolean;
  identifier?: TransportationIdentifier;
  legs?: BoardingPassLeg[];
  externalIdentifier?: BoardingPassTransportationIdentifier;
}
export interface BoardingPassFilterRequest {
  segmentKeys?: string[];
  passengerKeys?: string[];
  source?: string;
  skipLogToHistory?: boolean;
}
export interface BoardingPassesCollectionv2 {
  recordLocator?: string;
  currencyCode?: string;
  contactPhoneNumber?: string;
  boardingPasses?: BoardingPassv2[];
}
export interface BoardingPassv2 {
  passenger?: BoardingPassPassengerDetailsv2;
  userName?: string;
  segments?: BoardingPassSegment[];
  iataCode?: string;
  fareBasisCode?: string;
  fareClass?: string;
  baseFare?: number;
  totalFare?: number;
  totalCost?: number;
  discountedFare?: number;
  totalTax?: number;
  receiptNumber?: string;
  serviceCharges?: ServiceCharge[];
}
export interface BoardingPassPassengerDetailsv2 {
  barCode?: string;
  type?: string;
  name?: Name;
  selecteeString?: string;
  isoName?: Name;
  customerNumber?: string;
  dateOfBirth?: string;
  score?: BoardingPassPassengerScore;
  gender?: Enums.Gender;
  infant?: BoardingPassInfantDetails;
  documents?: PassengerTravelDocument[];
}
export interface Booking {
  readonly selfServiceMoveAvailable?: boolean;
  bookingKey?: string;
  recordLocator?: string;
  currencyCode?: string;
  systemCode?: string;
  groupName?: string;
  locators?: BookingRecordLocators;
  info?: BookingInfo;
  sales?: BookingSales;
  typeOfSale?: TypeOfSale;
  hold?: BookingHold;
  breakdown?: BookingPriceBreakdown;
  receivedBy?: ReceivedByInfo;
  contacts?: Dictionary<Contact>;
  passengers?: Dictionary<Passenger>;
  journeys?: Journey[];
  comments?: BookingComment[];
  queues?: BookingQueueInfo[];
  history?: BookingHistory[];
  payments?: Payment[];
  addOns?: Dictionary<AddOn>;
}
export interface BookingRecordLocators {
  numericRecordLocator?: string;
  parentRecordLocator?: string;
  parentId?: number;
  recordLocators?: RecordLocator[];
}
export interface BookingInfo {
  status?: Enums.BookingStatus;
  paidStatus?: Enums.PaidStatus;
  priceStatus?: Enums.PriceStatus;
  profileStatus?: Enums.BookingProfileStatus;
  bookingType?: string;
  channelType?: Enums.ChannelType;
  bookedDate?: string;
  createdDate?: string;
  expirationDate?: string;
  modifiedDate?: string;
  modifiedAgentId?: number;
  createdAgentId?: number;
  owningCarrierCode?: string;
  changeAllowed?: boolean;
}
export interface BookingSales {
  created?: PointOfSale;
  source?: BookingPointOfSale;
  modified?: PointOfSale;
}
export interface TypeOfSale {
  residentCountry?: string;
  promotionCode?: string;
  fareTypes?: string[];
}
export interface BookingHold {
  expiration?: string;
}
export interface BookingPriceBreakdown {
  balanceDue?: number;
  pointsBalanceDue?: number;
  authorizedBalanceDue?: number;
  totalAmount?: number;
  totalPoints?: number;
  totalToCollect?: number;
  totalPointsToCollect?: number;
  totalCharged?: number;
  passengerTotals?: PassengerPriceBreakdownBase;
  passengers?: Dictionary<PassengerPriceBreakdown>;
  journeyTotals?: JourneyPriceBreakdownBase;
  journeys?: Dictionary<JourneyPriceBreakdown>;
  addOnTotals?: AddOnPriceBreakdown;
}
export interface ReceivedByInfo {
  receivedBy?: string;
  latestReceivedBy?: string;
  receivedReference?: string;
  latestReceivedReference?: string;
  referralCode?: string;
}
export interface Contact {
  contactTypeCode: string;
  phoneNumbers?: PhoneNumber[];
  cultureCode?: string;
  address?: Address;
  emailAddress?: string;
  customerNumber?: string;
  sourceOrganization?: string;
  distributionOption?: Enums.DistributionOption;
  notificationPreference?: Enums.NotificationPreference;
  companyName?: string;
  name?: Name;
}
export interface Passenger {
  passengerKey?: string;
  passengerAlternateKey?: string;
  customerNumber?: string;
  fees?: PassengerFee[];
  name?: Name;
  passengerTypeCode: string;
  discountCode?: string;
  bags?: PassengerBag[];
  program?: PassengerProgram;
  infant?: PassengerInfant;
  info?: PassengerInformation;
  travelDocuments?: PassengerTravelDocument[];
  addresses?: PassengerAddress[];
  weightCategory?: Enums.WeightCategory;
}
export interface Journey {
  readonly flightType?: Enums.FlightType;
  readonly stops?: number;
  readonly designator?: TransportationDesignator;
  readonly move?: JourneyMove;
  segments?: Segment[];
  journeyKey?: string;
  notForGeneralUser?: boolean;
}
export interface BookingComment {
  type?: Enums.PersonCommentType;
  pointOfSale?: PointOfSale;
  text?: string;
  commentKey?: string;
  createdDate?: string;
}
export interface BookingQueueInfo {
  segmentKey?: string;
  code?: string;
  subCode?: string;
  name?: string;
  queueId?: number;
  passengerId?: number;
  watchListId?: number;
  note?: string;
  type?: Enums.QueueEventType;
  action?: Enums.QueueAction;
  mode?: Enums.QueueMode;
  flightReference?: string;
}
export interface BookingHistory {
  readonly historyCategory?: Enums.HistoryCategory;
  details?: string;
  event?: Enums.BookingHistoryEvent;
  pointOfSale?: PointOfSale;
  sourcePointOfSale?: PointOfSale;
  receivedBy?: string;
  receivedByReference?: string;
  createdDate?: string;
}
export interface Payment {
  paymentKey?: string;
  code?: string;
  approvalDate?: string;
  details?: PaymentDetails;
  amounts?: PaymentAmounts;
  authorizationCode?: string;
  authorizationStatus?: Enums.AuthorizationStatus;
  fundedDate?: string;
  transactionCode?: string;
  dcc?: DirectCurrencyConversion;
  threeDSecure?: ThreeDSecure;
  attachments?: PaymentAttachment[];
  createdDate?: string;
  modifiedDate?: string;
  type?: Enums.PaymentMethodType;
  status?: Enums.BookingPaymentStatus;
  transferred?: boolean;
  channelType?: Enums.ChannelType;
  pointOfSale?: PointOfSale;
  sourcePointOfSale?: PointOfSale;
  deposit?: boolean;
  accountId?: number;
  voucher?: PaymentVoucherDetails;
  addedToState?: boolean;
  createdAgentId?: number;
  modifiedAgentId?: number;
  reference?: number;
}
export interface RecordLocator {
  recordLocatorKey?: string;
  recordCode?: string;
  systemDomainCode?: string;
  owningSystemCode?: string;
  bookingSystemCode?: string;
  interactionPurpose?: string;
  hostedCarrierCode?: string;
}
export interface PointOfSale {
  agentCode?: string;
  domainCode?: string;
  locationCode?: string;
  organizationCode?: string;
}
export interface BookingPointOfSale {
  isoCountryCode?: string;
  sourceSystemCode?: string;
  agentCode?: string;
  domainCode?: string;
  locationCode?: string;
  organizationCode?: string;
}
export interface PassengerPriceBreakdownBase {
  services?: ChargeBreakdown;
  specialServices?: ChargeBreakdown;
  seats?: ChargeBreakdown;
  upgrades?: ChargeBreakdown;
  spoilage?: ChargeBreakdown;
  nameChanges?: ChargeBreakdown;
  convenience?: ChargeBreakdown;
  infant?: ChargeBreakdown;
}
export interface PassengerPriceBreakdown {
  passengerKey?: string;
  services?: ChargeBreakdown;
  specialServices?: ChargeBreakdown;
  seats?: ChargeBreakdown;
  upgrades?: ChargeBreakdown;
  spoilage?: ChargeBreakdown;
  nameChanges?: ChargeBreakdown;
  convenience?: ChargeBreakdown;
  infant?: ChargeBreakdown;
}
export interface JourneyPriceBreakdownBase {
  totalAmount?: number;
  totalPoints?: number;
  totalTax?: number;
  totalDiscount?: number;
}
export interface JourneyPriceBreakdown {
  journeyKey?: string;
  totalAmount?: number;
  totalPoints?: number;
  totalTax?: number;
  totalDiscount?: number;
}
export interface AddOnPriceBreakdown {
  car?: number;
  hotel?: number;
  activities?: number;
}
export interface PassengerFee {
  type?: Enums.FeeType;
  ssrCode?: string;
  ssrNumber?: number;
  paymentNumber?: number;
  code: string;
  detail?: string;
  passengerFeeKey?: string;
  override?: boolean;
  flightReference?: string;
  note?: string;
  createdDate?: string;
  isProtected?: boolean;
  serviceCharges?: ServiceCharge[];
}
export interface PassengerProgram {
  code?: string;
  levelCode?: string;
  number?: string;
}
export interface PassengerInfant {
  readonly fees?: InfantFee[];
  nationality?: string;
  dateOfBirth?: string;
  travelDocuments?: PassengerTravelDocument[];
  residentCountry?: string;
  gender?: Enums.Gender;
  name?: Name;
}
export interface PassengerInformation {
  nationality?: string;
  residentCountry?: string;
  gender?: Enums.Gender;
  dateOfBirth?: string;
  familyNumber?: number;
}
export interface PassengerAddress {
  status?: Enums.ApisAddressStatus;
  companyName?: string;
  lineOne?: string;
  passengerAddressKey?: string;
  phone?: string;
  lineTwo?: string;
  stationCode?: string;
  lineThree?: string;
  emailAddress?: string;
  countryCode?: string;
  provinceState?: string;
  city?: string;
  postalCode?: string;
}
export interface JourneyMove {
  maxMoveBackDays?: number;
  maxMoveOutDays?: number;
}
export interface Segment {
  readonly isStandby?: boolean;
  readonly isConfirming?: boolean;
  readonly isBlocked?: boolean;
  readonly isHosted?: boolean;
  readonly isChangeOfGauge?: boolean;
  readonly designator?: TransportationDesignator;
  readonly isSeatmapViewable?: boolean;
  fares?: Fare[];
  segmentKey?: string;
  identifier?: TransportationIdentifier;
  passengerSegment?: Dictionary<PassengerSegment>;
  channelType?: Enums.ChannelType;
  cabinOfService?: string;
  externalIdentifier?: TransportationIdentifier;
  priorityCode?: string;
  changeReasonCode?: Enums.ChangeReasonCodes;
  segmentType?: Enums.SegmentTypes;
  salesDate?: string;
  international?: boolean;
  flightReference?: string;
  legs?: Leg[];
}
export interface PaymentDetails {
  accountNumberId?: number;
  parentPaymentId?: number;
  accountName?: string;
  accountNumber?: string;
  expirationDate?: string;
  text?: string;
  installments?: number;
  binRange?: number;
  fields?: Dictionary<string>;
}
export interface PaymentAmounts {
  amount?: number;
  currencyCode?: string;
  collected?: number;
  collectedCurrencyCode?: string;
  quoted?: number;
  quotedCurrencyCode?: string;
}
export interface DirectCurrencyConversion {
  rateId?: string;
  currencyCode?: string;
  rateValue?: number;
  amount?: number;
  putInState?: string;
  status?: Enums.DirectCurrencyConversionStatus;
  applicable?: boolean;
}
export interface ThreeDSecure {
  browserUserAgent?: string;
  browserAccept?: string;
  remoteIpAddress?: string;
  termUrl?: string;
  paReq?: string;
  acsUrl?: string;
  paRes?: string;
  authResult?: string;
  cavv?: string;
  cavvAlgorithm?: string;
  eci?: string;
  xid?: string;
  applicable?: boolean;
  successful?: boolean;
}
export interface PaymentAttachment {
  id?: number;
  paymentId?: number;
  attachment?: string;
}
export interface PaymentVoucherDetails {
  id?: number;
  transactionId?: number;
  overrideRestrictions?: boolean;
  overrideAmount?: boolean;
  recordLocator?: string;
}
export interface ChargeBreakdown {
  total?: number;
  taxes?: number;
  adjustments?: number;
  charges?: ServiceCharge[];
}
export interface InfantFee {
  code: string;
  detail?: string;
  passengerFeeKey?: string;
  override?: boolean;
  flightReference?: string;
  note?: string;
  createdDate?: string;
  isProtected?: boolean;
  serviceCharges?: ServiceCharge[];
}
export interface Fare {
  readonly isGoverning?: boolean;
  readonly downgradeAvailable?: boolean;
  carrierCode?: string;
  fareKey?: string;
  classOfService?: string;
  classType?: string;
  fareApplicationType?: Enums.FareApplicationType;
  fareClassOfService?: string;
  fareBasisCode?: string;
  fareSequence?: number;
  inboundOutBound?: Enums.InboundOutbound;
  fareStatus?: Enums.FareStatus;
  isAllotmentMarketFare?: boolean;
  originalClassOfService?: string;
  ruleNumber?: string;
  productClass?: string;
  ruleTariff?: string;
  travelClassCode?: string;
  crossReferenceClassOfService?: string;
  passengerFares?: PassengerFare[];
  fareLink?: number;
}
export interface PassengerSegment {
  seats?: PassengerSeat[];
  passengerKey?: string;
  activityDate?: string;
  baggageAllowanceUsed?: boolean;
  baggageAllowanceWeight?: number;
  baggageAllowanceWeightType?: Enums.WeightType;
  boardingSequence?: string;
  createdDate?: string;
  liftStatus?: Enums.LiftStatus;
  modifiedDate?: string;
  overBookIndicator?: Enums.OverbookIndicatorTypes;
  priorityDate?: string;
  timeChanged?: boolean;
  verifiedTravelDocs?: string;
  sourcePointOfSale?: PointOfSale;
  pointOfSale?: PointOfSale;
  ssrs?: PassengerSsr[];
  tickets?: Ticket[];
  bags?: PassengerSegmentBag[];
  scores?: PassengerScore[];
  boardingPassDetail?: PassengerBoardingPassDetail;
  hasInfant?: boolean;
  seatPreferences?: SeatPreferences;
  bundleCode?: string;
  verifiedTravelDocuments?: string[];
}
export interface PassengerFare {
  serviceCharges?: ServiceCharge[];
  discountCode?: string;
  fareDiscountCode?: string;
  passengerType: string;
}
export interface PassengerSeat {
  compartmentDesignator?: string;
  penalty?: number;
  unitDesignator?: string;
  seatInformation?: SeatInfo;
  arrivalStation?: string;
  departureStation?: string;
  passengerKey?: string;
  unitKey?: string;
}
export interface PassengerSsr {
  note?: string;
  ssrDuration?: Enums.SsrDurationType;
  ssrKey?: string;
  count?: number;
  ssrCode?: string;
  feeCode?: string;
  inBundle?: boolean;
  passengerKey?: string;
  ssrDetail?: string;
  ssrNumber?: number;
  market?: MarketInformation;
}
export interface Ticket {
  ticketNumber?: string;
  infantTicketNumber?: string;
  ticketIndicator?: Enums.TicketIndicatorCode;
  ticketStatus?: Enums.TicketStatusCode;
  passengerKey?: string;
}
export interface PassengerSegmentBag {
  baggageKey?: string;
  passengerKey: string;
  arrivalStation: string;
  status?: Enums.BaggageStatus;
  departureStation: string;
  osTag?: string;
}
export interface PassengerScore {
  guestValueCode: string;
  score?: number;
  passengerKey?: string;
}
export interface PassengerBoardingPassDetail {
  gateInformation?: string;
  priorityInformation?: string;
  cabinClass?: string;
  compartmentLevel?: string;
  boardingZone?: string;
  seatAssignment?: string;
  sequenceNumber?: string;
}
export interface SeatInfo {
  deck?: number;
  seatSet?: number;
  propertyList?: Dictionary<string>;
}
export interface MarketInformation {
  identifier: TransportationIdentifier;
  destination: string;
  origin: string;
  departureDate: string;
}
export interface BookingQueueRequest {
  queueCode: string;
  subQueueCode?: string;
  authorizedBy?: string;
  startDate?: string;
  notes?: string;
  endDate?: string;
  password?: string;
}
export interface Account {
  collections?: AccountCollection[];
  accountKey?: string;
  currencyCode?: string;
  totalAvailable?: number;
  owner?: Enums.AccountOwnerType;
  type?: Enums.AccountType;
  status?: Enums.AccountStatus;
  totalAmount?: number;
  foreignAvailable?: number;
  foreignCurrencyCode?: string;
}
export interface AccountCollection {
  transactionCode?: string;
  accountCollectionKey?: string;
  expiration?: string;
  available?: number;
  amount?: number;
}
export interface PreCancelDetail {
  readonly total?: number;
  componentKey?: string;
  fees?: OrderFee[];
  status?: Enums.PreCancelStatus;
  description?: string;
}
export interface AddOnSettings {
  addOnKey?: string;
  customer?: CustomerSettings;
  primaryParticipant?: ParticipantSettings;
  participant?: ParticipantSettings;
}
export interface CustomerSettings {
  customerNumber?: Enums.FieldUsage;
  title?: Enums.FieldUsage;
  firstName?: Enums.FieldUsage;
  middleName?: Enums.FieldUsage;
  lastName?: Enums.FieldUsage;
  lineOne?: Enums.FieldUsage;
  lineTwo?: Enums.FieldUsage;
  city?: Enums.FieldUsage;
  postalCode?: Enums.FieldUsage;
  provinceState?: Enums.FieldUsage;
  countryCode?: Enums.FieldUsage;
  county?: Enums.FieldUsage;
  homePhone?: Enums.FieldUsage;
  workPhone?: Enums.FieldUsage;
  fax?: Enums.FieldUsage;
  email?: Enums.FieldUsage;
  type?: Enums.FieldUsage;
  companyName?: Enums.FieldUsage;
  birthDate?: Enums.FieldUsage;
}
export interface ParticipantSettings {
  typeCode?: Enums.FieldUsage;
  title?: Enums.FieldUsage;
  documentNumber?: Enums.FieldUsage;
  firstName?: Enums.FieldUsage;
  documentIssueBy?: Enums.FieldUsage;
  middleName?: Enums.FieldUsage;
  documentTypeCode?: Enums.FieldUsage;
  lastName?: Enums.FieldUsage;
  lineOne?: Enums.FieldUsage;
  lineTwo?: Enums.FieldUsage;
  city?: Enums.FieldUsage;
  postalCode?: Enums.FieldUsage;
  provinceState?: Enums.FieldUsage;
  countryCode?: Enums.FieldUsage;
  county?: Enums.FieldUsage;
  homePhone?: Enums.FieldUsage;
  workPhone?: Enums.FieldUsage;
  fax?: Enums.FieldUsage;
  email?: Enums.FieldUsage;
  type?: Enums.FieldUsage;
  companyName?: Enums.FieldUsage;
  birthDate?: Enums.FieldUsage;
}
export interface Consumer {
  name?: Name;
  address?: ConsumerAddress;
  dateOfBirth?: string;
  emailAddress?: string;
  companyName?: string;
  type?: string;
  homePhone?: string;
  workPhone?: string;
  fax?: string;
}
export interface DeltaMapperConsumer {}
export interface DeltaMapperPatch {
  stringValue?: string;
  numericValue?: number;
  path?: string;
  jsonValue?: string;
}
export interface OrderParticipantUpdateRequest {
  name?: OrderParticipantNameUpdateRequest;
  address?: ConsumerAddress;
  dateOfBirth?: string;
  emailAddress?: string;
  companyName?: string;
  type?: string;
  description?: string;
  document?: ParticipantDocument;
  homePhone?: string;
}
export interface OrderParticipantNameUpdateRequest {
  first: string;
  middle?: string;
  last: string;
  title?: string;
}
export interface DeltaMapperOrderParticipantUpdateRequest {}
export interface OrderPaymentBase {
  type: string;
  name?: Name;
  number: string;
  expiration?: string;
  cvv?: string;
  amount?: number;
  description?: string;
  issueNumber?: string;
  address?: Address;
  emailAddress?: string;
  phoneNumbers?: PhoneNumber[];
}
export interface AddOnAllowedPayments {
  componentKey?: string;
  payments?: ComponentPaymentType[];
}
export interface ComponentPaymentType {
  type?: string;
  description?: string;
  modType?: Enums.PaymentModType;
  expiration?: Enums.FieldUsage;
  cvv?: Enums.FieldUsage;
  name?: Enums.FieldUsage;
  issueNumber?: Enums.FieldUsage;
}
export interface BaggageAllowance {
  baggageAllowanceKey?: string;
  journeyKey?: string;
  segmentKeys?: string[];
  passengerKey?: string;
  behavior?: Enums.BaggageAllowanceBehavior;
  typeCodes?: string[];
  maximumPieces?: number;
  maximumWeightPerPiece?: number;
  totalWeight?: number;
  weightType?: Enums.WeightType;
  baggageUsage?: BaggageUsageDetails;
}
export interface BaggageUsageDetails {
  baggageAllowanceKey?: string;
  remainingPieces?: number;
  remainingWeight?: number;
  weightType?: Enums.WeightType;
}
export interface CheckinPassengerLiftStatus {
  status?: Enums.LiftStatus;
  identifier?: TransportationIdentifier;
}
export interface CheckinRequirements {
  readonly isValid?: boolean;
  passengers?: Dictionary<CheckinPassengerRequirements>;
  governmentProgramRequirements?: Dictionary<GovernmentProgramRequirements>;
  restrictions?: Enums.CheckinRestrictionType[];
}
export interface CheckinPassengerRequirements {
  readonly isValid?: boolean;
  passengerKey?: string;
  documentRequirements?: CheckinDocumentRequirements;
  addressRequirements?: CheckinAddressRequirements;
  invalidSsrs?: string[];
  requiredSsrs?: CheckinMissingSegmentRequiredSsr[];
  restrictions?: CheckinPassengerRestriction[];
}
export interface GovernmentProgramRequirements {
  governmentInstance?: string;
  requiredDocumentFields?: Enums.GovernmentDocumentFieldType[];
  additionalDataRequired?: Enums.GovernmentAdditionalDataType[];
}
export interface CheckinDocumentRequirements {
  readonly isValid?: boolean;
  documentsOnFile?: string[];
  unhandledDocuments?: GovernmentPassengerDocumentRequirement[];
}
export interface CheckinAddressRequirements {
  readonly isValid?: boolean;
  addressesOnFile?: string[];
  unhandledAddresses?: string[];
}
export interface CheckinMissingSegmentRequiredSsr {
  codes?: string[];
  designator?: TransportationDesignator;
}
export interface CheckinPassengerRestriction {
  restriction?: Enums.CheckinPassengerRestrictionType;
  description?: string;
}
export interface GovernmentPassengerDocumentRequirement {
  governmentInstance?: string;
  numberOfMissingDocuments?: number;
  eligibleDocuments?: GovernmentDocumentRequirement[];
}
export interface GovernmentDocumentRequirement {
  group?: Enums.DocumentGroup;
  documentTypeCode?: string;
}
export interface CheckinPassengersRequest {
  passengers: CheckinPassengerRequest[];
  seatsRequired?: boolean;
  skipSecurityChecks?: boolean;
  isStandby?: boolean;
}
export interface CheckinPassengerRequest {
  passengerKey: string;
  transitType?: Enums.TransitType;
  processApps?: boolean;
  verifiedReference?: string;
}
export interface CheckinPassengersRequestv3 {
  passengers: CheckinPassengerRequestv2[];
  seatsRequired?: boolean;
  skipSecurityChecks?: boolean;
}
export interface CheckinPassengerRequestv2 {
  passengerKey: string;
  transitType?: Enums.TransitType;
  processApps?: boolean;
  verifiedTravelDocumentKeys?: string[];
}
export interface CommitRequestv2 {
  receivedBy?: string;
  restrictionOverride?: boolean;
  hold?: BookingHold;
  notifyContacts?: boolean;
  comments?: BookingCommentRequest[];
}
export interface BookingCommentRequest {
  type?: Enums.PersonCommentType;
  text?: string;
  createdDate?: string;
}
export interface CreditAccount {
  accountReference?: string;
  currencyCode?: string;
  amount?: number;
  foreignAmount?: number;
  foreignCurrencyCode?: string;
}
export interface ApplyBookingCreditRequestv2 {
  request: ApplyCreditRequest;
  validation: RetrieveBookingv2;
}
export interface ApplyCreditRequest {
  amount: number;
  currencyCode?: string;
}
export interface RetrieveBookingv2 {
  recordLocator: string;
  emailAddress?: string;
  origin?: string;
  firstName?: string;
  lastName?: string;
  customerNumber?: string;
  departureDate?: string;
}
export interface DivideRequestv2 {
  crsRecordLocators?: RecordLocator[];
  passengerKeys?: string[];
  autoDividePayments?: boolean;
  bookingPaymentTransfers?: BookingPaymentTransfer[];
  receivedBy?: string;
  overrideRestrictions?: boolean;
  childEmail?: string;
  cancelSourceBooking?: boolean;
}
export interface BookingPaymentTransfer {
  bookingPaymentId?: number;
  transferAmount?: number;
}
export interface FareOverrideRequest {
  amount: number;
  overridePublishedPrice?: boolean;
}
export interface FareRule {
  fareSellKey?: string;
  content?: string;
}
export interface HistoryResponse {
  histories?: BookingHistory[];
  pageKey?: string;
}
export interface SeatAssignmentHistoryResponse {
  histories?: SeatAssignmentHistory[];
  pageKey?: string;
}
export interface SeatAssignmentHistory {
  designator?: MarketDesignator;
  identifier?: string;
  pointOfSale?: PointOfSale;
  seatAssignment?: string;
  sourcePointOfSale?: PointOfSale;
  compartment?: string;
  receivedBy?: string;
  name?: Name;
  receivedByReference?: string;
  createdDate?: string;
}
export interface MarketDesignator {
  destination: string;
  origin: string;
  departureDate: string;
}
export interface SegmentChangeHistoryResponse {
  histories?: SegmentChangeHistory[];
  pageKey?: string;
}
export interface SegmentChangeHistory {
  daysOfWeek?: Enums.DayOfWeek[];
  segmentNumber?: number;
  pointOfSale?: PointOfSale;
  classOfService?: string;
  sourcePointOfSale?: PointOfSale;
  market?: MarketInformation;
  receivedBy?: string;
  stopCount?: number;
  receivedByReference?: string;
  connectionIndicator?: string;
  createdDate?: string;
  passengerCount?: number;
  scheduledArrivalTime?: string;
  scheduledDepartureTime?: string;
  fareBasis?: string;
  fareAmount?: number;
}
export interface FlightMoveHistoryResponse {
  histories?: FlightMoveHistory[];
  pageKey?: string;
}
export interface FlightMoveHistory {
  previousMarket?: MarketDesignator;
  newMarket?: MarketDesignator;
  pointOfSale?: PointOfSale;
  previousIdentifier?: string;
  sourcePointOfSale?: PointOfSale;
  newIdentifier?: string;
  receivedBy?: string;
  changeReason?: Enums.ChangeReasonCodes;
  receivedByReference?: string;
  createdDate?: string;
}
export interface BookingMessageHistory {
  type?: 'TeletypeMessage' | 'ETicket' | 'GovernmentSecurity' | 'PnrGovernment';
  message?: string;
  createdDate?: string;
}
export interface BookingNotificationHistory {
  bookingNotificationHistoryKey?: string;
  createdDate?: string;
  eventTypeCode?: Enums.SubscriptionEventType;
  deliveryMethodCode?: string;
  destination?: string;
  cultureCode?: string;
  detail?: string;
  minutesToEvent?: number;
}
export interface BookingPointOfSaleEditRequest {
  isoCountryCode?: string;
  sourceSystemCode?: string;
  agentCode: string;
  domainCode?: string;
  locationCode?: string;
  organizationCode: string;
}
export interface DeltaMapperBookingPointOfSaleEditRequest {}
export interface PromotionRequest {
  promotionCode: string;
  organizationCode?: string;
}
export interface DeleteBookingQueueItemBaseRequest {
  authorizedBy: string;
  notes: string;
  password?: string;
}
export interface MoveBookingQueueItemBase {
  bookingKey: string;
  password?: string;
  newQueueCode: string;
  newQueuePassword?: string;
}
export interface BookingQueueHistoryRequest {
  password?: string;
  lastPageIndex?: number;
  pageSize?: number;
  fromArchive?: boolean;
}
export interface BookingQueueHistory {
  alternatePassengerKey?: string;
  historyId?: number;
  historyEvent?: Enums.BookingQueueHistoryEvent;
  queueCode?: string;
  note?: string;
  dequeueNote?: string;
  authorizedBy?: string;
  priorityDate?: string;
  queueAction?: Enums.QueueAction;
  domainCode?: string;
  createdByUserKey?: string;
  createdDate?: string;
  queueType?: Enums.QueueEventType;
  pointOfSale?: PointOfSale;
  segmentKey?: string;
  watchListId?: number;
}
export interface QueueResults {
  queues?: Queue[];
  totalCount?: number;
  lastPageIndex?: number;
}
export interface Queue {
  queueCode?: string;
  subQueueCode?: string;
  queueCategoryCode?: string;
  name?: string;
}
export interface BookingQueueItemBase {
  bookingQueueItemKey?: string;
  processStatus?: Enums.QueueProcessStatus;
  segmentKey?: string;
  processState?: Enums.QueueProcessState;
  watchListId?: number;
  inProgress?: boolean;
  passengerId?: number;
  statusReset?: string;
  domainCode?: string;
  note?: string;
  passengerName?: Name;
  priorityDate?: string;
  eventType?: Enums.QueueEventType;
  restriction?: Enums.BookingQueueRestriction;
  recordLocator?: string;
}
export interface RecordLocatorEditRequest {
  systemDomainCode?: string;
  bookingSystemCode?: string;
  hostedCarrierCode?: string;
}
export interface DeltaMapperRecordLocatorEditRequest {}
export interface RecordLocatorCreateRequest {
  recordCode?: string;
  owningSystemCode?: string;
  systemDomainCode?: string;
  bookingSystemCode?: string;
  hostedCarrierCode?: string;
}
export interface CreateAccountRequest {
  currencyCode?: string;
}
export interface AccountCollectionRequest {
  transactionCode?: string;
  amount: number;
  expiration?: string;
  currencyCode: string;
  note?: string;
}
export interface ItineraryQuoteRequest {
  ssrs?: SsrsStatelessRequest[];
  keys?: SellKey[];
  passengers: PassengerTypeCriteria;
  currencyCode: string;
  infantCount?: number;
  promotionCode?: string;
  sourceOrganization?: string;
}
export interface SsrsStatelessRequest {
  market: MarketInformation;
  items?: SsrRequestByPassengerType[];
}
export interface SellKey {
  journeyKey: string;
  fareAvailabilityKey: string;
  standbyPriorityCode?: string;
  inventoryControl?: Enums.InventoryControlType;
}
export interface SsrRequestByPassengerType {
  passengerType: string;
  ssrs?: SsrDesignatorRequest[];
}
export interface SsrDesignatorRequest {
  ssrCode: string;
  count?: number;
  designator?: MarketDesignator;
}
export interface ItineraryQuote {
  passengers?: Dictionary<Passenger>;
  journeys?: Journey[];
  breakdown?: BookingPriceBreakdown;
}
export interface SeatMapAvailability {
  seatMap?: SeatMap;
  fees?: Dictionary<PassengerSeatGroupInfo>;
  ssrLookup?: Dictionary<Ssr>;
}
export interface SeatMap {
  name?: string;
  arrivalStation?: string;
  departureStation?: string;
  marketingCode?: string;
  equipmentType?: string;
  equipmentTypeSuffix?: string;
  category?: Enums.EquipmentCategory;
  availableUnits?: number;
  decks?: Dictionary<DeckInformation>;
  seatmapReference?: string;
}
export interface PassengerSeatGroupInfo {
  passengerKey?: string;
  groups?: Dictionary<SeatGroupInfo>;
}
export interface Ssr {
  ssrCode?: string;
  name?: string;
  feeCode?: string;
  ssrNestCode?: string;
  traceQueueCode?: string;
  ssrType?: Enums.SsrType;
  inActive?: boolean;
  unitValue?: number;
  limitPerPassenger?: number;
  boardingZone?: number;
  allowed?: boolean;
  seatMapCode?: string;
  seatRestriction?: Enums.SeatRestriction;
  ruleSetName?: string;
}
export interface DeckInformation {
  number?: number;
  compartments?: Dictionary<CompartmentInformation>;
}
export interface SeatGroupInfo {
  group?: number;
  fees?: PassengerFee[];
}
export interface CompartmentInformation {
  availableUnits?: number;
  designator?: string;
  length?: number;
  width?: number;
  sequence?: number;
  orientation?: number;
  units?: UnitInformation[];
}
export interface UnitInformation {
  unitKey?: string;
  assignable?: boolean;
  availability?: Enums.SeatAvailability;
  compartmentDesignator?: string;
  designator?: string;
  type?: Enums.UnitType;
  travelClassCode?: string;
  set?: number;
  group?: number;
  priority?: number;
  text?: string;
  setVacancy?: number;
  angle?: number;
  width?: number;
  height?: number;
  zone?: number;
  x?: number;
  y?: number;
  allowedSsrs?: string[];
  properties?: SeatMapProperty[];
}
export interface SeatMapProperty {
  code?: string;
  value?: string;
}
export interface BookingSearchResult {
  bookingKey?: string;
  allowedToModifyGdsBooking?: boolean;
  bookingStatus?: Enums.BookingStatus;
  channelType?: Enums.ChannelType;
  editable?: boolean;
  expiredDate?: string;
  flightDate?: string;
  flightNumber?: string;
  origin?: string;
  passengerId?: number;
  recordLocator?: string;
  sourceAgentCode?: string;
  sourceDomainCode?: string;
  sourceOrganizationCode?: string;
  systemCode?: string;
  destination?: string;
  name?: Name;
}
export interface Transaction {
  readonly recordLocator?: string;
  transactionKey?: string;
  amount: number;
  createdDate?: string;
  currencyCode: string;
  foreignAmount?: number;
  note?: string;
  foreignCurrencyCode?: string;
  type?: Enums.TransactionType;
  paymentId?: number;
  accountCollectionKey?: string;
}
export interface TransactionRequest {
  amount: number;
  currencyCode: string;
  note?: string;
}
export interface BundleApplicationDetails {
  carrierCodes?: string[];
  productClasses?: string[];
  classesOfService?: string[];
}
export interface BundleApplication {
  bundleApplicationKey?: string;
  bundleSetCode?: string;
  regionFilter?: RegionFilter;
  passengerCounts?: DataRange;
  travelMinutes?: DataRange;
  advancedPurchaseHours?: DataRange;
  dates?: BundleDates;
  appliesToAllSegments?: boolean;
  codeShareType?: string;
  sequenceNumber?: number;
}
export interface RegionFilter {
  origin?: RegionIdentifier;
  destination?: RegionIdentifier;
}
export interface DataRange {
  minimum?: number;
  maximum?: number;
}
export interface BundleDates {
  effective?: string;
  effectiveSales?: string;
  discontinue?: string;
  discontinueSales?: string;
}
export interface RegionIdentifier {
  regionTypeCode?: string;
  regionType?: Enums.RegionType;
  exclude?: boolean;
}
export interface BundleAvailabilityRequest {
  bundleCode?: string;
  currencyCode?: string;
  journeyKey?: string;
  residentCountry?: string;
  sourceOrganization?: string;
  passengerKeys?: string[];
  filterBundles?: boolean;
}
export interface BundleAvailability {
  readonly hasPrice?: boolean;
  pricesByJourney?: Dictionary<BundlePricesByJourney>;
  bundleCode?: string;
}
export interface BundlePricesByJourney {
  journeyKey?: string;
  prices?: BundlePriceAvailability[];
}
export interface BundlePriceAvailability {
  includedSsrs?: IncludedSsrAvailability[];
  totalPrice?: number;
  upgradableSsrs?: UpgradableSsrAvailability[];
  taxTotal?: number;
  additionalSsrs?: AdditionalSsrAvailability[];
  passengerType?: string;
  program?: BundleProgramDetails;
}
export interface IncludedSsrAvailability {
  ssrCode?: string;
  bundleSsrPrice?: number;
  legSsrs?: BundleLegSsr[];
  taxTotal?: number;
  segmentSsrs?: BundleSegmentSsr[];
  journeySsr?: BundleJourneySsr;
}
export interface UpgradableSsrAvailability {
  legSsrs?: BundleLegSsr[];
  upgradeFromSsrCode?: string;
  ssrCode?: string;
  segmentSsrs?: BundleSegmentSsr[];
  currencyCode?: string;
  journeySsr?: BundleJourneySsr;
  discountPercent?: number;
  ssrNumber?: number;
  isFeeWaived?: boolean;
  amounts?: BundleDiscountAmount[];
}
export interface AdditionalSsrAvailability {
  legSsrs?: BundleLegSsr[];
  ssrCode?: string;
  segmentSsrs?: BundleSegmentSsr[];
  currencyCode?: string;
  journeySsr?: BundleJourneySsr;
  discountPercent?: number;
  ssrNumber?: number;
  isFeeWaived?: boolean;
  amounts?: BundleDiscountAmount[];
}
export interface BundleProgramDetails {
  code?: string;
  level?: string;
}
export interface BundleLegSsr {
  legKey?: string;
  ssrCode?: string;
  legDetails?: MarketInformation;
  passengersAvailability?: Dictionary<PassengerSsrAvailability>;
  ssrType?: Enums.SsrType;
  name?: string;
  limitPerPassenger?: number;
  available?: number;
  inventoryControlled?: boolean;
  seatDependent?: boolean;
  feeCode?: string;
  nest?: string;
  seatRestriction?: Enums.SeatRestriction;
}
export interface BundleSegmentSsr {
  segmentKey?: string;
  ssrCode?: string;
  segmentDetails?: MarketInformation;
  passengersAvailability?: Dictionary<PassengerSsrAvailability>;
  ssrType?: Enums.SsrType;
  name?: string;
  limitPerPassenger?: number;
  available?: number;
  inventoryControlled?: boolean;
  seatDependent?: boolean;
  feeCode?: string;
  nest?: string;
  seatRestriction?: Enums.SeatRestriction;
}
export interface BundleJourneySsr {
  journeyKey?: string;
  ssrCode?: string;
  journeyDetails?: MarketInformation;
  passengersAvailability?: Dictionary<PassengerSsrAvailability>;
  ssrType?: Enums.SsrType;
  name?: string;
  limitPerPassenger?: number;
  available?: number;
  inventoryControlled?: boolean;
  seatDependent?: boolean;
  feeCode?: string;
  nest?: string;
  seatRestriction?: Enums.SeatRestriction;
}
export interface BundleDiscountAmount {
  currencyCode?: string;
  amount?: number;
  ssrNumber?: number;
}
export interface PassengerSsrAvailability {
  ssrKey?: string;
  passengerKey?: string;
  price?: number;
}
export interface BundleConfiguration {
  bundleCode?: string;
  feeCode?: string;
  bookingQueueCode?: string;
  programCode?: string;
  programLevel?: string;
  name?: string;
  description?: string;
  hasPrice?: boolean;
  rank?: number;
  inActive?: boolean;
  allSsrsRequired?: boolean;
}
export interface BundleSsrConfiguration {
  bundleCode?: string;
  ssrCode?: string;
  upgradeFromSsrCode?: string;
  currencyCode?: string;
  bundleSsrType?: Enums.BundleSsrType;
  discountPercent?: number;
  ssrNumber?: number;
  isFeeWaived?: boolean;
  amounts?: BundleDiscountAmount[];
}
export interface BundleRule {
  bundleRuleCode?: string;
  name?: string;
}
export interface BundleSellRequest {
  bundleCode: string;
  passengerKeys?: string[];
  upgradeRequest?: SsrByKeysRequestv2;
}
export interface SsrByKeysRequestv2 {
  keys: SsrByKeyRequest[];
  forceWaveOnSell?: boolean;
  currencyCode?: string;
}
export interface SsrByKeyRequest {
  ssrKey: string;
  count?: number;
  note?: string;
}
export interface BundleSetDetails {
  bundleCodes?: string[];
}
export interface BundleSet {
  bundleSetCode?: string;
  name?: string;
  inActive?: boolean;
}
export interface ProductRequest {
  origin: string;
  vendorCode?: string;
  companyCode?: string;
  destination?: string;
  cultureCode?: string;
  discountCode?: string;
  beginDate: string;
  sort?: Enums.SearchSortType;
  promotionCode?: string;
  endDate: string;
  countryCode?: string;
  participants?: ParticipantCriteria[];
  catalogCode?: string;
  currencyCode?: string;
  categoryCode?: string;
  departmentCode?: string;
  ratingCode?: string;
  keyword?: string;
  maxPrice?: number;
  minPrice?: number;
  quantity?: number;
  parameters?: Dictionary<string>;
}
export interface CarProduct {
  productKey?: string;
  isPreferred?: boolean;
  isNew?: boolean;
  externalLocator?: string;
  cultureCode?: string;
  vendorCode?: string;
  descriptions?: Descriptions;
  thumbnailFileName?: string;
  amounts?: ProductPriceBreakdown;
  address?: OrderAddress;
  phoneNumbers?: PhoneNumber[];
  images?: Image[];
  origin?: string;
  destination?: string;
  beginDate?: string;
  endDate?: string;
  participants?: ParticipantBase[];
  productVariations?: ProductVariation[];
  criteria?: AddOnCriteria;
  category?: Category;
  warning?: Warning;
  productOrderKey?: string;
}
export interface QuoteCarRequest {
  catalogKey: string;
  productKey: string;
  personalizations?: SelectedPersonalization[];
  cultureCode?: string;
}
export interface SellCarRequest {
  parameters?: Dictionary<string>;
  catalogKey: string;
  productKey: string;
  personalizations?: SelectedPersonalization[];
  cultureCode?: string;
}
export interface ResourceEntriesCarrier {
  expiration?: string;
  values?: Carrier[];
  eTag?: string;
}
export interface Carrier {
  carrierCode: string;
  carrierInfo: string;
  carrierName: string;
  carrierShortName: string;
  carrierType?: string;
  eTicketIndicator?: boolean;
  inventoryIndicator?: boolean;
  phone: string;
  url: string;
  baggageIndicator?: string;
}
export interface ChildAccountTransactionsRequest {
  amount: number;
}
export interface City {
  cityCode?: string;
  countryCode?: string;
  inActive?: boolean;
  name?: string;
  provinceStateCode?: string;
  shortName?: string;
}
export interface ClassOfService {
  classOfServiceCode?: string;
  name?: string;
  shortName?: string;
  nonRevenue?: boolean;
  traceQueueCode?: string;
  gdsBookingOnly?: boolean;
  upgrade?: boolean;
  inActive?: boolean;
  allowed?: boolean;
  standByAllowed?: boolean;
  seatGroup?: number;
}
export interface CommissionRate {
  commissionRateCode: string;
  name?: string;
  inActive?: boolean;
}
export interface ContactRequest {
  phoneNumbers?: PhoneNumber[];
  cultureCode?: string;
  address?: Address;
  emailAddress?: string;
  customerNumber?: string;
  sourceOrganization?: string;
  distributionOption?: Enums.DistributionOption;
  notificationPreference?: Enums.NotificationPreference;
  companyName?: string;
  name?: Name;
}
export interface DeltaMapperContactBase {}
export interface ContactBase {
  cultureCode?: string;
  address?: Address;
  emailAddress?: string;
  customerNumber?: string;
  sourceOrganization?: string;
  distributionOption?: Enums.DistributionOption;
  notificationPreference?: Enums.NotificationPreference;
  companyName?: string;
  name?: Name;
}
export interface PhoneNumberBase {
  number: string;
}
export interface ContactType {
  contactTypeCode: string;
  inActive?: boolean;
  name?: string;
}
export interface ResourceContentItem {
  contentId: number;
  name?: string;
  description?: string;
  cultureCode?: string;
  size?: number;
  type?:
    | 'GeneralReference'
    | 'News'
    | 'ConsoleHelp'
    | 'FareRuleReference'
    | 'ReviewWithCustomer'
    | 'Notices'
    | 'Literature'
    | 'Links'
    | 'Image'
    | 'PromotionReference'
    | 'SubscriptionReference';
  dataType?:
    | 'Default'
    | 'Text'
    | 'RichTextFormat'
    | 'ImageJpg'
    | 'ImageGif'
    | 'ImageBmp'
    | 'ImagePng'
    | 'WordDoc'
    | 'Html'
    | 'Pdf'
    | 'Uri'
    | 'WordDocx'
    | 'Unmapped';
  data?: string;
}
export interface ResourceContentResult {
  contentId: number;
  name?: string;
  description?: string;
  type?:
    | 'GeneralReference'
    | 'News'
    | 'ConsoleHelp'
    | 'FareRuleReference'
    | 'ReviewWithCustomer'
    | 'Notices'
    | 'Literature'
    | 'Links'
    | 'Image'
    | 'PromotionReference'
    | 'SubscriptionReference';
}
export interface Countryv2 {
  countryCode: string;
  countryCode3C: string;
  cities?: City[];
  defaultCurrencyCode?: string;
  hasProvinceStates?: boolean;
  inActive?: boolean;
  name?: string;
  provinceStates?: ProvinceState[];
}
export interface ProvinceState {
  cities?: City[];
  provinceStateCode: string;
  name?: string;
  inActive?: boolean;
  countryCode: string;
}
export interface Culture {
  cultureCode: string;
  name?: string;
  inActive?: boolean;
}
export interface ResourceEntriesCurrencyv2 {
  expiration?: string;
  values?: Currencyv2[];
  eTag?: string;
}
export interface Currencyv2 {
  currencyCode: string;
  description?: string;
  roundFactor?: number;
  displayDigits?: number;
  displayPrefix?: string;
  displaySuffix?: string;
  inActive?: boolean;
}
export interface Currency {
  currencyCode: string;
  description?: string;
  roundFactor?: number;
  displayDigits?: 'ZeroDigits' | 'TwoDigits' | 'ThreeDigits';
  displayPrefix?: string;
  displaySuffix?: string;
  inActive?: boolean;
}
export interface CurrencyConversion {
  convertedAmount: number;
  fromCurrencyCode: string;
  exchangeRate: number;
  toCurrencyCode: string;
  roundingFactor?: number;
  amount: number;
  marketingRoundingFactor?: number;
}
export interface CustomerProgram {
  programCode?: string;
  name?: string;
  programType?: Enums.ProgramType;
  validationType?: string;
  inActive?: boolean;
  qualifyingSegments?: number;
  qualifyingPoints?: number;
  pointBalance?: number;
  customerProgramLevels?: CustomerProgramLevel[];
}
export interface CustomerProgramLevel {
  programCode?: string;
  programLevelCode?: string;
  name?: string;
  shortName?: string;
  displayCode?: string;
  rank?: number;
  inActive?: boolean;
  customerProgramSettings?: CustomerProgramSetting[];
}
export interface CustomerProgramSetting {
  programCode?: string;
  programLevel?: string;
  settingCode?: string;
  sequenceNumber?: number;
  settingValue?: string;
}
export interface DirectCurrencyConversionAvailability {
  dccKey?: string;
  currencyCode?: string;
  rate?: number;
  amount?: number;
}
export interface DccRequestBasev2 {
  paymentFields?: Dictionary<string>;
}
export interface ThreeDSecureResponse {
  redirectUrl?: string;
  paReq?: string;
  responseUrl?: string;
  md?: string;
  raw?: string;
  paymentTransactionKey?: string;
}
export interface Delay {
  delayCode?: string;
  delayType?: Enums.DelayType;
  name?: string;
  inActive?: boolean;
}
export interface Department {
  departmentCode?: string;
  name?: string;
  inActive?: boolean;
}
export interface DocumentType {
  documentTypeCode: string;
  name?: string;
  group?: Enums.DocumentGroup;
  isExpirationDateRequired?: boolean;
  inActive?: boolean;
}
export interface Domain {
  domainCode: string;
  name?: string;
  passwordNeverExpires?: boolean;
  minimumPasswordAge?: number;
  maximumPasswordAge?: number;
  maximumFaliedLogons?: number;
  uniquePasswordCount?: number;
  passwordPolicy?: RegularExpressionPolicy;
  usernamePolicy?: RegularExpressionPolicy;
  allowed?: boolean;
}
export interface RegularExpressionPolicy {
  policy: string;
  description?: string;
}
export interface EmailType {
  emailTypeCode: string;
  name?: string;
  inActive?: boolean;
  dataSchema?: string;
}
export interface EnvironmentHealth {
  nodes?: HealthInformation[];
  component?: string;
  componentType?: string;
  details?: string;
  status?: 'Unknown' | 'Ok' | 'Warning' | 'Error';
}
export interface HealthInformation {
  component?: string;
  componentType?: string;
  details?: string;
  status?: 'Unknown' | 'Ok' | 'Warning' | 'Error';
}
export interface ExternalRate {
  rateId?: string;
  quotedCurrency?: string;
  collectedCurrency?: string;
  exchangeRate?: number;
}
export interface FareType {
  fareTypeCode: string;
  name?: string;
  inActive?: boolean;
  allowed?: boolean;
}
export interface CommitPassengerFeeRequest {
  passengerKey?: string;
  note?: string;
  origin?: string;
  feeCode: string;
  collectedCurrencyCode?: string;
}
export interface FeeRequestBase {
  amount: number;
  collectedCurrencyCode?: string;
}
export interface FeeDetail {
  number?: number;
  feeRules?: FeeRule[];
  name?: string;
  regionFees?: RegionFee[];
  taxApplicationOverride?: Enums.TaxApplication;
  travelComponentOverride?: Enums.TravelComponent;
  useOverrides?: boolean;
  feeApplicationOverride?: Enums.FeeApplication;
}
export interface FeeRule {
  number?: number;
  ruleNumber?: number;
  properties?: FeeRuleProperty[];
  operator?: Enums.FeeRuleOperator;
}
export interface RegionFee {
  controlLimit?: number;
  countryCode?: string;
  deducted?: boolean;
  deductionType?: Enums.DeductionType;
  defaultCurrencyCode?: string;
  directionality?: Enums.Directionality;
  discontinueDate?: string;
  feeOptionNumber?: number;
  ratePercent?: number;
  regionCode?: string;
  baggage?: RegionFeeBaggage;
  id?: number;
  regionRates?: RegionRate[];
  regionType?: Enums.RegionType;
  releaseDate?: string;
  travelCountryCode?: string;
  travelDiscontinueDate?: string;
  travelRegionCode?: string;
  travelRegionType?: Enums.RegionType;
  travelReleaseDate?: string;
  travelSegmentIndicator?: Enums.TravelSegmentIndicator;
}
export interface FeeRuleProperty {
  propertyNumber?: number;
  ruleNumber?: number;
  operator?: Enums.FeeRulePropertyOperator;
  type?:
    | 'Default'
    | 'PassengerType'
    | 'FromStationClass'
    | 'FareClass'
    | 'PassengerResidentCountry'
    | 'FeeCode'
    | 'ToStationClass'
    | 'EventChannel'
    | 'OrganizationGroup'
    | 'OrganizationCode'
    | 'AgentRole'
    | 'BestCustomerProgramLevel'
    | 'WorstCustomerProgramLevel'
    | 'ExactCustomerProgramLevel'
    | 'CarrierCode'
    | 'SeatGroup'
    | 'FeeType'
    | 'ProductClass'
    | 'SystemCode'
    | 'TripType'
    | 'PaymentType'
    | 'TicketAccountingCode'
    | 'SoldChannel'
    | 'ItineraryFullyWithinCountry'
    | 'ChangeReasonCode'
    | 'GuestRecognitionLevel'
    | 'FlightType'
    | 'FareType'
    | 'DayOfWeek'
    | 'StartTimeOfDay'
    | 'EndTimeOfDay'
    | 'StartFlightNumberRange'
    | 'EndFlightNumberRange'
    | 'MinAdvancedPurchaseDays'
    | 'FareDiscount'
    | 'BookingStatus'
    | 'EarliestAdvancedPurchaseDays'
    | 'SalesStartTimeOfDay'
    | 'SalesEndTimeOfDay'
    | 'BookingCurrency'
    | 'CardSubType'
    | 'PaymentMethodCode'
    | 'ServiceBundle'
    | 'CreatedAgentRoleCode'
    | 'StartExtraBagRange'
    | 'EndExtraBagRange'
    | 'JourneyDepartureStation'
    | 'JourneyDepartureCountry'
    | 'GSTStateCode';
  propertyValue?: string;
}
export interface RegionFeeBaggage {
  weightDivisorKgs?: number;
  weightDivisorLbs?: number;
}
export interface RegionRate {
  currencyCode?: string;
  rateAmount?: number;
  regionCode: string;
  regionFeeId?: number;
  regionRateId?: number;
  regionType?: Enums.RegionType;
}
export interface Fee {
  readonly canBeManuallyAdded?: boolean;
  readonly hasDefaultFeePrice?: boolean;
  readonly isFeeChargedPerSegment?: boolean;
  allowed?: boolean;
  chargeLimit?: number;
  chargeLimitMode?: Enums.ChargeLimitMode;
  chargeLimitTravelComponent?: Enums.TravelComponent;
  commissionable?: boolean;
  countryCode?: string;
  description?: string;
  displayCode?: string;
  feeApplication?: Enums.FeeApplication;
  feeCode?: string;
  feeOptionMode?: Enums.FeeOptionMode;
  feeType?: Enums.FeeType;
  inActive?: boolean;
  itemizable?: boolean;
  minStopover?: number;
  minStopoverInternational?: number;
  name?: string;
  taxApplication?: Enums.TaxApplication;
  ticketable?: boolean;
  travelComponent?: Enums.TravelComponent;
}
export interface AvailabilityFlyAheadRequest {
  passengerKeys?: string[];
  filters?: AvailabilityMoveFilterCriteria;
  stations: AvailabilityStationCriteria;
  journeyKey: string;
  dates: AvailabilityDateCriteria;
  flightFilters?: AvailabilityFlightCriteria;
  type?: Enums.AvailabilityType;
}
export interface AvailabilityMoveFilterCriteria {
  filter?: Enums.AvailabilityFilter;
  sortKeys?: Enums.JourneySortKey[];
}
export interface AvailabilityFlightCriteria {
  carrierCode?: string;
  flightNumber?: string;
  type?: Enums.FlightType;
  maxConnectingFlights?: number;
}
export interface Trip {
  origin: string;
  destination: string;
  journeysAvailable?: JourneyAvailability[];
}
export interface JourneyAvailability {
  readonly flightType?: Enums.FlightType;
  readonly stops?: number;
  readonly designator?: TransportationDesignator;
  fares?: Dictionary<JourneyFareAvailability>;
  journeyKey?: string;
  segments?: AvailabilitySegment[];
  notForGeneralUser?: boolean;
}
export interface JourneyFareAvailability {
  fareAvailabilityKey?: string;
  fareCode?: string;
  availableCount?: number;
  isSumOfSector?: boolean;
  classOfService?: string;
}
export interface AvailabilitySegment {
  readonly isBlocked?: boolean;
  readonly isHosted?: boolean;
  readonly isChangeOfGauge?: boolean;
  readonly designator?: TransportationDesignator;
  readonly isSeatmapViewable?: boolean;
  segmentKey?: string;
  identifier?: TransportationIdentifier;
  cabinOfService?: string;
  externalIdentifier?: TransportationIdentifier;
  changeReasonCode?: Enums.ChangeReasonCodes;
  segmentType?: Enums.SegmentTypes;
  international?: boolean;
  legs?: Leg[];
}
export interface GraphQlQuery {
  query: string;
  variables?: string;
  cachedResults?: boolean;
}
export interface GraphQlQueryv2 {
  query: string;
  variables?: any;
  cachedResults?: boolean;
}
export interface HotCardReason {
  hotCardReasonCode: string;
  name?: string;
  inActive?: boolean;
}
export interface HotelRequest {
  station: string;
  vendorCode?: string;
  companyCode?: string;
  beginDate: string;
  cultureCode?: string;
  discountCode?: string;
  endDate: string;
  sort?: Enums.SearchSortType;
  promotionCode?: string;
  participants: ParticipantCriteria[];
  countryCode?: string;
  catalogCode?: string;
  currencyCode?: string;
  categoryCode?: string;
  departmentCode?: string;
  ratingCode?: string;
  keyword?: string;
  maxPrice?: number;
  minPrice?: number;
  quantity?: number;
  parameters?: Dictionary<string>;
}
export interface HotelProduct {
  productKey?: string;
  isPreferred?: boolean;
  isNew?: boolean;
  externalLocator?: string;
  cultureCode?: string;
  vendorCode?: string;
  descriptions?: Descriptions;
  thumbnailFileName?: string;
  amounts?: ProductPriceBreakdown;
  address?: OrderAddress;
  phoneNumbers?: PhoneNumber[];
  images?: Image[];
  station?: string;
  beginDate?: string;
  endDate?: string;
  participants?: ParticipantBase[];
  productVariations?: ProductVariation[];
  criteria?: AddOnCriteria;
  category?: Category;
  warning?: Warning;
  productOrderKey?: string;
}
export interface QuoteHotelRequest {
  quantity: number;
  catalogKey: string;
  productKey: string;
  personalizations?: SelectedPersonalization[];
  cultureCode?: string;
}
export interface SellHotelRequest {
  parameters?: Dictionary<string>;
  quantity: number;
  catalogKey: string;
  productKey: string;
  personalizations?: SelectedPersonalization[];
  cultureCode?: string;
}
export interface InsuranceProduct {
  readonly isGroup?: boolean;
  productKey?: string;
  isPreferred?: boolean;
  isNew?: boolean;
  externalLocator?: string;
  cultureCode?: string;
  vendorCode?: string;
  descriptions?: Descriptions;
  amounts?: ProductPriceBreakdown;
  phoneNumbers?: PhoneNumber[];
  origin?: string;
  destination?: string;
  beginDate?: string;
  endDate?: string;
  participants?: ParticipantLinkedResult[];
  declinedParticipants?: Name[];
  productVariations?: ProductVariation[];
  category?: Category;
  warning?: Warning;
  productOrderKey?: string;
}
export interface ParticipantLinkedResult {
  passengerKey?: string;
  participantTypeCode: string;
  isPrimary?: boolean;
  dateOfBirth?: string;
  residentCountry?: string;
}
export interface SellInsuranceRequest {
  catalogKey: string;
  productKey: string;
  primaryPassengerKey: string;
  cultureCode?: string;
}
export interface IActionResult {}
export interface IssuanceReason {
  issuanceReasonCode: string;
  name?: string;
  inActive?: boolean;
}
export interface CancelJourneyRequest {
  waivePenaltyFee?: boolean;
  waiveSpoilageFee?: boolean;
  preventReprice?: boolean;
  forceRefareForItineraryIntegrity?: boolean;
}
export interface EnumResource {
  code: number;
  description?: string;
}
export interface Location {
  locationCode?: string;
  name?: string;
  locationType?: Enums.LocationType;
  paymentGroupId?: number;
  cultureCode?: string;
  currencyCode?: string;
  inActive?: boolean;
}
export interface Mac {
  inActive?: boolean;
  macCode: string;
  macStations?: string[];
  name: string;
}
export interface ManifestRequestBase {
  baggageWeightType?: Enums.WeightType;
  iatciLookAhead?: boolean;
  manifestFilters?: Enums.ManifestFilter[];
}
export interface Manifest {
  arrivalCountry?: CountryBase;
  departureCountry?: CountryBase;
  cabinPassengerCounts?: ManifestCabinPassengerCount[];
  market?: MarketInformation;
  legStatus?: Enums.LegStatus;
  inventoryLegCrossReferences?: LegCrossReference[];
  legOperationComments?: ManifestLegOperationComment[];
  passengerList?: ManifestPassenger[];
  arrivalTime?: string;
  passengerCounts?: PassengerCounts;
  checkInLid?: number;
  codeShareIndicator?: string;
  departureGate?: string;
  departureTime?: string;
  internationalFlight?: boolean;
  inventoryLegId?: number;
  operatedByText?: string;
  operatingIdentifier?: TransportationIdentifier;
  verified?: boolean;
}
export interface CountryBase {
  apisCheckDocuments?: boolean;
  apisRequiredInbound?: boolean;
  apisRequiredOutbound?: boolean;
  appsRequiredInbound?: boolean;
  appsRequiredOutbound?: boolean;
  countryCode: string;
  countryCode3C: string;
}
export interface ManifestCabinPassengerCount {
  classRank?: number;
  checkedIn?: number;
  cabinOfService?: string;
  clearedStandBy?: number;
  clearedThruStandby?: number;
  manifested?: number;
  noShow?: number;
  standBy?: number;
  thruCheckedIn?: number;
  thruManifested?: number;
  thruNoShow?: number;
  thruStandBy?: number;
  totalCheckedIn?: number;
  totalOnBoard?: number;
}
export interface LegCrossReference {
  legKey?: string;
  number?: number;
  marketInformation?: MarketInformation;
}
export interface ManifestLegOperationComment {
  commentType?: Enums.OperationCommentType;
  agentId?: number;
  date?: string;
  comment?: string;
}
export interface ManifestPassenger {
  readonly balanceDue?: boolean;
  passengerKey?: string;
  bookingDate?: string;
  checkInType?: Enums.CheckInType;
  comments?: ManifestComment[];
  createdAgentId?: number;
  customerNumber?: string;
  discountCode?: string;
  infant?: ManifestInfant;
  manifestQueues?: ManifestQueue[];
  name?: Name;
  paidStatus?: Enums.PaidStatus;
  passengerAddresses?: ManifestPassengerAddress[];
  passengersOnBooking?: number;
  travelDocuments?: PassengerTravelDocument[];
  personId?: number;
  profileStatus?: Enums.BookingProfileStatus;
  program?: Program;
  recordLocator?: string;
  services?: FlightService[];
  sourcePos?: PointOfSale;
  status?: Enums.BookingStatus;
  passengerInformation?: PassengerInformation;
  passengerId?: number;
  type?: string;
}
export interface PassengerCounts {
  checkedIn?: number;
  clearedStandBy?: number;
  clearedThruStandby?: number;
  manifested?: number;
  noShow?: number;
  standBy?: number;
  thruCheckedIn?: number;
  thruManifested?: number;
  thruNoShow?: number;
  thruStandBy?: number;
  totalCheckedIn?: number;
  totalOnBoard?: number;
}
export interface ManifestComment {
  commentType?: Enums.PersonCommentType;
  agentId?: number;
  domainCode?: string;
  date?: string;
  organizationCode?: string;
  comment?: string;
  systemName?: Enums.SystemName;
}
export interface ManifestInfant {
  travelDocuments?: PassengerTravelDocument[];
  nationality?: string;
  dateOfBirth?: string;
  residentCountry?: string;
  gender?: Enums.Gender;
  name?: Name;
}
export interface ManifestQueue {
  manifestQueueKey?: string;
  queueAction?: Enums.QueueAction;
  queueCategoryCode?: string;
  queueCode?: string;
  queueName?: string;
}
export interface ManifestPassengerAddress {
  countryName?: string;
  status?: Enums.ApisAddressStatus;
  companyName?: string;
  lineOne?: string;
  passengerId?: number;
  passengerAddressKey?: string;
  phone?: string;
  lineTwo?: string;
  stationCode?: string;
  lineThree?: string;
  emailAddress?: string;
  countryCode?: string;
  provinceState?: string;
  city?: string;
  postalCode?: string;
}
export interface Program {
  code?: string;
  levelCode?: string;
  number?: string;
}
export interface FlightService {
  guestValueLevelCode?: string;
  guestValueScore?: number;
  segments?: ManifestSegment[];
}
export interface ManifestSegment {
  segmentKey?: string;
  market?: MarketInformation;
  baggageAllowanceUsed?: boolean;
  baggageAllowanceWeight?: number;
  baggageAllowanceWeightType?: Enums.WeightType;
  bookingStatus?: string;
  cabinOfService?: string;
  changeReasonCode?: string;
  classOfService?: string;
  fareBasisCode?: string;
  infantTicketNumber?: string;
  international?: boolean;
  legs?: ManifestLeg[];
  productClassCode?: string;
  seatProperties?: ManifestSeatProperty[];
  segmentType?: string;
  soldDate?: string;
  ssrCodes?: string;
  ticketIndicator?: string;
  ticketNumber?: string;
  upgradeIndicator?: boolean;
  verifiedTravelDocs?: string;
  xRefIdentifier?: TransportationIdentifier;
}
export interface ManifestLeg {
  arrivalDetail?: string;
  bags?: OperationBag[];
  boardingSequence?: number;
  boardingZone?: number;
  compartmentDesignator?: string;
  departureDetail?: string;
  market?: MarketInformation;
  legNumber?: number;
  liftStatus?: Enums.LiftStatus;
  manifestOrigin?: boolean;
  priorityCode?: string;
  priorityDate?: string;
  promptToVerifyId?: boolean;
  ssrs?: SsrGlance[];
  unitAssignmentWeight?: number;
  unitDesignator?: string;
}
export interface ManifestSeatProperty {
  preferenceStatus?: string;
  propertyCode?: string;
  propertyTypeCode?: string;
}
export interface TripInformationResponse {
  readonly date?: string;
  journeys?: TripInformationJourney[];
}
export interface TripInformationJourney {
  readonly designator?: TransportationDesignator;
  journeyKey?: string;
  segments?: ItinerarySegment[];
}
export interface ItinerarySegment {
  readonly designator?: TransportationDesignator;
  readonly isSeatmapViewable?: boolean;
  segmentKey?: string;
  identifier?: TransportationIdentifier;
  legs?: ItineraryLeg[];
  externalIdentifier?: TransportationIdentifier;
  segmentType?: Enums.SegmentTypes;
}
export interface ItineraryLeg {
  legKey?: string;
  designator?: TransportationDesignator;
}
export interface AddSeatRequest {
  journeyKey?: string;
  collectedCurrencyCode?: string;
  waiveFee?: boolean;
  inventoryControl?: Enums.UnitInventoryControlType;
  ignoreSeatSsrs?: boolean;
  seatAssignmentMode?: Enums.SeatAssignmentMode;
}
export interface SsrsRequest {
  requests: SsrsByType[];
  forceWaveOnSell?: boolean;
  currencyCode?: string;
}
export interface SsrsByType {
  type: Enums.SsrDurationType;
  market: MarketInformation;
  items: SsrRequest[];
}
export interface SsrRequest {
  passengerKey: string;
  ssrCode: string;
  inBundle?: boolean;
  count?: number;
  note?: string;
}
export interface PassengerSsrKey {
  ssrDuration?: Enums.SsrDurationType;
  ssrCode?: string;
  passengerKey?: string;
  ssrNumber?: number;
  market?: MarketInformation;
}
export interface Marketv2 {
  locationCode: string;
  earliestCheckInFrom?: number;
  earliestCheckInTo?: number;
  inActive?: boolean;
  includesTaxesAndFees?: Enums.Directionality;
  latestCheckInFrom?: number;
  latestCheckInTo?: number;
  locationType?: Enums.MarketLocationType;
  travelLocationCode: string;
  travelLocationType?: Enums.MarketLocationType;
  travelLocationsRequired?: Enums.TravelLocationsRequired;
}
export interface Market {
  locationCode: string;
  earliestCheckInFrom?: number;
  earliestCheckInTo?: number;
  inActive?: boolean;
  includesTaxesAndFees?: Enums.Directionality;
  latestCheckInFrom?: number;
  latestCheckInTo?: number;
  locationType?: Enums.MarketLocationType;
  travelDocsRequired?:
    | 'None'
    | 'FromTravel'
    | 'ToTravel'
    | 'BothTravel'
    | 'BothOverride'
    | 'FromOverride'
    | 'ToOverride'
    | 'ToTravelToOverride'
    | 'ToTravelBothOverride'
    | 'ToTravelFromOverride'
    | 'FromTravelToOverride'
    | 'FromTravelBothOverride'
    | 'FromTravelFromOverride'
    | 'BothTravelToOverride'
    | 'BothTravelBothOverride'
    | 'BothTravelFromOverride';
  travelLocationCode: string;
  travelLocationType?: Enums.MarketLocationType;
}
export interface MccCurrencyInformationv2 {
  rate?: ExternalRate;
  currency?: Currencyv2;
  balanceDue?: number;
}
export interface PaymentMethodRequest {
  paymentMethodCode: string;
  amount: number;
  paymentFields?: Dictionary<string>;
  currencyCode?: string;
  installments?: number;
}
export interface PaymentRequest {
  amount: number;
  paymentFields?: Dictionary<string>;
  currencyCode?: string;
  installments?: number;
}
export interface MessageBase {
  typeCode?: string;
  information?: string;
  body?: string;
}
export interface MessageType {
  messageTypeCode: string;
  name?: string;
  inActive?: boolean;
}
export interface MoveRequest {
  fromJourneyKey: string;
  journeyKey: string;
  fareKey: string;
  moveType?: Enums.MovePassengerJourneyType;
  keepWaitListStatus?: boolean;
  ignoreClosedFlightStatus?: boolean;
  ignoreLiftStatus?: Enums.IgnoreLiftStatus;
  changeStatus?: boolean;
  oversell?: boolean;
  boardingSequenceOffset?: number;
  moveSsrOption?: Enums.MoveSsrOption;
}
export interface Availability {
  trips?: Trip[];
  faresAvailable?: Dictionary<FareAvailability>;
  currencyCode?: string;
  includeTaxesAndFees?: boolean;
}
export interface FareAvailability {
  readonly isGoverning?: boolean;
  readonly downgradeAvailable?: boolean;
  fareAvailabilityKey?: string;
  fareCode?: string;
  isSumOfSector?: boolean;
  classOfService?: string;
  classType?: string;
  fareApplicationType?: Enums.FareApplicationType;
  fareClassOfService?: string;
  fareSequence?: number;
  fareStatus?: Enums.FareStatus;
  inboundOutBound?: Enums.InboundOutbound;
  isAllotmentMarketFare?: boolean;
  productClass?: string;
  ruleNumber?: string;
  ruleTariff?: string;
  travelClassCode?: string;
  passengerFares?: PassengerFareAvailability[];
}
export interface AvailabilityMoveRequest {
  passengerMoveType?: Enums.MovePassengerJourneyType;
  filters?: AvailabilityMoveFilterCriteria;
  stations: AvailabilityStationCriteria;
  journeyKey: string;
  dates: AvailabilityDateCriteria;
  flightFilters?: AvailabilityFlightCriteria;
  type?: Enums.AvailabilityType;
}
export interface NskSessionContext {
  readonly isPendingLogin?: boolean;
  readonly isVirtual?: boolean;
  identity?: UserIdentity;
  serverContext?: ServerContext;
  roles?: SessionRoles;
  defaultCultureCode?: string;
  defaultCurrencyCode?: string;
  type?: Enums.SessionPermissionType;
  hasBookingInState?: boolean;
}
export interface UserIdentity {
  userKey?: string;
  personKey?: string;
  domain?: string;
  organization?: string;
}
export interface ServerContext {
  id?: number;
  token?: string;
  systemName?: Enums.SystemName;
  channel?: Enums.ChannelType;
}
export interface SessionRoles {
  readonly inBaseRole?: boolean;
  acting?: RoleBase;
  base?: RoleBase;
}
export interface RoleBase {
  roleCode?: string;
  name?: string;
}
export interface NskTokenRequest {
  credentials?: Credentials;
  applicationName?: string;
}
export interface TokenResponse {
  token?: string;
  idleTimeoutInMinutes?: number;
}
export interface OneTimeNotificationCreateRequest {
  events?: OneTimeNotificationEventCreateRequest[];
  cultureCode?: string;
  timedEvents?: NotificationTimedEventCreateRequest[];
  notificationDestination?: NotificationDestination;
  marketInformation?: MarketInformation;
}
export interface OneTimeNotificationEventCreateRequest {
  type: Enums.OneTimeNotificationEventType;
}
export interface NotificationTimedEventCreateRequest {
  minutesToEvent?: number;
  type: Enums.NotificationTimedEventType;
}
export interface NotificationDestination {
  deliveryMethodCode: 'Email' | 'Sms';
  destination?: string;
}
export interface OneTimeTravelNotification {
  expirationDate?: string;
  cultureCode?: string;
  createdDate?: string;
  oneTimeTravelNotificationKey?: string;
  notificationDestination?: NotificationDestination;
  events?: OneTimeNotificationEvent[];
  timedEvents?: NotificationTimedEvent[];
}
export interface OneTimeNotificationEvent {
  createdDate?: string;
  type: Enums.OneTimeNotificationEventType;
}
export interface NotificationTimedEvent {
  createdDate?: string;
  minutesToEvent?: number;
  type: Enums.NotificationTimedEventType;
}
export interface OrganizationGroup {
  organizationGroupCode: string;
  name?: string;
}
export interface OrganizationGroupDetails {
  organizations?: OrganizationRecordMinimum[];
  organizationGroupCode: string;
  name?: string;
}
export interface OrganizationRecordMinimum {
  organizationCode: string;
  name?: string;
}
export interface OrganizationCreateRequest {
  sendNotification?: boolean;
  organizationCode: string;
  externalAccounts?: OrganizationExternalAccountRequest[];
  type?: Enums.OrganizationType;
  commissionRates?: OrganizationCommissionRate[];
  configuration?: OrganizationConfigurationv2;
  company?: CompanyDetails;
  status?: Enums.OrganizationStatus;
  contact?: ContactDetails;
  parentOrganizationCode?: string;
  statementNote?: string;
  lastStatementDate?: string;
}
export interface OrganizationExternalAccountRequest {
  name?: string;
  description?: string;
  routingNumber?: string;
  accountNumber?: string;
  bankIdentifierCode?: string;
  internationalBankAccountNumber?: string;
  notes?: string;
}
export interface OrganizationCommissionRate {
  commissionRateCode?: string;
  directRate?: number;
  gdsRate?: number;
  webRate?: number;
  apiRate?: number;
  addOnRate?: number;
}
export interface OrganizationConfigurationv2 {
  cultureCode?: string;
  currencyCode?: string;
  commissionable?: boolean;
  recalculateCommission?: boolean;
  recallCommission?: boolean;
  nettedTotal?: boolean;
  gdsEmailItinerary?: Enums.ExternalDistributionOption;
  sourceIsInternal?: boolean;
  sourceIsDeleted?: boolean;
  traceQueueCode?: string;
  referralType?: Enums.ReferralType;
}
export interface CompanyDetails {
  name?: string;
  address?: Address;
  url?: string;
  emailAddress?: string;
  internalNote?: string;
  externalNote?: string;
  phoneNumbers?: PhoneNumber[];
}
export interface ContactDetails {
  name?: Name;
  phoneNumbers?: PhoneNumber[];
}
export interface Organizationv2 {
  externalAccounts?: OrganizationExternalAccountv2[];
  organizationCode: string;
  commissionRates?: OrganizationCommissionRate[];
  type?: Enums.OrganizationType;
  company?: CompanyDetails;
  configuration?: OrganizationConfigurationv2;
  contact?: ContactDetails;
  status?: Enums.OrganizationStatus;
  parentOrganizationCode?: string;
  statementNote?: string;
  lastStatementDate?: string;
}
export interface OrganizationExternalAccountv2 {
  externalAccountKey?: string;
  name?: string;
  description?: string;
  routingNumber?: string;
  accountNumber?: string;
  bankIdentifierCode?: string;
  internationalBankAccountNumber?: string;
  notes?: string;
}
export interface OrganizationEditRequest {
  company?: CompanyEditDetails;
  organizationCode: string;
  contact?: ContactEditDetails;
  type?: Enums.OrganizationType;
  configuration?: OrganizationConfigurationv2;
  status?: Enums.OrganizationStatus;
  parentOrganizationCode?: string;
  statementNote?: string;
  lastStatementDate?: string;
}
export interface CompanyEditDetails {
  name: string;
  address?: Address;
  url?: string;
  emailAddress?: string;
  internalNote?: string;
  externalNote?: string;
}
export interface ContactEditDetails {
  name?: Name;
}
export interface DeltaMapperOrganizationEditRequest {}
export interface OrganizationRegisterRequest {
  organizationCode: string;
  company?: CompanyDetails;
  contact?: ContactDetails;
  externalAccounts?: OrganizationExternalAccountRequest[];
  currencyCode?: string;
  cultureCode?: string;
}
export interface OrganizationAccount {
  collection?: AccountCollectionBase;
  accountKey?: string;
  currencyCode?: string;
  totalAvailable?: number;
  owner?: Enums.AccountOwnerType;
  type?: Enums.AccountType;
  status?: Enums.AccountStatus;
  totalAmount?: number;
  foreignAvailable?: number;
  foreignCurrencyCode?: string;
}
export interface AccountCollectionBase {
  accountCollectionKey?: string;
  available?: number;
  amount?: number;
}
export interface CreateOrganizationAccountRequest {
  currencyCode?: string;
  totalAmount?: number;
  type?: Enums.AllowedAccountTypes;
  note?: string;
}
export interface OrganizationRecord {
  organizationCode: string;
  type?: Enums.OrganizationType;
  company?: CompanyDetailsRecord;
  contact?: ContactDetails;
  status?: Enums.OrganizationStatus;
  parentOrganizationCode?: string;
}
export interface CompanyDetailsRecord {
  name: string;
  address?: Address;
  url?: string;
  emailAddress?: string;
  phoneNumbers?: PhoneNumber[];
}
export interface OrganizationRefundRequest {
  parentPaymentKey: string;
  amount: number;
  paymentFields?: Dictionary<string>;
  currencyCode?: string;
  organizationCode: string;
  accountTransactionCode?: string;
  comment?: string;
}
export interface OrganizationTransactionRequest {
  type?: Enums.AllowedTransactionTypes;
  amount: number;
  currencyCode: string;
  note?: string;
}
export interface PassengerDetails {
  passengers?: PassengerDetail[];
  summary?: PassengerDetailsSummary;
}
export interface PassengerDetail {
  status?: Enums.BookingStatus;
  recordLocator?: string;
  createdDate?: string;
  name?: Name;
  profileStatus?: Enums.BookingProfileStatus;
  infantTicketNumber?: string;
  passengerId?: number;
  ticketNumber?: string;
  weightCategory?: Enums.WeightCategory;
  ticketIndicator?: string;
  origin?: string;
  ssrCodes?: string[];
  destination?: string;
  tripType?: Enums.TripType;
  segmentBookingStatus?: string;
  connectingFlight?: string;
  connectingStation?: string;
  finalDestination?: string;
  paymentMethods?: string[];
  comments?: string[];
  infant?: InfantBase;
  customerProgram?: Program;
  verifiedReference?: string;
  guestValueLevel?: string;
  paidStatus?: Enums.PaidStatus;
}
export interface PassengerDetailsSummary {
  totalConfirmedMales?: number;
  totalConfirmedFemales?: number;
  totalConfirmedChildren?: number;
  totalConfirmedInfants?: number;
  totalWaitListConfirmedMales?: number;
  totalWaitListConfirmedFemales?: number;
  totalWaitListConfirmedChildren?: number;
  totalWaitListConfirmedInfants?: number;
  totalUnconfirmedMales?: number;
  totalUnconfirmedFemales?: number;
  totalUnconfirmedChildren?: number;
  totalUnconfirmedInfants?: number;
}
export interface InfantBase {
  dateOfBirth?: string;
  gender?: Enums.Gender;
  name?: Name;
}
export interface PassengerDiscount {
  passengerDiscountCode?: string;
  name?: string;
  passengerDiscountType?: Enums.PassengerDiscountType;
  inActive?: boolean;
  allowed?: boolean;
}
export interface PassengerAddressCreateRequest {
  status?: Enums.ApisAddressStatus;
  companyName?: string;
  lineOne?: string;
  phone?: string;
  lineTwo?: string;
  stationCode?: string;
  lineThree?: string;
  emailAddress?: string;
  countryCode?: string;
  provinceState?: string;
  city?: string;
  postalCode?: string;
}
export interface PassengerAddressEditRequest {
  companyName?: string;
  lineOne?: string;
  phone?: string;
  lineTwo?: string;
  stationCode?: string;
  lineThree?: string;
  emailAddress?: string;
  countryCode?: string;
  provinceState?: string;
  city?: string;
  postalCode?: string;
}
export interface DeltaMapperPassengerAddressEditRequest {}
export interface PassengerTypePriceBreakdown {
  passengerTypeCode?: string;
  services?: ChargeBreakdown;
  specialServices?: ChargeBreakdown;
  seats?: ChargeBreakdown;
  upgrades?: ChargeBreakdown;
  spoilage?: ChargeBreakdown;
  nameChanges?: ChargeBreakdown;
  convenience?: ChargeBreakdown;
  infant?: ChargeBreakdown;
}
export interface PassengerBase {
  customerNumber?: string;
  name?: Name;
  discountCode?: string;
  program?: PassengerProgram;
  info?: PassengerInformation;
}
export interface DeltaMapperPassengerBase {}
export interface PassengerSeatAssignment {
  passengerNumber?: number;
  recordLocator?: string;
  passengerType?: string;
  name?: Name;
  classOfService?: string;
  infantTicketNumber?: string;
  unitDesignator?: string;
  ticketNumber?: string;
  liftStatus?: Enums.LiftStatus;
  ticketIndicator?: string;
  baggageCount?: number;
  ssrCodes?: string[];
}
export interface DeltaMapperInfant {}
export interface Infant {
  nationality?: string;
  dateOfBirth?: string;
  residentCountry?: string;
  gender?: Enums.Gender;
  name?: Name;
}
export interface PassengerInfantCreateRequest {
  nationality?: string;
  dateOfBirth?: string;
  travelDocuments?: PassengerTravelDocument[];
  residentCountry?: string;
  gender?: Enums.Gender;
  name?: Name;
}
export interface TravelDocumentCreateRequest {
  documentTypeCode: string;
  birthCountry?: string;
  issuedByCode?: string;
  name?: Name;
  nationality?: string;
  expirationDate?: string;
  number?: string;
  issuedDate?: string;
  gender?: Enums.Gender;
  dateOfBirth?: string;
}
export interface TravelDocumentEditRequest {
  birthCountry?: string;
  name?: Name;
  nationality?: string;
  expirationDate?: string;
  number?: string;
  issuedDate?: string;
  gender?: Enums.Gender;
  dateOfBirth?: string;
}
export interface DeltaMapperTravelDocumentEditRequest {}
export interface NotificationEventCreateRequest {
  type: Enums.NotificationEventType;
}
export interface NotificationEvent {
  createdDate?: string;
  type: Enums.NotificationEventType;
}
export interface NotificationTimedEventEditRequest {
  minutesToEvent?: number;
}
export interface TravelNotificationCreateRequest {
  events?: NotificationEventCreateRequest[];
  cultureCode?: string;
  timedEvents?: NotificationTimedEventCreateRequest[];
  notificationDestination?: NotificationDestination;
}
export interface TravelNotification {
  expirationDate?: string;
  cultureCode?: string;
  createdDate?: string;
  travelNotificationKey?: string;
  notificationDestination?: NotificationDestination;
  events?: NotificationEvent[];
  timedEvents?: NotificationTimedEvent[];
}
export interface TravelNotificationEditRequest {
  cultureCode?: string;
  notificationDestination?: NotificationDestination;
}
export interface DeltaMapperTravelNotificationEditRequest {}
export interface PassengerTypeCodeEditRequest {
  passengerTypeCode: string;
  dateOfBirth?: string;
  gender?: Enums.Gender;
}
export interface PassengerKeyResponse {
  oldPassengerKey?: string;
  newPassengerKey?: string;
}
export interface PassengerType {
  readonly nonAdult?: boolean;
  passengerTypeCode: string;
  name?: string;
  allowed?: boolean;
  inActive?: boolean;
  typeIndicator?: Enums.PassengerTypeIndicator;
  minimumAge?: number;
  maximumAge?: number;
}
export interface CustomerCreditRefundRequest {
  parentPaymentKey: string;
  amount: number;
  paymentFields?: Dictionary<string>;
  currencyCode?: string;
  customerNumber: string;
  accountTransactionCode?: string;
  comment?: string;
}
export interface ApplyCreditAccountRequest {
  amount: number;
  referenceNumber: string;
  currencyCode?: string;
  type?: Enums.CreditType;
}
export interface PaymentFeeResponse {
  feeAmount: number;
  isFixedAmount?: boolean;
  passengerFees?: PassengerFee[];
}
export interface PaymentMethod {
  paymentMethodCode: string;
  allowDeposit?: boolean;
  allowed?: boolean;
  allowZeroAmount?: boolean;
  commissionable?: boolean;
  dccType?: Enums.DccType;
  disallowPartialRefund?: boolean;
  feeCode?: string;
  inActive?: boolean;
  maxInstallments?: number;
  name: string;
  paymentMethodFields?: Dictionary<PaymentMethodField>;
  paymentMethodType?: Enums.PaymentMethodType;
  paymentRefundType?: Enums.PaymentRefundType;
  proportionalRefund?: boolean;
  refundableByAgent?: boolean;
  refundCurrencyControl?: Enums.RefundCurrencyControl;
  restrictionHours?: number;
  systemControlled?: boolean;
  traceQueueCode?: string;
  validationRequired?: boolean;
}
export interface PaymentMethodField {
  paymentMethodFieldCode: string;
  bookingPaymentField?: Enums.BookingPaymentField;
  name: string;
  ordinal?: number;
  paymentMethodCode: string;
  paymentMethodType?: Enums.PaymentMethodType;
  persistData?: boolean;
  refundUiState?: Enums.RefundState;
  requiredType?: Enums.RequiredType;
  valueMaxLength?: number;
  valueMinLength?: number;
  valueRegEx?: string;
  valueType?: Enums.ValueType;
}
export interface PaymentRefundRequest {
  parentPaymentKey: string;
  amount: number;
  paymentFields?: Dictionary<string>;
  currencyCode?: string;
  paymentMethodCode: string;
  accountTransactionCode?: string;
  comment?: string;
}
export interface Person {
  personKey?: string;
  name: PersonName;
  customerNumber?: string;
  type?: Enums.PersonType;
  emailAddresses?: PersonEmail[];
  status?: Enums.PersonStatus;
  phoneNumbers?: PersonPhoneNumber[];
  details?: PersonBasicInformation;
  addresses?: PersonAddress[];
  notificationPreference?: Enums.NotificationPreference;
  storedPayments?: PersonStoredPayment[];
  travelDocuments?: PersonTravelDocument[];
  programs?: PersonCustomerProgram[];
  comments?: PersonComment[];
  preferences?: PersonPreference[];
  aliases?: PersonAlias[];
}
export interface PersonName {
  personNameKey?: string;
  first?: string;
  middle?: string;
  last?: string;
  title?: string;
  suffix?: string;
}
export interface PersonEmail {
  personEmailKey?: string;
  type: string;
  email: string;
  default?: boolean;
}
export interface PersonPhoneNumber {
  personPhoneNumberKey?: string;
  default?: boolean;
  type: Enums.PhoneNumberType;
  number: string;
}
export interface PersonBasicInformation {
  gender?: Enums.Gender;
  dateOfBirth?: string;
  nationality?: string;
  residentCountry?: string;
  passengerType?: string;
  preferredCultureCode?: string;
  preferredCurrencyCode?: string;
  nationalIdNumber?: string;
}
export interface PersonAddress {
  personAddressKey?: string;
  addressTypeCode: string;
  default?: boolean;
  lineOne?: string;
  lineTwo?: string;
  lineThree?: string;
  countryCode?: string;
  provinceState?: string;
  city?: string;
  postalCode?: string;
}
export interface PersonStoredPayment {
  storedPaymentKey?: string;
  accountNumber: string;
  paymentMethodType: Enums.PaymentMethodType;
  accountName?: string;
  expiration?: string;
  paymentMethodCode: string;
  default?: boolean;
}
export interface PersonTravelDocument {
  personTravelDocumentKey?: string;
  default?: boolean;
  documentTypeCode: string;
  birthCountry?: string;
  issuedByCode?: string;
  name?: Name;
  nationality?: string;
  expirationDate?: string;
  number?: string;
  issuedDate?: string;
  gender?: Enums.Gender;
  dateOfBirth?: string;
}
export interface PersonCustomerProgram {
  personCustomerProgramKey?: string;
  pointBalance?: number;
  programCode: string;
  programNumber: string;
  currentYearQualifyingPoints?: number;
  effectiveDate?: string;
  currentYearRedeemablePoints?: number;
  expirationDate?: string;
  lifetimeAccumulatedQualifyingPoints?: number;
  default?: boolean;
  lifetimeAccumulatedRedeemablePoints?: number;
  programLevelCode?: string;
  qualifyingPoints?: number;
  qualifyingSegments?: number;
  createdDate?: string;
  modifiedDate?: string;
}
export interface PersonComment {
  personCommentKey?: string;
  text?: string;
  type?: Enums.PersonCommentType;
}
export interface PersonPreference {
  personPreferenceKey?: string;
  code?: string;
  value?: string;
}
export interface PersonAlias {
  personAliasKey?: string;
  type?: Enums.PersonAliasType;
  first?: string;
  middle?: string;
  last?: string;
  title?: string;
  suffix?: string;
}
export interface PersonEditRequest {
  name: Name;
  type?: Enums.PersonType;
  status?: Enums.PersonStatus;
  details?: PersonBasicInformation;
  notificationPreference?: Enums.NotificationPreference;
}
export interface DeltaMapperPersonEditRequest {}
export interface PersonAddressCreateRequest {
  addressTypeCode: string;
  default?: boolean;
  lineOne?: string;
  lineTwo?: string;
  lineThree?: string;
  countryCode?: string;
  provinceState?: string;
  city?: string;
  postalCode?: string;
}
export interface PersonAddressEditRequest {
  default?: boolean;
  lineOne?: string;
  lineTwo?: string;
  lineThree?: string;
  countryCode?: string;
  provinceState?: string;
  city?: string;
  postalCode?: string;
}
export interface DeltaMapperPersonAddressEditRequest {}
export interface PersonAliasRequest {
  type?: Enums.PersonAliasType;
  first?: string;
  middle?: string;
  last?: string;
  title?: string;
  suffix?: string;
}
export interface DeltaMapperPersonAliasRequest {}
export interface ResourceEntriesPersonAttachmentType {
  expiration?: string;
  values?: PersonAttachmentType[];
  eTag?: string;
}
export interface PersonAttachmentType {
  personAttachmentTypeCode: string;
  name?: string;
  inActive?: boolean;
}
export interface PersonCommentRequest {
  text?: string;
  type?: Enums.PersonCommentType;
}
export interface DeltaMapperPersonCommentRequest {}
export interface PersonCustomerProgramCreateRequest {
  programCode: string;
  programNumber: string;
  effectiveDate?: string;
  expirationDate?: string;
  default?: boolean;
  programLevelCode?: string;
}
export interface PersonCustomerProgramEditRequest {
  programNumber: string;
  effectiveDate?: string;
  expirationDate?: string;
  default?: boolean;
  programLevelCode?: string;
}
export interface DeltaMapperPersonCustomerProgramEditRequest {}
export interface PersonEmailCreateRequest {
  type: string;
  email: string;
  default?: boolean;
}
export interface PersonEmailEditRequest {
  email: string;
  default?: boolean;
}
export interface DeltaMapperPersonEmailEditRequest {}
export interface PersonInformation {
  personInformationKey?: string;
  size?: number;
  personInformationTypeCode: string;
  data?: string;
}
export interface PersonInformationCreateRequest {
  personInformationTypeCode: string;
  data?: string;
}
export interface PersonInformationEditRequest {
  data?: string;
}
export interface DeltaMapperPersonInformationEditRequest {}
export interface PersonInformationType {
  personInformationTypeCode: string;
  name?: string;
  inActive?: boolean;
  schema?: string;
}
export interface PersonPhoneNumberRequest {
  default?: boolean;
  type: Enums.PhoneNumberType;
  number: string;
}
export interface DeltaMapperPersonPhoneNumberRequest {}
export interface PersonPreferenceCreateRequest {
  code?: string;
  value?: string;
}
export interface PersonPreferenceEditRequest {
  value?: string;
}
export interface DeltaMapperPersonPreferenceEditRequest {}
export interface PersonRecord {
  personKey?: string;
  type?: Enums.PersonType;
  status?: Enums.PersonStatus;
  customerNumber?: string;
  name?: Name;
  phoneNumber?: string;
  emailAddress?: string;
  address?: Address;
}
export interface PersonCreateRequest {
  name: Name;
  customerNumber?: string;
  type?: Enums.PersonType;
  emailAddresses?: PersonEmailCreateRequest[];
  status?: Enums.PersonStatus;
  phoneNumbers?: PersonPhoneNumberRequest[];
  details?: PersonBasicInformation;
  addresses?: PersonAddressCreateRequest[];
  notificationPreference?: Enums.NotificationPreference;
  storedPayments?: PersonStoredPaymentRequest[];
  travelDocuments?: PersonTravelDocumentRequest[];
  programs?: PersonCustomerProgramCreateRequest[];
  comments?: PersonCommentRequest[];
  preferences?: PersonPreferenceCreateRequest[];
  aliases?: PersonAliasRequest[];
}
export interface PersonStoredPaymentRequest {
  accountNumber: string;
  paymentMethodType: Enums.PaymentMethodType;
  accountName?: string;
  expiration?: string;
  paymentMethodCode: string;
  default?: boolean;
}
export interface PersonTravelDocumentRequest {
  default?: boolean;
  documentTypeCode: string;
  birthCountry?: string;
  issuedByCode?: string;
  name?: Name;
  nationality?: string;
  expirationDate?: string;
  number?: string;
  issuedDate?: string;
  gender?: Enums.Gender;
  dateOfBirth?: string;
}
export interface DeltaMapperPersonStoredPaymentUpdateRequest {}
export interface PersonStoredPaymentUpdateRequest {
  paymentMethodType: Enums.PaymentMethodType;
  accountName?: string;
  expiration?: string;
  paymentMethodCode: string;
  default?: boolean;
}
export interface TravelDocumentEditRequestv2 {
  birthCountry?: string;
  name?: Name;
  nationality?: string;
  expirationDate?: string;
  number: string;
  issuedDate?: string;
  default?: boolean;
  gender?: Enums.Gender;
  dateOfBirth?: string;
}
export interface DeltaMapperTravelDocumentEditRequestv2 {}
export interface PhoneType {
  phoneTypeCode: string;
  name?: string;
  inActive?: boolean;
}
export interface ProductClass {
  productClassCode?: string;
  name?: string;
  rank?: number;
  inActive?: boolean;
}
export interface PromotionBase {
  code?: string;
  isPassengerPromotion?: boolean;
  isBookingPromotion?: boolean;
  description?: string;
  activeDate?: string;
  discontinueDate?: string;
  discontinueFeeCode?: string;
  fareTypes?: string[];
  passengerDiscountCode?: string;
  passengerDiscountLimit?: number;
  passengerDiscountSet?: number;
}
export interface Promotion {
  allowedOrganizations?: string[];
  code?: string;
  settings?: PromotionSetting[];
  isPassengerPromotion?: boolean;
  isBookingPromotion?: boolean;
  description?: string;
  activeDate?: string;
  discontinueDate?: string;
  discontinueFeeCode?: string;
  fareTypes?: string[];
  passengerDiscountCode?: string;
  passengerDiscountLimit?: number;
  passengerDiscountSet?: number;
}
export interface PromotionSetting {
  dataVersion?: number;
  promotionSettingTypeCode: string;
  data?: string;
  name?: string;
  inActive?: boolean;
  schema?: string;
}
export interface PromotionSettingType {
  promotionSettingTypeCode: string;
  name?: string;
  inActive?: boolean;
  schema?: string;
}
export interface QueueCategory {
  queueCategoryCode?: string;
  name?: string;
  inActive?: boolean;
  allowed?: boolean;
}
export interface AvailabilityRebookRequest {
  criteria: AvailabilityByTrip[];
  fareFilters?: AvailabilityFareCriteria;
  taxesAndFees?: Enums.TaxesAndFeesRollupMode;
  codes?: AvailabilityCodeCriteria;
  lowFareMode?: boolean;
}
export interface AvailabilityByTrip {
  filters?: AvailabilityFilterCriteria;
  stations: AvailabilityStationCriteria;
  lowFarePrice?: number;
  dates: AvailabilityDateCriteria;
  ssrCollectionsMode?: Enums.AvailabilitySsrCollectionsMode;
  flightFilters?: AvailabilityFlightCriteria;
  type?: Enums.AvailabilityType;
}
export interface AvailabilityFareCriteria {
  classControl?: Enums.FareClassControl;
  maxPrice?: number;
  minPrice?: number;
  loyalty?: Enums.LoyaltyFilter;
  types?: string[];
  classes?: string[];
}
export interface AvailabilityCodeCriteria {
  currency?: string;
  fareDiscountCode?: string;
  promotionCode?: string;
  sourceOrganization?: string;
  currentSourceOrganization?: string;
}
export interface AvailabilityFilterCriteria {
  includeAllotments?: boolean;
  filter?: Enums.AvailabilityFilter;
  sortKeys?: Enums.JourneySortKey[];
  productClasses?: string[];
  travelClasses?: string[];
}
export interface ReminderTime {
  type?: Enums.NotificationTimedEventType;
  times?: number[];
}
export interface ResellSsrRequest {
  journeyKey?: string;
  resellSsrs?: boolean;
  resellUnitSsrs?: boolean;
  waiveSeatFee?: boolean;
}
export interface Vendor {
  code: string;
  description?: string;
  currencyCode?: string;
  cultureCode?: string;
  displaySequence?: number;
  active?: boolean;
  externalVendorCode?: string;
  minimumAdvancePurchaseDays?: number;
  paymentAction?: Enums.PaymentAction;
  supplier?: Supplier;
}
export interface Supplier {
  code: string;
  name: string;
  address?: Address;
  type?: ConnectorType;
}
export interface ConnectorType {
  code: string;
  description?: string;
  assembly?: string;
}
export interface CommerceLocation {
  code: string;
  parentCode?: string;
  countryCode?: string;
  cultureCode?: string;
  timeZoneCode?: string;
  description?: string;
  coordinates?: Coordinate;
}
export interface DynamicParameter {
  cultureCode?: string;
  code?: string;
  promptTypeCode?: string;
  description?: string;
  skuStyleCode?: string;
  promptText?: string;
  maxCharacters?: number;
  required?: boolean;
}
export interface ParticipantType {
  participantTypeCode: string;
  cultureCode?: string;
  description?: string;
  displaySequence?: number;
  isDefault?: boolean;
}
export interface Source {
  sourceCode: string;
  cultureCode?: string;
  description?: string;
  url?: string;
  discountCode?: string;
  skinCode?: string;
  inActive?: boolean;
}
export interface Vendorv2 {
  code: string;
  description?: string;
  currencyCode?: string;
  cultureCode?: string;
  displaySequence?: number;
  active?: boolean;
  minimumAdvancePurchaseDays?: number;
  paymentAction?: Enums.PaymentAction;
  supplier?: Supplier;
}
export interface Role {
  parentRoleCode?: string;
  roleCode?: string;
  roleSettings?: RoleSetting[];
  name?: string;
  allowed?: boolean;
}
export interface RoleSetting {
  dataVersion?: number;
  settingData?: string;
  roleSettingType?: RoleSettingType;
}
export interface RoleSettingType {
  roleSettingTypeCode: string;
  name?: string;
  inActive?: boolean;
}
export interface ServerTransferRequest {
  serverContextToken: string;
  applicationName?: string;
  channel?: Enums.ChannelType;
}
export interface SettingsCategoryRequest {
  path: string;
}
export interface ResourceCategoryItem {
  readonly contentType?: Enums.ResponseContentType;
  resourceCategoryItemId: number;
  resourceCategoryItemTypeCode: string;
  name: string;
  resourceCategoryId: number;
  cannotDelete?: boolean;
  data?: string;
}
export interface SessionSettings {
  sessionTimeOutInterval?: string;
  allowApiChannelLogon?: boolean;
  allowDirectChannelLogon?: boolean;
  allowGdsChannelLogon?: boolean;
  allowWebChannelLogon?: boolean;
}
export interface LogonSettings {
  allowConsoleReservations?: boolean;
  allowDepartureControlSystem?: boolean;
  allowWebReporting?: boolean;
  allowWebReservations?: boolean;
  allowWebServicesApi?: boolean;
  allowExternalSystemServices?: boolean;
  allowWindowsFareManager?: boolean;
  allowWindowsManager?: boolean;
  allowWindowsReservations?: boolean;
  allowWindowsScheduleManager?: boolean;
  impersonationRoles?: string[];
  overrideSystemAccessRestriction?: boolean;
}
export interface CodesSettings {
  allowedPaymentMethodsForFraudPrevention?: Dictionary<boolean>;
  automaticMoveNestOverbookClasses?: string[];
  editableRuleTypes?: string[];
  externalPaymentValidationOverrides?: Dictionary<boolean>;
  overrideFeeTypes?: Enums.FeeType[];
  paymentFieldOverrides?: Dictionary<Dictionary<Enums.RequiredType>>;
  privateTravelQueueCategory?: Enums.QueueCategoriesAccessControl;
  publicTravelQueueCategory?: Enums.QueueCategoriesAccessControl;
  refundablePaymentMethodCodes?: string[];
  spoilFeeTypes?: Enums.FeeType[];
  classOfServices?: string[];
  depositPaymentTypes?: string[];
  fareTypes?: string[];
  passengerDiscountCodes?: string[];
  passengerTypeCodes?: string[];
  paymentMethodCodes?: string[];
  penaltyFeeCodes?: string[];
  productClasses?: string[];
  queueCategoryCodes?: Dictionary<number>;
  sellSsrCodes?: string[];
  serviceFeeCodes?: string[];
  standbyClassOfServiceCodes?: string[];
  stationCategories?: string[];
  viewableSeatProperties?: string[];
  waiveFeeTypes?: Enums.FeeType[];
}
export interface ItinerarySettings {
  allowDivideEmailUpdate?: boolean;
  sendItineraryOnHeldBookings?: boolean;
  sendItineraryOnHeldCancelledBookings?: boolean;
  sendItineraryOnPartiallyPaidBookings?: boolean;
}
export interface CheckInSettings {
  allowApisCheckIn?: Enums.IappCheckInType;
  allowIappCheckIn?: Enums.IappCheckInType;
  domesticBagWeight?: Enums.BagWeightControl;
  internationalBagWeight?: Enums.BagWeightControl;
  allowAppsCheckIn?: boolean;
  allowAppsOverride?: boolean;
  allowBagTagDestinationMismatch?: boolean;
  allowBagTagReprint?: boolean;
  allowCheckedInPassengerFlightChange?: boolean;
  allowCheckedInPassengerNameChange?: boolean;
  allowCheckInOfPassengerWithPendingPayments?: boolean;
  allowCheckInWhenTicketCollected?: boolean;
  allowETicketCouponStatusOverride?: boolean;
  allowGatePassPrinting?: boolean;
  allowInvalidBookingCheckIn?: boolean;
  allowManualClearance?: boolean;
  allowMidJourneyCheckIn?: boolean;
  allowTbaCheckIn?: boolean;
  ignoreMarketTimeRestrictions?: boolean;
  checkedInPassengerFlightChangeOffset?: string;
  checkedInPassengerNameChangeOffset?: string;
  checkedInCloseOffset?: string;
  checkedInOpenOffset?: string;
  allowedSsrCodes?: string[];
  restrictedSsrCodes?: string[];
  requiredSsrCodes?: string[];
}
export interface ContactSettings {
  title?: Enums.FieldControlType;
  firstName?: Enums.FieldControlType;
  middleName?: Enums.FieldControlType;
  lastName?: Enums.FieldControlType;
  suffix?: Enums.FieldControlType;
  addressLineOne?: Enums.FieldControlType;
  addressLineTwo?: Enums.FieldControlType;
  addressLineThree?: Enums.FieldControlType;
  city?: Enums.FieldControlType;
  state?: Enums.FieldControlType;
  postalCode?: Enums.FieldControlType;
  country?: Enums.FieldControlType;
  email?: Enums.FieldControlType;
  homePhoneNumber?: Enums.FieldControlType;
  workPhoneNumber?: Enums.FieldControlType;
  otherPhoneNumber?: Enums.FieldControlType;
  faxNumber?: Enums.FieldControlType;
  disablePhoneFormat?: boolean;
  defaultItineraryDistribution?: Enums.DistributionOption;
  notificationPreference?: Enums.FieldControlType;
  defaultNotificationPreference?: Enums.NotificationPreference;
  defaultToCustomerPreference?: boolean;
  maskContactLanguage?: boolean;
  maskIndiaGSTInfo?: boolean;
}
export interface CustomerAccountSettings {
  allowCustomerMerge?: boolean;
  allowCustomerProgram?: boolean;
  allowSeatLocationOption?: boolean;
  customerAccessControl?: Enums.CustomerAccessControl;
  defaultCustomerNotificationPreference?: Enums.NotificationPreference;
  defaultSeatPreference?: Enums.SeatPreference;
  disableCustomerAddress?: Enums.FieldControlType;
  disableCustomerCurrency?: Enums.FieldControlType;
  disableCustomerDateOfBirth?: Enums.FieldControlType;
  disableCustomerEmail?: Enums.FieldControlType;
  disableCustomerFax?: Enums.FieldControlType;
  disableCustomerLanguage?: Enums.FieldControlType;
  disableCustomerNationality?: Enums.FieldControlType;
  disableCustomerNotificationPreference?: Enums.FieldControlType;
  disableCustomerPayment?: Enums.FieldControlType;
  disableCustomerPhone?: Enums.FieldControlType;
  disableCustomerResidentCountry?: Enums.FieldControlType;
  disableCustomerTitle?: Enums.FieldControlType;
  disableCustomerType?: Enums.FieldControlType;
}
export interface FeeSettings {
  allowNegativeFees?: boolean;
  allowOtherCurrencies?: boolean;
  cancelGracePeriod?: string;
  displayTaxesForFeesOnBreakdown?: boolean;
  feeDescription?: Enums.FieldControlType;
}
export interface FlightSearchSettings {
  bookingMaxPassengers?: number;
  allowOpenJaw?: boolean;
  allowPrivateFares?: boolean;
  showExpiredFareDateRange?: number;
  maxNumberConnectingFlights?: number;
  primarySortKey?: Enums.JourneySortKey;
  secondarySortKey?: Enums.JourneySortKey;
  maxAvailabilityDateRange?: number;
  maxLowFareDateRange?: number;
  displayLowerFares?: Enums.FareDisplayType;
  fareClassControl?: Enums.FareClassControl;
  allUpPricing?: boolean;
  fareSorting?: Enums.FareSelection;
  lowFareCacheStatus?: Enums.LowFareCacheOption;
}
export interface GeneralSettings {
  allowChangeSsrOnCheckedInPassenger?: boolean;
  allowBlockedSeatAssignment?: boolean;
  allowChangeOnRestrictedFlight?: boolean;
  allowPromoCodes?: boolean;
  allowEditableApiChannel?: boolean;
  allowEditableDirectChannel?: boolean;
  allowEditableGdsBookingWithTaPayment?: boolean;
  allowEditableGdsChannel?: boolean;
  allowEditableWebChannel?: boolean;
  allowGroupNameUpdates?: boolean;
  allowManifestRetrievalOnUnblockedFlightLines?: boolean;
  allowOverbookingSsrOnMove?: boolean;
  allowQueueingGdsBookingWithTaFopForETicketReissue?: boolean;
  allowRestrictedSeatAssignment?: boolean;
  allowSeatAssignment?: Enums.SeatAssignmentRole;
  bookingAccessControl?: Enums.BookingAccessControl;
  viewBookingsByControl?: Enums.GroupAccessControl;
  editBookingsByControl?: Enums.GroupAccessControl;
  defaultBookingComment?: string;
  doNotIncludeUnitProperties?: boolean;
  duplicateBookingDetectionTimeSpan?: string;
  enableAutomaticSeatAssignment?: boolean;
  highlightFareOverride?: Enums.HighlightOption;
  highlightIrop?: Enums.HighlightOption;
  highlightScheduleChange?: Enums.HighlightOption;
  highlightStandby?: Enums.HighlightOption;
  highlightUpgrade?: Enums.HighlightOption;
  managePassiveSegments?: boolean;
  reassignSeatingBehavior?: Enums.ReassignSeatingBehavior;
  restrictedExternalSystemCodes?: string[];
  timeDisplay?: Enums.TimeDisplay;
  allowSeatGroupRestrictionOverride?: boolean;
}
export interface ReserveFlightsSettings {
  availabilityDepartureTimeLimit?: string;
  availabilityMaxDaysOut?: string;
  sellDepartureTimeLimit?: string;
  availableSpaceDisplayMax?: number;
  flightTimeChangeToleranceMinutes?: number;
  viewCapacity?: boolean;
  viewLidSold?: boolean;
  viewSsrAvailability?: boolean;
  viewManifestControl?: Enums.ViewManifestControl;
  adHocFlightControl?: Enums.AdHocFlightControl;
  allowSellOverbook?: Enums.OverbookControl;
  allowMoveOverbook?: Enums.OverbookControl;
  allowUpgradeOverbook?: Enums.OverbookControl;
  allowSplitJourneyMoves?: boolean;
  allowMove?: Enums.MoveFlightCode;
  moveByMaximumClassAvailability?: boolean;
  requireSameCityPairOnMoves?: boolean;
  maxMoveDaysForward?: string;
  maxMoveDaysBack?: string;
  daysBeforeIrop?: string;
  allowFareOverride?: boolean;
  allowClosedFlightFareOverride?: boolean;
  allowFareOverrideDuringDivide?: boolean;
  allowIgnoreRestrictions?: boolean;
  allowInvalidPriceStatus?: boolean;
  cancelDepartureTimeLimit?: string;
  seatAssignmentTimeLimit?: string;
  allowUpgrade?: boolean;
  allowCreateAdhocConnect?: boolean;
  minimumTimeBetweenFlightsEnforcement?: boolean;
  upgradeDepartureTimeLimit?: string;
  upgradeCabinStartOffset?: string;
  minimumTimeBetweenFlights?: string;
  modifyPassiveSegmentTimes?: boolean;
  allowSellOfFlightOverlap?: boolean;
  availabilityMaxDate?: string;
  allowedFareOverrideType?: Enums.AllowedFareOverrideType;
  allowMoveOnInitialBooking?: boolean;
}
export interface PassengerSettings {
  passengerTitle?: Enums.FieldControlType;
  passengerFirstName?: Enums.FieldControlType;
  passengerMiddleName?: Enums.FieldControlType;
  passengerLastName?: Enums.FieldControlType;
  passengerSuffix?: Enums.FieldControlType;
  passengerCustomerNumber?: Enums.FieldControlType;
  passengerGender?: Enums.FieldControlType;
  passengerDateOfBirth?: Enums.FieldControlType;
  passengerNationality?: Enums.FieldControlType;
  passengerResidentCountry?: Enums.FieldControlType;
  infantTitle?: Enums.FieldControlType;
  infantFirstName?: Enums.FieldControlType;
  infantMiddleName?: Enums.FieldControlType;
  infantLastName?: Enums.FieldControlType;
  infantSuffix?: Enums.FieldControlType;
  infantGender?: Enums.FieldControlType;
  infantDateOfBirth?: Enums.FieldControlType;
  infantNationality?: Enums.FieldControlType;
  infantResidentCountry?: Enums.FieldControlType;
  tbaPassengersAllowed?: Enums.TbaPassengersAllowed;
  allowCustomerProgram?: boolean;
  allowNameChange?: boolean;
}
export interface PaymentSettings {
  defaultCommentForCreditShell?: string;
  webDeclinedPaymentHoldPeriod?: number;
  directDeclinedPaymentHoldPeriod?: number;
  gdsDeclinedPaymentHoldPeriod?: number;
  apiDeclinedPaymentHoldPeriod?: number;
  autoCancelChargeBackPaymentHolds?: boolean;
  allowZeroAmountFormOfPayment?: boolean;
  includeInFirstInstallmentFeeCodes?: string[];
  retainHoldStatusUntilPaymentAuthorization?: boolean;
}
export interface AgencyCreationSettings {
  department?: string;
  role?: string;
  domainCode?: string;
  domainName?: string;
  domainLocation?: string;
  channelType?: Enums.ChannelType;
  notificationEmailAddress?: string;
  masterRole?: string;
  phoneType?: Enums.PhoneNumberType;
}
export interface CustomerCreationSettings {
  organization?: string;
  domain?: string;
  department?: string;
  role?: string;
  location?: string;
  minimumAge?: number;
  enableCheckDigit?: boolean;
  allowPropertyBagUpload?: boolean;
  maximumPersonInfoSize?: number;
  allowDuplicateCustomerName?: boolean;
}
export interface PremiumServicesSettingsv2 {
  governmentDataProtectionRequirements?: boolean;
  accessToExternalBaggageSystems?: boolean;
  unitedKingdomInteractiveAdvancePassengerProcessing?: boolean;
  advancedParentChildTravelAgencyManagement?: boolean;
  baggageSelfTagging?: boolean;
  loyaltyCustomerAccountView?: boolean;
  pricingOptimizationServices?: boolean;
  secureFlight?: boolean;
  allInclusivePricingDisplay?: boolean;
  numericAddressVerificationService?: boolean;
  koreanInteractiveAdvancePassengerProcessing?: boolean;
  taiwanInteractiveAdvancePassengerProcessing?: boolean;
  canadaInteractiveAdvancePassengerProcessing?: boolean;
  attributeShopping?: boolean;
  documentCheckConfiguration?: boolean;
  transmitFareDataToAirlineTariffPublishingCompany?: boolean;
  travelNotifications?: boolean;
  bundles?: boolean;
}
export interface SkySpeedSettingsv2 {
  disableBaseCurrency?: boolean;
  manifestViewDate?: Enums.ManifestViewDateType;
  disableOutboundTime?: boolean;
  maximumNumberOfTtyMessagesPerBatchForDeletion?: number;
  excludeOutboundTimeTab?: boolean;
  postalCodeLookup?: Enums.PostalCodeLookupType;
  disableReturnTime?: boolean;
  serviceServerName?: number;
  excludeReturnTimeTab?: boolean;
  enableShowValidFaresCheckbox?: boolean;
  fareBasisInRegularBooking?: number;
  fareBasisInOverbook?: number;
  displayReservedFlights?: boolean;
  displaySsrNestValues?: boolean;
  defaultFocusToCustomerIdField?: boolean;
  allowDeleteComments?: boolean;
  promptCreateInternetUserId?: boolean;
  allowManagePasswordForCustomerAccount?: boolean;
  viewFareQuote?: boolean;
  allowNonCarrierOrgToUseOtherAgency?: boolean;
  viewTeletypeProcessing?: boolean;
  viewGdsHistoryDialog?: boolean;
  returnDateDefaultToOutboundDate?: boolean;
  displayFyiNotesOnLogin?: boolean;
  displayResidentCountry?: boolean;
  displayPricesByPassengerType?: string[];
  defaultToCustomerCreditCard?: boolean;
  forceViewMandatoryComments?: boolean;
  showTravelDocumentsOnPassengersScreen?: boolean;
  showDestinationAddressesOnPassengersScreen?: boolean;
  showFrequentFlyerNumberOnPassengersScreen?: boolean;
  showMealSsrButtonOnPassengersScreen?: boolean;
  allowETicketing?: boolean;
  allowFeesToBeDeleted?: boolean;
  displayReferenceNumber?: boolean;
  enableLoyaltyCustomerAccountView?: boolean;
  enableLoyaltyFareDisplay?: boolean;
  displayETicketRecords?: boolean;
  allowETicketCouponStatusToBeUpdated?: boolean;
  enableRepriceButtonOnReservedFlightsScreen?: boolean;
  enableSplitCancelButtonOnReservedFlightsScreen?: boolean;
  allowTravelNotificationsAccess?: boolean;
  allowThemeEditorAccess?: boolean;
  allowBlacklistAccessAndRetrieveReservationsFromPayments?: boolean;
  maskBookingContactInformation?: boolean;
  accessToFlightsWithTrafficRestrictions?: boolean;
  enabledTicketCodes?: string[];
  reservationComments?: string[];
  itineraryComments?: string[];
  manifestComments?: string[];
}
export interface BookingPaymentSettingsv2 {
  allowExternalPaymentChargeBack?: boolean;
  allowHoldDateOverride?: boolean;
  allowIgnoreVoucherRestrictions?: boolean;
  allowVoucherIssuance?: boolean;
  allowManualAuthorization?: boolean;
  allowOverPay?: boolean;
  allowUnderPay?: boolean;
  allowUnvoidVoucher?: boolean;
  allowUseOfBinFraudTool?: boolean;
  allowVoidVoucher?: boolean;
  enableAutoPaymentVerification?: boolean;
  allowConfirmBookingWithPartialTicketing?: boolean;
  allowUnmaskingCreditCardNumber?: boolean;
  allowDisplayNoPaymentWarning?: boolean;
  requirePassengerOrContactForCreditFile?: boolean;
  requirePassengerOrContactForCreditShell?: boolean;
  requireCommentsForCreditShell?: boolean;
  disableAlternateAgAccount?: boolean;
  creditShellCreditCode?: string;
  maxInstallmentOverride?: number;
  maxPaymentQueries?: number;
  secondsTillStartPaymentQuery?: number;
  secondsTillRepeatPaymentQuery?: number;
  holdsDaysBeforeDeparture?: string;
  holdsDaysAfterDeparture?: string;
}
export interface ShoppingAttributeGroup {
  inActive?: boolean;
  description?: string;
  name?: string;
  shoppingAttributeGroupCode: string;
}
export interface ShoppingAttribute {
  inActive?: boolean;
  description?: string;
  name?: string;
  shoppingAttributeCode: string;
  shoppingAttributeGroupCodes?: string[];
  shoppingAttributeType?: Enums.ShoppingAttributeType;
}
export interface SingleSignOnCredentials {
  applicationName?: string;
  singleSignOn: string;
  channelType?: Enums.ChannelType;
  providerKey: string;
  providerName?: string;
}
export interface SingleSignOnProvider {
  name?: string;
  authorizationEndpoint?: string;
  tokenEndpoint?: string;
  clientIdentifier?: string;
  singleSignOnType?: string;
  inActive?: boolean;
  providerKey?: string;
}
export interface UserSingleSignOnToken {
  singleSignOn: string;
  providerKey?: string;
  expirationDate?: string;
}
export interface SingleSignOnTokenRequest {
  singleSignOn: string;
  expirationDate?: string;
}
export interface DeltaMapperSingleSignOnTokenRequest {}
export interface SsrAvailabilityRequestv2 {
  trips: MarketInformation[];
  passengerKeys: string[];
  currencyCode: string;
}
export interface SsrAvailability {
  journeySsrs?: SsrByJourney[];
  segmentSsrs?: SsrBySegment[];
  legSsrs?: SsrByLeg[];
}
export interface SsrByJourney {
  journeyKey?: string;
  journeyDetails?: MarketInformation;
  ssrs?: SsrDetail[];
}
export interface SsrBySegment {
  segmentKey?: string;
  segmentDetails?: MarketInformation;
  ssrs?: SsrDetail[];
}
export interface SsrByLeg {
  legKey?: string;
  legDetails?: MarketInformation;
  ssrs?: SsrDetail[];
}
export interface SsrDetail {
  ssrCode?: string;
  passengersAvailability?: Dictionary<PassengerSsrAvailability>;
  ssrType?: Enums.SsrType;
  name?: string;
  limitPerPassenger?: number;
  available?: number;
  inventoryControlled?: boolean;
  seatDependent?: boolean;
  feeCode?: string;
  nest?: string;
  seatRestriction?: Enums.SeatRestriction;
}
export interface SingleSsrByKeyRequestv2 {
  count?: number;
  note?: string;
  forceWaveOnSell?: boolean;
  currencyCode?: string;
}
export interface SsrGroup {
  ssrGroupCode?: string;
  name?: string;
  inActive?: boolean;
  ssrs?: SsrGroupItem[];
}
export interface SsrGroupItem {
  ssrGroupCode?: string;
  ssrCode?: string;
}
export interface SsrNest {
  ssrNestCode?: string;
  name?: string;
  inActive?: boolean;
  ssrs?: Ssr[];
}
export interface SsrRestrictionResult {
  inActive?: boolean;
  ssrRestrictionResultCode?: string;
  name?: string;
}
export interface StandByPriority {
  standByPriorityCode?: string;
  name?: string;
  priorityCategory?: string;
  inActive?: boolean;
}
export interface StationCategory {
  stationCategoryCode?: string;
  name?: string;
  inActive?: boolean;
  allowed?: boolean;
}
export interface Suffix {
  suffixCode: string;
  name?: string;
  inActive?: boolean;
}
export interface ThreeDSecurePaymentMethodRequestv2 {
  paReq?: string;
  paRes?: string;
  paymentMethodCode: string;
  amount: number;
  paymentTransactionKey?: string;
  paymentFields?: Dictionary<string>;
  currencyCode?: string;
  installments?: number;
}
export interface TimeZone {
  inActive?: boolean;
  name?: string;
  standardVariation?: number;
  timeZoneCode: string;
  timeZoneVariations?: TimeZoneVariation[];
}
export interface TimeZoneVariation {
  endUtc?: string;
  startUtc?: string;
  variation?: number;
}
export interface Title {
  titleKey?: string;
  description?: string;
  gender?: Enums.Gender;
  weightCategory?: Enums.WeightCategory;
  inActive?: boolean;
}
export interface TokenRequest {
  applicationName?: string;
}
export interface TravelClass {
  travelClassCode?: string;
  name: string;
  cabinOfServiceCode?: string;
  systemControlled?: boolean;
  inActive?: boolean;
}
export interface TravelDocumentRequirements {
  atLeastOneDocumentRequired?: boolean;
  travelDocumentTypeCodes?: string[];
}
export interface DequeueTravelSummary {
  summary?: TravelSummary;
  travelQueueKey?: string;
  information: MarketInformation;
  processStatus?: Enums.QueueProcessStatus;
  notes?: string;
  processState?: Enums.QueueProcessState;
  priorityCode?: string;
  inProgress?: boolean;
  priorityDate?: string;
  statusReset?: string;
}
export interface TravelSummary {
  status?: Enums.LegStatus;
  number?: string;
  scheduledDepartureTime?: string;
  scheduledArrivalTime?: string;
  estimatedDepartureTime?: string;
  estimatedArrivalTime?: string;
  actualDepartureTime?: string;
  actualArrivalTime?: string;
  departureLtv?: number;
  arrivalLtv?: number;
  equipmentType?: string;
  equipmentTypeSuffix?: string;
  marketingConfigurationCode?: string;
  salesConfigurationCode?: string;
  market?: MarketInformation;
}
export interface TravelQueueItemRequest {
  item: TravelQueueItemBase;
  queue: TravelQueueRequest;
  queueEventCode?: string;
  timeEventCode?: string;
}
export interface TravelQueueItemBase {
  information: MarketInformation;
  processStatus?: Enums.QueueProcessStatus;
  notes?: string;
  processState?: Enums.QueueProcessState;
  priorityCode?: string;
  inProgress?: boolean;
  priorityDate?: string;
  statusReset?: string;
}
export interface TravelQueueRequest {
  travelQueueCode: string;
  subQueueCode?: string;
}
export interface BookingSellRequest {
  journeys?: JourneySellRequest;
  contact?: ContactRequest;
  passengers: BookingPassengerRequest[];
  residentCountry?: string;
  currencyCode: string;
  promotionCode?: string;
  sourceOrganization?: string;
}
export interface JourneySellRequest {
  keys: SellKey[];
  preventOverlap?: boolean;
  suppressPassengerAgeValidation?: boolean;
}
export interface BookingPassengerRequest {
  passenger: PassengerRequest;
  discountCode?: string;
  ssrs?: JourneySsrRequest[];
}
export interface PassengerRequest {
  customerNumber?: string;
  name?: Name;
  discountCode?: string;
  program?: PassengerProgram;
  info?: PassengerInformation;
  travelDocuments?: TravelDocumentCreateRequest[];
  addresses?: PassengerAddress[];
  infant?: Infant;
  passengerTypeCode: string;
}
export interface JourneySsrRequest {
  journeyKey: string;
  ssrCode: string;
  count?: number;
  note?: string;
}
export interface TripDetails {
  legCrossReferences?: LegCrossReference[];
  cabinDetails?: CabinDetails[];
  checkinLid?: number;
}
export interface CabinDetails {
  cabinOfService?: string;
  adjustedSeatCount?: number;
  maximumSeatCount?: number;
  seatsSold?: number;
}
export interface TripDowngradeRequest {
  segmentKeys: string[];
  inventoryControl?: Enums.InventoryControlType;
}
export interface TripInformationQuery {
  daysOfWeek?: Enums.DayOfWeek[];
  endDate?: string;
  beginDate: string;
  equipmentFilter?: EquipmentFilter;
  startTimeInterval?: string;
  identifier?: string;
  originStations?: string[];
  endTimeInterval?: string;
  carrierCode?: string;
  destinationStations?: string[];
  flightType?: Enums.OperationsFlightType;
  opSuffix?: string;
  searchXRef?: boolean;
  excludeMarketedFlights?: boolean;
  numberOfJourneys?: number;
}
export interface EquipmentFilter {
  equipmentType: string;
  equipmentTypeSuffix: string;
}
export interface ScheduleDetail {
  departureDate?: string;
  earliest?: string;
  latest?: string;
  flights?: number;
}
export interface TripSellRequest {
  preventOverlap?: boolean;
  keys?: SellKey[];
  suppressPassengerAgeValidation?: boolean;
  passengers: PassengerTypeCriteria;
  currencyCode: string;
  infantCount?: number;
  promotionCode?: string;
  sourceOrganization?: string;
}
export interface TripStatusv2 {
  tripStatusKey?: string;
  operationDetails?: OperationDetails;
  originDetails?: OriginDetails;
  destinationDetails?: DestinationDetails;
  modifiedAgentName?: string;
  verified?: boolean;
  irop?: boolean;
}
export interface OperationDetails {
  tailNumber?: string;
  equipmentType?: string;
  equipmentTypeSuffix?: string;
  status?: Enums.LegStatus;
  identifier?: TransportationIdentifier;
  tripOperationTimes?: TripOperationTimes;
  counts?: OperationCounts;
  delays?: TripOperationDelay[];
  payloads?: TripOperationPayload[];
  crewList?: TripOperationCrew[];
  comments?: TripOperationComment[];
  historyList?: TripOperationHistory[];
}
export interface OriginDetails {
  status?: Enums.DepartureStatus;
  note?: string;
  gate?: GateInformation;
  station?: string;
}
export interface DestinationDetails {
  status?: Enums.ArrivalStatus;
  note?: string;
  baggageClaim?: string;
  gate?: GateInformation;
  station?: string;
}
export interface TripOperationTimes {
  touchDownTimes?: TripOperationEvents;
  onBlockTimes?: TripOperationEvents;
  departureTimes?: DepartureEvent;
  offBlockTime?: string;
  airborneTime?: string;
  crewReportTime?: string;
  takeOffTime?: string;
  movementAfterPushBackTime?: string;
  nextInformationTime?: string;
  reclearanceTime?: string;
  returnToRampTime?: string;
  scheduledArrivalTime?: string;
  lastModifiedDate?: string;
}
export interface OperationCounts {
  boardingCount?: number;
  boardingSequence?: number;
  infantCount?: number;
  nonRevenueCount?: number;
  revenueCount?: number;
  checkInCount?: number;
  fuelOnboardOut?: number;
  fuelOnboardIn?: number;
  upLiftFuel?: number;
  upLiftWeight?: number;
  cockpitCrewCount?: number;
  cabinCrewCount?: number;
}
export interface TripOperationDelay {
  tripOperationDelayKey?: string;
  delayCode?: string;
  delayMinutes?: number;
  note?: string;
  includeMvtMessage?: boolean;
  createdDate?: string;
}
export interface TripOperationPayload {
  payloadType?: string;
  compartment?: string;
  payloadCount?: number;
  weight?: number;
}
export interface TripOperationCrew {
  tripOperationCrewKey?: string;
  crewType?: Enums.CrewType;
}
export interface TripOperationComment {
  tripOperationCommentKey?: string;
  text?: string;
  type?: Enums.OperationCommentType;
}
export interface TripOperationHistory {
  tripOperationHistoryKey?: string;
  tripOperationHistoryCode?: string;
  detail?: string;
  createdHistoryDate?: string;
}
export interface TripOperationEvents {
  forced?: string;
  actual?: string;
  estimated?: string;
}
export interface UpgradeSegment {
  transportationIdentifier?: TransportationIdentifier;
  departureTime?: string;
  departureStation?: string;
  arrivalStation?: string;
  upgrades?: Upgrade[];
}
export interface Upgrade {
  upgradeKey?: string;
  originalClassOfService?: string;
  upgradeClassOfService?: string;
  available?: number;
  fee?: PassengerFee;
}
export interface TripUpgradeRequest {
  upgradeKeys: string[];
  inventoryControl?: Enums.InventoryControlType;
  overrideFee?: boolean;
  collectedCurrencyCode?: string;
}
export interface TripUpgradeBaseRequest {
  inventoryControl?: Enums.InventoryControlType;
  overrideFee?: boolean;
  collectedCurrencyCode?: string;
}
export interface User {
  userKey?: string;
  lastAlertReadDate?: string;
  status?: Enums.UserStatus;
  personKey?: string;
  lastNewsReadDate?: string;
  username: string;
  allowed?: boolean;
  codes: UserCodes;
  lastLogon?: string;
  hireDate?: string;
  passwordLastChanged?: string;
  terminationDate?: string;
  roles: UserRole[];
  note?: string;
  settings?: UserSetting[];
  traceQueueCode?: string;
  locked?: boolean;
  forcePasswordReset?: boolean;
}
export interface UserCodes {
  departmentCode: string;
  locationCode: string;
  locationGroupCode?: string;
  organizationCode: string;
  organizationGroupCode?: string;
  domainCode: string;
}
export interface UserRole {
  userRoleKey?: string;
  roleName?: string;
  roleCode: string;
  effectiveDays?: Enums.DayOfWeek[];
  effectiveAfter: string;
  parentRoleCode?: string;
  effectiveBefore?: string;
}
export interface UserSetting {
  data?: string;
  agentSettingTypeCode?: string;
  version?: number;
  name?: string;
  inActive?: boolean;
  schema?: string;
}
export interface UserRequest {
  status?: Enums.UserStatus;
  username: string;
  codes: UserCodes;
  hireDate?: string;
  terminationDate?: string;
  note?: string;
  traceQueueCode?: string;
  locked?: boolean;
  forcePasswordReset?: boolean;
}
export interface DeltaMapperUserRequest {}
export interface UserCustomerCreateRequest {
  person: PersonCreateRequest;
  username: string;
  password: string;
  sendRegistrationConfirmation?: boolean;
}
export interface BookingTripResult {
  recordLocator?: string;
  bookingStatus?: Enums.BookingStatus;
  priceStatus?: Enums.PriceStatus;
  paidStatus?: Enums.PaidStatus;
  createdDate?: string;
  firstName?: string;
  lastName?: string;
  customerNumber?: string;
  segments?: SegmentTripResult[];
}
export interface SegmentTripResult {
  readonly designator?: TransportationDesignator;
  classOfService?: string;
  activityDate?: string;
  identifier?: TransportationIdentifier;
  externalIdentifier?: TransportationIdentifier;
  legs?: LegTripResult[];
}
export interface LegTripResult {
  designator?: TransportationDesignator;
  boardingSequence?: number;
  compartmentDesignator?: string;
  unitDesignator?: string;
  status?: Enums.LegStatus;
  liftStatus?: Enums.LiftStatus;
  departureTimeUtc?: string;
  arrivalTimeUtc?: string;
}
export interface UserCustomerCreateRequestv2 {
  personKey: string;
  username: string;
  password: string;
  sendRegistrationConfirmation?: boolean;
}
export interface UserImpersonateRequest {
  roleCode: string;
}
export interface UserChangePasswordRequestBase {
  newPassword: string;
}
export interface UserRoleCreateRequest {
  roleCode: string;
  effectiveDays?: Enums.DayOfWeek[];
  effectiveAfter: string;
  effectiveBefore?: string;
}
export interface UserRoleEditRequest {
  effectiveDays?: Enums.DayOfWeek[];
  effectiveAfter: string;
  effectiveBefore?: string;
}
export interface DeltaMapperUserRolePatchRequest {}
export interface UserRolePatchRequest {
  effectiveAfter: string;
  effectiveBefore?: string;
}
export interface UserCreateRequest {
  person: PersonCreateRequest;
  password: string;
  status?: Enums.UserStatus;
  roles: UserRoleCreateRequest[];
  username: string;
  settings?: UserSetting[];
  codes: UserCodes;
  sendRegistrationConfirmation?: boolean;
  hireDate?: string;
  terminationDate?: string;
  note?: string;
  traceQueueCode?: string;
  locked?: boolean;
  forcePasswordReset?: boolean;
}
export interface UserCreateRequestv2 {
  personKey: string;
  password: string;
  status?: Enums.UserStatus;
  roles: UserRoleCreateRequest[];
  username: string;
  settings?: UserSetting[];
  codes: UserCodes;
  sendRegistrationConfirmation?: boolean;
  hireDate?: string;
  terminationDate?: string;
  note?: string;
  traceQueueCode?: string;
  locked?: boolean;
  forcePasswordReset?: boolean;
}
export interface UserRecord {
  userKey?: string;
  username?: string;
  name?: Name;
  roles?: UserRole[];
  status?: Enums.UserStatus;
  allowed?: boolean;
  domainCode?: string;
  organizationCode?: string;
}
export interface Voucher {
  foreignCurrencyCode?: string;
  voucherKey?: string;
  expiration?: string;
  currencyCode?: string;
  foreignAmount?: number;
  reference?: string;
  amount?: number;
  type?: Enums.VoucherType;
  configurationCode?: string;
  password?: string;
  status?: Enums.VoucherStatus;
  recordLocator?: string;
  available?: number;
  transactions?: VoucherTransaction[];
  firstName?: string;
  lastName?: string;
  personKey?: string;
  voucherIssuanceKey?: string;
}
export interface VoucherTransaction {
  voucherTransactionKey?: string;
  foreignCurrencyCode?: string;
  currencyCode?: string;
  type?: Enums.VoucherTransactionType;
  foreignAmount?: number;
  amount?: number;
  recordLocator?: string;
}
export interface VoucherUpdateRequest {
  status: Enums.VoucherStatusUpdate;
}
export interface VoucherItem {
  createdDate?: string;
  voucherKey?: string;
  expiration?: string;
  currencyCode?: string;
  reference?: string;
  amount?: number;
  configurationCode?: string;
  status?: Enums.VoucherStatus;
  available?: number;
  firstName?: string;
  lastName?: string;
  personKey?: string;
  voucherIssuanceKey?: string;
}
export interface VouchersSummaryResponse {
  lastPageKey?: string;
  vouchers?: VoucherSummary[];
}
export interface VoucherSummary {
  voucherKey?: string;
  reference?: string;
  recordLocator?: string;
  note?: string;
  amount?: number;
  expiration?: string;
}
export interface VoucherConfiguration {
  configurationCode: string;
  note?: string;
  name: string;
  description: string;
  type: Enums.VoucherType;
  issuanceType: Enums.IssuanceType;
  usageTypes?: Enums.VoucherUsageType[];
  tripType?: Enums.VoucherTripType;
  expirationControl?: Enums.VoucherExpirationControl;
  expirationType: Enums.VoucherExpirationType;
  expirationDays?: number;
  amountControl?: Enums.AmountControl;
  calculatedAmountControl?: 'Default' | 'Fares' | 'FaresPlusTaxes';
  maximumPassengers?: number;
  maximumVouchersPerBooking?: number;
  travelDowRestriction?: Enums.DayOfWeek[];
  nameRestriction?: Enums.VoucherNameRestriction;
  isRecordLocatorRequired?: boolean;
  isCustomerNumberRequired?: boolean;
  nextReferenceNumber?: number;
  maximumAmountIsPerPassenger?: boolean;
  calculatedPercentage?: number;
  issuanceControl?: Enums.VoucherIssuanceControl;
  fareClasses?: VoucherConfigurationFareClass[];
  marketRestrictions?: VoucherMarketRestriction[];
  travelRestrictions?: VoucherTravelRestriction[];
  expiration?: string;
  currencyCode?: string;
  maximumAmount?: number;
}
export interface VoucherConfigurationFareClass {
  configurationCode?: string;
  classOfService?: string;
}
export interface VoucherMarketRestriction {
  restrictionType?: Enums.MarketRestrictionType;
  voucherConfigurationCode?: string;
  directionality?: Enums.Directionality;
  sequence?: number;
  regionType?: Enums.RegionType;
  regionCode?: string;
  travelRegionType?: Enums.RegionType;
  travelRegionCode?: string;
}
export interface VoucherTravelRestriction {
  restrictionType?: Enums.TravelRestrictionType;
  voucherConfigurationCode?: string;
  initialTravelDate?: string;
  sequence?: number;
  endTravelDate?: string;
}
export interface VoucherIssuanceRequest {
  recordLocator?: string;
  configurationCode: string;
  expiration?: string;
  currencyCode?: string;
  firstName?: string;
  issuanceReasonCode: string;
  amount?: number;
  lastName?: string;
  note?: string;
  personKey?: string;
  market?: VoucherMarketInformation;
  quantity?: number;
  customerNumber?: string;
  sendFiles?: boolean;
  ssrCode?: string;
}
export interface VoucherMarketInformation {
  destination: string;
  origin: string;
  departureDate: string;
  identifier: string;
  carrierCode: string;
  opSuffix?: string;
}
export interface VoucherIssuance {
  voucherIssuanceKey?: string;
  configurationCode: string;
  expiration?: string;
  currencyCode?: string;
  issuanceReasonCode: string;
  amount?: number;
  note?: string;
  market?: VoucherMarketInformation;
}
export interface VoucherInformation {
  calculatedAmount?: number;
  foreignCurrencyCode?: string;
  voucherKey?: string;
  expiration?: string;
  currencyCode?: string;
  customerNumber?: string;
  foreignAmount?: number;
  reference?: string;
  amount?: number;
  foreignCalculatedAmount?: number;
  type?: Enums.VoucherType;
  configurationCode?: string;
  foreignCalculatededCurrencyCode?: string;
  password?: string;
  status?: Enums.VoucherStatus;
  foreignReversableAmount?: number;
  recordLocator?: string;
  available?: number;
  nameRestriction?: Enums.VoucherNameRestriction;
  transactions?: VoucherTransaction[];
  firstName?: string;
  redeemableAmount?: number;
  lastName?: string;
  reversableAmount?: number;
  personKey?: string;
  foreignAvailableCurrencyCode?: string;
  voucherIssuanceKey?: string;
}
export interface VoucherPaymentRequest {
  referenceCode: string;
  currencyCode?: string;
  paymentMethodCode: string;
  amount?: number;
}
