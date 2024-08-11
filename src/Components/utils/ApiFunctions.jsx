import React from 'react'
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

export async function addRoom(roomType, roomPrice, photo) {
  const formData = new FormData();
  formData.append("roomType", roomType);
  formData.append("roomPrice", roomPrice);
  formData.append("photo", photo);
  console.log(formData);
  const config = {
    Headers: { "Content-type": "multipart/form-data" },
  };

  api
    .post("/rooms/add/new-room", formData, config)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}
/*  const response = await api.post("/rooms/add/new-room", formData);
  if (response.status === 201) return true;
  else return false;
} */
export async function getRoomTypes() {
  try {
    const response = await api.get("/rooms/room-types");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching room types");
  }
}

/* this function gets all rooms from database*/
export async function getAllRooms(){
  
  try{
    const result=await api.get("/rooms/all-rooms")
    console.log(result.data)
    
    let resultWithPhoto=result.data
    
    
    return resultWithPhoto
  }catch(error){
    throw new Error("Error fetching rooms")
  }
}
