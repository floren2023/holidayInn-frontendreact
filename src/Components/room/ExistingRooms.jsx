import React from "react";
import { useState, useEffect } from "react";
import { getAllRooms } from "../utils/ApiFunctions";
import "../../App.css";
import FavoriteIcon from '@mui/icons-material/Favorite';

const ExistingRooms = ({checkin,checkout}) => {
  const [rooms, setRooms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [roomsPerPage] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredRooms, setFilteredRooms] = useState([]);
  
  const [selectedRoomType, setSelectedRoomType] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if(checkin && checkout)
    {
      searchRooms();
    }
    else
    fetchRooms();
  }, []);
  const fetchRooms = async () => {
    setIsLoading(true);
    try {
      const result = await getAllRooms();
      setRooms(result);

      setIsLoading(false);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  /* useEffect(()=>{
    if(selectedRoomType===""){
        setFilteredRooms(rooms)
    }else{
        const filtered=rooms.filter((room)=>
            room.roomType===selectedRoomType).
            setFilteredRooms(filtered)
        
       
    }
    setCurrentPage(1)
},[rooms,selectedRoomType]) */

  const calculateTotalPages = (filteredPages, roomsPerPage, rooms) => {
    const totalRooms =
      filteredRooms.length > 0 ? filteredRooms.length : rooms.length;
    return Math.ceil(totalRooms / roomsPerPage);
  };

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = filteredRooms.slice(indexOfFirstRoom, indexOfLastRoom);

  return (
    <section className="debajo  bg-neutral-200">
      {isLoading ? (
        <p>Loading existing rooms</p>
      ) : (
        <div className=" mb-5">
          <div className="d-flex justify-content-center mb-3 mt-5">
            <h2 className="text-2xl pl-20">Existing rooms</h2>
          </div>
          <div className="col col-md-8 mb-3 mb-md-0">
            {/* <RoomFilter data={rooms} setFilteredData={setFilteredRooms}/>*/}
          </div>
          <div className="grid grid-cols-3 pr-20 pl-20  gap-4">
            {rooms.map((room, i) => {
              return (
                <div className=" bg-base-200  text-teal-700" key={i}>
                  <div className="hero-content flex flex-col mt-5  ">
                  
                  <div className="  text-red-800 ">Ref{room.id}</div>
                  <div className=" text-pink-500 ml-160 ">
                      <FavoriteIcon/>
                    </div>
                
                    <img
                      src={"data:image/jpeg;base64," + room.photo}
                      className="max-w-sm rounded-lg shadow-2xl bg-cover imagen"
                      width="300"
                      height="250px"
                      alt={room.typeRoom}
                    />
                    
                  </div>
                  <div className="  text-md  text-center   justify-center">
                   
                    <div className="flex flex-row justify-between ">
                   
                      <div className="-mt-14 -ml-8">
                
                        <div className=" bg-warning badge badge-md text-xl p-3 mb-6 -ml-14 ">
                          ${room.roomPrice}
                        </div>
                      
                        <div className="text-teal-600 text-sm pl-10 ml-20 mb-5 italic">
                          21% less than last month
                        </div>
                        
                      </div>
                      <div></div>
                    </div>
                    <div className="text-gray-500 text-sm ">
                          {room.typeRoom}
                        </div>
                  </div>
                  <div className="flex flex-row justify-between pr-10 pl-10">
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md text-teal-700 hover:text-white hover:bg-cyan-600">
                      {" "}
                      View
                    </button>

                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md bg-warning mb-5">
                      Book now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default ExistingRooms;
