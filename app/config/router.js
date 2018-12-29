import React from 'react'
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator
} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons';

import Contacts from '../screens/Contacts'
import Details from '../screens/Details'
import NewContact from '../screens/NewContact'
import Me from '../screens/Me';

export const ContactsStack = createAppContainer(createStackNavigator({
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      title: 'Contacts'
    }
  },
  Details: {
    screen: Details,
    navigationOptions: {
      title: 'Details'
    }
  }
}))

export const NewContactStack = createAppContainer(createStackNavigator({
  NewContact: {
    screen: NewContact,
    navigationOptions: {
      headerTitle: "New Contact"
    }
  }
}))

export const MeStack = createAppContainer(createStackNavigator({
  Me: {
    screen: Me,
    navigationOptions: {
      headerTitle: "Me"
    }
  }
}))

export const Tabs = createAppContainer(createBottomTabNavigator({
  Constants: {
    screen: ContactsStack,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <Icon name="ios-list" size={35} color={tintColor} />
    }
  },
  NewContact: {
    screen: NewContactStack,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <Icon name="ios-add" size={35} color={tintColor} />
    }
  },
  Me: {
    screen: MeStack,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <Icon name="ios-contact" size={35} color={tintColor} />
    }
  }
}))

export const Drawer = createAppContainer(createDrawerNavigator({
  Contacts: {
    screen: ContactsStack,
    navigationOptions: {

    }
  },
  NewContact: {
    screen: NewContactStack,
    navigationOptions: {

    }
  },
  Me: {
    screen: MeStack,
    navigationOptions: {

    }
  }
}))
