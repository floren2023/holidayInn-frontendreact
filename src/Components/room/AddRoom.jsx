import React, { useState } from "react";
import "../../App.css";
import { addRoom, getRoomTypes } from "../utils/ApiFunctions";
import {useForm} from'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import ExistingRooms from './ExistingRooms'

const AddRoom = () => {
  
 /*  const schema=yup.object().shape({
    roomType:yup.string().required("Room Type is required"),
    price:yup.number().required("price is required"),
    photo:yup.string().required("Photo is required"),
}) */
const {register,handleSubmit,formState:{errors}}=useForm()
  

 // const [selectedRoom, setSelectedRoom] = useState("Single");
  const [roomType, setRoomType] = useState([
    {
      id: 1,
      roomTypeName: "Single",
    },
    {
      id: 2,
      roomTypeName: "Double",
    },
    {
      id: 3,
      roomTypeName: "Suite",
    },
  ]);
  const [newRoomType, setNewRoomType] = useState("");

 /*  const [showText, setShowText] = useState(false);

  const handleAddRoomType = (element) => {
    console.log(element);
    setSelectedRoom(element);
  }; */

  const handleChangeType = (e) => {
    setNewRoomType(e.target.value);
    // console.log(e.target.value);
  };

  const addRoomType = () => {
    const type = {
      id: roomType.length === 0 ? 1 : roomType[roomType.length - 1].id + 1,
      roomTypeName: newRoomType,
    };
    //const newTodoList=[...todoList,newTask];
    // setTodoList(newTodoList);
    setRoomType([...roomType, type]);
  };

  const [newRoom, setNewRoom] = useState({
    photo: null,
    roomType: "",
    roomPrice: "",
  });

 const [imagePreview, setImagePreview] = useState("");
 /*   const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRoomInputChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "roomPrice") {
      if (value != undefined) {
        parseInt(value);
      } else {
        value = "";
      }
    }
    setNewRoom({ ...newRoom, [name]: value });
  }; */
  const handleImageChange = (e) => {
    let selectedImage = e.target.files[0];
 
    setNewRoom({ ...newRoom, photo: selectedImage });
  
    setImagePreview(URL.createObjectURL(selectedImage));
  };

  
const onSubmit=handleSubmit((data)=>{
 
console.log(newRoom)
  addRoom(data.roomType,data.price,newRoom.photo)
})
  
  return (
    
    <section className="container mt-5 mb-5 container-md mx-auto add-room col-md-8 col-lg-6">
      <div className="row justify-content-center">
        <div className="">
          <h2 className="mt-5 mb-2">Add a new room</h2>

          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="roomType" className="formLabel">
                Room Type
              </label>
              <div className="addTask">
                <div>
                  <input onChange={handleChangeType} />
                  <button onClick={addRoomType}>Add Room Type</button>
                </div>
                <div className="list">
                  <select  {...register("roomType",{required:true})} >
                    {roomType.map((type, id) => {
                      return (
                        <option key={type.id} value={type.roomTypeName}>
                          {type.roomTypeName}
                        </option>
                      );
                    })}
                  </select>
                  {errors.roomType&&<p>{errors.roomType?.message}</p>}
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="formLabel">
                Room Price
              </label>
              <div>
                <input
                  className="form-control"
                 type="number"                
                 {...register("price",{required:true})}
                />
                {errors.price&&<p>{errors.price?.message}</p>}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="photo" className="formLabel">
                Room Photo
              </label>
              <div>
                <input
                  type="file"
                  className="form-control"
                  
                 {...register("photo",{required:true})}
                 onChange={handleImageChange}
                />
               {errors.photo&&<p>{errors.photo?.message}</p>}
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview Room Photo"
                    style={{ maxWidth: "400px", maxHeight: "400px" }}
                    className="mb-3"
                  />
                )} 
              </div>
            </div>
            <div className="d-grid d-md-flex mt-2">
              <button type="submit" className="btn btn-hotel ml-5">
                Save Room
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
   
    
  );
};

export default AddRoom;
