import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { MyContext } from './MyContextProvider';

function AddData() {
   const { data, setData } = useContext(MyContext);
   const navigate = useNavigate()

   const validationSchema = Yup.object().shape({
      name: Yup.string().required('Name is required'),
      description: Yup.string().required('Description is required'),
      vendors: Yup.array()
         .of(
            Yup.object().shape({
               name: Yup.string().required('Vendor name is required'),
               main: Yup.boolean(),
               variations: Yup.array().of(
                  Yup.object().shape({
                     name: Yup.string().required('Variation name is required'),
                     number: Yup.string().required('Variation number is required'),
                  })
               ),
            })
         )
         .min(1, 'At least one vendor is required'),
   });

   const handleSubmit = (values, { setSubmitting }) => {
      setSubmitting(false);
      setData([...data, values])
      navigate('/')
   };

   return (
      <div>
         <h2>Add Data</h2>
         <Formik
            initialValues={{
               name: '',
               description: '',
               vendors: [{ name: '', main: "false", variations: [{ name: '', number: '' }] }],
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
         >
            {({ isSubmitting }) => (
               <Form>
                  <div className='d-flex'>
                     <div className='me-5'>
                        <label htmlFor="name">Name</label><br />
                        <Field type="text" name="name" placeholder="name" />
                        <ErrorMessage name="name" component="div" className='text-danger' />
                     </div>
                     <div>
                        <label htmlFor="description">Description</label><br />
                        <Field type="text" as="textarea" name="description" placeholder="Description" />
                        <ErrorMessage name="description" component="div" className='text-danger' />
                     </div>
                  </div>
                  <FieldArray name="vendors">
                     {({ push, remove, form }) => (
                        <>
                           <div className='vendorBox mt-5 p-4'>
                              <label>Vendors</label>
                              {form.values.vendors.map((vendor, vendorIndex) => (
                                 <div key={vendorIndex} className='mt-3'>
                                    <Field name={`vendors[${vendorIndex}].name`} placeholder="Vendor Name" className="me-3" />
                                    <ErrorMessage name={`vendors[${vendorIndex}].name`} component="div" className='text-danger' />

                                    <Field name={`vendors[${vendorIndex}].main`} type="radio" value="true" className="me-1" /><label>Main</label>

                                    <FieldArray name={`vendors[${vendorIndex}].variations`}>
                                       {({ push: pushVariation, form: variationForm }) => (
                                          <div className='mt-3'>
                                             {vendor.variations.map((variation, variationIndex) => (
                                                <div key={variationIndex} className='mt-2'>
                                                   <Field className="me-3" name={`vendors[${vendorIndex}].variations[${variationIndex}].name`} placeholder="verient" />
                                                   <ErrorMessage name={`vendors[${vendorIndex}].variations[${variationIndex}].name`} component="div" className='text-danger' />
                                                   <Field type="number" name={`vendors[${vendorIndex}].variations[${variationIndex}].number`} placeholder="verient Number" />
                                                   <ErrorMessage name={`vendors[${vendorIndex}].variations[${variationIndex}].number`} component="div" className='text-danger' />
                                                </div>
                                             ))}
                                             <button type="button" className='mt-3' onClick={() => {
                                                // if variation is empty then don't add new variation and show error  message
                                                if (variationForm.values.vendors[vendorIndex].variations.filter(variation => variation.name === '' || variation.number === '').length > 0) {
                                                   alert('Please fill variation name and number')
                                                } else {
                                                   pushVariation({ name: '', number: '' })
                                                   variationForm.setFieldValue(`vendors[${vendorIndex}].main`, "false")
                                                }
                                             }}>
                                                Add Variation
                                             </button>
                                          </div>
                                       )}
                                    </FieldArray>
                                 </div>
                              ))}
                           </div>
                           <div className='mt-3'>
                              <button type="button" onClick={() =>
                              // if vendor is empty then don't add new vendor and show error  message also check if minimum 1 variation with variation name and number is added
                              {
                                 if (form.values.vendors.filter(vendor => vendor.name === '' || vendor.variations.filter(variation => variation.name === '' || variation.number === '').length > 0).length > 0) {
                                    alert('Please fill vendor name and variation name and number')
                                 } else {
                                    push({ name: '', main: "false", variations: [{ name: '', number: '' }] })
                                 }
                              }
                              }>
                                 Add Vendor
                              </button>
                           </div>
                        </>
                     )}
                  </FieldArray>
                  <button type="submit" className='mt-4' disabled={isSubmitting}>
                     Submit
                  </button>
               </Form>
            )}
         </Formik>
      </div>
   );
}

export default AddData;