// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Orderstatus = {
  "PLACED": "PLACED",
  "ACCEPTED": "ACCEPTED",
  "REJECTED": "REJECTED",
  "PREPARING": "PREPARING",
  "READY_FOR_DELIVERY": "READY_FOR_DELIVERY",
  "DELIVERING": "DELIVERING",
  "DELIVERED": "DELIVERED"
};

const { DeliveryPerson, Order, Customer, Cart, Dish, Homemaker } = initSchema(schema);

export {
  DeliveryPerson,
  Order,
  Customer,
  Cart,
  Dish,
  Homemaker,
  Orderstatus
};