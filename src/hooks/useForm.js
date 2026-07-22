/**
 * useForm — generic form state & validation hook
 *
 * Usage:
 *   const { values, errors, handleChange, handleSubmit, isSubmitting } = useForm(
 *     initialValues,
 *     validate,
 *     onSubmit
 *   );
 */

import { useState, useCallback } from 'react';

const useForm = (initialValues = {}, validate, onSubmit) => {
  const [values, setValues]           = useState(initialValues);
  const [errors, setErrors]           = useState({});
  const [touched, setTouched]         = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError]  = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setValues((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    // Clear field error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  }, [errors]);

  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    if (validate) {
      const fieldErrors = validate({ ...values });
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] || '' }));
    }
  }, [values, validate]);

  const handleSubmit = useCallback(async (e) => {
    e?.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(false);

    // Run all validations
    if (validate) {
      const validationErrors = validate(values);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        setTouched(Object.keys(values).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
        return;
      }
    }

    setIsSubmitting(true);
    try {
      await onSubmit(values);
      setSubmitSuccess(true);
      setValues(initialValues);
      setTouched({});
      setErrors({});
    } catch (err) {
      setSubmitError(err?.message || 'Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }, [values, validate, onSubmit, initialValues]);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setSubmitError(null);
    setSubmitSuccess(false);
  }, [initialValues]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    submitError,
    submitSuccess,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setValues,
  };
};

export default useForm;
