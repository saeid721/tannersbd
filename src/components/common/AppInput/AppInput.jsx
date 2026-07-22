/**
 * AppInput — reusable controlled input / textarea / select
 *
 * Props:
 *   label      : string
 *   name       : string (required)
 *   type       : 'text' | 'email' | 'tel' | 'date' | 'textarea' | 'select'
 *   value      : string
 *   onChange   : function
 *   onBlur     : function
 *   error      : string
 *   placeholder: string
 *   required   : boolean
 *   options    : Array<{ value, label }> (for select)
 *   rows       : number (for textarea, default: 4)
 *   className  : string
 */

import React from 'react';
import { Form } from 'react-bootstrap';
import styles from './AppInput.module.scss';

const AppInput = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  required = false,
  options = [],
  rows = 4,
  className = '',
  ...rest
}) => {
  const inputId = `field-${name}`;

  const renderControl = () => {
    if (type === 'textarea') {
      return (
        <Form.Control
          as="textarea"
          id={inputId}
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          isInvalid={!!error}
          className={styles.control}
          {...rest}
        />
      );
    }

    if (type === 'select') {
      return (
        <Form.Select
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          isInvalid={!!error}
          className={styles.control}
          {...rest}
        >
          <option value="">{placeholder || 'Select an option'}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Form.Select>
      );
    }

    return (
      <Form.Control
        type={type}
        id={inputId}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        isInvalid={!!error}
        className={styles.control}
        {...rest}
      />
    );
  };

  return (
    <Form.Group className={`${styles.group} ${className}`}>
      {label && (
        <Form.Label htmlFor={inputId} className={styles.label}>
          {label}
          {required && <span className={styles.required} aria-hidden="true"> *</span>}
        </Form.Label>
      )}
      {renderControl()}
      {error && (
        <Form.Control.Feedback type="invalid" className={styles.error}>
          {error}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export default AppInput;
