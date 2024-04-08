import React from 'react';
import styles from './Results.module.css'

const Results = props => {
    const { firstName, lastName, email, password, confirmPassword } = props.formData;
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>Your Form Data</h2>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Confirm Password: {confirmPassword}</p>
    </div>
  );
}

export default Results;
