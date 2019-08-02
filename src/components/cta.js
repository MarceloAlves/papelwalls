import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Button from '../components/button'
import SectionHeader from './section-header'

const CallToAction = () => {
  const [hasSignedUp, setHasSignedUp] = useState(false)

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    setSubmitting(true)
    try {
      const response = await addToMailchimp(values.email)
      if (response.result === 'success') {
        setHasSignedUp(true)
      } else {
        setFieldError('email', 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setFieldError('email', 'Something went wrong. Please try again.')
    }
    setSubmitting(false)
  }

  const formSchema = Yup.object().shape({
    email: Yup.string().email()
  })

  return (
    <div style={{ padding: '4rem 1rem', textAlign: 'center' }}>
      <SectionHeader
        title="Stay Updated"
        description={hasSignedUp && "You're In!"}
      />

      {!hasSignedUp && <Formik validationSchema={formSchema} initialValues={{ email: '' }} onSubmit={handleSubmit}>
        {({isValid, isSubmitting}) => (
          <Form>
            <div style={{display: 'flex', flexDirection:"column"}}>
              <Field name="email" placeholder="Your Email" />
              <ErrorMessage style={{ fontSize: 12}} name="email" />
            </div>
            <div style={{ marginTop: 20 }}>
              <Button disabled={!isValid || isSubmitting} type="submit">Sign Up</Button>
            </div>
          </Form>
        )}
      </Formik>}
    </div>
  )
}

export default CallToAction
