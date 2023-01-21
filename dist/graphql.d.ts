export interface CampaignInput {
    id?: Nullable<string>;
    title?: Nullable<string>;
    video?: Nullable<string>;
    image?: Nullable<string>;
    aim?: Nullable<string>;
    target?: Nullable<string>;
    body?: Nullable<string>;
    slug?: Nullable<string>;
    status?: Nullable<string>;
    author?: Nullable<string>;
    addedFrom?: Nullable<string>;
}
export interface EndorsementInput {
    campaign?: Nullable<string>;
    body?: Nullable<string>;
}
export interface EnvInput {
    id?: Nullable<string>;
    name?: Nullable<string>;
    value?: Nullable<string>;
    isPrivate?: Nullable<boolean>;
}
export interface CreateOrgInput {
    name: string;
    email: string;
    phone: string;
    description: string;
    website: string;
}
export interface UpdateInput {
    name: string;
    linkedIn: string;
    facebook: string;
    orgId: string;
    email: string;
    phone: string;
    instagram: string;
    twitter: string;
    country: string;
    state: string;
    city: string;
    website: string;
}
export interface UploadImageInput {
    uploadImage: string;
    orgId: string;
}
export interface CreateOperator {
    userId: string;
    role: string;
    orgId: string;
}
export interface DeleteOperator {
    orgId: string;
    userId: string;
}
export interface UserInput {
    id?: Nullable<string>;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    createdAt?: Nullable<Date>;
    isActive?: Nullable<boolean>;
    name?: Nullable<string>;
}
export interface Campaign {
    id?: Nullable<string>;
    title?: Nullable<string>;
    image?: Nullable<string>;
    excerpt?: Nullable<string>;
    aim?: Nullable<string>;
    target?: Nullable<string>;
    body?: Nullable<string>;
    slug?: Nullable<string>;
    status?: Nullable<string>;
    authorId?: Nullable<string>;
    authorName?: Nullable<string>;
    authorImg?: Nullable<string>;
    createdAt?: Nullable<Date>;
    updatedAt?: Nullable<Date>;
    addedFrom?: Nullable<string>;
    numberOfPaidViewsCount?: Nullable<number>;
    numberOfPaidEndorsementCount?: Nullable<number>;
    endorsements?: Nullable<Nullable<Endorsement>[]>;
    likes?: Nullable<Nullable<string>[]>;
    promoted?: Nullable<boolean>;
    views?: Nullable<Nullable<string>[]>;
    category?: Nullable<string>;
    region?: Nullable<string>;
}
export interface View {
    user?: Nullable<string>;
}
export interface CampaignNotice {
    id?: Nullable<string>;
    action?: Nullable<string>;
    author?: Nullable<User>;
    data?: Nullable<Campaign>;
    createdAt?: Nullable<Date>;
    read?: Nullable<boolean>;
}
export interface IQuery {
    getCampaigns(limit?: Nullable<number>): Nullable<Nullable<Campaign>[]> | Promise<Nullable<Nullable<Campaign>[]>>;
    getCampaignsOtherRegion(limit?: Nullable<number>): Nullable<Nullable<Campaign>[]> | Promise<Nullable<Nullable<Campaign>[]>>;
    getCampaign(slug?: Nullable<string>): Nullable<Campaign> | Promise<Nullable<Campaign>>;
    myCampaign(): Nullable<Nullable<Campaign>[]> | Promise<Nullable<Nullable<Campaign>[]>>;
    getCampaignNotice(): Nullable<Nullable<CampaignNotice>[]> | Promise<Nullable<Nullable<CampaignNotice>[]>>;
    getActiveCampaigns(): Nullable<Nullable<Campaign>[]> | Promise<Nullable<Nullable<Campaign>[]>>;
    getActiveCampaignsOtherRegion(): Nullable<Nullable<Campaign>[]> | Promise<Nullable<Nullable<Campaign>[]>>;
    getEndorsementsByCampaign(campaign_id?: Nullable<string>): Nullable<Nullable<Endorsement>[]> | Promise<Nullable<Nullable<Endorsement>[]>>;
    getEndorsements(): Nullable<Nullable<Endorsement>[]> | Promise<Nullable<Nullable<Endorsement>[]>>;
    getEnvs(): Nullable<Nullable<Env>[]> | Promise<Nullable<Nullable<Env>[]>>;
    getEnv(id?: Nullable<string>): Nullable<Env> | Promise<Nullable<Env>>;
    getOrganzations(): Organization[] | Promise<Organization[]>;
    getOrganzation(id: string): Organization | Promise<Organization>;
    getUserOrganizations(id: string): Organization[] | Promise<Organization[]>;
    getUsers(search?: Nullable<string>, limit?: Nullable<number>, skip?: Nullable<number>, accountType?: Nullable<string>, role?: Nullable<string>): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    getStaffs(search?: Nullable<string>, limit?: Nullable<number>, skip?: Nullable<number>): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    me(token?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
    auth(): Nullable<User> | Promise<Nullable<User>>;
    getUser(id?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
    getStaff(id?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
    getLimitedUsers(limit?: Nullable<number>, skip?: Nullable<number>): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    countUsers(): Nullable<number> | Promise<Nullable<number>>;
    countLawyers(): Nullable<number> | Promise<Nullable<number>>;
    countPaidCases(): Nullable<number> | Promise<Nullable<number>>;
    searchUsers(text?: Nullable<string>): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    getLawyers(search?: Nullable<string>): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    getTopLawyers(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    getTopReps(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    getMyUsers(search?: Nullable<string>): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    seedUsers(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
}
export interface IMutation {
    addCampaign(input?: Nullable<CampaignInput>): Nullable<Campaign> | Promise<Nullable<Campaign>>;
    deleteCampaign(id?: Nullable<string>): Nullable<Campaign> | Promise<Nullable<Campaign>>;
    updateCampaign(input?: Nullable<CampaignInput>): Nullable<Campaign> | Promise<Nullable<Campaign>>;
    deleteAllCampNotice(): Nullable<boolean> | Promise<Nullable<boolean>>;
    createEndorsement(input?: Nullable<EndorsementInput>): Nullable<Endorsement> | Promise<Nullable<Endorsement>>;
    deleteEndorsement(id?: Nullable<string>): Nullable<Endorsement> | Promise<Nullable<Endorsement>>;
    createEnv(input?: Nullable<EnvInput>): Nullable<Env> | Promise<Nullable<Env>>;
    updateEnv(input?: Nullable<EnvInput>): Nullable<Env> | Promise<Nullable<Env>>;
    deleteEnv(id?: Nullable<string>): Nullable<Env> | Promise<Nullable<Env>>;
    createOrg(input: CreateOrgInput): Organization | Promise<Organization>;
    updateOrganization(input: UpdateInput): Organization | Promise<Organization>;
    updateImage(input: UploadImageInput): Organization | Promise<Organization>;
    addOperator(input: CreateOperator): Organization | Promise<Organization>;
    deleteOperator(input: DeleteOperator): Organization | Promise<Organization>;
    registerWithEmail(input?: Nullable<UserInput>): Nullable<User> | Promise<Nullable<User>>;
    loginWithEmail(email?: Nullable<string>, password?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
    deleteUser(id?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
    deleteManyUser(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    updateUser(input?: Nullable<UserInput>): Nullable<User> | Promise<Nullable<User>>;
}
export interface Endorsement {
    id?: Nullable<string>;
    author?: Nullable<User>;
    campaign?: Nullable<Campaign>;
    body?: Nullable<string>;
    likes?: Nullable<Nullable<string>[]>;
    createdAt?: Nullable<Date>;
    updatedAt?: Nullable<Date>;
}
export interface Env {
    id?: Nullable<string>;
    name?: Nullable<string>;
    value?: Nullable<string>;
    isPrivate?: Nullable<boolean>;
}
export interface Organization {
    _id: string;
    image: string;
    author: string;
    name: string;
    email: string;
    description: string;
    phone: string;
    followers: Nullable<string>[];
    following: Nullable<string>[];
    followersCount: number;
    followingCount: number;
    operators: Nullable<Ioperators>[];
    facebook: string;
    linkedIn: string;
    instagram: string;
    twitter: string;
    country: string;
    city: string;
    website: string;
}
export interface Ioperators {
    userId?: Nullable<string>;
    role?: Nullable<string>;
}
export interface File {
    filename: string;
    mimetype: string;
    encoding: string;
}
export interface User {
    id?: Nullable<string>;
    name?: Nullable<string>;
    accountType?: Nullable<string>;
    image?: Nullable<string>;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    otherName?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    emailToken?: Nullable<string>;
    emailVerified?: Nullable<boolean>;
    isActive?: Nullable<boolean>;
    country?: Nullable<string>;
    state?: Nullable<string>;
    city?: Nullable<string>;
    role?: Nullable<string>;
    phone?: Nullable<string>;
    address?: Nullable<string>;
    reps?: Nullable<Nullable<User>[]>;
    suppervisor?: Nullable<User>;
    orgOperating: string[];
    lastSeen?: Nullable<Date>;
    reportCount?: Nullable<number>;
    bankName?: Nullable<string>;
    accountNumber?: Nullable<string>;
    accountName?: Nullable<string>;
    createdAt?: Nullable<Date>;
    updatedAt?: Nullable<Date>;
    myUsers?: Nullable<Nullable<User>[]>;
}
export type Upload = any;
type Nullable<T> = T | null;
export {};
