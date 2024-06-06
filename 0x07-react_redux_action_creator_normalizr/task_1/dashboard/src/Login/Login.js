import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import BodySection from '../BodySection/BodySection';


function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [enableSubmit, setEnableSubmit] = React.useState(false);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    validateForm();
    console.log(`Logging in with ${email} ${password}`);
  };

  const validateForm = () => {
    if (email !== '' && password !== '') {
      setEnableSubmit(true);
    } else {
      setEnableSubmit(false);
    }
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  

  return (
    <div className={css(styles.appBody, styles.appBodyResp)} onSubmit={handleLoginSubmit}>
      <p>Login to access the full dashboard</p>
      <aside>
        <form className={css(styles.form, styles.formResp)}>
          <section>
            <label htmlFor='email'>
            Email:
            </label>
            <input type='email' value={email} className={css(styles.email, styles.emailResp)} onChange={handleChangeEmail} />
          </section>

          <section>
            <label htmlFor='password'>
            Password:
            </label>
            <input type='password' value={password} className={css(styles.password, styles.passwordResp)} onChange={handleChangePassword} />
          </section>

          <input type='submit' className={css(styles.button, styles.buttonResp)} disabled={!enableSubmit} />
        </form>
      </aside>

      <aside>
        <BodySection title='News from the School' children='Exciting things are happening at our school this month! Our science fair showcased incredible projects from students across all grades, with innovative experiments and groundbreaking research. The sports teams have also been on a winning streak, bringing home multiple championships. Additionally our school has introduced new extracurricular activities, including a coding club and a gardening program, to further enrich student learning and engagement. Stay tuned for more updates and achievements in the coming weeks!' />
      </aside>
    </div>
  );
}

const styles = StyleSheet.create({
  appBody: {
    height: '100vh',
    textAlign: 'left',
    padding: '2rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'row'
  },
  email: {
    padding: '0.5rem',
    margin: '0.5rem 1rem',
    border: '0.1px solid grey',
    outline: 'none'
  },
  password: {
    padding: '0.5rem',
    margin: '0.5rem 1rem',
    border: '0.1px solid grey',
    outline: 'none'
  },
  button: {
    padding: '0.5rem 1rem',
    margin: '0.5rem 1rem',
    border: '0.1px solid grey',
    borderRadius: '5px'
  },
  formResp: {
    '@media screen and (max-width: 900px)': {
      flexDirection: 'column',
    }
  },
  appBodyResp: {
    '@media screen and (max-width: 900px)': {
        height: '100vh',
        textAlign: 'left',
        padding: '2rem 1.5rem'
    }
  },
  emailResp: {
    '@media screen and (max-width: 900px)': {
        display: 'none',
    }
  },
  passwordResp: {
    '@media screen and (max-width: 900px)': {
        display: 'none',
    }
  },
  buttonResp: {
    '@media screen and (max-width: 900px)': {
        padding: '0.5rem 2rem',
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    }
  },
});

export default Login;
