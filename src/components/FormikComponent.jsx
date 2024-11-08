import { useState, useEffect } from 'react'
import { Formik, Field, ErrorMessage as FormikErrorMessage } from 'formik'
import PropTypes from 'prop-types'
import { fetchAnimals } from '../api/AnimalFetch'
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
  min-width: 100px;
  background-color: #408940;
  border-radius: 13px;
`

const NameProp = styled.p`
  max-width: 300px;
  text-align: center;
  white-space: pre-wrap;
`
const StyledErrorMessage = styled(FormikErrorMessage)`
  color: red;
`

const validate = (values) => {
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
}

const FormikComponent = ({ userName }) => {
  const [animals, setAnimals] = useState([])
  const [age, setAge] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const animalsData = await fetchAnimals()
        setAnimals(animalsData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  const handleInputChangeAge = (e) => {
    setAge(e.target.value)
  }

  return (
    <>
      <NameProp>
        {`Hi${userName ? ` ${userName}` : ''}, \n
    if you are interested in adopting feel free to contact us!`}
      </NameProp>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          phoneNumber: '',
          animal: '',
        }}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values, { setSubmitting, setFieldTouched, resetForm }) => {
          Object.keys(values).forEach((field) => setFieldTouched(field, true))
          const errors = validate(values)
          if (Object.keys(errors).length === 0) {
            alert(`Thanks for your support, ${values.firstName}!`)
            resetForm()
          }
          setSubmitting(false)
        }}
        validate={validate}
      >
        {({ handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit}>
            <label htmlFor='ageHolder'>Enter your Age</label>
            <input
              name='ageHolder'
              id='ageHolder'
              type='text'
              value={age}
              onChange={handleInputChangeAge}
            />
            {age && (
              <p>
                {age > 19
                  ? 'You are old enough to adopt'
                  : 'You are not old enough to adopt'}
              </p>
            )}
            <label htmlFor='firstName'>First Name</label>
            <Field type='text' id='firstName' name='firstName' />
            <StyledErrorMessage name='firstName' component='div' />

            <label htmlFor='lastName'>Last Name</label>
            <Field type='text' id='lastName' name='lastName' />

            <label htmlFor='phoneNumber'>Phone number</label>
            <Field type='text' id='phoneNumber' name='phoneNumber' />
            <StyledErrorMessage name='phoneNumber' component='div' />

            <label htmlFor='animal'>Animal of interest</label>
            <Field as='select' id='animal' name='animal'>
              <option value=''>Select an animal</option>
              {animals.map((animal) => (
                <option key={animal.name} value={animal.name}>
                  {animal.name}
                </option>
              ))}
            </Field>

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
