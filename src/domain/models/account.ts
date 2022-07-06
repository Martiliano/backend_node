export interface AccountModel {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string[];
  phone: string;
  accessToken: string;
  createAt: Date;
  updateAt: Date;
}

export interface AccountModelInsert {
  name: string;
  email: string;
  password: string;
  role: string[];
  phone: string;
  createAt: Date;
  updateAt: Date;
}
