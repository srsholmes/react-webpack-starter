import { LOCATION_CHANGE } from 'react-router-redux';

export default function routeReducer(state = {}, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      console.log('Route Change, do something')
      return state;
    default:
      return state;
  }
}
