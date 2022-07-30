import React from 'react';

const AddExpenseForm = () => {
  return (
    <form>
      <div class='row'>
        <div class='col-sm col-lg-4'>
          <label for='name'>Name</label>
          <input
            required='required'
            type='text'
            class='form-control'
            id='name'
          />
        </div>
        <div class='col-sm col-lg-4'>
          <label for='cost'>Cost</label>
          <input
            required='required'
            type='number'
            class='form-control'
            id='cost'
          />
        </div>
      </div>
      <div class='row mt-3'>
        <div class='col-sm'>
          <button type='submit' class='btn btn-primary'>
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
