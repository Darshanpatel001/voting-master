import { all, call, put, takeLatest } from "redux-saga/effects";
import { delete_connection, delete_election, delete_party, delete_voter, get_connection, get_election, get_party, get_voter, get_voting, post_connection, post_election, post_party, post_voter, post_voting } from "../use/api";
import { DELETE_ELECTION_ERROR, DELETE_ELECTION_PENDING, DELETE_ELECTION_SUCCESS, DELETE_Party_ERROR, DELETE_Party_PENDING, DELETE_Party_SUCCESS, DELETE_VOTE_ERROR, DELETE_VOTE_PENDING, DELETE_VOTE_SUCCESS,  DELETE_connection_ERROR,  DELETE_connection_PENDING,  DELETE_connection_SUCCESS,  GET_ELECTION_ERROR, GET_ELECTION_PENDING, GET_ELECTION_SUCCESS, GET_Party_ERROR, GET_Party_PENDING, GET_Party_SUCCESS, GET_VOTE_ERROR, GET_VOTE_PENDING, GET_VOTE_SUCCESS, GET_VOTING_ERROR, GET_VOTING_PENDING, GET_VOTING_SUCCESS, GET_connection_ERROR, GET_connection_PENDING, GET_connection_SUCCESS, POST_ELECTION_ERROR, POST_ELECTION_PENDING, POST_ELECTION_SUCCESS, POST_Party_ERROR, POST_Party_PENDING, POST_Party_SUCCESS, POST_VOTE_ERROR, POST_VOTE_PENDING, POST_VOTE_SUCCESS, POST_VOTING_ERROR, POST_VOTING_PENDING, POST_VOTING_SUCCESS, POST_connection_ERROR, POST_connection_PENDING, POST_connection_SUCCESS } from "../use/action";

//party post
function* handle_post_party(action) {
    // console.log(action, "action from handle post party");
    try {
        let { data, status } = yield call(post_party, action);
        // console.log(data, status, "data and status from handle post party");
        if (status == 201 || status == 200) {
            yield put({ type: POST_Party_SUCCESS, data })
        } else {
            yield put({ type: POST_Party_ERROR, data })
        }
    }
    catch (error) {
        yield put({ type: POST_Party_ERROR, data: error })
    }
}

//party get
function* handle_get_party(action) {
    // console.log(action, "action from handle get party");
    try {
        let { data, status } = yield call(get_party, action);
        // console.log(data, status, "data and status from handle get party");
        if (status == 200) {
            yield put({ type: GET_Party_SUCCESS, data })
        } else {
            yield put({ type: GET_Party_ERROR, data })
        }
    }
    catch (error) {
        yield put({ type: GET_Party_ERROR, data: error })
    }
}

//party delete
function* handle_delete_party(action) {
    // console.log(action, "action from handle delete party");
    try {
        let { data, status } = yield call(delete_party, action);
        // console.log(data, status, "data and status from handle delete party");
        if (status == 200) {
            yield put({ type: DELETE_Party_SUCCESS, data: action.payload })
        } else {
            yield put({ type: DELETE_Party_ERROR, data })
        }
    } catch (error) {
        yield put({ type: DELETE_Party_ERROR, data: error })
    }
}


//election post
function* handle_post_election(action) {
    // console.log(action, "action from handle post election");
    try {
        let { data, status } = yield call(post_election, action);
        // console.log(data, status, "data and status from handle post election");
        if (status == 201 || status == 200) {
            yield put({ type: POST_ELECTION_SUCCESS, data })
        } else {
            yield put({ type: POST_ELECTION_ERROR, data })
        }
    } catch (error) {
        yield put({ type: POST_ELECTION_ERROR, data: error });
    }
}


//election get
function* handle_get_election(action) {
    // console.log(action, "action from handle get election");
    try {
        let { data, status } = yield call(get_election, action);
        // console.log(data, status, "data and status from handle get election");
        if (status == 200) {
            yield put({ type: GET_ELECTION_SUCCESS, data })
        } else {
            yield put({ type: GET_ELECTION_ERROR, data })
        }
    } catch (error) {
        yield put({ type: GET_ELECTION_ERROR, data: error })
    }
}


//election delete
function* handle_delete_election(action) {
    // console.log(action, "action from handle delete election");
    try {
        let { data, status } = yield call(delete_election, action);
        // console.log(data, status, "data and status from handle delete election");
        if (status == 200) {
            yield put({ type: DELETE_ELECTION_SUCCESS, data: action.payload })
        } else {
            yield put({ type: DELETE_ELECTION_ERROR, data })
        }
    } catch (error) {
        yield put({ type: DELETE_ELECTION_ERROR, data: error })
    }
}

// voter post

function* handle_post_voter(action) {
    // console.log(action, "action from handle post voter");
    try {
        let { data, status } = yield call(post_voter, action);
        // console.log(data, status, "data and status from handle post voter");
        if (status == 201 || status == 200) {
            yield put({ type: POST_VOTE_SUCCESS, data })
        } else {
            yield put({ type: POST_VOTE_ERROR, data })
        }
    } catch (error) {
        yield put({ type: POST_VOTE_ERROR, data: error });
    }
}

