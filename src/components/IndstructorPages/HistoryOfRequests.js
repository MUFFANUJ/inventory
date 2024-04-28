import React, { useState, useEffect } from 'react'
import db from "../../database/db";
import {
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";

export default function HistoryOfRequests() {
  const [requestArr,setRequestArr] = useState([])


  useEffect(() => {
    async function getRequests() {
      const requestsRef = doc(db, "Allrequests","requests");
      const docSnap = await getDoc(requestsRef);
      if (docSnap.exists()) {
        console.log("Document data:", (docSnap.data()).request);
        setRequestArr((docSnap.data()).request);
        // setLoading(true);
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    getRequests();
  },[]);
  return (
    <>
    <h1>All Requests</h1>
    <div class="d-flex flex-wrap gap-3 justify-content-center m-auto align-items-center">
      {requestArr.map(request => {
        return (<div class="card" style={{width: "18rem;"}}>
        <div class="card-body">
          <h5 class="card-title">{request.request_for}</h5>
          <p class="card-text">Request From:- {request.username}</p>
          <p class="card-text">From:- {request.startDate} To:- {request.endDate}</p>
          <p class="card-text">Reason:- {request.reason}</p>
          <p class="card-text">Availablility Count: {request.availablility}</p>
          {/* <p class="card-text">{request.reason}</p> */}
          <p class={`card-text bg-warning rounded`}>{request.status}</p>
          
          <button class="btn btn-success m-1">Accept</button>
          <button class="btn btn-danger m-1">Reject</button>
         
        </div>
      </div>)
      })}
    </div>
    </>
  )
}
