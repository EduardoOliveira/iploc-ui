export interface Access {
  id: string;
  ip: string;
  latitude: number;
  longitude: number;
  count: number;
  lastSeen: number;
  shodanData: ShodanData;
  abuseIPDBData: AbuseIpdbData;
}

export interface ShodanData {
  ip: string;
  lastUpdated: number;
  latitude: number;
  longitude: number;
  ports: number[];
  regionCode: string;
  areaCode: any;
  postalCode: any;
  dmaCode: any;
  countryCode: string;
  organization: string;
  asn: string;
  city: string;
  isp: string;
  lastUpdate: string;
  countryCode3: any;
  countryName: string;
  ipStr: string;
  os: any;
  hostnames: string[];
  tags: any[];
  vulnerabilities: string[];
  totalVulnerabilities: number;
  banners: Banner[];
  totalBanners: number;
}

export interface Banner {
  port: number;
  ip: number;
  asn: string;
  data: string;
  ipStr: string;
  ipv6: string;
  timestamp: string;
  hostnames: string[];
  domains: string[];
  location: Location;
  options: Options;
  metadata: Metadata;
  sslInfo: SslInfo;
  uptime: number;
  link: string;
  title: string;
  html: string;
  product: string;
  version: string;
  isp: string;
  os: string;
  transport: string;
  deviceType: string;
  info: string;
  cpe: string[];
  sslEnabled: boolean;
}

export interface Location {
  areaCode: number;
  latitude: number;
  longitude: number;
  city: string;
  regionCode: string;
  postalCode: string;
  dmaCode: string;
  countryCode: string;
  countryCode3: string;
  countryName: string;
}

export interface Options {
  raw: string;
}

export interface Metadata {
  crawler: string;
  id: string;
  module: string;
}

export interface SslInfo {
  chain: any;
  versions: any;
  cipher: any;
  diffieHellmanParams: any;
}

export interface AbuseIpdbData {
  ip: any;
  lastUpdated: number;
  ipVersion: number;
  abuseConfidenceScore: number;
  countryCode: string;
  countryName: string;
  usageType: string;
  isp: string;
  domain: string;
  totalReports: number;
  numDistinctUsers: number;
  lastReportedAt: string;
  hostnames: string[];
  reportSummary: Map<string,ReportSummary>;
  reports: Report[];
  public: boolean;
  whitelisted: boolean;
  tor: boolean;
}

export interface Report {
  reportedAt: string;
  comment: string;
  categories: number[];
  reporterId: number;
  reporterCountryCode: string;
  reporterCountryName: string;
}

export interface ReportSummary {
  countryCode: string;
  categories: string[];
  latestReportedAt: string;
  totalReports: number;
}