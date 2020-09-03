import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Main from './pages/Main'
import AddTask from './pages/AddTask'

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
      AddTask
    }, {
      initialRouteName: 'Main',
      backBehavior: 'history'
    }
  )
)

export default Routes
