import { useState } from 'react';
import style from '../style/Form.module.css';

const Form = () => {
  const [client, setClient] = useState({ name: '', email: '', message: '' });
  const [sentStatus, setSentStatus] = useState('');
  return (
    <form
      action="https://formspree.io/f/mrgvwjrg"
      onSubmit={async (el) => {
        el.preventDefault();
        const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(client),
        };

        await fetch('https://formspree.io/f/mrgvwjrg', options)
          .then((response) => {
            if (response.ok) {
              setSentStatus(true);
              document.querySelector('#formU').reset();
            }
            return response.json();
          })
          .catch(() => setSentStatus(false));
      }}
      method="post"
      className={style.formContainer}
      id="formU"
    >

      <input
        type="text"
        name="name"
        className="userName"
        onChange={(el) => {
          setClient({
            ...client,
            name: el.target.value,
          });
        }}
        placeholder="Full name"
        min="2"
        maxLength="30"
        required
      />
      <input
        type="email"
        name="email"
        id="email"
        onChange={(el) => {
          setClient({
            ...client,
            email: el.target.value,
          });
        }}
        className="userEmail"
        placeholder="Your Email"
        required
      />
      <textarea
        name="message"
        id=""
        cols="30"
        className="userSMS "
        onChange={(el) => {
          setClient({
            ...client,
            message: el.target.value,
          });
        }}
        rows="3"
        placeholder="Hey I&apos;d like to connect to..."
        required
      />
      {sentStatus && (<p className={style.successSms}>Your Message was sent successfully</p>)}
      {sentStatus === false && (
      <p className={style.errorSms}>
        Uups! Could not sent your
        Message please check your connection and try again!
      </p>
      )}
      <div className={style.formContainerBtns}>
        <button className="btnPrimary" type="submit">Get in touch</button>
        <button
          className="btnPrimary"
          type="button"
          id="btnReset"
          style={{ backgroundColor: '#ff6163' }}
          onClick={() => {
            document.querySelector('.userName').value = '';
            document.querySelector('.userEmail').value = '';
            document.querySelector('.userSMS').value = '';
            setSentStatus('');
          }}
        >
          Reset form
        </button>
      </div>
      <a className={style.email} href="mailto:gracianomanuelhenrique@gmail.com">gracianomanuelhenrique@gmail.com</a>
    </form>
  );
};

export default Form;
