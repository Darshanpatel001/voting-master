import React, { useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_connection_PENDING, POST_connection_PENDING,  } from '../../../use/action';
import Swal from 'sweetalert2';

const Conection = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredConnections, setFilteredConnections] = useState([]);
  const electionname = useRef();
  const partyname = useRef();

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const election = useSelector((state) => state.electionReducer.election);
  const party = useSelector((state) => state.partyReducer.party);
  const connection = useSelector((state) => state.connectionReducer.connection);

  useEffect(() => {
    if (connection) {
      setFilteredConnections(
        connection.filter((c) =>

          c.party.party_name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [connection, searchTerm]);

  // Post data
  const Conectiondata = () => {
    setOpen(false);
    const connectdata = {
      election: electionname.current.value,
      party: partyname.current.value,
    };
    dispatch({ type: POST_connection_PENDING, payload: connectdata });
  };

  // Delete data
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type: DELETE_connection_PENDING, payload: id });
      }
    });
  };

  return (
    <div className="p-4 sm:ml-64">
      <section>
        <div className='flex justify-between mb-4'>
          <input
            type="search"
            name="search"
            placeholder='Enter party name'
            className='p-1 border-2 border-indigo-300 rounded-md'
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="outlined" onClick={handleClickOpen}> Create Election and Party </Button>
        </div>
        <>
          <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">
              {"Create Election and Party"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <div className='grid gap-4 mb-4 grid-cols-2'>
                  <label htmlFor="elections" className="block mb-2 text-sm font-medium text-gray-900">Select Election Name</label>
                  <select id="elections" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" ref={electionname}>
                    {
                      election?.map((value, index) => (
                        <option key={index} value={value._id}>{value.election_name}</option>
                      ))
                    }
                  </select>
                  <label htmlFor="parties" className="block mb-2 text-sm font-medium text-gray-900">Select Party Name</label>
                  <select id="parties" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" ref={partyname}>
                    {
                      party?.map((value, index) => (
                        <option key={index} value={value._id}>{value.party_name}</option>
                      ))
                    }
                  </select>
                </div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Disagree</Button>
              <Button onClick={Conectiondata} autoFocus> Create </Button>
            </DialogActions>
          </Dialog>
        </>
      </section>
      <section>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead style={{ backgroundColor: "#262d7c", color: 'white' }} className="text-xs text-gray-700 uppercase bg-blue-400">
              <tr>
                <th scope="col" className="px-6 py-3">No.</th>
                <th scope="col" className="px-6 py-3">Election Name</th>
                <th scope="col" className="px-6 py-3">Party Name</th>
                <th scope="col" className="px-6 py-3">Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                filteredConnections.map((value, index) => (
                  <tr key={value._id} className="bg-white border">
                    <th scope="row" className="px-6 py-3">{index + 1}</th>
                    <td className="px-6 py-4 text-gray-600">{value.election?.election_name}</td>
                    <td className="px-6 py-4 text-gray-600">{value.party?.party_name}</td>
                    <td className="px-6 py-4 text-gray-600">
                      <i className="fa-solid fa-trash font-medium text-blue-600 hover:text-red-600" onClick={() => handleDelete(value._id)}></i>
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

export default Conection;
