import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import InputText from '../../../../../../components/InputText/InputText';
import Button from '../../../../../../components/Button/Button';
import {
  StyledButtonLoader,
  StyledContactForm,
  StyledInputsWrapper,
} from './style';
import { submitContactUsFormRequest } from '../../../../../../ducks/home/contactUs/actions';
import { getContactUsLoading } from '../../../../../../ducks/home/selectors';

const ContactForm = ({ loading, submitContactUsForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await submitContactUsForm(data);
  };

  return (
    <StyledContactForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInputsWrapper>
        <InputText
          name="name"
          label="Name"
          register={register}
          required={{ required: 'Please enter your name' }}
          error={errors.name?.message}
        />
        <InputText
          name="email"
          label="Email"
          register={register}
          required={{ required: 'Please enter a valid email' }}
          error={errors.email?.message}
        />
        <InputText
          element="textarea"
          name="message"
          label="Message"
          register={register}
          required={{ required: 'Please enter your message' }}
          error={errors.message?.message}
        />
      </StyledInputsWrapper>
      <Button
        disabled={loading}
        element="button"
        uiType="primary"
        type="submit"
      >
        {loading && (
          <StyledButtonLoader height={18} width={35} type="bubbles" />
        )}
        Send
      </Button>
    </StyledContactForm>
  );
};

const mapStateToProps = (state) => ({
  loading: getContactUsLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  submitContactUsForm: (data) => dispatch(submitContactUsFormRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
