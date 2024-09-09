import React, { useState,useEffect } from "react";
import "../../App.css";
import { addRoom, getRoomTypes } from "../utils/ApiFunctions";
import {useForm} from'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import ExistingRooms from './ExistingRooms'

const AddRoom = () => {
  const [roomType, setRoomType] = useState([]);  
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage]=useState('')

  useEffect(() => {
    fetchTypesRoom();
  }, []);
  const fetchTypesRoom = async () => {
    setIsLoading(true);
    try {
      const result = await getRoomTypes();
      setRoomType(result);
  console.log(result)
      setIsLoading(false);
    } catch (error) {
      setErrorMessage("not found room types");
    }
  };
  
   const schema=yup.object().shape({
    roomType:yup.string().required("Room Type is required"),
    price:yup.number().required("price is required"),
    photo:yup.string().required("Photo is required"),
}) 
const {register,handleSubmit,formState:{errors}}=useForm()
  

 // const [selectedRoom, setSelectedRoom] = useState("Single");
        
  
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
    
    <section className="debajo mt-10 w-full max-w-3xl mx-auto overflow-hidden
       bg-neutral-100 rounded-md shadow-md dark:bg-gray-800 p-7">
        <div className="text-center justify-center mx-auto text-teal-700 font-semibold
            text-2xl mb-10 mt-5">
            Holiday<span className="text-2xl text-amber-500">S</span> Inn</div>

                    <h2 className="mt-5 mb-5 ml-20 text-2xl font-semibold">Add a new room</h2>
       


          <form onSubmit={onSubmit}>
            <div className="">       
              
                <div className="flex flex-row gap-3 w-full p-3">
                 
                  <input onChange={handleChangeType} className=" w-1/3 px-4 py-2  text-gray-700
                   placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800
                    dark:border-gray-600 dark:placeholder-gray-400 focus:border-cyan-400
                     dark:focus:border-cyan-300 focus:ring-opacity-40 focus:outline-none focus:ring
                      focus:ring-cyan-300"/>
                  <button onClick={addRoomType} className="text-teal-700 bg-amber-300 hover:bg-amber-400
                   rounded-md p-3">Add New Room Type</button>
                   
                  
                  <select  {...register("roomType",{required:true})} className="text-gray-800 bg-neutral-300 w-1/3 pl-3" 
                  onChange={e=>setRoomType(e.target.value)}
                   defaultValue='Single'>
                    <option selected="false">Choose a type room</option>
                    {roomType.map((type, id) => {

                      return (
                        <option key={type.id} value={type.typeRoom}>
                          {type.typeRoom}
                        </option>
                      );
                    })}
                  </select>
                  
                </div>
                </div>
              
              
    
            <div className="flex flex-row gap-6 p-5">
            <div className="">
              <label htmlFor="price" className="">
                Room Price
              </label>
              <div>
                <input
                  className="block  px-4 py-2  text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-cyan-400 dark:focus:border-cyan-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-cyan-300"
                 type="number"                
                 {...register("price",{required:true})}
                />
                {errors.price&&<p>{errors.price?.message}</p>}
              </div>
            </div>
            <div className=" ml-10">
              <label htmlFor="photo" className="mb-2">
                Room Photo
              </label>
              <div>
                <input
                  type="file"
                  className=""
                  
                 {...register("photo",{required:true})}
                 onChange={handleImageChange}
                />
               {errors.photo&&<p>{errors.photo?.message}</p>}
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview Room Photo"
                    style={{ maxWidth: "200px", maxHeight: "200px" }}
                    className="mb-3"
                  />
                )} 
              </div>
            </div>
            </div>
            <div className="ml-20 mt-20">
              <button type="submit" className="text-white bg-cyan-500 hover:bg-cyan-600 ml-5 p-3 rounded-md font-medium">
                Save Room
              </button>
            </div>
          </form>
      
      
    </section>
   
    
  );
};

export default AddRoom;
