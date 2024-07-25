export type TailwindConfig = {
  headingColor?: string;
  bodyColor?: string;
  linkColor?: string;
};

const enum ProhibitedUses {
  crawling = "crawling",
  illegal = "illegal",
  harmful = "harmful",
  infringing = "infringing",
  abusive = "abusive",
  spam = "spam",
  advertising = "advertising",
  impersonation = "impersonation",
  accountTransfer = "accountTransfer",
}

const enum PersonalInformation {
  name = "name",
  email = "email",
  phone = "phone",
  address = "address",
  password = "password",
  ipAddress = "ipAddress",
  deviceId = "deviceId",
  creditCard = "creditCard",
  locationData = "locationData",
  anonymizedUsageData = "anonymizedUsageData",
}

const enum SensitiveInformation {
  ssn = "ssn",
  financial = "financial",
  health = "health",
  biometric = "biometric",
  genetic = "genetic",
  political = "political",
  sexualOrientation = "sexualOrientation",
  criminalHistory = "criminalHistory",
  religion = "religion",
}

const enum ThirdPartyData {
  advertising = "advertising",
  analytics = "analytics",
  socialMedia = "socialMedia",
  purchase = "purchase",
  email = "email",
  support = "support",
  crm = "crm",
  job = "job",
  address = "address",
  behavior = "behavior",
}

const enum ServiceRequirements {
  accounts = "accounts",
  communication = "communication",
  orders = "orders",
}

const enum LegalBasis {
  advertising = "advertising",
  marketing = "marketing",
  analytics = "analytics",
  security = "security",
  fraudPrevention = "fraudPrevention",
}

export type Configuration = {
  cssFramework: "tailwind" | "classes";
  tailwindConfig: TailwindConfig;
  entityName: string;
  entityWebsite: string;
  entityAddress: string;
  supportEmail: string;
  privacyEmail: string;
  privacyLastUpdated: string;
  tosLastUpdated: string;
  platforms: ("web" | "mobile")[];
  locations: ("us" | "eu" | "uk")[];
  entityLocation: string;
  underEighteen: boolean;
  underThirteen: boolean;
  socialSignIn: boolean;
  purchasableGoods: boolean;
  subscription: boolean;
  freeTrial: boolean;
  autoRenew: boolean;
  refundPolicy: "none" | "full" | "prorata";
  userContent: boolean;
  userContentLicense: boolean;
  userAccounts: boolean;
  governingLaw: string;
  disputeResolution: "arbitration" | "litigation";
  mediation: boolean;
  prohibitedUses: ProhibitedUses[];
  serviceSLA: boolean;
  serviceSLAAmount: number;
  serviceSLATimeframe?: string;
  serviceSLARefund: boolean;
  serviceSLARefundType: "full" | "prorata";
  serviceSLACustom?: string;
  liabilityLimitation: boolean;
  liabilityLimitationType: "amount_paid" | "amount" | "minAmountPaidOrAmount";
  liabilityLimitationTimeframe?: string;
  liabilityLimitationAmount: number;
  personalInformation: PersonalInformation[];
  sensitiveInformation: SensitiveInformation[];
  thirdPartyData: ThirdPartyData[];
  paymentData: boolean;
  paymentProcessors: string[];
  appUsageData: boolean;
  thirdPartyDisclosure: boolean;
  thirdPartyDisclosureEntities: string[];
  thirdPartySharing: boolean;
  thirdPartySharingEntities: string[];
  securityMeasures: boolean;
  webTracking: boolean;
  thirdPartyAnalytics: boolean;
  serviceRequirements: ServiceRequirements[];
  legalBasis: LegalBasis[];
  dataRetentionPeriod?: string;
  usStatePrivacyLaws: boolean;
  privacyPage?: string;
  dpo: boolean;
  dpoName?: string;
  dpoEmail?: string;
  dpoPhone?: string;
};

export const DefaultConfiguration: Configuration = {
  cssFramework: "tailwind",
  tailwindConfig: {
    headingColor: "text-gray-800",
    bodyColor: "text-gray-600",
    linkColor: "text-blue-500",
  },
  entityName: "",
  entityWebsite: "",
  entityAddress: "",
  supportEmail: "",
  privacyEmail: "",

  privacyLastUpdated: new Date().toISOString(),
  tosLastUpdated: new Date().toISOString(),

  platforms: ["web"],
  locations: ["us", "eu", "uk"],
  entityLocation: "us",
  underEighteen: false,
  underThirteen: false,
  socialSignIn: false,

  purchasableGoods: false,
  subscription: false,
  freeTrial: false,
  autoRenew: false,
  refundPolicy: "none",
  userContent: false,
  userContentLicense: false,
  userAccounts: false,
  governingLaw: "California",
  disputeResolution: "litigation",
  mediation: false,
  prohibitedUses: [],
  serviceSLA: false,
  serviceSLAAmount: 0,
  serviceSLATimeframe: undefined,
  serviceSLARefund: false,
  serviceSLARefundType: "full",
  serviceSLACustom: undefined,

  liabilityLimitation: false,
  liabilityLimitationType: "amount",
  liabilityLimitationTimeframe: undefined,
  liabilityLimitationAmount: 0,

  personalInformation: [],
  sensitiveInformation: [],
  thirdPartyData: [],
  paymentData: false,
  paymentProcessors: [],
  appUsageData: false,
  thirdPartyDisclosure: false,
  thirdPartyDisclosureEntities: [],
  thirdPartySharing: false,
  thirdPartySharingEntities: [],
  securityMeasures: false,
  webTracking: false,
  thirdPartyAnalytics: false,
  serviceRequirements: [],
  legalBasis: [],
  dataRetentionPeriod: undefined,
  usStatePrivacyLaws: false,
  privacyPage: undefined,
  dpo: false,
  dpoName: undefined,
  dpoEmail: undefined,
  dpoPhone: undefined,
};
