import axios from 'axios';
import {
    GET_DATA,
    displayDog,
    displayMarkers
} from '../actions/home';

import {
  setLoadingState,
} from '../actions/spinner';

import { baseURL } from '../config';


const homeMiddleware = (store) => (next) => (action) => {
  // console.log('JE PASE DANS MIDDLEWARE HOME')
    switch (action.type) {
      case GET_DATA:
        // store.dispatch(setLoadingState());
        // J'extrait la valeur des champs email et password depuis le sous objet settings du state
        // Ici je viens récupérer l'objet user dans le reducer signUp

        axios.get(`${baseURL}/home`)
  
          .then((result) => {
            store.dispatch(displayDog(result.data))
            store.dispatch(displayMarkers(result.data))
            // store.dispatch(setLoadingState());
            next(action);
          })
          .catch((error) => {
            console.error("JE SUIS ERROR DE MIDDLEWARE HOME", error);
            // store.dispatch(setLoadingState(false));
            console.log(error)
            // next(action);
          })
        // si je veux laisser passer l'action je n'oublie pas :
        next(action);
        break;
    default:
      // si je veux laisser passer l'action je n'oublie pas :
      next(action);
      break;
    }
  };
  
  export default homeMiddleware;