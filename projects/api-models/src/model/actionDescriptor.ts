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
import { ActionDescriptorProperties } from './actionDescriptorProperties';
import { AttributeRouteInfo } from './attributeRouteInfo';
import { FilterDescriptor } from './filterDescriptor';
import { IActionConstraintMetadata } from './iActionConstraintMetadata';
import { InputParameters } from './inputParameters';
import { ParameterDescriptor } from './parameterDescriptor';


import * as Enums from '../enums';

export interface ActionDescriptor { 
    readonly id?: string;
    routeValues?: InputParameters;
    attributeRouteInfo?: AttributeRouteInfo;
    actionConstraints?: Array<IActionConstraintMetadata>;
    endpointMetadata?: Array<any>;
    parameters?: Array<ParameterDescriptor>;
    boundProperties?: Array<ParameterDescriptor>;
    filterDescriptors?: Array<FilterDescriptor>;
    displayName?: string;
    properties?: ActionDescriptorProperties;
}
