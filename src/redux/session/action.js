import * as types from './actionTypes'
import Firebase from '../../config/firebase'

export const restoreSession = () => {
    return (dispatch) => {
        dispatch(sessionRestoring())

        let unsubscribe = Firebase.auth()
            .onAuthStateChanged(user => {
                if (user) {
                    dispatch(sessionSuccess(user))
                    unsubscribe()
                } else {
                    dispatch(sessionLogout())
                    unsubscribe()
                }
            })
    }
}

export const loginUser = (email, password) => {
    return (dispatch) => {
        dispatch(sessionLoading())

        Firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => {
                dispatch(sessionError(error.message))
            })

        let unsubscribe = Firebase.auth()
            .onAuthStateChanged(user => {
                if (user) {
                    dispatch(sessionSuccess(user))
                    unsubscribe()
                }
            })
    }
}

export const signupUser = (data) => {
    return (dispatch) => {
        dispatch(sessionLoading())

        Firebase.auth()
            .createUserWithEmailAndPassword(data.email, data.psw)
            .catch(error => {
                dispatch(sessionError(error.message));
            })

        let unsubscribe = Firebase.auth()
            .onAuthStateChanged(user => {
                if (user) {
                    dispatch(sessionSuccess(user));
                    dispatch(updateUser(user.uid, data));
                    unsubscribe()

                }
            })
    }
}

export const updateUser = (uid, data) => {
    return (dispatch) => {
        let userMobilePath = "/user/" + uid + "/details";
        Firebase.database()
            .ref(userMobilePath)
            .set({ name: data.name, gender: data.gender, email: data.email }).catch(error => {
                dispatch(sessionError(error.message))
            })
    }
}

export const logoutUser = () => {
    return (dispatch) => {
        dispatch(sessionLoading())

        Firebase.auth()
            .signOut()
            .then(() => {
                dispatch(sessionLogout())
            })
            .catch(error => {
                dispatch(sessionError(error.message))
            })
    }
}

const sessionRestoring = () => ({
    type: types.SESSION_RESTORING
})

const sessionLoading = () => ({
    type: types.SESSION_LOADING
})

const sessionSuccess = user => ({
    type: types.SESSION_SUCCESS,
    user
})

const sessionError = error => ({
    type: types.SESSION_ERROR,
    error
})

const sessionLogout = () => ({
    type: types.SESSION_LOGOUT
})
