// Show product data in list format, and implement CRUD operation.
// Create Form: which have “name”, “vendors”, “varients”, “is_main”, “nameV”, “xs” .
// User can add multiple vendors and multiple varients
import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { Button } from 'react-bootstrap';
const Main = () => {
   const [openForm, setOpenForm] = useState(false)
   const [name, setName] = useState('')
   const [vendors, setVendors] = useState('')
   const [varients, setVarient] = useState('')
   const [is_main, setIsMain] = useState(false)
   const [nameV, setNameV] = useState('')
   const [number, setNumber] = useState('')
   const [formData, setFormData] = useState([])

   const handleVariants = (e) => {
      e.preventDefault()
      setFormData([...formData, { varients: varients, is_main: is_main, nameV: nameV, number: number }])
   }

   const handleVendor = (e) => {
      e.preventDefault()
      setFormData([...formData, { name: name, vendors: vendors }])
   }

   const handleSubmit = () => {
      setFormData([...formData, { name: name, vendors: vendors, varients: varients, is_main: is_main, nameV: nameV, number: number }])
   }
   const openFormikForm = () => {
      return (
         <Formik
            initialValues={{
               name: '',
               vendors: '',
               varient: '',
               is_main: '',
               nameV: '',
               number: ''
            }}
            onSubmit={(values, { setSubmitting }) => {
               handleSubmit()
            }}
         >
            <Form>
               <div className='d-flex justify-content-between w-50 mt-2 border border-dark border-2 p-2 '>
                  <div>
                     {/* <label htmlFor="name">Name :</label> */}
                     <Field id="name" name="name" placeholder="Name" className="form-input" value={name} onChange={(e) => setName(
                        e.target.value
                     )} />
                  </div>

                  <div>
                     {/* <label htmlFor="vendors">Vendors :</label> */}
                     <Field id="vendors" name="vendors" placeholder="Vendors" className="form-input"
                        value={vendors}
                        onChange={(e) => setVendors(
                           e.target.value
                        )}
                     />
                  </div>
               </div>

               <div className="border border-2 border-dark p-5 mt-2 w-70">
                  <div className="d-flex justify-content-between w-50 mb-2">
                     <div className="">
                        {/* <label htmlFor="varients">Varient :</label> */}
                        <Field id="varients" name="varients" placeholder="Varient" className="form-input"

                           value={varients}
                           onChange={(e) => setVarient(
                              e.target.value
                           )}
                        />
                     </div>
                     <div className="">
                        <label htmlFor="is_main">Is Main :</label>
                        <Field type="radio" id="is_main" name="is_main" placeholder="Is Main" className="form-input" value={is_main} onChange={(e) => setIsMain(!is_main)} />
                     </div>
                  </div>

                  <div className="d-flex justify-content-between w-50">
                     <div>
                        {/* <label htmlFor="nameV">NameV :</label> */}
                        <Field id="nameV" name="nameV" placeholder="NameV" className="form-input" value={nameV} onChange={(e) => setNameV(
                           e.target.value
                        )} />
                     </div>

                     <div>
                        {/* <label htmlFor="xs">XS :</label> */}
                        <Field id="number" name="number" placeholder="Number" className="form-input" value={number} onChange={(e) => setNumber(
                           e.target.value
                        )} />
                     </div>
                     <div>
                        <Button onClick={(e) => handleVariants(e)}>
                           Add Varient
                        </Button>
                     </div>
                  </div>
                  <Button type="submit" className="submit-button" onClick={handleVendor}>Add Vendor</Button>
               </div>
               <div className="">
                  <Button>
                     Cancel
                  </Button>
                  <Button type="submit" className="submit-button">
                     Submit
                  </Button>
               </div>
            </Form>
         </Formik>

      )
   }
   return (
      <div>
         <div>
            <Button onClick={() => setOpenForm(!openForm)}>Add Product</Button>
            {openForm ? openFormikForm() : null}

            <table>


               <>
                  <tr>
                     <th>Name</th>
                     <th>Vendors</th>
                     <th>Varient</th>
                     <th>Is Main</th>
                     <th>NameV</th>
                     <th>Number</th>
                     <th>Edit</th>
                     <th>Delete</th>
                  </tr>
                  {formData.map((data, index) => {
                     return (
                        <tr key={index}>
                           <td>{data.name}</td>
                           <td>{data.vendors}</td>
                           <td>{data.varients}</td>
                           <td>{data.is_main}</td>
                           <td>{data.nameV}</td>
                           <td>{data.number}</td>
                           <td><Button>Edit</Button></td>
                           <td><Button>Delete</Button></td>
                        </tr>
                     )
                  })
                  }
               </>

            </table>

         </div>
      </div>
   )
}

export default Main