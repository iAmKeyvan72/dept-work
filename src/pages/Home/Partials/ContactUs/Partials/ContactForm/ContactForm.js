import React from 'react';
import { useForm } from 'react-hook-form';
import InputText from '../../../../../../components/InputText/InputText';
import Button from '../../../../../../components/Button/Button';
import { StyledContactForm, StyledInputsWrapper } from './style';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <Button element="button" uiType="primary" type="submit">
        Send
      </Button>
    </form>
  );
};

export default ContactForm;
