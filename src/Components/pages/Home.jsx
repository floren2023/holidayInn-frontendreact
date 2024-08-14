import React, { useState,useEffect } from "react";
import dayjs from "dayjs";
import Footer from "../common/Footer";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ReactPlayer from "react-player";
import "./Pages.css";
import Content from "../common/Content";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Switch from "@mui/material/Switch";
import { amber } from "@mui/material/colors";
import { set } from "date-fns";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InsertInvitationOutlined } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

function Home() {
   
  var date = new Date();
  date.setDate(date.getDate() + 1)
  const [value, setValue] = React.useState([
    dayjs(Date.now()),
    dayjs(date),
  ]);
  
  const {
    register,
    handleSubmit,
    reset
  } = useForm()
    
  const [search,setSearch]=useState([
    { adults: 1, childrenNo: 0, rooms: 1, mascota:false,roomType:'Single',dataIn:Date.now(),
      dataOut:date.setDate(date.getDate() + 1) }]
  )
  
  
  const schema = yup.object().shape({
    dataIn: yup.date().required("Data checkin required"),
    dataOut: yup.date().required("Data checkout required"),
    // adults:yup.number().positive().integer().max(100).required("No of adults>0"),
    // rooms:yup.string().min(1).max(100).required("No of rooms >0"),
    roomType: yup.string().required("Room type required"),
  });

 

  const onSubmit = (data) => {


    data={
      ...data,dataIn:value[0],dataOut:value[1]
    }
    setSearch({data})
    console.log(search);
setSearch([
      { adults: 1, childrenNo: 0, rooms: 1, mascota:false,roomType:'Single',dataIn:Date.now(),
        dataOut:date.setDate(date.getDate() + 1) }])
    
    //addBooking()
  };
  
  const onErrors = (errors) => console.error(errors);

  return (
    <div>
      <div className="bg-cyan-300">
        <div className=" bg-cyan-200  ">
          <div>
            <ReactPlayer
              url="http://localhost:3000/images/video1.mp4"
              playing
              loop
              width="500"
              height="400"
              className="z-30"
            />
            <p
              className="text-over  leading-loose uppercase mx-auto items-center  text-4xl
             text-white justify-center"
            >
              {" "}
              dream holidays with us
            </p>
            {/* <p className="text-4xl   uppercase font-extrabold text-teal-300 justify-center mx-auto items-center">HOLIDAY Inn</p> */}

            <div className=" mt-10 text-center items-center justify-center text-5xl uppercase font-extrabold text-cyan-800">
              Book now
            </div>
          </div>

          <nav className="navbar    z-40 items-center align-baseline justify-center">
            <form onSubmit={handleSubmit(onSubmit, onErrors)}>
              <div className="bg-cyan-300 border-2 border-amber-200 text-teal-700 items-center
               justify-center mx-auto p-4 flex flex-row">
                <div className="dropdown dropdown-hover z-40">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn m-1 hover:bg-amber-100"
                  >
                    Choose a room
                  </div>

                  <div
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-1  p-4 shadow-md"
                  >
                    <div className="flex flex-row pl-2 pr-2">
                      <div className="p-3 flex flex-col gap-2 ">
                        <div className="flex flex-col text-cyan-600">
                          Adults
                          <ButtonGroup
                            variant="outlined"
                            aria-label="Basic button group"
                            sx={{ color: "#06b6d4" }}
                          >
                            <Button>
                              <RemoveCircleIcon className="text-cyan-400" />
                            </Button><p className="p-2">
                            {search[0].adults}
                            </p>
                            <Button >
                              <AddCircleIcon className="text-cyan-400" />
                            </Button>
                          </ButtonGroup>
                        </div>
                        <div className="flex flex-col ">
                          Children
                          <ButtonGroup
                            variant="outlined"
                            aria-label="Basic button group"
                            sx={{ color: "#06b6d4" }}
                          >
                            <Button>
                              <RemoveCircleIcon className="text-cyan-400" />
                            </Button><p className="p-2">
                            {search[0].childrenNo}
                            </p>


                            <Button>
                              <AddCircleIcon className="text-cyan-400" />
                            </Button>
                          </ButtonGroup>
                        </div>
                        <div className="  flex flex-col ">
                          Rooms
                          <ButtonGroup
                            variant="outlined"
                            aria-label="Basic button group"
                            sx={{ color: "#06b6d4" }}
                          >
                            <Button>
                              <RemoveCircleIcon className="text-cyan-400" />
                            </Button><p className="p-2">

                            {search[0].rooms}</p>
                            <Button>
                              <AddCircleIcon className="text-cyan-400" />
                            </Button>
                          </ButtonGroup>
                        </div>

                      </div>
                      <div className="p-4">
                        <select label="Room Type"
                          className="select select-warning w-150  max-w-xs font-medium
                       text-teal-700 text-center items-center bg-cyan-300 rounded-md p-2 mt-6"
                          name="roomType"
                          {...register("roomType")}                      >
                          
                          <option>Single</option>
                          <option>Double</option>
                          <option>Apartament</option>
                          <option>Suite</option>
                        </select>                        
                        <div className="pt-10">
                          Mascota
                          <Switch name="mascota" {...register("mascota")} />
                        </div>
                      </div>
                    </div>
                    <div className="text-end justify-end flex-end items-end ml-3 ">
                      <Button
                        sx={{
                          color: amber[500],
                          font: "medium",
                          hover: { color: amber[700] },
                        }}
                        variant="text"
                      >
                        OK
                      </Button>
                    </div>
                  </div>
                
                </div>

                <div>
          <DateRangePicker
            value={value}
            onChange={(newValue) => setValue(newValue)}
          /></div>
             
                
                {/* <input  type="date" name="dataIn" value={valueIn} onChange={e=>setValueIn(e.target.value)} {...register("dataIn")}/> */}
                {/* <input  type="date" name="dataOut" value={valueOut} onChange={e=>setValueOut(e.target.value)} {...register("dataOut")}/> */}
                <div className="text-end justify-end flex-end items-end ml-3 ">
                  <Button
                    sx={{
                      background: amber[200],
                      color: "#0d9488",
                      font: "bold",
                      hover: { background: amber[600], color: "#fff" },
                    }}
                    type="submit"
                  >
                    SEARCH
                  </Button>
                </div>
              </div>
            </form>
          </nav>
        </div>
      </div>
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
