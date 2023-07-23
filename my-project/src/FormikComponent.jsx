import { useState, useEffect } from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import PropTypes from 'prop-types'
import HejComponent from './HejComponent'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 40%;
  margin-top: 30px;
  margin-left: 10px;
  gap: 5px;
`

const FormButton = styled.button`
  margin-top: 30px;
  max-width: 20%;
`

function FormikComponent(props) {
  const [animals, setAnimals] = useState([])

  useEffect(() => {
    fetch('/animals.json')
      .then((response) => response.json())
      .then((data) => setAnimals(data.animals))
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
      <HejComponent userName={props.userName} />
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          phoneNumber: '',
          animal: '',
        }}
        onSubmit={(values, { resetForm }) => {
          alert('Thanks for your support')
          resetForm()
        }}
        validate={(values) => {
          const errors = {}

          if (values.firstName.trim() === '') {
            errors.firstName = 'First name cannot be empty'
          }
          if (values.phoneNumber.trim() === '') {
            errors.phoneNumber = 'Phone number is needed'
          } else if (!/^\d+$/.test(values.phoneNumber)) {
            errors.phoneNumber = 'Phone number must be a valid number'
          }

          return errors
        }}
      >
        {({ handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit}>
            <label htmlFor='firstName'>First Name</label>
            <Field type='text' id='firstName' name='firstName' />
            <ErrorMessage name='firstName' component='div' />

            <label htmlFor='lastName'>Last Name</label>
            <Field type='text' id='lastName' name='lastName' />
            <ErrorMessage name='lastName' component='div' />

            <label htmlFor='phoneNumber'>Phone number</label>
            <Field type='text' id='phoneNumber' name='phoneNumber' />
            <ErrorMessage name='phoneNumber' component='div' />

            <label htmlFor='animal'>Animal of interest</label>
            <Field as='select' id='animal' name='animal'>
              <option value=''>Select an animal</option>
              {animals.map((animal) => (
                <option key={animal.name} value={animal.name}>
                  {animal.name}
                </option>
              ))}
            </Field>
            <ErrorMessage name='animal' component='div' />

            <FormButton type='submit'>Submit</FormButton>
          </StyledForm>
        )}
      </Formik>
    </>
  )
}

FormikComponent.propTypes = {
  userName: PropTypes.string,
}

export default FormikComponent
