import React, { useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_VOTE_PENDING, POST_VOTE_PENDING } from '../../../use/action';

const User = () => {
  const [open, setOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredVoters, setFilteredVoters] = useState([]);

  const cardnoRef = useRef();
  const voternameRef = useRef();
  const fathernameRef = useRef();
  const sexRef = useRef();
  const birthdataRef = useRef();
  const AssemblyNoandNameRef = useRef();
  const PartNoandNameRef = useRef();
  const addressRef = useRef();
  const passwordRef = useRef();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  const voter = useSelector((state) => state.voterReducer.voter);

  useEffect(() => {
    if (voter) {
      setFilteredVoters(
        voter.filter((v) =>
          v.cardNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
          v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          v.fatherName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          v.sex.toLowerCase().includes(searchTerm.toLowerCase()) ||
          v.dob.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [voter, searchTerm]);

  const votercreate = () => {
    setOpen(false);
    const cardno = cardnoRef.current.value;
    const votername = voternameRef.current.value;
    const fathername = fathernameRef.current.value;
    const sex = sexRef.current.value;
    const birthdata = birthdataRef.current.value;
    const AssemblyNoandName = AssemblyNoandNameRef.current.value;
    const PartNoandName = PartNoandNameRef.current.value;
    const address = addressRef.current.value;
    const password = passwordRef.current.value;

    const date = new Date(birthdata);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;

    const voterlist = {
      cardNo: cardno,
      name: votername,
      fatherName: fathername,
      sex: sex,
      dob: formattedDate,
      assemblyNoandName: AssemblyNoandName,
      partNoandName: PartNoandName,
      address: address,
      password: password
    };

    dispatch({ type: POST_VOTE_PENDING, payload: voterlist });
    
  };

  const voterdelete = (id) => {
    dispatch({ type: DELETE_VOTE_PENDING, payload: id });
  };

  return (
    <div className="p-4 sm:ml-64">
      <section>
        <div className='flex justify-between mb-4'>
          <input
            type="search"
            name="search"
            placeholder='Enter your name'
            className='p-1 border-2 border-indigo-300 rounded-md'
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="outlined" onClick={handleClickOpen}>Add voter </Button>
        </div>
        <>
          <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">{"Create Election and Party"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <form className='grid gap-4 mb-4 grid-cols-2'>
                  <div className='col-span-2 mb-2'>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">Card No</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ref={cardnoRef} placeholder="Enter Voter Card NO" required />
                  </div>
                  <div className='col-span-2 mb-2'>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ref={voternameRef} placeholder='Enter Voter Name' required />
                  </div>
                  <div className='col-span-2 mb-2'>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">Father Name</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ref={fathernameRef} placeholder="Enter Father Name" required />
                  </div>
                  <div className='col-span-2 mb-2'>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ref={sexRef} placeholder="Enter Gender" required />
                  </div>
                  <div className='col-span-2 mb-2'>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">Birth Data</label>
                    <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ref={birthdataRef} required />
                  </div>
                  <div className='col-span-2 mb-2'>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">Assembly No and Name</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ref={AssemblyNoandNameRef} placeholder="Enter Assembly No and Name" required />
                  </div>
                  <div className='col-span-2 mb-2'>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">Part No and Name</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ref={PartNoandNameRef} placeholder="Enter Part No and Name" required />
                  </div>
                  <div className='col-span-2 mb-2'>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">Address</label>
                    <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ref={addressRef} placeholder="Enter Address"></textarea>
                  </div>
                  <div className='col-span-2 mb-2'>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ref={passwordRef} placeholder="Enter Password" required />
                  </div>
                </form>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Disagree</Button>
              <Button onClick={votercreate} autoFocus>Create</Button>
            </DialogActions>
          </Dialog>
        </>
      </section>
      <section>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead style={{ backgroundColor: "#262d7c", color: 'white' }} className="text-xs text-gray-700 uppercase bg-blue-400 dark:bg-blue-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-4">No.</th>
                <th scope="col" className="px-6 py-3">Card No.</th>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Father Name</th>
                <th scope="col" className="px-6 py-3">Gender</th>
                <th scope="col" className="px-6 py-3">Birth Data</th>
                <th scope="col" className="px-6 py-3">Delete</th>
              </tr>
            </thead>
            <tbody>
              {filteredVoters?.map((value, index) => (
                <tr key={value._id} className="bg-white border-b">
                  <th scope="col" className="px-6 py-3">{index + 1}</th>
                  <td className="px-6 py-4 text-gray-600">{value.cardNo}</td>
                  <td className="px-6 py-4 text-gray-600">{value.name}</td>
                  <td className="px-6 py-4 text-gray-600">{value.fatherName}</td>
                  <td className="px-6 py-4 text-gray-600">{value.sex}</td>
                  <td className="px-6 py-4 text-gray-600">{value.dob}</td>
                  <td className="px-6 py-4 text-gray-600">
                    <i className="fa-solid fa-trash font-medium text-blue-600 dark:text-blue-500 hover:text-red-600" onClick={() => voterdelete(value._id)}></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default User;
