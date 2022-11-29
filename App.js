import "react-native-gesture-handler";
import * as React from "react";
import MainContainer from "./navigation/MainContainer";
import { AuthContextProvider } from "./context/AuthContext";
import { RootSiblingParent } from "react-native-root-siblings";

function App() {
  return (
    <RootSiblingParent>
      <AuthContextProvider>
        <MainContainer />
      </AuthContextProvider>
    </RootSiblingParent>
  );
}

export default App;
