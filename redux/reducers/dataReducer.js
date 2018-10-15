import {NavigationActions } from 'react-navigation'
import Navigator from '../components/Nav'
const initialAction = { type: NavigationActions.Init }

const initialState = Navigator.router.getStateForAction(initialAction)


const dataReducer = (state=initialState, action)=>{
    return Navigator.router.getStateForAction(action, state)

}
export default dataReducer