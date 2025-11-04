import React from 'react';

function AddTodoSub () {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-6">
          Buy Milk
        </div>
        <div class="col-4">
          4/10/2023
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">delete</button>
        </div>
      </div><div class="row">
        <div class="col-6">
          go to sool
        </div>
        <div class="col-4">
          4/10/2023
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">delete</button>
        </div>
      </div>
    </div>
  );
}

export default AddTodoSub;
