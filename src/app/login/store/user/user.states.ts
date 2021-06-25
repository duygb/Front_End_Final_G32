export interface IUserLoginState {
    loading: boolean;
    success: boolean;
    fail: boolean;
    username: string;
}
export interface IUserState {
    login: IUserLoginState;
}