import { createContext, useState } from 'submodule-1/node_modules/@types/react';

export const AuthContext = createContext(!null);

export const AuthProvider = ({ children }) => {
  const [userDataFromRegForm, setUserDataFromRegForm] = useState(null);

  let updateUserDataFromRegForm = (newUser) => {
    setUserDataFromRegForm(newUser);
  };

  let clearUserDataFromRegForm = () => {
    setUserDataFromRegForm(null);
  };

  let value = {
    userDataFromRegForm,
    updateUserDataFromRegForm,
    clearUserDataFromRegForm,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
