export interface IUserState {
  user: IUser | null
}

export interface IUser {
  name: string,
  id: string,
  email: string
}