import React,{ useState } from "react";
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function MobileDrawer() {
  const [open, setOpen] = useState(false);
  

  return (
    <div>
          <Button onClick={() => setOpen(true)}>
             <MenuRoundedIcon className="link" />
          </Button>
          {/* <MenuRoundedIcon className="link" onClick={() => setOpen(true)} /> */}
          <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)} >
           <div className="drawer-div">
            <Link to='/'>
              <p className='link'>Home</p>
            </Link>
            <Link to='/compare'>
              <p className='link'>Compare</p>
            </Link>
            <Link to='/watchlist'>
              <p className='link'>Watchlist</p>
            </Link>
            <Link to='/dashboard'>
              <p className='link'>Dashboard</p>
            </Link>
           </div>
          </Drawer>
        
    </div>
  );
}

/* Anchor is that from where my drawer will open
open is useState {} if we put false then it will never open no matter how many times you click , if {true} then it always open, {open} when clicking on it only it opens
onClose is inbuilt method in drawer we call setOpen function and set false. */