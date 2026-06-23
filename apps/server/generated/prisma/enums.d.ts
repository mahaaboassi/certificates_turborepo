export declare const Role: {
    readonly ADMIN: "ADMIN";
    readonly SUPERVISOR: "SUPERVISOR";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const CertificationStatus: {
    readonly ACCEPTED: "ACCEPTED";
    readonly UNDER_REVIEW: "UNDER_REVIEW";
    readonly REJECTED: "REJECTED";
};
export type CertificationStatus = (typeof CertificationStatus)[keyof typeof CertificationStatus];
