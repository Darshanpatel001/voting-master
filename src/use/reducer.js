import {
  DELETE_ELECTION_ERROR,
  DELETE_ELECTION_PENDING,
  DELETE_ELECTION_SUCCESS,
  DELETE_Party_ERROR,
  DELETE_Party_PENDING,
  DELETE_Party_SUCCESS,
  DELETE_VOTE_ERROR,
  DELETE_VOTE_PENDING,
  DELETE_VOTE_SUCCESS,
  DELETE_connection_ERROR,
  DELETE_connection_PENDING,
  DELETE_connection_SUCCESS,
  GET_ELECTION_ERROR,
  GET_ELECTION_PENDING,
  GET_ELECTION_SUCCESS,
  GET_Party_ERROR,
  GET_Party_PENDING,
  GET_Party_SUCCESS,
  GET_VOTE_ERROR,
  GET_VOTE_PENDING,
  GET_VOTE_SUCCESS,
  GET_VOTING_ERROR,
  GET_VOTING_PENDING,
  GET_VOTING_SUCCESS,
  GET_connection_ERROR,
  GET_connection_PENDING,
  GET_connection_SUCCESS,
  POST_ELECTION_ERROR,
  POST_ELECTION_PENDING,
  POST_ELECTION_SUCCESS,
  POST_Party_ERROR,
  POST_Party_PENDING,
  POST_Party_SUCCESS,
  POST_VOTE_ERROR,
  POST_VOTE_PENDING,
  POST_VOTE_SUCCESS,
  POST_VOTING_ERROR,
  POST_VOTING_PENDING,
  POST_VOTING_SUCCESS,
  POST_connection_ERROR,
  POST_connection_PENDING,
  POST_connection_SUCCESS,
} from "./action";

let initialstate = {
  party: [],
  election: [],
  voter: [],
  connection: [],
  voting: [],
  isLoading: false,
  isError: null,
};

let partyReducer = (state = initialstate, action) => {
  console.log(action, "action from partyreducer");
  switch (action.type) {
    //post
    case POST_Party_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case POST_Party_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        party: state.party.concat(action.data),
      };
    }
    case POST_Party_ERROR: {
      return {
        ...state,
        isError: action.data,
      };
    }
    //get all data
    case GET_Party_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_Party_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        party: action.data,
      };
    }
    case GET_Party_ERROR: {
      return {
        ...state,
        isError: action.data,
      };
    }
    // delete
    case DELETE_Party_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case DELETE_Party_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        party: state.party.filter((item) => item._id != action.data),
      };
    }
    case DELETE_Party_ERROR: {
      return {
        isLoading: false,
        isError: action.data,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

let electionReducer = (state = initialstate, action) => {
  console.log(action, "action from electionreducer");
  switch (action.type) {
    //post
    case POST_ELECTION_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case POST_ELECTION_ERROR: {
      return {
        ...state,
        isError: action.data,
      };
    }
    case POST_ELECTION_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        election: state.election.concat(action.data),
      };
    }
    //get
    case GET_ELECTION_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_ELECTION_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        election: action.data,
      };
    }
    case GET_ELECTION_ERROR: {
      return {
        ...state,
        isError: action.data,
      };
    }
    //delete
    case DELETE_ELECTION_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case DELETE_ELECTION_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        election: state.election.filter((item) => item._id != action.data),
      };
    }
    case DELETE_ELECTION_ERROR: {
      return {
        isLoading: false,
        isError: action.data,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

let voterReducer = (state = initialstate, action) => {
  console.log(action, "action from voterreducer");
  switch (action.type) {
    //post
    case POST_VOTE_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case POST_VOTE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        voter: state.voter.concat(action.data),
      };
    }
    case POST_VOTE_ERROR: {
      return {
        ...state,
        isError: action.data,
      };
    }
    //get
    case GET_VOTE_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_VOTE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        voter: action.data,
      };
    }
    case GET_VOTE_ERROR: {
      return {
        ...state,
        isError: action.data,
      };
    }
    //delete
    case DELETE_VOTE_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case DELETE_VOTE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        voter: state.voter.filter((item) => item._id != action.data),
      };
    }
    case DELETE_VOTE_ERROR: {
      return {
        isLoading: false,
        isError: action.data,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

let connectionReducer = (state = initialstate, action) => {
  console.log(action, "action from connectionReducer");
  switch (action.type) {
    //post
    case POST_connection_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case POST_connection_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        connection: state.connection.concat(action.data),
      };
    }
    case POST_connection_ERROR: {
      return {
        ...state,
        isError: action.data,
      };
    }
    //get
    case GET_connection_PENDING,DELETE_ELECTION_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_connection_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        connection: action.data,
      };
    }
  case DELETE_connection_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        connection: state.connection.filter((item) => item._id != action.data.payload),
      };
    }
    case GET_connection_ERROR,DELETE_connection_ERROR: {
      return {
        ...state,
        isError: action.data,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

let votingReducer = (state = initialstate, action) => {
    console.log(action , "action from voting");
    switch(action.type){
      case POST_VOTING_PENDING:{
        return{
          ...state,
          isLoading :true,
        }
      }
      case POST_VOTING_SUCCESS:{
        return{
          ...state,
          isLoading :false,
          voting:state.voting.concat(action.data),
        }
      }
      case POST_VOTING_ERROR :{
        return {
          isError: action.data,
          ...state,
        };
      }
      case GET_VOTING_PENDING :{
        return{
          ...state,
          isLoading :true,
        }
      }
      case GET_VOTING_SUCCESS :{
        return{
          ...state,
          isLoading : false,
          voting:action.data
        }
      }
      case GET_VOTING_ERROR :{
        return{
          ...state,
          isError:action.data
        }
      }
      default :{
        return{
          ...state,
        }
      }
    }
}

export { partyReducer, electionReducer, voterReducer, connectionReducer, votingReducer };
