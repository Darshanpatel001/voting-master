import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { POST_VOTING_PENDING } from '../../../use/action';

const Voter = () => {
  let connection = useSelector((state) => state.connectionReducer.connection);
  console.log(connection, "connection final data");

  const getUser = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    return userData;
  };
  let user = getUser();

  const [voterid, setvoterid] = useState(null);
  const [voterData, setvoterData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  let dispatch = useDispatch();

  const voterselectedparty = (id, data) => {
    setvoterid(id);
    setvoterData(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let finaldata = {
      user: user?._id,
      party: voterData?.party?._id,
      election: voterData?.election?._id,
    };
    dispatch({ type: POST_VOTING_PENDING, payload: finaldata });

    setvoterid(null);
    setvoterData(null);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredConnections = connection?.filter(value =>
    value?.party?.party_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let votingdata = useSelector((state) => state.votingReducer.voting);
  console.log(votingdata, "votingdata");

  return (
    <div className="p-4 sm:ml-64">
      <div className="flex justify-between">
        <input
          type="search"
          name="search"
          placeholder="Enter party name"
          className="p-1 border-2 border-indigo-300 rounded-md"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="p-1 border-2 border-indigo-300 rounded-md" onClick={handleSubmit}>Submit</button>
      </div>
      <section>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead style={{ backgroundColor: "#262d7c", color: 'white' }} className="text-xs text-gray-700 uppercase">
              <tr>
                <th scope="col" className="px-6 py-4">No.</th>
                <th scope="col" className="px-6 py-3">Party logo</th>
                <th scope="col" className="px-6 py-3">Election</th>
                <th scope="col" className="px-6 py-3">Party Name</th>
                <th scope="col" className="px-6 py-3">Select</th>
              </tr>
            </thead>
            <tbody>
              {filteredConnections?.map((value, index) => (
                <tr key={value._id} className="bg-white border">
                  <th scope="col" className="px-6 py-3">{index + 1}</th>
                  <td className="px-6 py-4 text-gray-600">
                    <img src={value?.party?.party_logo} alt="Party Logo" className="w-16 h-16" />
                  </td>
                  <td className="px-6 py-4 text-gray-600">{value?.election?.election_name}</td>
                  <td className="px-6 py-4 text-gray-600">{value?.party?.party_name}</td>
                  <td className="px-6 py-4 text-gray-600">
                    <input type="radio" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" onClick={() => voterselectedparty(value._id, value)} checked={voterid === value._id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Voter;
