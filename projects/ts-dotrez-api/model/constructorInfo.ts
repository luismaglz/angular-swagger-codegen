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


import * as Enums from '../types/enums';

export interface ConstructorInfo { 
    readonly memberType?: Enums.<ENUM>'Constructor'|'Event'|'Field'|'Method'|'Property'|'TypeInfo'|'Custom'|'NestedType'|'All'</ENUM>;
    readonly methodImplementationFlags?: Enums.<ENUM>'Managed'|'IL'|'Native'|'OPTIL'|'Runtime'|'CodeTypeMask'|'Unmanaged'|'ManagedMask'|'NoInlining'|'ForwardRef'|'Synchronized'|'NoOptimization'|'PreserveSig'|'AggressiveInlining'|'InternalCall'|'MaxMethodImplVal'</ENUM>;
    readonly methodHandle?: any;
    readonly attributes?: Enums.<ENUM>'ReuseSlot'|'PrivateScope'|'Private'|'FamANDAssem'|'Assembly'|'Family'|'FamORAssem'|'Public'|'MemberAccessMask'|'UnmanagedExport'|'Static'|'Final'|'Virtual'|'HideBySig'|'NewSlot'|'VtableLayoutMask'|'CheckAccessOnOverride'|'Abstract'|'SpecialName'|'RTSpecialName'|'PinvokeImpl'|'HasSecurity'|'RequireSecObject'|'ReservedMask'</ENUM>;
    readonly callingConvention?: Enums.<ENUM>'Standard'|'VarArgs'|'Any'|'HasThis'|'ExplicitThis'</ENUM>;
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
