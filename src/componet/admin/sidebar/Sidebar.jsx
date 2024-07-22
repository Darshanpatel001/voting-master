import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../image/election-commission-of-india.jpg';


const Sidebar = () => {

    const handlechange = () => {
        window.location.reload();
        localStorage.clear();
        window.location.href = "/";
    }
    return (
        <>
            
            <aside  style={{ backgroundColor: "#262d7c" }}   class="fixed top- left-0 z-40 w-64 h-screen pt-6 transition-transform  bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div  style={{ backgroundColor: "#262d7c" }} class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul class="space-y-2 font-medium">
                        <li style={{display:"flex", alignItems:'center'}}>
                            <div >
                            <span ><i style={{color:"#707070"}} class="fa-solid fa-grip"></i></span>
                            </div>
                            <Link to={'/dashboard'} class="text-center flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" >Dashboard</Link>
                        </li>
                        <li style={{display:"flex", alignItems:'center'}}>
                        <i style={{color:"#707070"}} class="fa-solid fa-users"></i>
                            <Link to={'/party'} class="text-center flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" >Party</Link>
                        </li>
                        <li style={{display:"flex", alignItems:'center'}}>
                        <i style={{color:"#707070"}} class="fa-solid fa-person-booth"></i>
                            <Link to={'/election'} class="text-center flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">Election</Link>
                        </li>
                        <li style={{display:"flex", alignItems:'center'}}>
                        <i style={{color:"#707070"}} class="fa-solid fa-wifi"></i>
                            <Link to={'/conection'} class=" text-center flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" >Conection</Link>
                        </li>
                        <li  style={{display:"flex", alignItems:'center'}}>
                        <i style={{color:"#707070"}} class="fa-solid fa-person"></i>
                            <Link to={'/user'} class=" text-center flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">User</Link>
                        </li>
                        <li style={{display:"flex", alignItems:'center'}} class=" text-center flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={handlechange}>
                        <i style={{color:"#707070", marginRight:"10px"}} class="fa-solid fa-circle-arrow-left"></i>
                            Log out
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar
