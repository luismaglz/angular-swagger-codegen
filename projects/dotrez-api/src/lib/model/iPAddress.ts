/**
 * API - Current Routes
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: trunk
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface IPAddress {
  address?: number;
  readonly addressFamily?: IPAddress.AddressFamilyEnum;
  scopeId?: number;
  readonly isIPv6Multicast?: boolean;
  readonly isIPv6LinkLocal?: boolean;
  readonly isIPv6SiteLocal?: boolean;
  readonly isIPv6Teredo?: boolean;
  readonly isIPv4MappedToIPv6?: boolean;
}
export namespace IPAddress {
  export type AddressFamilyEnum =
    | "Unspecified"
    | "Unix"
    | "InterNetwork"
    | "ImpLink"
    | "Pup"
    | "Chaos"
    | "Ipx"
    | "NS"
    | "Iso"
    | "Osi"
    | "Ecma"
    | "DataKit"
    | "Ccitt"
    | "Sna"
    | "DecNet"
    | "DataLink"
    | "Lat"
    | "HyperChannel"
    | "AppleTalk"
    | "NetBios"
    | "VoiceView"
    | "FireFox"
    | "Banyan"
    | "Atm"
    | "InterNetworkV6"
    | "Cluster"
    | "Ieee12844"
    | "Irda"
    | "NetworkDesigners"
    | "Max"
    | "Unknown";
}
