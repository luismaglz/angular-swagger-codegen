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
import { CustomAttributeData } from './customAttributeData';
import { ICustomAttributeProvider } from './iCustomAttributeProvider';
import { ParameterInfo } from './parameterInfo';



    import { MethodInfoMemberType } from '../types/enums';
    import { MethodInfoMethodImplementationFlags } from '../types/enums';
    import { MethodInfoAttributes } from '../types/enums';
    import { MethodInfoCallingConvention } from '../types/enums';

export interface MethodInfo { 
    readonly memberType?: MethodInfoMemberType;
    readonly returnType?: string;
    readonly returnParameter?: ParameterInfo;
    readonly returnTypeCustomAttributes?: ICustomAttributeProvider;
    readonly methodImplementationFlags?: MethodInfoMethodImplementationFlags;
    readonly methodHandle?: any;
    readonly attributes?: MethodInfoAttributes;
    readonly callingConvention?: MethodInfoCallingConvention;
    readonly isGenericMethodDefinition?: boolean;
    readonly containsGenericParameters?: boolean;
    readonly isGenericMethod?: boolean;
    readonly isSecurityCritical?: boolean;
    readonly isSecuritySafeCritical?: boolean;
    readonly isSecurityTransparent?: boolean;
    readonly isPublic?: boolean;
    readonly isPrivate?: boolean;
    readonly isFamily?: boolean;
    readonly isAssembly?: boolean;
    readonly isFamilyAndAssembly?: boolean;
    readonly isFamilyOrAssembly?: boolean;
    readonly isStatic?: boolean;
    readonly isFinal?: boolean;
    readonly isVirtual?: boolean;
    readonly isHideBySig?: boolean;
    readonly isAbstract?: boolean;
    readonly isSpecialName?: boolean;
    readonly isConstructor?: boolean;
    readonly name?: string;
    readonly declaringType?: string;
    readonly reflectedType?: string;
    readonly customAttributes?: Array<CustomAttributeData>;
    readonly metadataToken?: number;
    readonly module?: any;
}