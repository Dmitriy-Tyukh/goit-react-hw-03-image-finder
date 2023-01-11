import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { MdSearch } from 'react-icons/md';
import { ButtonSearch, FormStyle, FieldStyle } from './SearchForm.styled';


const SearchForm = ({ onSubmitForm, status }) => {
    const handleSubmitForm = (values, { resetForm }) => {
    onSubmitForm(values);
    resetForm();
  };

  return (
    <Formik initialValues={{ name: '' }} onSubmit={handleSubmitForm}>
      <FormStyle>
              
        <ButtonSearch
          type="submit"
          disabled={status}
          area-label="Search button"
          variant="outlined"
          size="large"
          startIcon={<MdSearch />}
        />

        <FieldStyle
          type="text"
          placeholder="Search images and photos"
          name="name"
        />
              
      </FormStyle>
    </Formik>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  status: PropTypes.bool.isRequired,
};