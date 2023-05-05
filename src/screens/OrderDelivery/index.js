import { useRef, useMemo, useEffect, useState } from "react";
import {
  View,
  Text,
  useWindowDimensions,
  Image,
  Button,
} from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import {
  FontAwesome5,
  Fontisto,
} from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import MapViewDirections from "react-native-maps-directions";
import { useNavigation, useRoute } from "@react-navigation/native";

import { useOrderContext } from "../../contexts/OrderContext";
import styles from "./styles";

const OrderDelivery = () => {
  const {
    order,
    user,
    dishes,
    fetchOrder,
    acceptOrder,
    pickupOrder,
    deliverOrder,
  } = useOrderContext();
  const route = useRoute();

  useEffect(() => {
    const id = route.params?.id;
    fetchOrder(id);
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (!status === "granted") {
        console.log("Nonono");
        return;
      }

      let location = await Location.getCurrentPositionAsync();
      setDriverLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();

    const foregroundSubscription = Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.High,
        distanceInterval: 100,
      },
      (updatedLocation) => {
        setDriverLocation({
          latitude: updatedLocation.coords.latitude,
          longitude: updatedLocation.coords.longitude,
        });
      }
    );
  }, []);

  const bottomSheetRef = useRef(null);
  const mapRef = useRef(null);
  const { width, height } = useWindowDimensions();

  const [driverLocation, setDriverLocation] = useState(null);
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [totalKm, setTotalKm] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [pickedUp, setPickedUp] = useState(false);
  const [delivered, setDelivered] = useState(false);

  const snapPoints = useMemo(() => ["12%", "95%"], []);
  const navigation = useNavigation();

  const homemakerLocation = {
    latitude: order?.Homemaker.lat.toString(),
    longitude: order?.Homemaker.long.toString(),
  };

  const customerLocation = {
    latitude: order?.Customer.lat,
    longitude: order?.Customer.long,
  };

  return (
    <View style={styles.container}>
      {driverLocation && order && (
        <MapView
          ref={mapRef}
          style={{ width, height }}
          showsUserLocation
          followsUserLocation
          initialRegion={{
            latitude: driverLocation?.latitude,
            longitude: driverLocation?.longitude,
            latitudeDelta: 0.07,
            longitudeDelta: 0.07,
          }}
        >
          <MapViewDirections
            origin={driverLocation}
            destination={
              accepted && !pickedUp ? homemakerLocation : customerLocation
            }
            waypoints={!accepted ? [homemakerLocation] : []}
            apikey={"AIzaSyCfzpKaDvjGCRpMgIU4yaijm_MYCjQL-9E"}
            strokeWidth={6}
            strokeColor="#3FC060"
            onReady={(result) => {
              setTotalMinutes(result.duration);
              setTotalKm(result.distance);
            }}
          />
          {/* TODO: Markers not Working */}
  
          {/* <Marker
          coordinate={customerLocation}
          title={order?.Customer.fname}
          description={order?.Customer.address}
        >
          <View
            style={{ backgroundColor: "green", padding: 5, borderRadius: 20 }}
          >
            <FontAwesome5 name="home" size={24} color="black" />
          </View>
        </Marker>
        <Marker
          coordinate={{
            latitude: order?.Homemaker.lat,
            longitude: order?.Homemaker.long,
          }}
          title={order?.Homemaker.name}
          description={order?.Homemaker.address}
        >
          <View
            style={{ backgroundColor: "red", padding: 5, borderRadius: 20 }}
          >
            <FontAwesome5 name="home" size={24} color="black" />
          </View>
        </Marker> */}
        </MapView>
      )}
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        handleIndicatorStyle={styles.handleIndicator}
      >
        <View style={styles.handleIndicatorContainer}>
          <Text style={styles.routeDetailsText}>
            {totalMinutes.toFixed(0)} min
          </Text>
          <FontAwesome5
            name="shopping-bag"
            size={30}
            color="#3FC060"
            style={{ marginHorizontal: 10 }}
          />
          <Text style={styles.routeDetailsText}>{totalKm.toFixed(2)} km</Text>
        </View>
        {order && (
          <View style={styles.deliveryDetailsContainer}>
            <View style={styles.addressContainer}>
              <Fontisto name="shopping-store" size={22} color="grey" />
              <Text style={styles.addressText}>
                {order.Homemaker.name}
                {", "}
                {order.Homemaker.address}
              </Text>
            </View>
            <View style={styles.addressContainer}>
              <FontAwesome5 name="map-marker-alt" size={30} color="grey" />
              <Text style={styles.addressText}>
                {order.Customer?.fname} {order.Customer?.lname}
                {", "}
                {order.Customer?.phone}
              </Text>
            </View>
          </View>
        )}
        {dishes && (
          <View>
            <View style={styles.orderDetailsContainer}>
              <Text style={styles.orderDetailsText}>Order Details</Text>
              <Image
                source={{ uri: dishes.image }}
                style={styles.orderItemImage}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.orderItemText}>
                  {dishes.name} x 1{dishes.quantity}
                </Text>
                <Text style={styles.orderItemText}>₹{dishes.price}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.orderItemText}>GST+ Delivery</Text>
                <Text style={styles.orderItemText}>₹50</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 24 }}>Total:</Text>
                <Text style={{ fontWeight: "bold", fontSize: 24 }}>
                  ₹{dishes.price + 50}
                </Text>
              </View>
              {/* <View style={styles.addressContainer}>
                <Text style={styles.addressText}>
                  From:{"\n"}
                  <Text style={{ color: "black", fontWeight: "bold" }}>
                    {order?.Homemaker.name}
                    {", "}
                    {"\n"}
                    {order?.Homemaker.address}
                  </Text>
                </Text>
                <Text style={styles.addressText}>
                  To: {"\n"}
                  <Text style={{ color: "black", fontWeight: "bold" }}>
                    {order?.Customer.fname} {order?.Customer.lname}
                    {", "}
                    {"\n"}
                    {order?.Customer.phone}
                  </Text>
                </Text>
              </View> */}
            </View>
          </View>
        )}
        {order && (
          <View style={{ gap: 16, marginTop: 26 }}>
            <Button
              onPress={() => {
                acceptOrder(order.id);
                setAccepted(true);
                fetchOrder(order.id);
                bottomSheetRef.current.collapse();
              }}
              title="Accept Order"
              disabled={accepted}
              color="#3FC060"
            />
            <Button
              onPress={() => {
                pickupOrder(order.id);
                setPickedUp(true);
                fetchOrder(order.id);
                bottomSheetRef.current.collapse();
              }}
              title="Order Picked Up"
              disabled={(!accepted && !pickedUp) || pickedUp}
            />
            <Button
              onPress={() => {
                deliverOrder(order.id);
                setDelivered(true);
                fetchOrder(order.id);
              }}
              title="Order Delivered"
              disabled={(!pickedUp && !delivered) || delivered}
            />
          </View>
        )}
        {delivered && (
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                textAlign: "center",
                color: "#3FC060",
                marginBottom: 20,
              }}
            >
              Order Delivered!
            </Text>
            <Button
              title="Return to Orders"
              color="#3FC060"
              onPress={() => {
                navigation.navigate("Orders");
              }}
            />
          </View>
        )}
      </BottomSheet>
    </View>
  );
};

export default OrderDelivery;