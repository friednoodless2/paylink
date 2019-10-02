import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import { ADD_RECIEVER_USER,
    ADD_RECIEVER_USER_SUCCESS,
    reciever_userFailure,
    TOGGLE_RECIEVER_USER,
    DELETE_RECIEVER_USER,
    FETCH_RECIEVER_USER, 
    loadedReciever_user} from '../actions/reciever_user'

function* getAllReciever_user () {
  try {
    const res = yield call(fetch, 'v1/reciever_user')
    const reciever_user = yield res.json()
    yield put(loadedReciever_user(reciever_user))
  } catch (e) {
    yield put(reciever_userFailure(e.message))
  }
}

function* saveReciever_user (action) {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify(action.reciever_user),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }

    const res = yield call(fetch, 'v1/reciever_user', options)
    const reciever_user = yield res.json()
    yield put(ADD_RECIEVER_USER_SUCCESS(reciever_user))
  } catch (e) {
    yield put(reciever_userFailure(e.message))
  }
}

function* deleteReciever_user (action) {
  try {
    yield call(fetch, `v1/reciever_user/${action.id}`, { method: 'DELETE' })
  } catch (e) {
    yield put(reciever_userFailure(e.message))
  }
}

function* updateReciever_user (action) {
  try {
    yield call(fetch, `v1/reciever_user/${action.id}`, { method: 'POST' })
  } catch (e) {
    yield put(reciever_userFailure(e.message))
  }
}

function* reciever_userSagas() {
  yield takeLatest(FETCH_RECIEVER_USER, getAllReciever_user)
  yield takeLatest(ADD_RECIEVER_USER, saveReciever_user);
  yield takeLatest(DELETE_RECIEVER_USER, deleteReciever_user);
  yield takeEvery(TOGGLE_RECIEVER_USER, updateReciever_user);
}

export default reciever_userSagas;