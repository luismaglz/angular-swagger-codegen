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


/**
 * Defines the order participant field validation levels.
 */

    import { ParticipantSettings<CAP>typeCode</CAP> } from '../types/enums';
    import { ParticipantSettings<CAP>title</CAP> } from '../types/enums';
    import { ParticipantSettings<CAP>documentNumber</CAP> } from '../types/enums';
    import { ParticipantSettings<CAP>firstName</CAP> } from '../types/enums';
    import { ParticipantSettings<CAP>documentIssueBy</CAP> } from '../types/enums';
    import { ParticipantSettings<CAP>middleName</CAP> } from '../types/enums';
    import { ParticipantSettings<CAP>documentTypeCode</CAP> } from '../types/enums';
    import { ParticipantSettings<CAP>lastName</CAP> } from '../types/enums';
    import { ParticipantSettings<CAP>lineOne</CAP> } from '../types/enums';
    import { ParticipantSettings<CAP>lineTwo</CAP> } from '../types/enums';
    import { ParticipantSettings<CAP>city</CAP> } from '../types/enums';
    import { ParticipantSettings<CAP>postalCode</CAP> } from '../types/enums';
    import { ParticipantSettings<CAP>provinceState</CAP> } from '../types/enums';
    import { ParticipantSettings<CAP>countryCode</CAP> } from '../types/enums';
    import { ParticipantSettings<CAP>county</CAP> } from '../types/enums';
    import { ParticipantSettings<CAP>homePhone</CAP> } from '../types/enums';
    import { ParticipantSettings<CAP>workPhone</CAP> } from '../types/enums';
    import { ParticipantSettings<CAP>fax</CAP> } from '../types/enums';
    import { ParticipantSettings<CAP>email</CAP> } from '../types/enums';
    import { ParticipantSettings<CAP>type</CAP> } from '../types/enums';
    import { ParticipantSettings<CAP>companyName</CAP> } from '../types/enums';
    import { ParticipantSettings<CAP>birthDate</CAP> } from '../types/enums';

export interface ParticipantSettings { 
    /**
     * The field usage for the type code.
     */
    typeCode?: <ENUM>'Prompt'|'DoNotPrompt'|'Required'</ENUM>;
    /**
     * The title field usage.
     */
    title?: <ENUM>'Prompt'|'DoNotPrompt'|'Required'</ENUM>;
    /**
     * The field usage for the document number.
     */
    documentNumber?: <ENUM>'Prompt'|'DoNotPrompt'|'Required'</ENUM>;
    /**
     * The first name field usage.
     */
    firstName?: <ENUM>'Prompt'|'DoNotPrompt'|'Required'</ENUM>;
    /**
     * The field usage for the document issue by.
     */
    documentIssueBy?: <ENUM>'Prompt'|'DoNotPrompt'|'Required'</ENUM>;
    /**
     * The middle name field usage.
     */
    middleName?: <ENUM>'Prompt'|'DoNotPrompt'|'Required'</ENUM>;
    /**
     * The field usage for the document type code.
     */
    documentTypeCode?: <ENUM>'Prompt'|'DoNotPrompt'|'Required'</ENUM>;
    /**
     * The last name field usage.
     */
    lastName?: <ENUM>'Prompt'|'DoNotPrompt'|'Required'</ENUM>;
    /**
     * The address line one field usage.
     */
    lineOne?: <ENUM>'Prompt'|'DoNotPrompt'|'Required'</ENUM>;
    /**
     * The address line two field usage.
     */
    lineTwo?: <ENUM>'Prompt'|'DoNotPrompt'|'Required'</ENUM>;
    /**
     * The address city field usage.
     */
    city?: <ENUM>'Prompt'|'DoNotPrompt'|'Required'</ENUM>;
    /**
     * The address postal code field usage.
     */
    postalCode?: <ENUM>'Prompt'|'DoNotPrompt'|'Required'</ENUM>;
    /**
     * The address province state field usage.
     */
    provinceState?: <ENUM>'Prompt'|'DoNotPrompt'|'Required'</ENUM>;
    /**
     * The address country code field usage.
     */
    countryCode?: <ENUM>'Prompt'|'DoNotPrompt'|'Required'</ENUM>;
    /**
     * The address county field usage.
     */
    county?: <ENUM>'Prompt'|'DoNotPrompt'|'Required'</ENUM>;
    /**
     * The home phone number field usage.
     */
    homePhone?: <ENUM>'Prompt'|'DoNotPrompt'|'Required'</ENUM>;
    /**
     * The work phone field usage.
     */
    workPhone?: <ENUM>'Prompt'|'DoNotPrompt'|'Required'</ENUM>;
    /**
     * The fax number field usage.
     */
    fax?: <ENUM>'Prompt'|'DoNotPrompt'|'Required'</ENUM>;
    /**
     * The email address field usage.
     */
    email?: <ENUM>'Prompt'|'DoNotPrompt'|'Required'</ENUM>;
    /**
     * The consumer type field usage.
     */
    type?: <ENUM>'Prompt'|'DoNotPrompt'|'Required'</ENUM>;
    /**
     * The company name field usage.
     */
    companyName?: <ENUM>'Prompt'|'DoNotPrompt'|'Required'</ENUM>;
    /**
     * The date of birth field usage.
     */
    birthDate?: <ENUM>'Prompt'|'DoNotPrompt'|'Required'</ENUM>;
}
