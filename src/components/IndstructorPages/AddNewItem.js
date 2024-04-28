import React, { useState, useRef } from "react";
import {
  collection,
  doc,
  setDoc,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";
import db from "../../database/db";
import { FaCheckCircle } from "react-icons/fa";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";

export default function AddNewItem({ setItems, items }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [availablility, setAvailablility] = useState("");
  const storage = getStorage();

  const [showDatabaseInfo, setShowDatabaseInfo] = useState(false);
  const [dataUploadStatus, setDataUploadStatus] = useState(false);
  // const [checkBox,setCheckBox] = useState('');
  const [imageUrl1, setImageUrl1] = useState("");
  const [imageUrl2, setImageUrl2] = useState("");
  const [imageUrl3, setImageUrl3] = useState("");
  const [imageUrl4, setImageUrl4] = useState("");
  const [imageUrl5, setImageUrl5] = useState("");

  const [finalImg1, setFinalImg1] = useState("");

  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);
  const fileInputRef3 = useRef(null);
  const fileInputRef4 = useRef(null);
  const fileInputRef5 = useRef(null);

  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [selectedImage3, setSelectedImage3] = useState(null);
  const [selectedImage4, setSelectedImage4] = useState(null);
  const [selectedImage5, setSelectedImage5] = useState(null);
  // let progress;

  // const [imageUrls, setImageUrls] = useState(Array(5).fill(null));

  async function handleAddNewItemSubmit(event) {
    // console.log("funtion in")
    event.preventDefault();
    // const dic = {};
    setShowDatabaseInfo(true);
    // console.log(title)
    // console.log(description)
    // console.log(category)
    // console.log(availablility)
    // console.log(imageUrl1)
    // console.log(imageUrl2)
    // console.log(imageUrl3)
    // console.log(imageUrl4)
    // console.log(imageUrl5)
    // dic[]
    // setTitle(title);
    // setDescription(description);
    // setCategory(category);
    // setAvailablility(availablility);
    // setImageUrl1(imageUrl1);
    // setImageUrl2(imageUrl2);
    // setImageUrl3(imageUrl3);
    // setImageUrl4(imageUrl4);
    // setImageUrl5(imageUrl5);
    // const imageArr = [...imageUrl1, imageUrl2, imageUrl3, imageUrl4,imageUrl5];
    // dic["title"] = title;
    // dic["description"] = description;
    // dic["category"] = category;
    // dic["stock"] = availablility;
    // dic["images1"] = imageUrl1;
    // dic["images2"] = imageUrl2;
    // dic["images3"] = imageUrl3;
    // dic["images4"] = imageUrl4;
    // dic["images5"] = imageUrl5;
    // dic["id"] = title

    // setItems([...items, dic]);

    
    const date = new Date().getTime();
    const storageRef1 = ref(storage, `${title + date}.jpg`);
    // const storageRef2 = ref(storage, `${title + date +2}.jpg`);
    // const storageRef3 = ref(storage, `${title + date + 3}.jpg`);
    // const storageRef4 = ref(storage, `${title + date + 4}.jgp`);
    // const storageRef5 = ref(storage, `${title + date + 5}.jgp`);

    // const imageRefs = [
    //   ref(storage, `${title + date}.jpg`),
    //   ref(storage, `${title + date + 1}.jpg`),
    //   ref(storage, `${title + date + 2}.jpg`),
    //   ref(storage, `${title + date + 3}.jpg`),
    //   ref(storage, `${title + date + 4}.jpg`),
    // ];

    // async function uploadImage(imageRef, imageUrl) {
    //   if (!imageUrl) {
    //     return null; // Handle potential missing image URL
    //   }

    //   try {
    //     const uploadTask = await uploadBytesResumable(imageRef, imageUrl);
    //     await uploadTask.on(
    //       "state_changed",
    //       (snapshot) => {
    //         // Observe state change events (optional for progress tracking)
    //         const progress =
    //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //         console.log("Upload progress:", progress, "%");
    //       },
    //       (error) => {
    //         console.error("Error uploading image:", error);
    //       }
    //     );

    //     const url = await getDownloadURL(uploadTask.snapshot.ref);
    //     return url;
    //   } catch (error) {
    //     console.error("Error uploading image:", error);
    //     return null;
    //   }
    // }

    // const uploadedImageUrls = [];
    // for (let i = 0; i < imageRefs.length; i++) {
    //   const imageRef = imageRefs[i];
    //   const selectedFile =
    //     i === 0
    //       ? fileInputRef1.current.files[0]
    //       : i === 1
    //       ? fileInputRef2.current.files[0]
    //       : i === 2
    //       ? fileInputRef3.current.files[0]
    //       : i === 3
    //       ? fileInputRef4.current.files[0]
    //       : fileInputRef5.current.files[0];

    //   if (!selectedFile) {
    //     continue; // Skip if no file selected for this slot
    //   }

    //   const uploadedUrl = await uploadImage(imageRef, selectedFile);
    //   if (uploadedUrl) {
    //     uploadedImageUrls.push(uploadedUrl);
    //   }
    // }

    // const productRef = collection(db, "productsData");

    // try {
    //   await updateDoc(doc(db, "productsData", "items"), {
    //     product: arrayUnion({
    //       title: title,
    //       description: description,
    //       availablility: availablility,
    //       category: category,
    //       imageUrl1: uploadedImageUrls[0] || null,
    //       imageUrl2: uploadedImageUrls[1] || null,
    //       imageUrl3: uploadedImageUrls[2] || null,
    //       imageUrl4: uploadedImageUrls[3] || null,
    //       imageUrl5: uploadedImageUrls[4] || null,
    //       id: date,
    //     }),
    //   });

    //   setDataUploadStatus(true);
    //   console.log("Data written successfully!");
    // } catch (error) {
    //   console.error("Error writing data:", error);
    // }

    // let imgArr = []
    uploadBytesResumable(storageRef1, imageUrl1).on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload progress: " + progress + "%");
      },
      (error) => {
        // Handle errors during upload
        console.error("Error uploading image: ", error);
      },
      () => {
        // Upload completed successfully, get the download URL
        getDownloadURL(storageRef1).then(async (url1) => {
          // URL now contains the downloadable image URL
          console.log("Image uploaded successfully: ", url1);
          // imgArr.push(url1)
          try {
            await updateDoc(doc(db, "productsData", "items"), {
              product: arrayUnion({
                title: title,
                description: description,
                availablility: availablility,
                category: category,
                imageUrl1:  url1,
                imageUrl2:  null,
                imageUrl3:  null,
                imageUrl4:  null,
                imageUrl5:  null,
                id: date,
              }),
            });

            setDataUploadStatus(true);
            console.log("Data written successfully!");
          } catch (error) {
            console.error("Error writing data:", error);
          }
          // Proceed to storing the URL in Firestore (see next step)
        });
      }
    );

    // try {
    //   await updateDoc(doc(db, "productsData", "items"), {
    //     product: arrayUnion({
    //       title: title,
    //       description: description,
    //       availablility: availablility,
    //       category: category,
    //       imageUrl1: imgArr[0],
    //       imageUrl2: imgArr[1],
    //       imageUrl3: imgArr[2],
    //       imageUrl4: imageUrl4,
    //       imageUrl5: imageUrl5,
    //       id:date,
    //     }),
    //   });

    //   setDataUploadStatus(true);
    //   console.log("Data written successfully!");
    // } catch (error) {
    //   console.error("Error writing data:", error);
    // }

    // const uploadTask = uploadBytesResumable(storageRef1, imageUrl1);
    // getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
    //   setImageUrl1(downloadURL)
    // })

    // await uploadBytesResumable(storageRef1, imageUrl1).then(() => {
    //   getDownloadURL(storageRef1).then(async (downloadURL) => {
    //     setImageUrl1(downloadURL);
    //   });
    // });

    // await uploadBytesResumable(storageRef2, imageUrl2).then(() => {
    //   getDownloadURL(storageRef2).then(async (downloadURL) => {
    //     setImageUrl1(downloadURL);
    //   });
    // });

    // await uploadBytesResumable(storageRef3, imageUrl3).then(() => {
    //   getDownloadURL(storageRef3).then(async (downloadURL) => {
    //     setImageUrl1(downloadURL);
    //   });
    // });

    // await uploadBytesResumable(storageRef4, imageUrl4).then(() => {
    //   getDownloadURL(storageRef4).then(async (downloadURL) => {
    //     setImageUrl1(downloadURL);
    //   });
    // });

    // await uploadBytesResumable(storageRef5, imageUrl5).then(() => {
    //   getDownloadURL(storageRef5).then(async (downloadURL) => {
    //     setImageUrl1(downloadURL);
    //   });
    // });

    // console.log("set the urls");

    // const productRef = collection(db, "productsData");

    // try {
    //   await updateDoc(doc(db, "productsData", "items"), {
    //     product: arrayUnion({
    //       title: title,
    //       description: description,
    //       availablility: availablility,
    //       category: category,
    //       imageUrl1: imgArr[0],
    //       imageUrl2: imgArr[1],
    //       imageUrl3: imgArr[2],
    //       imageUrl4: imageUrl4,
    //       imageUrl5: imageUrl5,
    //       id:date,
    //     }),
    //   });

    //   setDataUploadStatus(true);
    //   console.log("Data written successfully!");
    // } catch (error) {
    //   console.error("Error writing data:", error);
    // }

    // console.log(items)

    setTitle("");
    setDescription("");
    setCategory("");
    setAvailablility("");
    setImageUrl1("");
    setImageUrl2("");
    setImageUrl3("");
    setImageUrl4("");
    setImageUrl5("");
    fileInputRef1.current.value = "";
    fileInputRef2.current.value = "";
    fileInputRef3.current.value = "";
    fileInputRef4.current.value = "";
    fileInputRef5.current.value = "";
    // console.log("end");
  }

  return (
    <>
      <h3>Add A New Item</h3>

      <div className="card w-75 m-auto text-start mt-1 p-3">
        <form class="was-validated" onSubmit={handleAddNewItemSubmit}>
          <div class="mb-3">
            <label for="validationTextarea" class="form-label">
              Product Title:
            </label>
            <input
              type="text"
              class="form-control"
              value={title}
              id="validationTextarea"
              placeholder="Product Title"
              onChange={(ev) => setTitle(ev.target.value)}
              required
            ></input>
            <div class="invalid-feedback">
              *This Title Will Be Displayed As Same As Entered Above On The
              Products Page*
            </div>
          </div>

          <div class="mb-3">
            <label for="validationTextarea" class="form-label">
              Product Description:
            </label>
            <textarea
              class="form-control"
              id="validationInput"
              placeholder="Product Description"
              rows={4}
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
              required
            ></textarea>
            <div class="invalid-feedback">
              *Keep The Description Short And Precise, This Description Will
              Look As Same As You Have Entered Above On The Products Page*
            </div>
          </div>

          <div class="mb-3">
            <select
              class="form-select"
              value={category}
              onChange={(ev) => setCategory(ev.target.value)}
              required
              aria-label="select example"
            >
              <option value="">Product Category</option>
              <option value="Arduino Uno">Arduino Uno</option>
              <option value="Battery">Battery</option>
              <option value="BreadBoard">BreadBoard</option>
              <option value="Software">Software</option>
              <option value="Motors">Motors</option>
              <option value="Drone">Drone</option>
              <option value="Rasberry">Rasberry</option>
              <option value="propeller">propeller</option>
              <option value="wheels">wheels</option>
              <option value="wires">wires</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="validationTextarea" class="form-label">
              Number of Items Available in Inventory:
            </label>
            <input
              type="number"
              class="form-control"
              id="validationTextarea"
              placeholder="Stock Size"
              value={availablility}
              onChange={(ev) => setAvailablility(ev.target.value)}
              required
            ></input>
          </div>

          <div class="mb-3">
            <input
              type="file"
              class="form-control"
              aria-label="file example"
              ref={fileInputRef1}
              onChange={(ev) => {
                const uploadedFile = ev.target.files[0];
                setImageUrl1(uploadedFile);
                //   setSelectedImage1(uploadedFile);

                //   if (uploadedFile) {
                //     const reader = new FileReader();
                //     reader.onloadend = () => {
                //       setImageUrl1(reader.result);
                //     };
                //     reader.readAsDataURL(uploadedFile);
                //   }
              }}
              required
            />
            <div class="invalid-feedback">
              *Recommanded: Add Pictures with [width: 300px] and [height: 300px]
            </div>
          </div>

          <p className="text-center">Add More Images</p>
          <div class="mb-3 ">
            <input
              type="file"
              class=""
              aria-label="file example"
              ref={fileInputRef2}
              onChange={(ev) => {
                const uploadedFile = ev.target.files[0];
                setImageUrl2(uploadedFile);
                //   setSelectedImage2(uploadedFile);

                //   if (uploadedFile) {
                //     const reader = new FileReader();
                //     reader.onloadend = () => {
                //       setImageUrl2(reader.result);
                //     };
                //     reader.readAsDataURL(uploadedFile);
                //   }
              }}
            />

            <input
              type="file"
              class=""
              aria-label="file example"
              ref={fileInputRef3}
              onChange={(ev) => {
                const uploadedFile = ev.target.files[0];
                setImageUrl3(uploadedFile);
                // setSelectedImage3(uploadedFile);

                // if (uploadedFile) {
                //   const reader = new FileReader();
                //   reader.onloadend = () => {
                //     setImageUrl3(reader.result);
                //   };
                //   reader.readAsDataURL(uploadedFile);
                // }
              }}
            />

            <input
              type="file"
              class=""
              aria-label="file example"
              ref={fileInputRef4}
              onChange={(ev) => {
                const uploadedFile = ev.target.files[0];
                setImageUrl4(uploadedFile);
                // setSelectedImage4(uploadedFile);

                // if (uploadedFile) {
                //   const reader = new FileReader();
                //   reader.onloadend = () => {
                //     setImageUrl4(reader.result);
                //   };
                //   reader.readAsDataURL(uploadedFile);
                // }
              }}
            />

            <input
              type="file"
              class=""
              aria-label="file example"
              ref={fileInputRef5}
              onChange={(ev) => {
                const uploadedFile = ev.target.files[0];
                setImageUrl5(uploadedFile);
                // setSelectedImage5(uploadedFile);

                // if (uploadedFile) {
                //   const reader = new FileReader();
                //   reader.onloadend = () => {
                //     setImageUrl5(reader.result);
                //   };
                //   reader.readAsDataURL(uploadedFile);
                // }
              }}
            />
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
            <button
              type="button"
              class="btn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <button class="btn btn-success" type="submit">
                Add This Item
              </button>
            </button>
            {showDatabaseInfo ? (
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Adding Data To Database
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={() => {
                          setShowDatabaseInfo(false);
                          setDataUploadStatus(false);
                        }}
                      ></button>
                    </div>
                    {!dataUploadStatus ? (
                      <div class="modal-body d-flex justify-content-center align-items-center">
                        Writing The data to the database please wait..
                        <div
                          class="spinner-border text-success m-2"
                          role="status"
                        >
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    ) : (
                      <div class="modal-body d-flex justify-content-center align-items-center ">
                        Data Uploaded Successfully
                        <div className="m-1">
                          <FaCheckCircle size={25} />
                        </div>
                      </div>
                    )}

                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                        onClick={() => {
                          setShowDatabaseInfo(false);
                          setDataUploadStatus(false);
                        }}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Invalid Form Data
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">Please first Fill the form.</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
