import { createMaterialTopTabNavigator } from 'react-navigation'
import { FavoriteRestoListScreen } from '../favorite-resto-list'
import { RestoListScreen } from '../resto-list'

export const MainScreenNav = createMaterialTopTabNavigator(
  {
    RestoList: {
      screen: RestoListScreen,
      navigationOptions: {
        title: 'Daftar Restaurant'
      }
    },
    FavoriteRestoList: {
      screen: FavoriteRestoListScreen,
      navigationOptions: {
        title: 'Restaurant Idola'
      }
    }
    
  },
  {
    initialRouteName: 'RestoList'
  }
)
