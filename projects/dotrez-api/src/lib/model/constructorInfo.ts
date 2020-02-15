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


export interface ConstructorInfo { 
    readonly memberType?: ConstructorInfo.MemberTypeEnum;
    readonly methodImplementationFlags?: ConstructorInfo.MethodImplementationFlagsEnum;
    readonly methodHandle?: any;
    readonly attributes?: ConstructorInfo.AttributesEnum;
    readonly callingConvention?: ConstructorInfo.CallingConventionEnum;
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
export namespace ConstructorInfo {
    export type MemberTypeEnum = 'Constructor' | 'Event' | 'Field' | 'Method' | 'Property' | 'TypeInfo' | 'Custom' | 'NestedType' | 'All';
    export const MemberTypeEnum = {
        Constructor: 'Constructor' as MemberTypeEnum,
        Event: 'Event' as MemberTypeEnum,
        Field: 'Field' as MemberTypeEnum,
        Method: 'Method' as MemberTypeEnum,
        Property: 'Property' as MemberTypeEnum,
        TypeInfo: 'TypeInfo' as MemberTypeEnum,
        Custom: 'Custom' as MemberTypeEnum,
        NestedType: 'NestedType' as MemberTypeEnum,
        All: 'All' as MemberTypeEnum
    };
    export type MethodImplementationFlagsEnum = 'Managed' | 'IL' | 'Native' | 'OPTIL' | 'Runtime' | 'CodeTypeMask' | 'Unmanaged' | 'ManagedMask' | 'NoInlining' | 'ForwardRef' | 'Synchronized' | 'NoOptimization' | 'PreserveSig' | 'AggressiveInlining' | 'InternalCall' | 'MaxMethodImplVal';
    export const MethodImplementationFlagsEnum = {
        Managed: 'Managed' as MethodImplementationFlagsEnum,
        IL: 'IL' as MethodImplementationFlagsEnum,
        Native: 'Native' as MethodImplementationFlagsEnum,
        OPTIL: 'OPTIL' as MethodImplementationFlagsEnum,
        Runtime: 'Runtime' as MethodImplementationFlagsEnum,
        CodeTypeMask: 'CodeTypeMask' as MethodImplementationFlagsEnum,
        Unmanaged: 'Unmanaged' as MethodImplementationFlagsEnum,
        ManagedMask: 'ManagedMask' as MethodImplementationFlagsEnum,
        NoInlining: 'NoInlining' as MethodImplementationFlagsEnum,
        ForwardRef: 'ForwardRef' as MethodImplementationFlagsEnum,
        Synchronized: 'Synchronized' as MethodImplementationFlagsEnum,
        NoOptimization: 'NoOptimization' as MethodImplementationFlagsEnum,
        PreserveSig: 'PreserveSig' as MethodImplementationFlagsEnum,
        AggressiveInlining: 'AggressiveInlining' as MethodImplementationFlagsEnum,
        InternalCall: 'InternalCall' as MethodImplementationFlagsEnum,
        MaxMethodImplVal: 'MaxMethodImplVal' as MethodImplementationFlagsEnum
    };
    export type AttributesEnum = 'ReuseSlot' | 'PrivateScope' | 'Private' | 'FamANDAssem' | 'Assembly' | 'Family' | 'FamORAssem' | 'Public' | 'MemberAccessMask' | 'UnmanagedExport' | 'Static' | 'Final' | 'Virtual' | 'HideBySig' | 'NewSlot' | 'VtableLayoutMask' | 'CheckAccessOnOverride' | 'Abstract' | 'SpecialName' | 'RTSpecialName' | 'PinvokeImpl' | 'HasSecurity' | 'RequireSecObject' | 'ReservedMask';
    export const AttributesEnum = {
        ReuseSlot: 'ReuseSlot' as AttributesEnum,
        PrivateScope: 'PrivateScope' as AttributesEnum,
        Private: 'Private' as AttributesEnum,
        FamANDAssem: 'FamANDAssem' as AttributesEnum,
        Assembly: 'Assembly' as AttributesEnum,
        Family: 'Family' as AttributesEnum,
        FamORAssem: 'FamORAssem' as AttributesEnum,
        Public: 'Public' as AttributesEnum,
        MemberAccessMask: 'MemberAccessMask' as AttributesEnum,
        UnmanagedExport: 'UnmanagedExport' as AttributesEnum,
        Static: 'Static' as AttributesEnum,
        Final: 'Final' as AttributesEnum,
        Virtual: 'Virtual' as AttributesEnum,
        HideBySig: 'HideBySig' as AttributesEnum,
        NewSlot: 'NewSlot' as AttributesEnum,
        VtableLayoutMask: 'VtableLayoutMask' as AttributesEnum,
        CheckAccessOnOverride: 'CheckAccessOnOverride' as AttributesEnum,
        Abstract: 'Abstract' as AttributesEnum,
        SpecialName: 'SpecialName' as AttributesEnum,
        RTSpecialName: 'RTSpecialName' as AttributesEnum,
        PinvokeImpl: 'PinvokeImpl' as AttributesEnum,
        HasSecurity: 'HasSecurity' as AttributesEnum,
        RequireSecObject: 'RequireSecObject' as AttributesEnum,
        ReservedMask: 'ReservedMask' as AttributesEnum
    };
    export type CallingConventionEnum = 'Standard' | 'VarArgs' | 'Any' | 'HasThis' | 'ExplicitThis';
    export const CallingConventionEnum = {
        Standard: 'Standard' as CallingConventionEnum,
        VarArgs: 'VarArgs' as CallingConventionEnum,
        Any: 'Any' as CallingConventionEnum,
        HasThis: 'HasThis' as CallingConventionEnum,
        ExplicitThis: 'ExplicitThis' as CallingConventionEnum
    };
}
