import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../image/election-commission-of-india.jpg';


const Usersidebar = () => {

    const handlechange = () => {
        window.location.reload();
        localStorage.clear();
        window.location.href = "/";
    }

    return (
        <>
           
            <aside style={{ backgroundColor: "#262d7c", color: 'white' }}  class="fixed top-0 left-0 z-40 w-64 h-screen pt-5 transition-transform  bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div style={{ backgroundColor: "#262d7c", color: 'white' }} class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul class="space-y-2 font-medium">
                        <li style={{display:"flex", alignItems:'center', fontSize:"20px"}}>
                        <span ><i style={{color:"#707070"}} class="fa-solid fa-grip"></i></span>
                            <Link to={'/voter'} class="text-center flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" >voting</Link>
                        </li>
                        <li style={{display:"flex", alignItems:'center', fontSize:"20px"}}>
                        <i style={{color:"#707070"}} class="fa-solid fa-users"></i>
                            <Link to={'/profile'} class="text-center flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" >Profile</Link>
                        </li>
                        <li style={{display:"flex", alignItems:'center', fontSize:"20px"}} class=" text-center flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={handlechange}>
                        <i style={{color:"#707070", marginRight:"10px"}} class="fa-solid fa-circle-arrow-left"></i>
                            Log out
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Usersidebar

