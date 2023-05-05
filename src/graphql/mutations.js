/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDeliveryPerson = /* GraphQL */ `
  mutation CreateDeliveryPerson(
    $input: CreateDeliveryPersonInput!
    $condition: ModelDeliveryPersonConditionInput
  ) {
    createDeliveryPerson(input: $input, condition: $condition) {
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
export const updateDeliveryPerson = /* GraphQL */ `
  mutation UpdateDeliveryPerson(
    $input: UpdateDeliveryPersonInput!
    $condition: ModelDeliveryPersonConditionInput
  ) {
    updateDeliveryPerson(input: $input, condition: $condition) {
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
export const deleteDeliveryPerson = /* GraphQL */ `
  mutation DeleteDeliveryPerson(
    $input: DeleteDeliveryPersonInput!
    $condition: ModelDeliveryPersonConditionInput
  ) {
    deleteDeliveryPerson(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
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
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
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
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
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
export const createCart = /* GraphQL */ `
  mutation CreateCart(
    $input: CreateCartInput!
    $condition: ModelCartConditionInput
  ) {
    createCart(input: $input, condition: $condition) {
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
export const updateCart = /* GraphQL */ `
  mutation UpdateCart(
    $input: UpdateCartInput!
    $condition: ModelCartConditionInput
  ) {
    updateCart(input: $input, condition: $condition) {
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
export const deleteCart = /* GraphQL */ `
  mutation DeleteCart(
    $input: DeleteCartInput!
    $condition: ModelCartConditionInput
  ) {
    deleteCart(input: $input, condition: $condition) {
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
export const createDish = /* GraphQL */ `
  mutation CreateDish(
    $input: CreateDishInput!
    $condition: ModelDishConditionInput
  ) {
    createDish(input: $input, condition: $condition) {
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
export const updateDish = /* GraphQL */ `
  mutation UpdateDish(
    $input: UpdateDishInput!
    $condition: ModelDishConditionInput
  ) {
    updateDish(input: $input, condition: $condition) {
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
export const deleteDish = /* GraphQL */ `
  mutation DeleteDish(
    $input: DeleteDishInput!
    $condition: ModelDishConditionInput
  ) {
    deleteDish(input: $input, condition: $condition) {
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
export const createHomemaker = /* GraphQL */ `
  mutation CreateHomemaker(
    $input: CreateHomemakerInput!
    $condition: ModelHomemakerConditionInput
  ) {
    createHomemaker(input: $input, condition: $condition) {
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
export const updateHomemaker = /* GraphQL */ `
  mutation UpdateHomemaker(
    $input: UpdateHomemakerInput!
    $condition: ModelHomemakerConditionInput
  ) {
    updateHomemaker(input: $input, condition: $condition) {
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
export const deleteHomemaker = /* GraphQL */ `
  mutation DeleteHomemaker(
    $input: DeleteHomemakerInput!
    $condition: ModelHomemakerConditionInput
  ) {
    deleteHomemaker(input: $input, condition: $condition) {
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
