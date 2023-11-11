import { Formik } from 'formik';
import * as Yup from 'yup';
import "yup-phone"; 
import { ErrMessage, StyledForm, StyledField, Label, BtnAdd } from './ContactForm.styled';

const quizSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').required('This field is required!'),
    number: Yup.string().matches(/^\d{3}-\d{2}-\d{2}$/, 'Must be in format: 000-00-00').required('This field is required!')
  
});

 const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={quizSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
          <StyledForm>
              
        
              <Label>
                Name
          <StyledField type="text" name="name" placeholder=" " />
          <ErrMessage name="name" component="div" />
              </Label>

             <Label>
              Number (000-00-00)
          <StyledField type="text" name="number" />
          <ErrMessage name="number" component="div" />
            </Label>

            <BtnAdd type="submit">Add contact</BtnAdd>
      </StyledForm>
    </Formik>
  );
};

export default ContactForm;