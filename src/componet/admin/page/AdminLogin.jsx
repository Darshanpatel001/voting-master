import React, { useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { base_url, post_adminlogin } from '../../../Constant';

const AdminLogin = () => {
    const name = useRef();
    const password = useRef();

    const loginsubmit = async () => {
        const logindata = {
            name: name.current.value,
            password: password.current.value,
        };
        if (logindata.name !== "" && logindata.password !== "") {
            try {
                const result = await axios.post(base_url + post_adminlogin, logindata);
                if (result.status === 200) {
                    localStorage.setItem("role", "admin");
                    Swal.fire({
                        title: 'Success',
                        text: 'Login Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    }).then(() => {
                        window.location.href = "/dashboard";
                    });
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: 'Login Error',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                }
            } catch (error) {
                console.log(error);
                Swal.fire({
                    title: 'Error',
                    text: 'Login Error',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        }
        name.current.value = "";
        password.current.value = "";
    };

    const siterolechange = (e) => {
        e.preventDefault();
        window.location.href = "/Userlogin";
    };

    return (
        <>
            <div className="flex">
                <div style={{ backgroundColor: "#262d7c" }} className="w-1/2 h-screen relative">
                    <div className="absolute top-1/3 right-1/3 flex">
                        <div className="text-white m-5">
                            <h1 style={{ fontSize: "40px" }}>Dijital-Voting-System</h1>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 h-screen bg-zinc-200">
                    <section className="bg-gray-50">
                        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                            <div style={{ boxShadow: "", borderRadius: "0.25rem" }} className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8" style={{ backgroundColor: "white" }}>
                                    <h1 style={{ color: "#333" }} className="text-xl font-bold text-center leading-tight tracking-tight md:text-2xl dark:text-white">
                                        Admin Login
                                    </h1>
                                    <div className="space-y-4 md:space-y-6">
                                        <div>
                                            <label style={{ color: "#333" }} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                            <input
                                                style={{ backgroundColor: "#f4f4f4", color: "#333" }}
                                                type="text"
                                                name="text"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Enter your name"
                                                ref={name}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label style={{ color: "#333" }} htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                            <input
                                                style={{ backgroundColor: "#f4f4f4", color: "#333" }}
                                                type="password"
                                                name="password"
                                                placeholder="Enter your password"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                ref={password}
                                                required
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                                            onClick={loginsubmit}
                                        >
                                            Login
                                        </button>
                                        <button
                                            type="button"
                                            className="w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                                            onClick={siterolechange}
                                        >
                                            User Login
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default AdminLogin;
