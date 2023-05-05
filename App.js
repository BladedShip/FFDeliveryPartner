import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";

import awsconfig from "./src/aws-exports";
import AuthProvider from "./src/contexts/AuthContext";
import Navigation from "./src/navigation";
import OrderProvider from "./src/contexts/OrderContext";

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
});

function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AuthProvider>
          <OrderProvider>
            <Navigation />
          </OrderProvider>
        </AuthProvider>
      </GestureHandlerRootView>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default withAuthenticator(App);
