import React from 'react';

const ContactUs = () => {
  return (
    <section className="contactUsSection">
      <div className="container">
        <h3 className="sectionTitle">questions? we are here to help!</h3>
        <form>
          <div className="formItem">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
            <p className="inputError">This field is required</p>
          </div>
          <div className="formItem">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <p className="inputError">This field is required</p>
          </div>
          <div className="formItem">
            <label htmlFor="message">Message</label>
            <textarea id="message"></textarea>
            <p className="inputError">This field is required</p>
          </div>
          <button type="submit" className="btn btnPrimary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
