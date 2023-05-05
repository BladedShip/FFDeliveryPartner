import {
  View,
  Text,
  TextInput,
  Alert,
  Pressable,
  TouchableOpacity
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { API, graphqlOperation, Auth } from "aws-amplify";
import * as Location from "expo-location";

import { useAuthContext } from "../../contexts/AuthContext";
import { createDeliveryPerson, updateDeliveryPerson } from "../../graphql/mutations";

const ProfileScreen = () => {
  const { authUser, dbCourier, sub, setDbCourier } = useAuthContext();

  const [fname, setFName] = useState(dbCourier?.fname || "");
  const [lname, setLName] = useState(dbCourier?.lname || "");
  const [transport, setTransport] = useState("BIKE");
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (!status === "granted") {
        console.log("Nonono");
        return;
      }

      let location = await Location.getCurrentPositionAsync();
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  const newDeliveryPartner = async () => {
    try {
      await API.graphql(
        graphqlOperation(createDeliveryPerson, {
          input: {
            fname: fname,
            lname: lname,
            sub: sub,
            lat: location.latitude.toString(),
            long: location.longitude.toString(),
            transportation: transport,
          },
        })
      ).then(res => setDbCourier(res.data.createDeliveryPerson));
    } catch (e) {
      Alert.alert("Error", e.message);
    }
  };

//   const updateDeliveryPartner = async () => {
//     try {
//     await API.graphql(
//         graphqlOperation(updateDeliveryPerson,{
//             input: {
//                 fname: fname,
//                 lname: lname,
//                 sub: sub,
//                 lat: location.latitude.toString(),
//                 long: location.longitude.toString(),
//                 transportation: transport,
//             },
//                 sub: sub,
//         })
//     )
//     } catch (e) {
//       Alert.alert("Error", e.message);
//     }
//   };

  const onSave = async () => {
        await newDeliveryPartner();
  };

  return (
    <SafeAreaView>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
          margin: 10,
        }}
      >
        Profile
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 16,
          color: "gray",
        }}
      >
        Deliver Partner
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 16,
          marginTop: 36,
        }}
      >
        Choose your Vehicle
      </Text>
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <Pressable
          style={{
            backgroundColor: transport === "BICYCLE" ? "#3FC060" : "white",
            padding: 10,
            margin: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "gray",
          }}
          onPress={() => setTransport("BICYCLE")}
        >
          <MaterialIcons
            name="pedal-bike"
            size={40}
            color={transport === "BICYCLE" ? "white" : "grey"}
          />
        </Pressable>
        <Pressable
          style={{
            backgroundColor: transport === "BIKE" ? "#3FC060" : "white",
            padding: 10,
            margin: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "gray",
          }}
          onPress={() => setTransport("BIKE")}
        >
          <MaterialIcons
            name="motorcycle"
            size={40}
            color={transport === "BIKE" ? "white" : "grey"}
          />
        </Pressable>
        <Pressable
          style={{
            backgroundColor: transport === "CAR" ? "#3FC060" : "white",
            padding: 10,
            margin: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "gray",
          }}
          onPress={() => setTransport("CAR")}
        >
          <FontAwesome5
            name="car"
            size={40}
            color={transport === "CAR" ? "white" : "grey"}
          />
        </Pressable>
      </View>
      <View style={{ alignSelf: "center" }}>
        <Text style={{ marginTop: 20, textAlign: "center" }}>
          Enter Your Name
        </Text>
        <TextInput
          value={fname}
          onChangeText={setFName}
          placeholder="First Name"
          style={{
            margin: 10,
            backgroundColor: "white",
            padding: 15,
            borderRadius: 5,
            borderColor: "gray",
            borderWidth: 1,
            width: 300,
          }}
        />
      </View>
      <View style={{ alignSelf: "center" }}>
        <TextInput
          value={lname}
          onChangeText={setLName}
          placeholder="Last Name"
          style={{
            margin: 10,
            backgroundColor: "white",
            padding: 15,
            borderRadius: 5,
            borderColor: "gray",
            borderWidth: 1,
            width: 300,
          }}
        />
      </View>
      <Pressable
        style={{
          alignSelf: "center",
        }}
        onPress={onSave}
      >
        <View
          style={{
            margin: 10,
            backgroundColor: "#3FC060",
            padding: 15,
            borderRadius: 5,
            width: 300,
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>Save</Text>
        </View>
      </Pressable>
      <TouchableOpacity
        style={{
          alignSelf: "center",
          marginTop: 128,
        }}
        // onPress={Auth.signOut()}
      >
        <View
          style={{
            margin: 10,
            backgroundColor: "#FF5964",
            padding: 15,
            borderRadius: 5,
            width: 300,
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>Logout</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;
