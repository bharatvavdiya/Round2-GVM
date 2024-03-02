import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Row, Col } from 'react-bootstrap'

const validationSchema = Yup.object().shape({
   name: Yup.string().required('Name is required'),
   description: Yup.string().required('Description is required')
});

const VendorDetails = () => {

   const handleSubmit = (values) => {
      // Handle form submission logic here
      console.log('Form submitted:', values);
   };

   return (
      <>
         <Formik
            initialValues={{ name: '', description: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
         >
            {() => (
               <Form>
                  <Row >
                     <Col lg={6}>
                        <div>
                           <label htmlFor="name">Name:</label><br />
                           <Field type="text" id="name" name="name" className='w-100' placeHolder="Name" />
                           <ErrorMessage name="name" component="span" style={{ color: 'red' }} />
                        </div>
                     </Col>
                     <Col lg={6}>
                        <label>
                           <Field type="radio" name="option" value="option1" />
                           Option 1
                        </label>
                     </Col>
                     
                  </Row>
                  <Row>
                     <VendorDetails />
                  </Row>
                  <br />
                  <input type="submit" value="Submit" />
               </Form>
            )}
         </Formik>
      </>
   )
}

export default VendorDetails