import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
  },
  handleIndicator: {
    backgroundColor: "grey",
    width: 100,
  },
  handleIndicatorContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  routeDetailsText: {
    fontSize: 25,
    letterSpacing: 1,
  },
  deliveryDetailsContainer: {
    paddingHorizontal: 20,
  },
  restaurantName: {
    fontSize: 25,
    letterSpacing: 1,
    paddingVertical: 20,
  },
  addressContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
    justifyContent:"space-between",
    marginTop:15
  },
  addressText: {
    fontSize: 16,
    color: "grey",
    fontWeight: "500",
    letterSpacing: 0.5,
  },
  orderDetailsContainer: {
    borderTopWidth: 1,
    borderColor: "lightgrey",
    paddingTop: 20,
    alignSelf: "center",
    width:280
  },
  orderDetailsText: {
    fontSize: 24,
    color: "black",
    fontWeight: "500",
    letterSpacing: 0.5,
    marginBottom: 10,
    textAlign: "center",
  },
  orderItemText: {
    fontSize: 18,
    color: "grey",
    fontWeight: "500",
    letterSpacing: 0.5,
    marginBottom: 5,
  },
  orderItemImage: {
    width: 100,
    height: 100,
    margin:6,
    borderRadius: 10,
    alignSelf: "center",
    marginBottom:20
  },
  buttonContainer: {
    marginTop: "auto",
    marginVertical: 30,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    paddingVertical: 15,
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0.5,
  },
});
