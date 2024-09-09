import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import Footer from "../common/Footer";
import ReactPlayer from "react-player";
import "./Pages.css";
import Content from "../common/Content";
import Button from "@mui/material/Button";
import { getAllRooms,getAllBookings, searchRooms } from "../utils/ApiFunctions";
import { amber, cyan } from "@mui/material/colors";
import { set } from "date-fns";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {locale} from 'dayjs/locale/eu'
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import Guests from "../common/Guests";
import Moment from 'react-moment';
import 'moment-timezone';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import ButtonGroup from "@mui/material/ButtonGroup";
import Switch from "@mui/material/Switch";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function Home() {
  const [roomsList, setRoomsList] = useState([]);
  const [bookedList,setBookedList]=useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

 /*  useEffect(() => {
    fetchRooms();
    fetchBookedRooms()
  }, []);

  const fetchRooms = async () => {
    setIsLoading(true);
    try {
      const result = await getAllRooms();
      setRoomsList(result);

      setIsLoading(false);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  const fetchBookedRooms = async () => {
    setIsLoading(true);
    try {
      const result = await getAllBookings();
      setBookedList(result);

      setIsLoading(false);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
 */
  var date = new Date();
  date.setDate(date.getDate() + 1);
  const [value, setValue] = React.useState([dayjs(Date.now()) , dayjs(date) ]);
  
  const { register, handleSubmit, reset } = useForm();

  const [search, setSearch] = useState(
    {
      adults: 1,
      childrenNo: 0,
      rooms: 1,
      mascota: false,
      dataIn: Date.now(),
      dataOut: date.setDate(date.getDate() + 1),
    },
  );
  
  const [adults, setAdults] = useState(1);
  const [childrenNo, setChildrenNo] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [mascota, setMascota] = useState(false);

  const schema = yup.object().shape({
    dataIn: yup.date().required("Data checkin required"),
    dataOut: yup.date().required("Data checkout required"),
    // adults:yup.number().positive().integer().max(100).required("No of adults>0"),
    // rooms:yup.string().min(1).max(100).required("No of rooms >0"),
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    console.log(''+adults,''+childrenNo,''+rooms,''+mascota)
    setSearch(      {
      adults: adults,
      childrenNo: childrenNo,
      rooms: rooms,
      mascota: mascota,
      dataIn: value[0],
      dataOut: value[1],
    },
  );
    setOpen(false);
  };

  const onSubmit = (data) => {
   
    
    //  setSearch({data})
    console.log(search);
    searchRooms(search.dataIn,search.dataOut)
    //mandar formulario
    
    /* setSearch(
      {
        adults: 1,
        childrenNo: 0,
        rooms: 1,
        mascota: false,
        dataIn: Date.now(),
        dataOut: date.setDate(date.getDate() + 1),
      },
    ); */

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
              <div
                className="bg-cyan-300 border-2 border-amber-200 text-teal-700 items-center
               justify-center mx-auto p-4 flex flex-row"
              >
                <DateRangePicker
                  value={value}
                  onChange={(newValue) =>{ setValue(newValue)
                    
                  } 
                }
                />

                <div className="ml-4">
              
      <Button variant="outlined" onClick={handleClickOpen} sx={{background:'#67e8f9',color:'#000',
      padding:2,textTransform:'none',
      border:1,borderColor:'#fef9c3',
        
        '&:hover': { border:0, background:cyan[400],color:'#fff',fontWeight:500}}}>
        {adults} Adults -{childrenNo}  Children...
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        
      >
        <IconButton
          aria-label="close"
          
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
    
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div className="flex flex-row p-10 text-teal-800 ">
            <div className="p-4 flex flex-col gap-10 ">
              <div className="flex flex-col gap-2 ">
                Adults
                <ButtonGroup
                  variant="outlined"
                  aria-label="group1"
                  sx={{
                    color: "#06b6d4",
                    ".MuiButtonGroup-grouped":{
                    borderColor:'transparent',},
                    ".MuiButtonGroup-grouped:hover": {
                      borderColor: amber[400],
                    },
                  }}
                >
                  <Button >
                    <RemoveCircleIcon className="text-cyan-400" onClick={()=>setAdults(adults=>adults-1)}/>
                  </Button>
                  <p className="p-2">{adults}</p>
                  <Button >
                    <AddCircleIcon className="text-cyan-400" onClick={()=>setAdults(adults=>adults+1)}/>
                  </Button>
                </ButtonGroup>
              </div>
              <div className="flex flex-col gap-2">
                Children
                <ButtonGroup
                  variant="outlined"
                  aria-label="group2"
                  sx={{
                    color: "#06b6d4",
                    ".MuiButtonGroup-grouped":{
                        borderColor:'transparent',},
                    ".MuiButtonGroup-grouped:hover": {
                      borderColor: amber[400],
                    },
                  }}
                >
                  <Button >
                    <RemoveCircleIcon className="text-cyan-400" onClick={()=>setChildrenNo(childrenNo-1)}/>
                  </Button>
                  <p className="p-2">{childrenNo}</p>

                  <Button >
                    <AddCircleIcon className="text-cyan-400" onClick={()=>setChildrenNo(childrenNo+1)}/>
                  </Button>
                </ButtonGroup>
              </div>
              <div className="  flex flex-col gap-2">
                Rooms
                <ButtonGroup
                  variant="outlined"
                  aria-label="group3"
                  sx={{
                    color: "#06b6d4",
                    ".MuiButtonGroup-grouped":{
                        borderColor:'transparent',},
                    ".MuiButtonGroup-grouped:hover": {
                      borderColor: amber[400],
                    },
                  }}
                >
                  <Button >
                    <RemoveCircleIcon className="text-cyan-400" onClick={()=>setRooms(rooms-1)}/>
                  </Button>
                  <p className="p-2">{rooms}</p>
                  <Button >
                    <AddCircleIcon className="text-cyan-400" onClick={()=>setRooms(rooms+1)}/>
                  </Button>
                </ButtonGroup>
              </div>

             

              <div className="">
                Mascota
                <Switch
                  name="mascota"                  
                  color="warning"
                  value={mascota} onChangeCapture={()=>setMascota(!mascota)}
                />
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions >
          <Button autoFocus onClick={handleClose} color="warning"
                              sx={{ padding:2, '&:hover': {  background:cyan[600],color:'#fff',fontWeight:500}}}
          >
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    
                 {/*  <Guests
                    adults={adults}
                    setAdults={setAdults}
                    childrenNo={childrenNo}
                    setChildrenNo={setChildrenNo}
                    rooms={rooms}
                    setRooms={setRooms}
                    mascota={mascota}
                    setMascota={setMascota}
                  /> */}
                </div>

                {/* <input  type="date" name="dataIn" value={valueIn} onChange={e=>setValueIn(e.target.value)} {...register("dataIn")}/> */}
                {/* <input  type="date" name="dataOut" value={valueOut} onChange={e=>setValueOut(e.target.value)} {...register("dataOut")}/> */}
                <div className="text-end justify-end flex-end items-end ml-3 ">
                  <Button
                    sx={{
                      background: amber[200],
                      color: "#0d9488",
                      font: "bold",
                      "&:hover": {
                        background: cyan[600],
                        color: "#fff",
                        fontWeight: 500,
                      },
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
