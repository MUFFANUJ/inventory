import React, { useState, useEffect } from "react";
import { IoIosStar } from "react-icons/io";

export default function InstructorViewAllItems({items,setItems}) {
  console.log(items);
  // const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ratingSort,setRatingSort] = useState(false);
  const [itemsCopy,setItemsCopy] = useState([]);
  // const [priceSort,setPriceSort] = useState([]);
  // const [newestSort,setNewestSort] = useState([]);

  // useEffect(() => {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setItems(data.products);
  //       setLoading(true);
  //       setItemsCopy(data.products)
  //     });
  // }, []);

  // function displayAll(){
    // setRatingSort(prev => !prev);
  //   setItems(itemsCopy);
  // }
  

  function sortByRating(){
    // return [...items].sort((a, b) => a.rating - b.rating).reverse();
    // const arr2 = items.map(item=> ({...item}))
    // const arr = items.slice().sort((a, b) => a.rating - b.rating).reverse();
    // console.log(arr)
    // console.log(items)
    
    // Create a new array by slicing the original one
    const newArrayToSort = items.slice();
    
    // Sort the new array using a comparison function
    newArrayToSort.sort((a, b) => b.rating - a.rating);
    
    // console.log(arr2); // Remains unchanged
    // console.log(newArrayToSort); // Sorted array in ascending order by age
    
    
    // setRatingSort(prev => !prev);
    // if (ratingSort){
      // console.log(true);
      // setItems(itemsCopy);
    // }else{
      setItems([...newArrayToSort])
    // }
    // console.log(arr)
    // setRatingSort(arr)
    // setItems(ratingSort);
  }

  // function handleRatingSort(){
  //   const arr = sortByRating(items);
  //   setItems([...arr])
  // }




  return (
    // <div className="m-auto p-0">
    <>
      <div class="input-group mb-3 mt-4 m-auto w-75">
        <input
          type="text"
          class="form-control"
          placeholder="Search An Item"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          class="btn btn-outline-success"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </div>

      <div className="w-75 m-auto">
        <span>Sort Items With:</span>
        <button type="button" class="btn btn-success btn-sm m-1" >
          All
        </button>
        <button type="button" class="btn btn-success btn-sm m-1">
          Newest First
        </button>
        <button type="button" class="btn btn-success btn-sm m-1">
          Available
        </button>
        <button type="button" class="btn btn-success btn-sm m-1" onClick={sortByRating}>
          Rating
        </button>
        <button type="button" class="btn btn-success btn-sm m-1">
          Price: Low To High
        </button>
        <button type="button" class="btn btn-success btn-sm m-1">
          Price: High To Low
        </button>
        <select class="btn btn-success btn-sm m-1">
          <option selected>Items Category</option>
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
      </div>

      {/* <div className="m-auto"> */}
      <p>Total Search Results:{items.length}</p>
      {/* <div> */}
      {/* <div class=" m-auto"> */}

      <div class="d-flex flex-wrap gap-3 justify-content-center m-auto align-items-center">
        {loading ? (
          <>
            {items.map((item) => {
              return (
                <div class="card" style={{ width: "18rem" }}>
                  <div
                    id={`carouselExample_${item.id}`}
                    class={`carousel slide ${item.id}`}
                  >
                    <div class="carousel-inner">
                      <div class={`carousel-item active ${item.id}`}>
                        <img
                          src={item.images1 ? item.images1 : "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"}
                          style={{
                            width: "300px",
                            height: "300px",
                            objectFit: "cover",
                          }}
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src={item.images2 ? item.images2 : "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"}
                          class="d-block w-100"
                          alt="..."
                          style={{
                            width: "300px",
                            height: "300px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src={item.images3 ? item.images3 : "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"}
                          class="d-block w-100"
                          alt="..."
                          style={{
                            width: "300px",
                            height: "300px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src={item.images4 ? item.images4 : "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"}
                          class="d-block w-100"
                          alt="..."
                          style={{
                            width: "300px",
                            height: "300px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src={item.images5 ? item.images5 : "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"}
                          class="d-block w-100"
                          alt="..."
                          style={{
                            width: "300px",
                            height: "300px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target={`#carouselExample_${item.id}`}
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target={`#carouselExample_${item.id}`}
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>

                  <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <p
                      class="card-text overflow-auto card m-1"
                      style={{ height: "60px" }}
                    >
                      {item.description}
                    </p>
                    <p class="card-text m-0">
                      Rating:{item.rating ? item.rating : 0} <IoIosStar />
                    </p>
                    <p class="card-text m-0">
                      Items Available in Inventory: {item.stock} 
                    </p>
                    <p class="card-text">
                      Price: {item.price ? item.price : 0}
                      <div></div>
                      <span class="badge text-bg-success">#{item.category}</span>
                    </p>
                    
                    <div className="d-flex justify-content-around">
                      <button class="btn btn-sm btn-danger p-2">
                        Delete This Item
                      </button>
                      <button class="btn btn-sm btn-success p-2">
                        Edit This Item
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>
            <div class="text-center d-flex align-items-center justify-content-center">
              <div className="m-2">Loading...</div>
              <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </>
        )}
        {/* <div class="card" style={{ width: "18rem" }}>
          <img
            src="https://s1.zerochan.net/Okumura.Rin.600.660518.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div> */}
        {/* <div class="card" style={{ width: "18rem" }}>
          <img
            src="https://honeysanime.com/wp-content/uploads/2015/12/Uchouten-Kazoku-Wallpaper-550x500.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div> */}
        {/* <div class="card" style={{ width: "18rem" }}>
          <img
            src="https://historyofblacksuperheroes.com/wp-content/uploads/2021/08/unnamed-file-20-550x500.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div> */}
        {/* <div class="card" style={{ width: "18rem" }}>
          <img
            src="https://historyofblacksuperheroes.com/wp-content/uploads/2020/08/TOO-Fly-For-Words-%F0%9F%92%A5Credit-@mcflyy__We-Love-Samurai...-case-yall-was-curious...__ImASuperhero-PantheonUniverse-BlackSuperheroes-550x500.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div> */}
        {/* <div class="card" style={{ width: "18rem" }}>
          <img
            src="https://historyofblacksuperheroes.com/wp-content/uploads/2021/03/unnamed-file-5-550x500.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div> */}
        {/* <div class="card" style={{ width: "18rem" }}>
          <img
            src="https://historyofblacksuperheroes.com/wp-content/uploads/2021/12/When-The-Small-Talk-Becomes-Unnecessary...-550x500.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div> */}
      </div>
      {/* </div> */}
      {/* // </div> */}
      {/* // </div> */}
      {/* </div> */}
    </>
  );
}
