import React from 'react'

export default function ReportAPorblem() {
  return (
    <>
    <h3>Report A Problem</h3>
    <div className='card w-75 m-auto text-start mt-1 p-3'>
      <form className="was-validated">
  <div className="mb-3">
    <label for="validationTextarea" className="form-label">Your Complaint</label>
    <textarea className="form-control" id="validationTextarea" placeholder="Enter The Complaint Here..."  rows="6"  required></textarea>
    <div className="invalid-feedback">
      Please enter a valid complaint .
    </div>
  </div>

  <div className="mb-3">
    <input type="file" className="form-control" aria-label="file example"required/>
    <div className="invalid-feedback">*Attach Screenshots For The Issue*</div>
  </div>

  <div className="form-check mb-3">
    <input type="checkbox" className="form-check-input" id="validationFormCheck1" required/>
    <label className="form-check-label" for="validationFormCheck1">Check this checkbox</label>
    <div className="invalid-feedback">Example invalid feedback text</div>
  </div>

  <div className="mb-3">
    <button className="btn btn-danger" type="submit" >Report</button>
  </div>
</form>
    </div>
    </>
  )
}
