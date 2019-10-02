import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import { ADD_NEWLINK,
    ADD_NEWLINK_SUCCESS,
    NewLinkFailure,
    TOGGLE_NEWLINK,
    DELETE_NEWLINK,
    FETCH_NEWLINK, 
    loadedNewLink} from '../actions/newLink'

function* getAllNewLink () {
  try {
    const res = yield call(fetch, 'v1/newLink')
    const newlink = yield res.json()
    yield put(loadedNewLink(newlink))
  } catch (e) {
    yield put(NewLinkFailure(e.message))
  }
}

function* saveNewLink (action) {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify(action.newlink),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }

    const res = yield call(fetch, 'v1/newLink', options)
    const newlink = yield res.json()
    yield put(ADD_NEWLINK_SUCCESS(newlink))
  } catch (e) {
    yield put(NewLinkFailure(e.message))
  }
}

function* deleteNewLink (action) {
  try {
    yield call(fetch, `v1/newLink/${action.id}`, { method: 'DELETE' })
  } catch (e) {
    yield put(NewLinkFailure(e.message))
  }
}

function* updateNewLink (action) {
  try {
    yield call(fetch, `v1/newLink/${action.id}`, { method: 'POST' })
  } catch (e) {
    yield put(NewLinkFailure(e.message))
  }
}

function* newLinkSagas() {
  yield takeLatest(FETCH_NEWLINK, getAllNewLink)
  yield takeLatest(ADD_NEWLINK, saveNewLink);
  yield takeLatest(DELETE_NEWLINK, deleteNewLink);
  yield takeEvery(TOGGLE_NEWLINK, updateNewLink);
}

export default newLinkSagas;