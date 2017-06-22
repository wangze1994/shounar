import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import theme from '../Constants/theme'

import MainPage from '../Pages/MainPage'
import MinePage from '../Pages/MinePage'

import LoginPage from '../Pages/User/LoginPage'
import RegisterPage from '../Pages/User/RegisterPage'
import OtherLoginPage from '../Pages/User/OtherLoginPage'
import AccountInfoPage from '../Pages/User/AccountInfoPage'
import FeedbackPage from '../Pages/User/FeedbackPage'
import EditSpacePage from '../Pages/Goods/EditSpacePage'

const Tab = TabNavigator(
  {
    Home: {
      screen: MainPage
    },
    Mine: {
      screen: MinePage
    }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    lazy: true,
    tabBarOptions: {
      activeTintColor: theme.userHeader,
      inactiveTintColor: '#979797',
      style: { backgroundColor: '#ffffff' }
    }
  }
)

const routeConfiguration = {
  MainTab: {
    screen: Tab
  },
  Login: {
    screen: LoginPage
  },
  OtherLogin: {
    screen: OtherLoginPage
  },
  Register: {
    screen: RegisterPage
  },
  AccountInfo: {
    screen: AccountInfoPage
  },
  Feedback: {
    screen: FeedbackPage
  },
  EditSpace: {
    screen: EditSpacePage,
    navigationOptions: ({navigation}) => ({
      header: null
    })
  }
}

const stackConfiguration = {
  initialRouteName: 'EditSpace'
}

export const MainStackNavigation = StackNavigator(routeConfiguration, stackConfiguration)
