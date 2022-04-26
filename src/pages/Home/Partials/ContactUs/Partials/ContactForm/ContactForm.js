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
import strings from '../../../../../../constants/strings';

const ContactForm = ({ loading, submitContactUsForm }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await submitContactUsForm(data);
    reset();
  };

  return (
    <StyledContactForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInputsWrapper>
        <InputText
          name="name"
          label="Name"
          register={register}
          required={{ required: strings.errors.invalidName }}
          error={errors.name?.message}
        />
        <InputText
          name="email"
          label="Email"
          register={register}
          required={{ required: strings.errors.invalidEmail }}
          error={errors.email?.message}
        />
        <InputText
          element="textarea"
          name="message"
          label="Message"
          register={register}
          required={{ required: strings.errors.invalidMessage }}
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
        {strings.labels.send}
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
