import React from "react";

export default function AddNewItem() {
  return (
    <>
    <h3>Add A New Item</h3>
    <div className="card w-75 m-auto text-start mt-1 p-3">
      <form class="was-validated">

      <div class="mb-3">
          <label for="validationTextarea" class="form-label">
            Product Title
          </label>
          <input
            type="text"
            class="form-control"
            id="validationTextarea"
            placeholder="Product Title"
            required
          ></input>
          <div class="invalid-feedback">
            *This Title Will Be Displayed As Same As Entered Above On The Products Page*
          </div>
        </div>



        <div class="mb-3">
          <label for="validationTextarea" class="form-label">
            Product Description
          </label>
          <textarea
            class="form-control"
            id="validationTextarea"
            placeholder="Product Description"
            rows={4}
            required
          ></textarea>
          <div class="invalid-feedback">
            *Keep The Description Short And Precise, This Description Will Look
            As Same As You Have Entered Above On The Products Page*
          </div>
        </div>

        <div class="mb-3">
          <select class="form-select" required aria-label="select example">
            <option value="">Product Category</option>
            <option value="1">Arduino Uno</option>
            <option value="1">Battery</option>
            <option value="3">BreadBoard</option>
            <option value="2">Software</option>
            <option value="3">Motors</option>
            <option value="3">Drone</option>
            <option value="3">Rasberry</option>
            <option value="3">propeller</option>
            <option value="3">wheels</option>
            <option value="3">wires</option>
          </select>
          <div class="invalid-feedback">*Please Choose A Valid Item Category*</div>
        </div>

        <div class="mb-3">
          <input
            type="file"
            class="form-control"
            aria-label="file example"
            required
          />
          <div class="invalid-feedback">*Recommanded: Add Pictures with [width: 300px] and [height: 300px]</div>
        </div>

        <div class="form-check mb-3">
          <input
            type="checkbox"
            class="form-check-input"
            id="validationFormCheck1"
            required
          />
          <label class="form-check-label" for="validationFormCheck1">
            All Details Entered Are Correct
          </label>
          <div class="invalid-feedback">
            *Please check this checkbox only when you have entered all the
            details correctly*
          </div>
        </div>

        <div class="mb-3">
          <button class="btn btn-success" type="submit">
            Add This Item
          </button>
        </div>
      </form>
    </div>
    </>
  );
}
