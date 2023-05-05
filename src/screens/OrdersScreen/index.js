import { useRef, useMemo, useState, useEffect } from "react";
import { View, Text, useWindowDimensions, Button } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import MapView, { Marker } from "react-native-maps";
import { Entypo } from "@expo/vector-icons";
import { API, graphqlOperation } from "aws-amplify";
import { Auth } from "aws-amplify";

import OrderItem from "../../components/OrderItem";

const OrdersScreen = () => {
  const bottomSheetRef = useRef(null);
  const [orders, setOrders] = useState([]);
  const { width, height } = useWindowDimensions();

  const snapPoints = useMemo(() => ["16%", "85%"], []);

  const queryReady = async () => {
    await API.graphql(
      graphqlOperation(`query MyQuery {
        listOrders(filter: {status: {eq: ACCEPTED}, and: {deliverystatus: {attributeExists: false}}}) {
          items {
            id
            deliverystatus
            status
            Customer {
              id
              fname
              lname
              lat
              long
              phone
            }
            Homemaker {
              id
              name
              address
              lat
              long
            }
          }
        }
      }      
    `)
    ).then((res) => setOrders(res.data.listOrders.items));
  };

  useEffect(() => {
    queryReady();
    setInterval(() => {
      queryReady();
    }, 5000);
  }, []);

  return (
    <View style={{ backgroundColor: "lightblue", flex: 1 }}>
      <MapView style={{ width, height }} showsUserLocation followsUserLocation>
        {orders.map((order) => (
          <Marker
            key={order.id}
            title={order.Homemaker.name}
            description={order.Homemaker.address}
            coordinate={{
              latitude: order.Homemaker.lat,
              longitude: order.Homemaker.long,
            }}
          >
            <View
              style={{ backgroundColor: "green", padding: 5, borderRadius: 20 }}
            >
              <Entypo name="shop" size={24} color="white" />
            </View>
          </Marker>
        ))}
      </MapView>
      <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints}>
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "green",
              letterSpacing: 0.5,
              paddingBottom: 5,
            }}
          >
            You're Online
          </Text>
          <Text style={{ letterSpacing: 0.5, color: "grey" }}>
            Available Orders:{orders.length}
          </Text>
        </View>
        <BottomSheetFlatList
          data={orders}
          renderItem={({ item }) => <OrderItem order={item} />}
        />
        <Button title="Logout" onPress={() => Auth.signOut()} />
      </BottomSheet>
    </View>
  );
};

export default OrdersScreen;
