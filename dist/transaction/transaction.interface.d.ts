export declare enum PaymentPurposeEnum {
    ENDORSEMENT = "Promote Campagin Endorsements",
    VIEWS = "Promote Campagin views",
    APPLICANT_REGISTRATION = "New Applicant Registration"
}
export interface TransactionPaymentResponse {
    status: boolean;
    message: string;
    data: {
        id: number;
        domain: 'test' | 'live';
        status: string;
        reference: string;
        amount: number;
        message: any;
        paid_at: Date;
        created_at: Date;
        currency: string;
        channel: string;
        metadata: {
            name: string;
            purpose: PaymentPurposeEnum;
            numberOfViews?: number;
            numberOfEndorsements?: number;
            key: string;
            custom_fields: CustomField[];
            referrer: string;
        };
    };
}
interface CustomField {
    display_name: string;
    value: string;
    variable_name: string;
}
export {};
