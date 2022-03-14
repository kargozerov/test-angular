export interface IUser {
    avatar_url: string;
    login: string;
}

export interface IUserList {
    items: IUser[];
}