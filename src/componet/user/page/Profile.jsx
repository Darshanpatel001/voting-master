import React from 'react'

const Profile = () => {

  const getUser = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    return userData;
  };
  let userData = getUser();
  return (
    <div class="p-4  sm:ml-64">
      <section>
        <div class="max-w-screen-md p-6 uppercase " style={{backgroundColor:"#262d7c"}}>
          <h1 class="text-2xl w-full mb-5  font-black text-white">Voter information </h1>
          <p class=" w-full mb-5 text-x font-medium">Card NO :- {userData.cardNo} ,</p>
          <div class="grid md:grid-cols-2 md:gap-6">
            <p class=" w-full mb-5 text-x font-medium">Voter name :- {userData.name} ,</p>
            <p class=" w-full mb-5 text-x font-medium">father name :- {userData.fatherName} ,</p>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <p class=" w-full mb-5 text-x font-medium">Date of Birth :- {userData.dob} ,</p>
            <p class=" w-full mb-5 text-x font-medium">Gender :- {userData.sex} ,</p>
          </div>
          <p class=" w-full mb-5 text-x font-medium">Address :- {userData.address} </p>
          <p class=" w-full mb-5 text-x font-medium">PartNoandName :- {userData.partNoandName} ,</p>
          <p class=" w-full mb-5 text-x font-medium">AssemblyNoandName :- {userData.assemblyNoandName} ,</p>
        </div>
      </section >
    </div>
  )
}

export default Profile