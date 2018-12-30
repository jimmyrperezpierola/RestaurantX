import { createMaterialTopTabNavigator } from 'react-navigation'
import { FavoriteRestoListScreen } from '../favorite-resto-list'
import { RestoListScreen } from '../resto-list'

export const MainScreenNav = createMaterialTopTabNavigator(
  {
    FavoriteRestoList: {
      screen: FavoriteRestoListScreen,
      navigationOptions: {
        title: 'Restaurant Idola'
      }
    },
    RestoList: {
      screen: RestoListScreen,
      navigationOptions: {
        title: 'Daftar Restaurant'
      }
    }
  },
  {
    initialRouteName: 'RestoList'
  }
)
