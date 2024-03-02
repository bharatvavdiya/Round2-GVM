import React, { useState, useContext } from 'react';
import { Formik, Field, Form } from 'formik';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../components/MyContextProvider';


const Main = () => {

   const navigate = useNavigate()
   const { data, setData } = useContext(MyContext);
   const [DeleteId, setDeleteId] = useState()

   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = (id) => {
      setShow(true);
      setDeleteId(id);
   };

   const handleDelete = () => {
      const updatedData = data.filter((item, index) => index !== DeleteId);
      setData(updatedData);
      setShow(false);
   };

   return (
      <div>
         <div>
            <Button onClick={() => (navigate('/add'))}>Add Product</Button>
            <table>
               <>
                  <tr>
                     <th>Name</th>
                     <th>Discription</th>
                     <th>Action</th>
                  </tr>
                  {data.map((data, index) => {
                     return (
                        <tr key={index}>
                           <td>{data.name}</td>
                           <td>{data.description}</td>
                           <td><Button className='me-2' onClick={() => { navigate(`/edit/` + index) }}>Edit</Button><Button onClick={() => { handleShow(index) }}>Delete</Button></td>
                        </tr>
                     )
                  })
                  }
               </>
            </table>
            {data.length === 0 && <div className='text-center'>Data not found</div>}

         </div>

         <Modal show={show} onHide={handleClose}>
            <Modal.Body>Are you sure to remove this record?</Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  No
               </Button>
               <Button variant="primary" onClick={handleDelete}>
                  Yes
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   )
}

export default Main