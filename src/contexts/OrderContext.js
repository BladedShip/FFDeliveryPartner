import { createContext, useEffect, useState, useContext } from "react";

import { API, graphqlOperation } from "aws-amplify";

import { useAuthContext } from "./AuthContext";
import { updateOrder } from "../graphql/mutations";
import { Orderstatus } from "../models";

const OrderContext = createContext({});

const OrderProvider = ({ children }) => {
  const { dbCourier } = useAuthContext();

  const [order, setOrder] = useState();
  const [user, setUser] = useState();
  const [dishes, setDishes] = useState();

  const fetchOrder = async (id) => {
    if (!id) {
      setOrder(null);
      return;
    }
    await API.graphql(
      graphqlOperation(`
        query MyQuery {
            listOrders(filter: {id: {eq: "${id}"}}) {
              items {
                id
                deliverystatus
                status
                orderDeliveryPersonId
                _version
                Cart {
                  Dishes {
                    name
                    price
                    image
                  }
                }
                Customer {
                  fname
                  lname
                  lat
                  long
                  phone
                  id
                }
                Homemaker {
                  name
                  address
                  lat
                  long
                  id
                }
              }
            }
          }
          
        `)
    ).then((res) => {
      setOrder(res.data.listOrders.items[0]);
      setUser(res.data.listOrders.items[0].Customer);
      setDishes(res.data.listOrders.items[0].Cart.Dishes);
    });
  };

  const acceptOrder = async (id) => {
    await API.graphql(
      graphqlOperation(updateOrder, {
        input: {
          id: id,
          status: Orderstatus.READY_FOR_DELIVERY,
          orderDeliveryPersonId: dbCourier.id,
          _version: order._version,
        },
      })
    ).then((res) => {
      // TODO: Add a toast here
      console.log(res);
    });
  };

  const pickupOrder = async (id) => {
    await API.graphql(
      graphqlOperation(updateOrder, {
        input: {
          id: id,
          status: Orderstatus.DELIVERING,
          orderDeliveryPersonId: dbCourier.id,
          _version: order._version,
        },
      })
    ).then((res) => {
      // TODO: Add a toast here
      console.log(res);
    });
  };

  const deliverOrder = async (id) => {
    await API.graphql(
      graphqlOperation(updateOrder, {
        input: {
          id: id,
          status: Orderstatus.DELIVERED,
          orderDeliveryPersonId: dbCourier.id,
          _version: order._version,
        },
      })
    ).then((res) => {
      // TODO: Add a toast here
      console.log(res);
    });
  };

  return (
    <OrderContext.Provider
      value={{
        fetchOrder,
        order,
        user,
        dishes,
        acceptOrder,
        pickupOrder,
        deliverOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => useContext(OrderContext);

export default OrderProvider;
