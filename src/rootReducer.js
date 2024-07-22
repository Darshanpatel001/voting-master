import { combineReducers } from "redux";
import { partyReducer, electionReducer, voterReducer, connectionReducer, votingReducer } from "./use/reducer";

let rootReducers = combineReducers({
    partyReducer,
    electionReducer,
    voterReducer,
    connectionReducer,
    votingReducer,
});

export default rootReducers;