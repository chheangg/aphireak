import axios from "./axiosClient";
import { InitResponse, TokenResponse } from "../types";

interface AuthAccount {
  username: string,
  password: string,
}

export const checkIsInit = async () => axios.get<InitResponse>('/is-init')
export const signUpServer = async (account : AuthAccount) => axios.post('/sign-up', account)
export const signInServer = async (account : AuthAccount) => axios.post<TokenResponse>('/login', account)