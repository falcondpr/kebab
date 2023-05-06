export interface IRegisterUser {
  fullname: string;
  email: string;
  username: string;
  password: string;
  confirmPassword?: string;
}

export interface ILoginUser {
  emailOrUsername: string;
  password: string;
}
