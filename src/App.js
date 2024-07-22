import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import './App.css';
//admin
import Sidebar from './componet/admin/sidebar/Sidebar';
import User from './componet/admin/page/User';
import Conection from './componet/admin/page/Conection';
import Election from './componet/admin/page/Election';
import Party from './componet/admin/page/Party';
import Dashboard from './componet/admin/page/Dashboard';
import AdminLogin from './componet/admin/page/AdminLogin';

//user
import Usersidebar from './componet/user/sidebar/Usersidebar';
import Voter from './componet/user/page/Voter';
import Profile from './componet/user/page/Profile';
import Userlogin from './componet/user/page/Userlogin';
import { useDispatch } from 'react-redux';
import { GET_ELECTION_PENDING, GET_Party_PENDING, GET_VOTE_PENDING, GET_VOTING_PENDING, GET_connection_PENDING } from './use/action';
import { base_url, get_connection_list, get_election_list, get_party_list, get_voter_list, get_voting_list } from './Constant';
import { useEffect } from 'react';


const getRole = () => {
    const role = localStorage.getItem("role");
    return role;
};


function App() {
    let dispatch = useDispatch();

    useEffect(() => {
        let party = base_url + get_party_list;
        let election = base_url + get_election_list;
        let connection = base_url + get_connection_list;
        let vote = base_url + get_voter_list;
        let voting = base_url + get_voting_list;
        dispatch({ type: GET_Party_PENDING, payload: party });
        dispatch({ type: GET_ELECTION_PENDING, payload: election });
        dispatch({ type: GET_connection_PENDING, payload: connection });
        dispatch({ type: GET_VOTE_PENDING, payload: vote });
        dispatch({ type: GET_VOTING_PENDING, payload: voting })
    }, [])

    const role = getRole();
    const location = useLocation();

    const isLoginPage = location.pathname === "/";

    if (!role || role === "") {
        return (
            <Routes>
                <Route path="/" element={<Userlogin />} />
                <Route path="*" element={<Navigate to="/" replace />} />
                <Route path="/adminLogin" element={<AdminLogin />} />
            </Routes>
        );
    }

    if (role === "admin") {
        return (
            <>
                <Sidebar />
                <Routes>
                    <Route path="*" element={<Dashboard to="/" replace />} />
                    <Route path="/dashboard" exact element={<Dashboard />} />
                    <Route path="/party" exact element={<Party />} />
                    <Route path="/election" exact element={<Election />} />
                    <Route path="/conection" exact element={<Conection />} />
                    <Route path="/user" exact element={<User />} />
                </Routes>
            </>
        );
    }

    if (role === "user") {
        return (
            <>

                <Usersidebar />
                <Routes>
                    <Route path="/voter" element={<Voter />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </>
        );
    }

    return (
        <Routes>
            <Route path="/" element={<Userlogin />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default App;
