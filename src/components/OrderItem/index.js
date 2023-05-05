import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { API, graphqlOperation } from "aws-amplify";

const OrderItem = ({ order }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={{
        flexDirection: "row",
        margin: 10,
        borderColor: "#3FC060",
        borderWidth: 2,
        borderRadius: 12,
      }}
      onPress={() => {navigation.navigate("OrderDelivery", { id:order.id })}}
    >
      <View style={{ flex: 1, marginLeft: 10, paddingVertical: 5 }}>
        <Text style={{ fontSize: 18, fontWeight: "500" }}>
          {order.Homemaker.name}
        </Text>
        <Text style={{ color: "grey" }}>{order.Homemaker.address}</Text>
        <Text style={{ marginTop: 10 }}>Delivery Details:</Text>
        <Text style={{ color: "grey" }}>
          {order.Customer.fname} {order.Customer.lname}
        </Text>
        <Text style={{ color: "grey" }}>{order.Customer.phone}</Text>
        <Text style={{ color: "black" }}>{order.Customer.address}</Text>
      </View>
    </Pressable>
  );
};

export default OrderItem;
