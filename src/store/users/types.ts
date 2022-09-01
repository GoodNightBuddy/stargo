export interface IUser {
  age: number;
  country: string;
  firstName: string;
  gender: string;
  id: string;
  lastName: string
}

export interface IUserState {
  users: IUser[];
  isLoading: boolean;
}
