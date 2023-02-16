import { ThunkAction } from 'redux-thunk';
import { AppDispatch, RootState } from '..';
import { AuthAction, USER_ACTION_TYPES } from './user.types';
import firebase from '../../utils/firebase/firebase';

// Set loading
export const setLoading = (value: boolean): ThunkAction<void, RootState, null, AuthAction> => {
    return dispatch => {
      dispatch({
        type: USER_ACTION_TYPES.SET_LOADING,
        payload: value
      });
    }
}

// export const signin = (data: SignInData, onError: () => void): ThunkAction<void, RootState, null, AuthAction> => {
//     return async dispatch => {
//         try {
//             //await firebase.auth().signInWithPhoneNumber(data.phone, verifier);

//         } catch (err: any) {
//             console.error(err);
//             onError();
//             dispatch(seterror(err.message));
//         }
//     }
// }

export const seterror = (msg: string): ThunkAction<void, RootState, null, AuthAction> => {
    return dispatch => {
        dispatch({
            type: USER_ACTION_TYPES.SET_ERROR,
            payload: msg
        })
    }
}

export const getUserDataByLogin = (id: string): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        //todo: get data from backend about user
        dispatch({
            type: USER_ACTION_TYPES.SET_USER,
            payload: id            
        });
    }
}

export const signout = (): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
      try {
        dispatch(setLoading(true));
        await firebase.auth().signOut();
        dispatch({
            type: USER_ACTION_TYPES.SIGN_OUT,
            payload: true
        });
      } catch (err) {
        console.log(err);
        dispatch(setLoading(false));
      }
    }
  }