/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDeliveryPerson = /* GraphQL */ `
  query GetDeliveryPerson($id: ID!) {
    getDeliveryPerson(id: $id) {
      id
      fname
      lname
      sub
      lat
      long
      transportation
      Cart {
        id
        Customer {
          id
          fname
          lname
          email
          phone
          lat
          long
          sub
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          customerCartId
        }
        Dishes {
          id
          name
          price
          image
          description
          homemakerID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        cartDishesId
        cartCustomerId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      deliveryPersonCartId
    }
  }
`;
export const listDeliveryPeople = /* GraphQL */ `
  query ListDeliveryPeople(
    $filter: ModelDeliveryPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeliveryPeople(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fname
        lname
        sub
        lat
        long
        transportation
        Cart {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          cartDishesId
          cartCustomerId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        deliveryPersonCartId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDeliveryPeople = /* GraphQL */ `
  query SyncDeliveryPeople(
    $filter: ModelDeliveryPersonFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDeliveryPeople(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        fname
        lname
        sub
        lat
        long
        transportation
        Cart {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          cartDishesId
          cartCustomerId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        deliveryPersonCartId
      }
      nextToken
      startedAt
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      Cart {
        id
        Customer {
          id
          fname
          lname
          email
          phone
          lat
          long
          sub
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          customerCartId
        }
        Dishes {
          id
          name
          price
          image
          description
          homemakerID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        cartDishesId
        cartCustomerId
      }
      Homemaker {
        id
        name
        address
        lat
        long
        Dishes {
          nextToken
          startedAt
        }
        sub
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Customer {
        id
        fname
        lname
        email
        phone
        lat
        long
        sub
        Cart {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          cartDishesId
          cartCustomerId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        customerCartId
      }
      status
      DeliveryPerson {
        id
        fname
        lname
        sub
        lat
        long
        transportation
        Cart {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          cartDishesId
          cartCustomerId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        deliveryPersonCartId
      }
      dishname
      dishimage
      customername
      deliverystatus
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderCartId
      orderHomemakerId
      orderCustomerId
      orderDeliveryPersonId
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Cart {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          cartDishesId
          cartCustomerId
        }
        Homemaker {
          id
          name
          address
          lat
          long
          sub
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Customer {
          id
          fname
          lname
          email
          phone
          lat
          long
          sub
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          customerCartId
        }
        status
        DeliveryPerson {
          id
          fname
          lname
          sub
          lat
          long
          transportation
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          deliveryPersonCartId
        }
        dishname
        dishimage
        customername
        deliverystatus
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        orderCartId
        orderHomemakerId
        orderCustomerId
        orderDeliveryPersonId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Cart {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          cartDishesId
          cartCustomerId
        }
        Homemaker {
          id
          name
          address
          lat
          long
          sub
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Customer {
          id
          fname
          lname
          email
          phone
          lat
          long
          sub
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          customerCartId
        }
        status
        DeliveryPerson {
          id
          fname
          lname
          sub
          lat
          long
          transportation
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          deliveryPersonCartId
        }
        dishname
        dishimage
        customername
        deliverystatus
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        orderCartId
        orderHomemakerId
        orderCustomerId
        orderDeliveryPersonId
      }
      nextToken
      startedAt
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      id
      fname
      lname
      email
      phone
      lat
      long
      sub
      Cart {
        id
        Customer {
          id
          fname
          lname
          email
          phone
          lat
          long
          sub
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          customerCartId
        }
        Dishes {
          id
          name
          price
          image
          description
          homemakerID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        cartDishesId
        cartCustomerId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      customerCartId
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fname
        lname
        email
        phone
        lat
        long
        sub
        Cart {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          cartDishesId
          cartCustomerId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        customerCartId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCustomers = /* GraphQL */ `
  query SyncCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCustomers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        fname
        lname
        email
        phone
        lat
        long
        sub
        Cart {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          cartDishesId
          cartCustomerId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        customerCartId
      }
      nextToken
      startedAt
    }
  }
`;
export const getCart = /* GraphQL */ `
  query GetCart($id: ID!) {
    getCart(id: $id) {
      id
      Customer {
        id
        fname
        lname
        email
        phone
        lat
        long
        sub
        Cart {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          cartDishesId
          cartCustomerId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        customerCartId
      }
      Dishes {
        id
        name
        price
        image
        description
        homemakerID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      cartDishesId
      cartCustomerId
    }
  }
`;
export const listCarts = /* GraphQL */ `
  query ListCarts(
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Customer {
          id
          fname
          lname
          email
          phone
          lat
          long
          sub
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          customerCartId
        }
        Dishes {
          id
          name
          price
          image
          description
          homemakerID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        cartDishesId
        cartCustomerId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCarts = /* GraphQL */ `
  query SyncCarts(
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCarts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Customer {
          id
          fname
          lname
          email
          phone
          lat
          long
          sub
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          customerCartId
        }
        Dishes {
          id
          name
          price
          image
          description
          homemakerID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        cartDishesId
        cartCustomerId
      }
      nextToken
      startedAt
    }
  }
`;
export const getDish = /* GraphQL */ `
  query GetDish($id: ID!) {
    getDish(id: $id) {
      id
      name
      price
      image
      description
      homemakerID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listDishes = /* GraphQL */ `
  query ListDishes(
    $filter: ModelDishFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDishes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
        image
        description
        homemakerID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDishes = /* GraphQL */ `
  query SyncDishes(
    $filter: ModelDishFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDishes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        price
        image
        description
        homemakerID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const dishesByHomemakerID = /* GraphQL */ `
  query DishesByHomemakerID(
    $homemakerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDishFilterInput
    $limit: Int
    $nextToken: String
  ) {
    dishesByHomemakerID(
      homemakerID: $homemakerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        price
        image
        description
        homemakerID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getHomemaker = /* GraphQL */ `
  query GetHomemaker($id: ID!) {
    getHomemaker(id: $id) {
      id
      name
      address
      lat
      long
      Dishes {
        items {
          id
          name
          price
          image
          description
          homemakerID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      sub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listHomemakers = /* GraphQL */ `
  query ListHomemakers(
    $filter: ModelHomemakerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHomemakers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        lat
        long
        Dishes {
          nextToken
          startedAt
        }
        sub
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncHomemakers = /* GraphQL */ `
  query SyncHomemakers(
    $filter: ModelHomemakerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHomemakers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        address
        lat
        long
        Dishes {
          nextToken
          startedAt
        }
        sub
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
