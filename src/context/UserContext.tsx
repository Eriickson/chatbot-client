import Router from "next/router";
import { createContext, Context, useState, useContext, useEffect } from "react";
import { axiosService } from "../config/axios";

interface UserContext {
  isAuth: boolean;
  user: User;
  registerUser(newUser: User): Promise<void>;
  authenticateUser(payload: AuthenticateUserPayload): Promise<void>;
}

const UserContext = createContext<UserContext | null>(null) as Context<
  UserContext
>;

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState({} as User);
  const [isAuth, setIsAuth] = useState(false);

  async function registerUser(newUser: User) {
    try {
      const response = axiosService.post("/api/user/register", newUser);

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  async function authenticateUser(payload: AuthenticateUserPayload) {
    try {
      const { data } = await axiosService.post(
        "/api/user/authenticate",
        payload
      );

      setUser(data.user);
      setIsAuth(true);

      Router.push("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <UserContext.Provider
      value={{ registerUser, authenticateUser, user, isAuth }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser, UserContext };
