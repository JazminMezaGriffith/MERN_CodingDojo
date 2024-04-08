import React, { useState } from 'react';
import styles from './UserForm.module.css'

const UserForm = props => {
  const { formData, setFormData } = props;
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = e => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });

    setErrors({
      ...errors,
      [e.target.name]: validateField(e.target.name, e.target.value)
    });
  };
  
  const validateField = (name, value) => {
    switch (name) {
      case 'firstName':
        return value.length < 2 ? 'First name must be at least 2 characters long' : '';
      case 'lastName':
        return value.length < 2 ? 'Last name must be at least 2 characters long' : '';
      case 'email':
        return value.length < 5 ? 'Email must be at least 5 characters long' : '';
      case 'password':
        return value.length < 8 ? 'Password must be at least 8 characters long' : '';
      case 'confirmPassword':
        return value !== formData.password ? 'Passwords must match' : '';
      default:
        return '';
    }
  };

  return (
    <form className={styles.container}>
      <div className={styles.grey}>
        <label htmlFor="firstName">First Name: </label>
        <input onChange={handleChange} type="text" id="firstName" name="firstName" value={formData.firstName} />
      </div>
        {errors.firstName && <p className={styles.error}>{errors.firstName}</p>}
      <div className={styles.grey}>
        <label htmlFor="lastName">Last Name: </label>
        <input onChange={handleChange} type="text" id="lastName" name="lastName" value={formData.lastName} />
      </div>
        {errors.lastName && <p className={styles.error}>{errors.lastName}</p>}
      <div className={styles.grey}>
        <label htmlFor="email">Email: </label>
        <input onChange={handleChange} type="email" id="email" name="email" value={formData.email} />
      </div>
        {errors.email && <p className={styles.error}>{errors.email}</p>}
      <div className={styles.grey}>
        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input onChange={handleChange} type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} />
      </div>
        {errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword}</p>}
      <div className={styles.grey}>
        <label htmlFor="password">Password: </label>
        <input onChange={handleChange} type="password" id="password" name="password" value={formData.password} />
      </div>
        {errors.password && <p className={styles.error}>{errors.password}</p>}
    </form>
  );
}

export default UserForm;
