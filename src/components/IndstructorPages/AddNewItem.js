import React, { useState, useRef } from "react";

export default function AddNewItem({setItems, items}) {
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [category,setCategory] = useState('');
  const [availablility,setAvailablility] = useState('');
  // const [checkBox,setCheckBox] = useState('');
  const [imageUrl1,setImageUrl1] = useState('');
  const [imageUrl2,setImageUrl2] = useState('');
  const [imageUrl3,setImageUrl3] = useState('');
  const [imageUrl4,setImageUrl4] = useState('');
  const [imageUrl5,setImageUrl5] = useState('');


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


  function handleAddNewItemSubmit(event){
    event.preventDefault()
    const dic = {}
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
    setTitle(title)
    setDescription(description)
    setCategory(category)
    setAvailablility(availablility)
    // const imageArr = [...imageUrl1, imageUrl2, imageUrl3, imageUrl4,imageUrl5];
    dic["title"] = title;
    dic["description"] = description;
    dic["category"] = category;
    dic["stock"] = availablility;
    dic["images1"] = imageUrl1;
    dic["images2"] = imageUrl2;
    dic["images3"] = imageUrl3;
    dic["images4"] = imageUrl4;
    dic["images5"] = imageUrl5;
    dic["id"] = title

    setItems([...items,dic])

    // console.log(items)


    setTitle('');
    setDescription('')
    setCategory('')
    setAvailablility('')
    setImageUrl1('')
    setImageUrl2('')
    setImageUrl3('')
    setImageUrl4('')
    setImageUrl5('')
    fileInputRef1.current.value = '';
    fileInputRef2.current.value = '';
    fileInputRef3.current.value = '';
    fileInputRef4.current.value = '';
    fileInputRef5.current.value = '';

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
            onChange={(ev)=> setTitle(ev.target.value)}
            required
          ></input>
          <div class="invalid-feedback">
            *This Title Will Be Displayed As Same As Entered Above On The Products Page*
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
            onChange={(ev)=> setDescription(ev.target.value)}
            required
          ></textarea>
          <div class="invalid-feedback">
            *Keep The Description Short And Precise, This Description Will Look
            As Same As You Have Entered Above On The Products Page*
          </div>
        </div>

        <div class="mb-3">
          <select class="form-select"  value={category} onChange={(ev) => setCategory(ev.target.value)} 
          required 
          aria-label="select example">
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
            onChange={(ev)=> setAvailablility(ev.target.value)}
            required
          ></input>
        </div>

        <div class="mb-3">
          <input
            type="file"
            class="form-control"
            aria-label="file example"
            ref={fileInputRef1}
            onChange={(ev)=> {
              const uploadedFile = ev.target.files[0];
              setSelectedImage1(uploadedFile);
          
              // Handle preview or processing (optional)
              if (uploadedFile) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setImageUrl1(reader.result); // Set image data URL in state
                };
                reader.readAsDataURL(uploadedFile);
              }
            }}
            required
          />
          <div class="invalid-feedback">*Recommanded: Add Pictures with [width: 300px] and [height: 300px]</div>
        </div>
        
        <p className="text-center">Add More Images</p>
        <div class="mb-3 ">
          <input
            type="file"
            class=""
            aria-label="file example"
            ref={fileInputRef2}
            onChange={(ev)=> {
              const uploadedFile = ev.target.files[0];
              setSelectedImage2(uploadedFile);
          
              // Handle preview or processing (optional)
              if (uploadedFile) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setImageUrl2(reader.result); // Set image data URL in state
                };
                reader.readAsDataURL(uploadedFile);
              }
            }}
            
          />

          <input
            type="file"
            class=""
            aria-label="file example"
            ref={fileInputRef3}
            onChange={(ev)=> {
              const uploadedFile = ev.target.files[0];
              setSelectedImage3(uploadedFile);
          
              // Handle preview or processing (optional)
              if (uploadedFile) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setImageUrl3(reader.result); // Set image data URL in state
                };
                reader.readAsDataURL(uploadedFile);
              }
            }}
          />

          <input
            type="file"
            class=""
            aria-label="file example"
            ref={fileInputRef4}
            onChange={(ev)=> {
              const uploadedFile = ev.target.files[0];
              setSelectedImage4(uploadedFile);
          
              // Handle preview or processing (optional)
              if (uploadedFile) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setImageUrl4(reader.result); // Set image data URL in state
                };
                reader.readAsDataURL(uploadedFile);
              }
            }}
          />

          <input
            type="file"
            class=""
            aria-label="file example"
            ref={fileInputRef5}
            onChange={(ev)=> {
              const uploadedFile = ev.target.files[0];
              setSelectedImage5(uploadedFile);
          
              // Handle preview or processing (optional)
              if (uploadedFile) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setImageUrl5(reader.result); // Set image data URL in state
                };
                reader.readAsDataURL(uploadedFile);
              }
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
          <button class="btn btn-success" type="submit">
            Add This Item
          </button>
        </div>
      </form>
    </div>
    </>
  );
}
