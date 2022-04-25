import axios from 'axios';

const formUrl = 'https://formspree.io/f/xgedpoga';

export const submitContactUsForm = async (data) => {
  console.log(data);
  try {
    const response = await axios.post(formUrl, data);
    return response;
  } catch (error) {
    return error;
  }
};
