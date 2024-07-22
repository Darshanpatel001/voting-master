export const base_url = "http://13.127.211.205:8000/v1/";

//Admin
export const post_adminlogin = "login/admin";

//party
export const post_party_create = "party/create_party";
export const get_party_list = "party/list";
export const get_party_list_findid = "party/findId/";
export const delete_party_list_findid = "party/delete/";

// election
export const post_election_create = "election/create";
export const get_election_list = "election/list";
export const get_election_list_findid = "election/findId/";
export const delete_election_list_findid = "election/delete/";


//voter
export const post_voter_create = "user/create";
export const get_voter_list = "user/list";
export const get_voter_list_findid = "user/finduser/";
export const delete_voter_list_findid = "user/delete/";
export const post_use_login = "/login/user";

//connection

export const post_connection_create = "partylist/create";
export const get_connection_list = "partylist/list";
export const get_connection_list_findid = "partylist/findId/";
export const delete_connection_list_findid = "partlist/delete/";

// vote
export const post_voting_create = "vote/create";
export const get_voting_list = "vote/list";

//total vote
export const get_vote_total = "total/count";
