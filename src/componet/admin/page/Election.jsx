import React, { useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_ELECTION_PENDING, POST_ELECTION_PENDING } from '../../../use/action';
import Swal from 'sweetalert2';

const Election = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredElections, setFilteredElections] = useState([]);
  const electionNameRef = useRef();
  const electionDateRef = useRef();

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Post data
  const electionCreate = () => {
    setOpen(false);
    const electionName = electionNameRef.current.value;
    const electionDate = electionDateRef.current.value; 
    const date = new Date(electionDate); 

    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();

    const formattedDate = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;

    const election = {
      election_name: electionName,
      date: formattedDate 
    };

    dispatch({ type: POST_ELECTION_PENDING, payload: election })
  };

  const election = useSelector((state) => state.electionReducer.election);

  useEffect(() => {
    if (election) {
      setFilteredElections(
        election.filter((e) =>
          e.election_name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [election, searchTerm]);

  // Delete data
  const handledelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type: DELETE_ELECTION_PENDING, payload: id });
      }
    });
  };

  return (
    <div className="p-4 sm:ml-64">
      <section>
        <div className='flex justify-between'>
          <input
            type="search"
            name="search"
            placeholder='Enter your Election name'
            className='p-1 border-2 border-indigo-300 rounded-md'
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="outlined" onClick={handleClickOpen}> Add Election Create </Button>
        </div>
        <>
          <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">
              {"Election Create"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <div className='grid gap-4 mb-4 grid-cols-2'>
                  <div className='col-span-2 mb-2'>
                    <label className="block text-sm font-medium text-gray-900 text-black">Election Name:</label>
                    <input ref={electionNameRef} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Election name" required />
                  </div>
                  <div className='col-span-2 mb-2'>
                    <label className="block text-sm font-medium text-gray-900 text-black">Election Date:</label>
                    <input ref={electionDateRef} type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  </div>
                </div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Disagree</Button>
              <Button onClick={electionCreate} autoFocus> Create </Button>
            </DialogActions>
          </Dialog>
        </>
      </section>
      <section>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead style={{ backgroundColor: "#262d7c", color: 'white' }} className="text-xs text-gray-700 uppercase bg-blue-400 dark:bg-blue-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No.
                </th>
                <th scope="col" className="px-6 py-3">
                  Election Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {
                filteredElections.map((value, index) => (
                  <tr key={value._id} className="bg-white border">
                    <th scope="row" className="px-6 py-5">
                      {index + 1}
                    </th>
                    <td className="px-6 py-5 text-gray-600">
                      {value.election_name}
                    </td>
                    <td className="px-6 py-5 text-gray-600">
                      {value.date}
                    </td>
                    <td className="px-6 py-5 text-gray-600">
                      <i className="fa-solid fa-trash font-medium text-blue-600 dark:text-blue-500 hover:text-red-600" onClick={() => handledelete(value._id)}></i>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Election;