//voter get
function* handle_get_voter(action) {
    // console.log(action, "action from handle get voter");
    try {
        let { data, status } = yield call(get_voter, action);
        // console.log(data, status, "data and status from handle get party");
        if (status == 200) {
            yield put({ type: GET_VOTE_SUCCESS, data })
        } else {
            yield put({ type: GET_VOTE_ERROR, data })
        }
    }
    catch (error) {
        yield put({ type: GET_VOTE_ERROR, data: error })
    }
}

//voter delete
function* handle_delete_voter(action) {
    // console.log(action, "action from handle delete voter");
    try {
        let { data, status } = yield call(delete_voter, action);
        // console.log(data, status, "data and status from handle delete voter");
        if (status == 200) {
            yield put({ type: DELETE_VOTE_SUCCESS, data: action.payload })
        } else {
            yield put({ type: DELETE_VOTE_ERROR, data })
        }
    } catch (error) {
        yield put({ type: DELETE_VOTE_ERROR, data: error })
    }
}

//post connection

function* handle_post_connection(action) {
    // console.log(action, "action from handle post connection");
    try {
        let { data, status } = yield call(post_connection, action);
        // console.log(data, status, "data and status from handle post connection");
        if (status == 201 || status == 200) {
            yield put({ type: POST_connection_SUCCESS, data })
        } else {
            yield put({ type: POST_connection_ERROR, data })
        }
    } catch (error) {
        yield put({ type: POST_connection_ERROR, data: error });
    }
}

//get connection

function* handle_get_connection(action) {
    // console.log(action, "action from handle get connection");
    try {
        let { data, status } = yield call(get_connection, action);
        // console.log(data, status, "data and status from handle get connection");
        if (status == 200) {
            yield put({ type: GET_connection_SUCCESS, data })
        } else {
            yield put({ type: GET_connection_ERROR, data })
        }
    }
    catch (error) {
        yield put({ type: GET_connection_ERROR, data: error })
    }
}

function* handle_delete_connection(action) {
    // console.log(action, "action from handle delete voter");
    try {
        let { data, status } = yield call(delete_connection, action);
        // console.log(data, status, "data and status from handle delete voter");
        if (status == 200) {
            yield put({ type: DELETE_connection_SUCCESS, data: action.payload })
        } else {
            yield put({ type: DELETE_connection_ERROR, data })
        }
    } catch (error) {
        yield put({ type: DELETE_connection_ERROR, data: error })
    }
}

//voting post
function* handle_post_voting(action) {
    // console.log(action, "action from handle post voting");
    try {
        let { data, status } = yield call(post_voting, action);
        // console.log(data, status, "data and status from handle post voting");
        if (status == 200 || status == 201) {
            yield put({ type: POST_VOTING_SUCCESS, data })
        } else {
            yield put({ type: POST_VOTING_ERROR, data })
        }
    } catch (error) {
        yield put({ type: POST_VOTING_ERROR, data: error })
    }
}

//voting get
function* handle_get_voting(action) {
    // console.log(action, "action from handle get voting");
    try {
        let { data, status } = yield call(get_voting, action);
        // console.log(data, status, "data and status from handle get voting");
        if (status == 200) {
            yield put({ type: GET_VOTING_SUCCESS, data });
        } else {
            yield put({ type: GET_VOTING_ERROR, data })
        }
    } catch (error) {
        yield put({ type: GET_VOTING_ERROR, data: error })
    }
}



//party
function* handle_post_party_saga() {
    yield takeLatest(POST_Party_PENDING, handle_post_party);
}

function* handle_get_party_saga() {
    yield takeLatest(GET_Party_PENDING, handle_get_party)
}

function* handle_delete_party_saga() {
    yield takeLatest(DELETE_Party_PENDING, handle_delete_party)
}


//election 
function* handle_post_election_saga() {
    yield takeLatest(POST_ELECTION_PENDING, handle_post_election)
}

function* handle_get_election_saga() {
    yield takeLatest(GET_ELECTION_PENDING, handle_get_election)
}

function* handle_delete_election_saga() {
    yield takeLatest(DELETE_ELECTION_PENDING, handle_delete_election)
}

//voter

function* handle_post_voter_saga() {
    yield takeLatest(POST_VOTE_PENDING, handle_post_voter)
}
function* handle_get_voter_saga() {
    yield takeLatest(GET_VOTE_PENDING, handle_get_voter)
}
function* handle_delete_voter_saga() {
    yield takeLatest(DELETE_VOTE_PENDING, handle_delete_voter)
}

//connection
function* handle_post_connection_saga() {
    yield takeLatest(POST_connection_PENDING, handle_post_connection)
}

function* handle_get_connection_saga() {
    yield takeLatest(GET_connection_PENDING, handle_get_connection)
}

function* handle_delete_connection_saga() {
    yield takeLatest(DELETE_connection_PENDING, handle_delete_connection)
}

//voting
function* handle_post_voting_saga() {
    yield takeLatest(POST_VOTING_PENDING, handle_post_voting)
}

function* handle_get_voting_saga() {
    yield takeLatest(GET_VOTING_PENDING, handle_get_voting)
}

function* rootSaga() {
    yield all([handle_post_party_saga(), handle_get_party_saga(), handle_delete_party_saga(), handle_post_election_saga(), handle_get_election_saga(), handle_delete_election_saga(), handle_post_voter_saga(), handle_get_voter_saga(), handle_delete_voter_saga(), handle_post_connection_saga(), handle_get_connection_saga(), handle_delete_connection_saga(),handle_post_voting_saga(),
    handle_get_voting_saga()
    ])
}

export default (rootSaga)