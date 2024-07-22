import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const Userlogin = () => {
    let cardno = useRef();
    let password = useRef();

    const [loading, setLoading] = useState(false);

    let voter = useSelector((state) => state.voterReducer.voter);

    const userlogin = async () => {
        setLoading(true);
        let userlogin = {
            cardNo: cardno.current.value,
            password: password.current.value
        };
        console.log(userlogin, "login");
        if (cardno.current.value === "" || password.current.value === "") {
            setLoading(false);
            Swal.fire({
                title: 'Error',
                text: 'Please complete all fields',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        } else {
            try {
                let res = await axios.post(
                    "http://13.127.211.205:8000/v1/login/user",
                    userlogin
                );
                if (res.status === 200) {
                    if (!voter.find((value) => value.user?.cardNo === userlogin.cardNo)) {
                        localStorage.setItem("role", "user");
                        localStorage.setItem("userData", JSON.stringify(res.data.data));
                        Swal.fire({
                            title: 'Success',
                            text: 'Login Successfully',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        }).then(() => {
                            window.location.href = "/voter";
                        });
                        cardno.current.value = "";
                        password.current.value = "";
                    } else {
                        setLoading(false);
                        Swal.fire({
                            title: 'Error',
                            text: 'You have already voted',
                            icon: 'error',
                            confirmButtonText: 'OK'
                        });
                        cardno.current.value = "";
                        password.current.value = "";
                    }
                } else {
                    setLoading(false);
                    Swal.fire({
                        title: 'Error',
                        text: 'Please check VoterID and password',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                    cardno.current.value = "";
                    password.current.value = "";
                }
            } catch (error) {
                setLoading(false);
                Swal.fire({
                    title: 'Error',
                    text: 'Please check VoterID and password',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                console.error(error);
            }
        }
    };

    const siterolechange = (e) => {
        e.preventDefault();
        window.location.href = "/adminLogin";
    };

    return (
        <>
            <div className='flex'>
                <div style={{ backgroundColor: "#262d7c" }} className='w-1/2 h-screen bg-blue-800 relative'>
                    <div className=' absolute top-1/3 right-1/3  flex'>
                        <div className='text-white m-2'>
                            <h1 style={{ fontSize: "40px" }}>Dijital-Voting-System</h1>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 h-screen bg-zinc-200'>
                    <section className="bg-gray-50 dark:bg-gray-900">
                        <div style={{ backgroundColor: 'white' }} className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                            <div style={{ boxShadow: "", borderRadius: "0.25rem" }} className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                <div style={{ backgroundColor: "white" }} className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 style={{ color: "#333" }} className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                        User Login
                                    </h1>
                                    <div className="space-y-4 md:space-y-6" style={{ color: "#333" }}>
                                        <div>
                                            <label style={{ color: "#333" }} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Card No</label>
                                            <input style={{ backgroundColor: "#f4f4f4", color: "#333" }} type="text" name="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter card No" ref={cardno} required />
                                        </div>
                                        <div>
                                            <label style={{ color: "#333" }} htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                            <input style={{ backgroundColor: "#f4f4f4", color: "#333" }} type="password" name="password" placeholder="Enter your password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ref={password} required />
                                        </div>
                                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={userlogin}>submit</button>
                                        <button className="w-full text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={siterolechange}>Admin login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Userlogin;
