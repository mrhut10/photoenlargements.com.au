import React from 'react';
import { navigate } from 'gatsby';

import Input from './input';
import FormRow from './form-row';
import TextArea from './textarea';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

const ContactForm = () => {
  const [state, setState] = React.useState({
    name: 'Luke',
    email: 'hello@lukebennett.com.au',
    message: 'Hello World!',
  });

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  return (
    <form
      action="/success/"
      autoComplete="on"
      className="w-full"
      data-netlify="true"
      method="POST"
      name="contact-form"
      onSubmit={handleSubmit}
    >
      <FormRow>
        <Input
          labelVisible
          label="Name"
          required
          id="name"
          name="name"
          placeholder="Name"
          value={state.name}
          autoComplete="name"
          handleChange={handleChange}
        />
        <Input
          margin
          labelVisible
          required
          label="Email"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={state.email}
          autoComplete="email"
          handleChange={handleChange}
        />
      </FormRow>
      <FormRow>
        <TextArea
          labelVisible
          label="Message"
          // id={`${id}-message`}
          name="message"
          required
          placeholder="Message *"
          rows={4}
          // value={state[message]}
          handleChange={handleChange}
        />
      </FormRow>
      <p className="mt-4">
        <button type="button" className="button">
          Send
        </button>
      </p>
    </form>
  );
};

export default ContactForm;
