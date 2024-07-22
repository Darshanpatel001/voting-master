import axios from "axios";
import {
  base_url,
  delete_connection_list_findid,
  delete_election_list_findid,
  delete_party_list_findid,
  delete_voter_list_findid,
  get_connection_list,
  get_election_list,
  get_party_list,
  get_voter_list,
  get_voting_list,
  post_connection_create,
  post_election_create,
  post_party_create,
  post_voter_create,
  post_voting_create,
} from "../Constant";

//party
let post_party = (action) => {
  // console.log(action, "this action from post party");
  return axios
    .post(base_url + post_party_create, action.payload)
    .then((res) => {
      // console.log(res, "res is post party");
      let data = res.data.data;
      let status = res.status;
      return { data, status };
    });
};

let get_party = (action) => {
  // console.log(action, "this action from get party");
  return axios.get(base_url + get_party_list).then((res) => {
    // console.log(res, "res is get party");
    let data = res.data.data;
    let status = res.status;
    return { data, status };
  });
};

let delete_party = (action) => {
  // console.log(action, "this action from delete party");
  return axios
    .delete(base_url + delete_party_list_findid + action.payload)
    .then((res) => {
      //   console.log(res, "res is delete party");
      let data = res.data;
      // console.log(data, "data from api delete");
      let status = res.status;
      return { data, status };
    });
};

//election

let post_election = (action) => {
  // console.log(action, "this action from post election");
  return axios
    .post(base_url + post_election_create, action.payload)
    .then((res) => {
      //   console.log(res, "res is post election");
      let data = res.data.data;
      let status = res.status;
      return { data, status };
    });
};

let get_election = (action) => {
  // console.log(action, "this action from get election");
  return axios.get(base_url + get_election_list).then((res) => {
    // console.log(res, "res is get election");
    let data = res.data.data;
    // console.log(data , "data from get election");
    let status = res.status;
    return { data, status };
  });
};

let delete_election = (action) => {
  // console.log(action, "this action from delete election");
  return axios
    .delete(base_url + delete_election_list_findid + action.payload)
    .then((res) => {
      // console.log(res, "res is delete election");
      let data = res.data;
      // console.log(data, "data from api delete");
      let status = res.status;
      return { data, status };
    });
};

//voter

let post_voter = (action) => {
  // console.log(action, "this action from post voter");
  return axios
    .post(base_url + post_voter_create, action.payload)
    .then((res) => {
      // console.log(res, "res is post voter");
      let data = res.data.data;
      // console.log(data,"api user data");
      let status = res.status;
      return { data, status };
    });
};

let get_voter = (action) => {
  // console.log(action, "this action from get voter");
  return axios.get(base_url + get_voter_list).then((res) => {
    // console.log(res, "res is get voter");
    let data = res.data.data;
    let status = res.status;
    return { data, status };
  });
};

let delete_voter = (action) => {
  // console.log(action, "this action from get voter");
  return axios
    .delete(base_url + delete_voter_list_findid + action.payload)
    .then((res) => {
      // console.log(res, "res is delete voter");
      let data = res.data;
      let status = res.status;
      return { data, status };
    });
};

//connection
let post_connection = (action) => {
  // console.log(action, "this action from post connection");
  return axios.post(base_url + post_connection_create, action.payload).then((res) => {
    // console.log(res, "res is post connection");
    let data = res.data.data;
    let status = res.status;
    return { data, status };
  });
};

let get_connection = (action) => {
  // console.log(action, "this action from get connection");
  return axios.get(base_url + get_connection_list).then((res) => {
    // console.log(res, "res is get connection");
    let data = res.data.data;
    // console.log(data, "api connection");
    let status = res.status;
    return { data, status };
  });
};
let delete_connection = (action) => {
  // console.log(action, "this action from get voter");
  return axios
    .delete(base_url + delete_connection_list_findid + action.payload)
    .then((res) => {
      // console.log(res, "res is delete voter");
      let data = res.data;
      let status = res.status;
      return { data, status };
    });
};



//voting
let post_voting = (action) => {
  // console.log(action, "this action from post voting");
  return axios.post(base_url + post_voting_create, action.payload).then((res) => {
    // console.log(res, "res is post voting");
    let data = res.data.data;
    let status = res.status;
    return { data, status }
  })
}

let get_voting = (action) => {
  // console.log(action, "this action from get voting");
  return axios.get(base_url + get_voting_list).then((res) => {
    // console.log(res, "res is get voting");
    let data = res.data.data;
    let status = res.status;
    return { data, status }
  })
}


export {
  post_party,
  get_party,
  delete_party,
  post_election,
  get_election,
  delete_election,
  post_voter,
  get_voter,
  delete_voter,
  post_connection,
  get_connection,
  delete_connection,
  post_voting,
  get_voting,
};
