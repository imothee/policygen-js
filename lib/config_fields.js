export const TailwindConfigFields = {
    headingColor: "string",
    bodyColor: "string",
    linkColor: "string",
};
export const ProhibitedUsesValues = [
    "crawling",
    "illegal",
    "harmful",
    "infringing",
    "abusive",
    "spam",
    "advertising",
    "impersonation",
    "accountTransfer",
];
export const PersonalInformationValues = [
    "name",
    "email",
    "phone",
    "address",
    "password",
    "ipAddress",
    "deviceId",
    "creditCard",
    "locationData",
    "anonymizedUsageData",
];
export const SensitiveInformationValues = [
    "ssn",
    "financial",
    "health",
    "biometric",
    "genetic",
    "political",
    "sexualOrientation",
    "criminalHistory",
    "religion",
];
export const ThirdPartyDataValues = [
    "advertising",
    "analytics",
    "socialMedia",
    "purchase",
    "email",
    "support",
    "crm",
    "job",
    "address",
    "behavior",
];
export const ServiceRequirementsValues = [
    "accounts",
    "communication",
    "orders",
];
export const LegalBasisValues = [
    "advertising",
    "marketing",
    "analytics",
    "security",
    "fraudPrevention",
];
export const ConfigFields = {
    cssFramework: "select:tailwind,classes",
    tailwindConfig: TailwindConfigFields,
    entityName: "string",
    entityWebsite: "string",
    supportEmail: "string",
    privacyEmail: "string",
    privacyLastUpdated: "string",
    tosLastUpdated: "string",
    platforms: ["web", "mobile"],
    locations: ["us", "eu", "uk"],
    entityLocation: "string",
    underEighteen: "boolean",
    underThirteen: "boolean",
    socialSignIn: "boolean",
    purchasableGoods: "boolean",
    subscription: "boolean",
    freeTrial: "boolean",
    autoRenew: "boolean",
    refundPolicy: "select:none,full,prorata",
    userContent: "boolean",
    userContentLicense: "boolean",
    userAccounts: "boolean",
    governingLaw: "string",
    disputeResolution: "select:arbitration,litigation",
    mediation: "boolean",
    prohibitedUses: ProhibitedUsesValues,
    serviceSLA: "boolean",
    serviceSLAAmount: "number",
    serviceSLATimeframe: "optional:string",
    serviceSLARefund: "boolean",
    serviceSLARefundType: "select:full,prorata",
    serviceSLACustom: "optional:string",
    liabilityLimitation: "boolean",
    liabilityLimitationType: "select:amount_paid,amount,minAmountPaidOrAmount",
    liabilityLimitationTimeframe: "optional:string",
    liabilityLimitationAmount: "number",
    personalInformation: PersonalInformationValues,
    sensitiveInformation: SensitiveInformationValues,
    thirdPartyData: ThirdPartyDataValues,
    paymentData: "boolean",
    paymentProcessors: "string_array",
    appUsageData: "boolean",
    thirdPartyDisclosure: "boolean",
    thirdPartyDisclosureEntities: "string_array",
    thirdPartySharing: "boolean",
    thirdPartySharingEntities: "string_array",
    securityMeasures: "boolean",
    webTracking: "boolean",
    thirdPartyAnalytics: "boolean",
    serviceRequirements: ServiceRequirementsValues,
    legalBasis: LegalBasisValues,
    dataRetentionPeriod: "optional:string",
    usStatePrivacyLaws: "boolean",
    privacyPage: "optional:string",
    dpo: "boolean",
    dpoName: "optional:string",
    dpoEmail: "optional:string",
    dpoPhone: "optional:string",
};