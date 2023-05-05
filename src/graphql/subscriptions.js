/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDeliveryPerson = /* GraphQL */ `
  subscription OnCreateDeliveryPerson(
    $filter: ModelSubscriptionDeliveryPersonFilterInput
  ) {
    onCreateDeliveryPerson(filter: $filter) {
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
export const onUpdateDeliveryPerson = /* GraphQL */ `
  subscription OnUpdateDeliveryPerson(
    $filter: ModelSubscriptionDeliveryPersonFilterInput
  ) {
    onUpdateDeliveryPerson(filter: $filter) {
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
export const onDeleteDeliveryPerson = /* GraphQL */ `
  subscription OnDeleteDeliveryPerson(
    $filter: ModelSubscriptionDeliveryPersonFilterInput
  ) {
    onDeleteDeliveryPerson(filter: $filter) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onCreateCustomer(filter: $filter) {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onUpdateCustomer(filter: $filter) {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onDeleteCustomer(filter: $filter) {
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
export const onCreateCart = /* GraphQL */ `
  subscription OnCreateCart($filter: ModelSubscriptionCartFilterInput) {
    onCreateCart(filter: $filter) {
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
export const onUpdateCart = /* GraphQL */ `
  subscription OnUpdateCart($filter: ModelSubscriptionCartFilterInput) {
    onUpdateCart(filter: $filter) {
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
export const onDeleteCart = /* GraphQL */ `
  subscription OnDeleteCart($filter: ModelSubscriptionCartFilterInput) {
    onDeleteCart(filter: $filter) {
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
export const onCreateDish = /* GraphQL */ `
  subscription OnCreateDish($filter: ModelSubscriptionDishFilterInput) {
    onCreateDish(filter: $filter) {
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
export const onUpdateDish = /* GraphQL */ `
  subscription OnUpdateDish($filter: ModelSubscriptionDishFilterInput) {
    onUpdateDish(filter: $filter) {
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
export const onDeleteDish = /* GraphQL */ `
  subscription OnDeleteDish($filter: ModelSubscriptionDishFilterInput) {
    onDeleteDish(filter: $filter) {
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
export const onCreateHomemaker = /* GraphQL */ `
  subscription OnCreateHomemaker(
    $filter: ModelSubscriptionHomemakerFilterInput
  ) {
    onCreateHomemaker(filter: $filter) {
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
export const onUpdateHomemaker = /* GraphQL */ `
  subscription OnUpdateHomemaker(
    $filter: ModelSubscriptionHomemakerFilterInput
  ) {
    onUpdateHomemaker(filter: $filter) {
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
export const onDeleteHomemaker = /* GraphQL */ `
  subscription OnDeleteHomemaker(
    $filter: ModelSubscriptionHomemakerFilterInput
  ) {
    onDeleteHomemaker(filter: $filter) {
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
