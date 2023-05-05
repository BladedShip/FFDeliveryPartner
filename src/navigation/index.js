import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfileScreen from "../screens/ProfileScreen";
import OrdersScreen from "../screens/OrdersScreen";

import { useAuthContext } from "../contexts/AuthContext";
import OrderDelivery from "../screens/OrderDelivery";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { dbCourier } = useAuthContext();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {dbCourier ? (<>
        <Stack.Screen name="Orders" component={OrdersScreen} />
        <Stack.Screen name = "OrderDelivery" component = {OrderDelivery} />
      </>) : (<>
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </>)}
    </Stack.Navigator>
  );
};

export default Navigation;
