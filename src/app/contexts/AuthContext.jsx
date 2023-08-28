import { createContext, useState } from "react";

export const AuthContext = createContext({
  auth: undefined,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = function (props) {
  const { children } = props;
  const [auth, setAuth] = useState(undefined);

  //useEffect(() => {
  //(async () => {
  //const token = getToken();
  //if (token) {
  //const data = await getMe(token);
  //setAuth({ token, account: data });
  //}

  //if (!token) setAuth(null);
  //})();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  //}, []);

  const login = async (token) => {
    //setToken(token);
    //const data = await getMe(token);
    //setAuth({ token, account: data });
  };

  const logout = () => {
    //if (auth) {
    //removeToken();
    //setAuth(null);
    //}
  };

  const valueContext = {
    auth,
    login,
    logout,
  };

  //if (auth === undefined) return null;

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
};
