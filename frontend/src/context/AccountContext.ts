import { createContext } from "react";
import { TokenResponse } from "../types";

export const AccountContext = createContext<TokenResponse>({ username: '', id: 0, token: '' });