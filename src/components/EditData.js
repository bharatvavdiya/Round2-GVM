import React, { useState, useContext, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import { MyContext } from './MyContextProvider';

function EditData() {
   const { id } = useParams();
   const navigate = useNavigate();
   const { data, setData } = useContext(MyContext);
   const item = data[id];

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
      const updatedData = [...data];
      updatedData[id] = values;
      setData(updatedData);
      navigate('/');
   };

   return (
      <div>
         <h2>Edit Data</h2>
         <Formik
            initialValues={item}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
         >
            {({ isSubmitting }) => (
               <Form>
                  <div className='d-flex'>
                     <div className='me-5'>
                        <label htmlFor="name">Name</label><br />
                        <Field type="text" name="name" placeholder="name" />
                        <ErrorMessage name="name" component="div" />
                     </div>
                     <div>
                        <label htmlFor="description">Description</label><br />
                        <Field type="text" name="description" />
                        <ErrorMessage name="description" component="div" />
                     </div>
                  </div>
                  <FieldArray name="vendors">
                     {({ push, remove, form }) => (
                        <>
                           <div className="vendorBox mt-5 p-4">
                              <label>Vendors</label>
                              {form.values.vendors.map((vendor, vendorIndex) => (
                                 <div key={vendorIndex} className='mt-3'>
                                    <Field name={`vendors[${vendorIndex}].name`} placeholder="Vendor Name" className="me-3" />
                                    <Field type="radio" name={`vendors[${vendorIndex}].main`} value="true" className="me-1" /><label>Main</label>
                                    <FieldArray name={`vendors[${vendorIndex}].variations`}>
                                       {({ push: pushVariation }) => (
                                          <div className='mt-3'>
                                             {vendor.variations.map((variation, variationIndex) => (
                                                <div key={variationIndex} className='mt-2'>
                                                   <Field name={`vendors[${vendorIndex}].variations[${variationIndex}].name`} className="me-3" placeholder="Variation Name" />
                                                   <Field name={`vendors[${vendorIndex}].variations[${variationIndex}].number`} placeholder="Variation Number" />
                                                </div>
                                             ))}
                                             <button
                                                type="button"
                                                className="mt-3"
                                                onClick={() => pushVariation({ name: '', number: '' })}
                                             >
                                                Add Variation
                                             </button>
                                          </div>
                                       )}
                                    </FieldArray>
                                 </div>
                              ))}
                           </div>
                           <div className="mt-3">
                              <button type="button" onClick={() => push({ name: '', main: false, variations: [{ name: '', number: '' }] })} >
                                 Add Vendor
                              </button>
                           </div>
                        </>
                     )}
                  </FieldArray>
                  <button type="submit" className='mt-4' disabled={isSubmitting}>Submit</button>
               </Form>
            )}
         </Formik>
      </div>
   );
}

export default EditData;