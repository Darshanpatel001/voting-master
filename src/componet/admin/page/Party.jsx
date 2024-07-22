import React, { useState, useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_Party_PENDING, POST_Party_PENDING } from '../../../use/action';
import Swal from 'sweetalert2';

const Party = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredParties, setFilteredParties] = useState([]);
  const partyname = useRef();
  const shortcode = useRef();
  const [file, setFile] = useState(null);

  const dispatch = useDispatch();

  const party = useSelector((state) => state.partyReducer.party);

  useEffect(() => {
    if (party) {
      setFilteredParties(
        party.filter((p) =>
          p.party_name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [party, searchTerm]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const filedata = (e) => {
    setFile(e.target.files[0]);
  };

  const partycreate = (e) => {
    e.preventDefault();
    setOpen(false);
    const party_name = partyname.current.value;
    const short_code = shortcode.current.value;
    const formdata = new FormData();
    formdata.append("party_name", party_name);
    formdata.append("party_logo", file);
    formdata.append("short_code", short_code);
    dispatch({ type: POST_Party_PENDING, payload: formdata });
  };

  const handledelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type: DELETE_Party_PENDING, payload: id });
      }
    });
  };

  return (
    <>
      <div className="p-4 sm:ml-64">
        <section>
          <div className="flex justify-between">
            <input
              type="search"
              name="search"
              placeholder="Enter your party name"
              className="p-1 border-2 border-indigo-300 rounded-md"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outlined" onClick={handleClickOpen}>Add party list</Button>
          </div>
          <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">
              {"Create party list"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <form className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2 mb-2">
                    <label className="block text-sm font-medium text-gray-900 text-black">Party name:</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Party name" ref={partyname} required />
                  </div>
                  <div className="col-span-2 mb-2">
                    <label className="block text-sm font-medium text-gray-900 text-black">Party logo:</label>
                    <input type="file" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={filedata} required />
                  </div>
                  <div className="col-span-2 mb-2">
                    <label className="block text-sm font-medium text-gray-900 text-black">Party short code:</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Party short code" ref={shortcode} required />
                  </div>
                </form>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={partycreate} autoFocus>Add</Button>
            </DialogActions>
          </Dialog>
        </section>
        <section>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead style={{ backgroundColor: "#262d7c", color: 'white' }} className="text-xs text-gray-700 uppercase bg-blue-400 dark:bg-blue-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    No.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Party logo
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Party name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Short code
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredParties?.map((value, index) => (
                  <tr key={value._id} className="bg-white border">
                    <th scope="row" className="px-6 py-3">
                      {index + 1}
                    </th>
                    <td className="px-6 py-4 text-gray-600">
                      <img src={value.party_logo} alt="Party Logo" className="w-16 h-16" />
                    </td>
                    <td className="px-6 py-4 text-gray-600">{value.party_name}</td>
                    <td className="px-6 py-4 text-gray-600">{value.short_code}</td>
                    <td className="px-6 py-4 text-gray-600">
                      <i className="fa-solid fa-trash font-medium text-blue-600 dark:text-blue-500 hover:text-red-600" onClick={() => handledelete(value._id)}></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  )
}

export default Party;
