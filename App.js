import "react-native-gesture-handler";
import * as React from "react";
import MainContainer from "./navigation/MainContainer";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <MainContainer />
    </AuthContextProvider>
  );
}

export default App;
