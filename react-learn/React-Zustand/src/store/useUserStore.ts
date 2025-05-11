import { create } from "zustand";
import { postLogin } from "../mock/auth";
interface UserStoreType {
  info: UserInfo;
  token: UserToken;
  handleLogin: (username: string, password: string) => Promise<boolean>;
}

interface UserToken {
  accessToken: string | undefined;
  refreshToken: string | undefined;
}
interface UserInfo {
  uid: string | undefined;
  name: string | undefined;
}

const useUserStore = create<UserStoreType>((set) => ({
  info: {
    uid: undefined,
    name: undefined,
  },
  token: {
    accessToken: undefined,
    refreshToken: undefined,
  },
  handleLogin: async (username, password) => {
    const { status, accessToken, refreshToken } = postLogin(username, password);
    if(status !== 200) return false;
    set((state) => {
        if(username !== undefined && accessToken!== undefined && refreshToken !== undefined){
            return {
                ...state,
                info: {
                    ...state.info,
                    name: username
                },
                token: {
                    ...state.token,
                    refreshToken: refreshToken.toString(),
                    accessToken: accessToken.toString()
                }
            };
        }
        return state;
    })
    
    return true;
  },
}));

export default useUserStore;
