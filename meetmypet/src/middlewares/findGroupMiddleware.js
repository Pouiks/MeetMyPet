import axios from 'axios';
import { FETCH_DATA_GROUP, saveGroup, JOIN_GROUP, groupJoined } from '../actions/findGroup';
import {
    setLoadingState,
  } from '../actions/spinner';

import { baseURL } from '../config';
const findGroupMiddleware = (store) => (next) => (action) => {
  //console.log('DEBUG MIDDLEWARE FINDGROUp :', action);
  switch (action.type) {

    case FETCH_DATA_GROUP :
        store.dispatch(setLoadingState(true));
        const { name } = store.getState().findGroup;
        //console.log('JE SUIS NAME', name)

        axios.post(`${baseURL}/group`, name)
        .then((result) => {
            store.dispatch(setLoadingState(false));
            store.dispatch(saveGroup(result.data));
            
            console.log(result);
          })
          .catch((error) => {
            console.error("JE SUIS ERROR", error);
            store.dispatch(setLoadingState(false));
          })
        next(action);
        break;

    case JOIN_GROUP :
      store.dispatch(setLoadingState(true));
      // J'ai la possibilité de récupérer la valeur de group_id passé depuis la fonction onSubmit de groupCard !
      axios.post(`${baseURL}/group/join/${action.group_id}`, {}, { withCredentials: true })
        .then((result) => {
          store.dispatch(setLoadingState(false));
          store.dispatch(groupJoined(true));
          alert("Vous etes maintenant membre du groupe")
          console.log(result);
        })
        .catch((error) => {
          console.error("JE SUIS ERROR", error);
          store.dispatch(setLoadingState(false));
        })
        next(action);
        break;
    default:
      next(action);
      break;
  }
  };
  
  export default findGroupMiddleware;