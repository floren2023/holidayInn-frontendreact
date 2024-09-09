import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Switch from "@mui/material/Switch";
import { amber, cyan } from "@mui/material/colors";
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

export default function Guests ({adults,setAdults,childrenNo,setChildrenNo,rooms,setRooms,mascota,setMascota}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    console.log(''+adults,''+childrenNo,''+rooms,''+mascota)
    setOpen(false);
  };

  return (
    
    <React.Fragment>
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
          onClick={handleClose}
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

              {/*  <div className="p-4">
  <select label="Room Type"
    className="select select-warning w-150  max-w-xs font-medium
 text-teal-700 text-center items-center bg-cyan-300 rounded-md p-2 mt-6"
    name="roomType"
    {...register("roomType")}                      >
    
    <option>Single</option>
    <option>Double</option>
    <option>Apartament</option>
    <option>Suite</option>
  </select>                        */}

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
    </React.Fragment>
    
  );
};
