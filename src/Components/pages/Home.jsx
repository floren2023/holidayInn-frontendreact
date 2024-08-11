import React, { useState } from "react";
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
import { amber } from '@mui/material/colors';
import { set } from "date-fns";

function Home() {

  const [valueDateIn, setValueDateIn] = useState(Date.now());
  var date = new Date();
  

  const [valueDateOut, setValueDateOut] = useState(date.setDate(date.getDate() + 1))
  const [adults, setAdults] = useState(1)
  const [childrenNo, setChildrenNo] = useState(0)
  const [room, setRoom] = useState(1)
  const [roomType, setRoomType] = useState('Single')



  return (
    <div>
      <div className="bg-cyan-300">
        <div className=" bg-cyan-200  ">
          <div>
            <ReactPlayer
              url="http://localhost:3001/images/video1.mp4"
              playing
              loop
              width="500"
              height="400"
              className="z-30"
            />
            <p
              className="text-over  leading-loose uppercase mx-auto items-center  text-4xl
            shadow-md shadow-teal-800 text-white justify-center"
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
            <div className="bg-cyan-300 border-2 border-amber-200 text-teal-700 items-center justify-center mx-auto p-4">
              <div className="dropdown dropdown-hover z-40">
                <div tabIndex={0} role="button" className="btn m-1 hover:bg-amber-100">
                  Choose a room
                </div>

                <div
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-300 p-4 shadow-md"
                >
                  <div className="flex flex-row pl-10 pr-10">
                    <div className="p-3 flex flex-col gap-2 ">
                      <div className="flex flex-col ">
                        Adults
                        <ButtonGroup
                          variant="outlined"
                          aria-label="Basic button group"
                          sx={{ color: "#06b6d4" }}
                        >
                          <Button>
                            <RemoveCircleIcon className="text-cyan-400"  onClick={setAdults(adults-1)}/>
                          </Button>
                          <Button>{adults}</Button>
                          <Button>
                            <AddCircleIcon className="text-cyan-400" onClick={setAdults(adults+1)}/>
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
                            <RemoveCircleIcon className="text-cyan-400" onClick={setChildrenNo(childrenNo-1)}/>
                          </Button>
                          <Button>{childrenNo}</Button>
                          <Button>
                            <AddCircleIcon className="text-cyan-400" onClick={setChildrenNo(childrenNo-1)}/>
                          </Button>
                        </ButtonGroup>
                      </div>
                      <div className="flex flex-col ">
                        Rooms
                        <ButtonGroup
                          variant="outlined"
                          aria-label="Basic button group"
                          sx={{ color: "#06b6d4" }}
                        >
                          <Button>
                            <RemoveCircleIcon className="text-cyan-400"  />
                          </Button>
                          <Button></Button>
                          <Button>
                            <AddCircleIcon className="text-cyan-400" />
                          </Button>
                        </ButtonGroup>
                      </div>

                      <div>
                        Mascota
                        <Switch />
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="font-medium text-teal-700 text-center items-center bg-cyan-300 rounded-md p-4">Type</p>
                      <ul>
                        <li>
                          <a>Single</a>{" "}
                        </li>
                        <li>
                          <a>Double</a>
                        </li>
                        <li>
                          <a>Apartment</a>
                        </li>
                        <li>
                          <a>Suite</a>
                        </li>
                      </ul>
                    </div>
                    </div>
                    <div className="text-end justify-end flex-end items-end ml-3 ">
                      <Button sx={{color:amber[500],font:'medium',hover:{color:amber[700]}}} variant="text" >OK</Button>
                    </div>
                  
                </div>
                {/* <input 
              type="tex/* t"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            /> */}
              </div>

              <DatePicker label="DATA IN" defaultValue={dayjs(Date.now())} />

              <DatePicker label="DATA OUT" defaultValue={dayjs(valueDateOut)} />
              <div className="text-end justify-end flex-end items-end ml-3 ">
                      <Button sx={{background:amber[200],color:'#0d9488',font:'bold',hover:{background:amber[600],color:'#fff'}}} >SEARCH</Button>
                    </div>
            </div>
            
          </nav>
        </div>
      </div>
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
