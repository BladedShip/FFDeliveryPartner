import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum Orderstatus {
  PLACED = "PLACED",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
  PREPARING = "PREPARING",
  READY_FOR_DELIVERY = "READY_FOR_DELIVERY",
  DELIVERING = "DELIVERING",
  DELIVERED = "DELIVERED"
}



type EagerDeliveryPerson = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DeliveryPerson, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fname: string;
  readonly lname?: string | null;
  readonly sub?: string | null;
  readonly lat: string;
  readonly long: string;
  readonly transportation?: string | null;
  readonly Cart?: Cart | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly deliveryPersonCartId?: string | null;
}

type LazyDeliveryPerson = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DeliveryPerson, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fname: string;
  readonly lname?: string | null;
  readonly sub?: string | null;
  readonly lat: string;
  readonly long: string;
  readonly transportation?: string | null;
  readonly Cart: AsyncItem<Cart | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly deliveryPersonCartId?: string | null;
}

export declare type DeliveryPerson = LazyLoading extends LazyLoadingDisabled ? EagerDeliveryPerson : LazyDeliveryPerson

export declare const DeliveryPerson: (new (init: ModelInit<DeliveryPerson>) => DeliveryPerson) & {
  copyOf(source: DeliveryPerson, mutator: (draft: MutableModel<DeliveryPerson>) => MutableModel<DeliveryPerson> | void): DeliveryPerson;
}

type EagerOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Cart?: Cart | null;
  readonly Homemaker?: Homemaker | null;
  readonly Customer?: Customer | null;
  readonly status: Orderstatus | keyof typeof Orderstatus;
  readonly DeliveryPerson?: DeliveryPerson | null;
  readonly dishname?: string | null;
  readonly dishimage?: string | null;
  readonly customername?: string | null;
  readonly deliverystatus?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderCartId?: string | null;
  readonly orderHomemakerId?: string | null;
  readonly orderCustomerId?: string | null;
  readonly orderDeliveryPersonId?: string | null;
}

type LazyOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Cart: AsyncItem<Cart | undefined>;
  readonly Homemaker: AsyncItem<Homemaker | undefined>;
  readonly Customer: AsyncItem<Customer | undefined>;
  readonly status: Orderstatus | keyof typeof Orderstatus;
  readonly DeliveryPerson: AsyncItem<DeliveryPerson | undefined>;
  readonly dishname?: string | null;
  readonly dishimage?: string | null;
  readonly customername?: string | null;
  readonly deliverystatus?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderCartId?: string | null;
  readonly orderHomemakerId?: string | null;
  readonly orderCustomerId?: string | null;
  readonly orderDeliveryPersonId?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

type EagerCustomer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Customer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fname: string;
  readonly lname?: string | null;
  readonly email?: string | null;
  readonly phone: string;
  readonly lat?: string | null;
  readonly long?: string | null;
  readonly sub?: string | null;
  readonly Cart?: Cart | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly customerCartId?: string | null;
}

type LazyCustomer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Customer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fname: string;
  readonly lname?: string | null;
  readonly email?: string | null;
  readonly phone: string;
  readonly lat?: string | null;
  readonly long?: string | null;
  readonly sub?: string | null;
  readonly Cart: AsyncItem<Cart | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly customerCartId?: string | null;
}

export declare type Customer = LazyLoading extends LazyLoadingDisabled ? EagerCustomer : LazyCustomer

export declare const Customer: (new (init: ModelInit<Customer>) => Customer) & {
  copyOf(source: Customer, mutator: (draft: MutableModel<Customer>) => MutableModel<Customer> | void): Customer;
}

type EagerCart = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cart, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Customer?: Customer | null;
  readonly Dishes?: Dish | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly cartCustomerId?: string | null;
  readonly cartDishesId?: string | null;
}

type LazyCart = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cart, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Customer: AsyncItem<Customer | undefined>;
  readonly Dishes: AsyncItem<Dish | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly cartCustomerId?: string | null;
  readonly cartDishesId?: string | null;
}

export declare type Cart = LazyLoading extends LazyLoadingDisabled ? EagerCart : LazyCart

export declare const Cart: (new (init: ModelInit<Cart>) => Cart) & {
  copyOf(source: Cart, mutator: (draft: MutableModel<Cart>) => MutableModel<Cart> | void): Cart;
}

type EagerDish = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dish, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly homemakerID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDish = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dish, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly homemakerID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Dish = LazyLoading extends LazyLoadingDisabled ? EagerDish : LazyDish

export declare const Dish: (new (init: ModelInit<Dish>) => Dish) & {
  copyOf(source: Dish, mutator: (draft: MutableModel<Dish>) => MutableModel<Dish> | void): Dish;
}

type EagerHomemaker = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Homemaker, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly lat: number;
  readonly long: number;
  readonly Dishes?: (Dish | null)[] | null;
  readonly sub?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHomemaker = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Homemaker, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly lat: number;
  readonly long: number;
  readonly Dishes: AsyncCollection<Dish>;
  readonly sub?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Homemaker = LazyLoading extends LazyLoadingDisabled ? EagerHomemaker : LazyHomemaker

export declare const Homemaker: (new (init: ModelInit<Homemaker>) => Homemaker) & {
  copyOf(source: Homemaker, mutator: (draft: MutableModel<Homemaker>) => MutableModel<Homemaker> | void): Homemaker;
}