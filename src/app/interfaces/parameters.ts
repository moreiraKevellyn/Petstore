export interface Parameters {
    company_name: string;
    trademark: string;
    email: string;
    address: string;
    address_complement: string;
    city: string;
    states: string;
    zip_code: string;
    social_networks: Array<SocialNetwork>;
    phones: Array<Phone>
}

export interface SocialNetwork {
    account: string;
    name: string;
}

export interface Phone {
    type: string;
    number: string;
    country_code: string;
}
