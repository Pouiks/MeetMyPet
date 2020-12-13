import axios from 'axios';
import {
  UPDATE_INFO_USER,
  UPDATE_INFO_ANIMAL,
  FETCH_DATA_PROFIL_USER,
  FETCH_DATA_PROFIL_ANIMAL,
  saveDataUser,
  saveDataAnimal,
  saveSucess,
} from '../actions/profil';
// import {  } from '../actions/loginModal'
import {
    setLoadingState,
  } from '../actions/spinner';

  import {
    changeIsFlipped
  } from '../actions/signUp'

import { baseURL } from '../config';

const profilMiddleware = (store) => (next) => (action) => {
  // J'ai besoin de user_id dans 2 CASE (FetchDataProfilUser et UpdateInfoUser) et le problème est que je peux pas déclarer 2 fois la même variable..
  // Donc je la déclare ici comme ça je suis pas embêté
  const { user_id, animal_id } = store.getState().loginModal;
  switch (action.type) {
    case FETCH_DATA_PROFIL_USER :
        // store.dispatch(setLoadingState());
        
        axios.get(`${baseURL}/account/${user_id}`)
        .then((result) => {
          // store.dispatch(setLoadingState());
            store.dispatch(saveDataUser(result.data))
            console.log('JE SUIS RESULT PROFIL ', result);
            // next(action)
          })
          .catch((error) => {
            console.error(error);
            store.dispatch(setLoadingState());
          })
        next(action);
        break;

    case FETCH_DATA_PROFIL_ANIMAL :
          axios.get(`${baseURL}/animal/${animal_id}`)
          .then((result) => {
              
              store.dispatch(saveDataAnimal(result.data))
              // store.dispatch(setLoadingState(false));
              console.log('JE SUIS RESULT PROFIL_ANIMAL ', result);
              // next(action)
            })
            .catch((error) => {
              console.error(error);
              store.dispatch(setLoadingState());
            })
          next(action);
          break;

    case UPDATE_INFO_USER :
        // store.dispatch(setLoadingState(true));
        const { user } = store.getState().profil
        // console.log
        axios.put(`${baseURL}/account/${user_id}`, user, { withCredentials: true })
        .then((result) => {
            // store.dispatch(setLoadingState(false));
            store.dispatch(changeIsFlipped())
            console.log(result);
          })
          .catch((error) => {
            console.error("TENTATIVE PUT USER", error);
            // store.dispatch(setLoadingState());
          })
        next(action);
        break;

        case UPDATE_INFO_ANIMAL :
          const { animal } = store.getState().profil;
            // store.dispatch(setLoadingState());

            axios.put(`${baseURL}/animal/${animal_id}`, animal, { withCredentials: true })
            .then((result) => {
                // store.dispatch(setLoadingState());
                store.dispatch(saveSucess(result.data))
                console.log(result.data);
              })
              .catch((error) => {
                console.error("TENTATIVE PUT ANIMAL", error);
                // store.dispatch(setLoadingState());
              })
            next(action);
            break;
    default:
      next(action);
      break;
  }
  };
  
  export default profilMiddleware;