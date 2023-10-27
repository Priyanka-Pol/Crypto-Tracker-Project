import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import "./styles.css";
function PaginationComponent({ pageNumber, handleChange }) {
  return (
    <div className="pagination-div">
      <Pagination
        count={10}
        page={pageNumber}
        onChange={(event,value) => handleChange(event,value)}
        sx={{
          color: "var(--white)",
          "& .Mui-selected ": {
            backgroundColor: "var(--blue) !important",
            color: "#fff !important",
            borderColor: "var(--blue) !important",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--grey) !important",
          },
          "& .MuiPaginationItem-text": {
            color: "var(--white)",
            border: "1px solid var(--grey)",
          },
        }}
      />
    </div>
  );
}

export default PaginationComponent;


// [0,99]
// page 1 -> [0,9]
// page 2 ->[10,19]
// page 3 ->[20,29]
// .......
// page 10 ->[90,99]

// page -> coin.slice(0,9) [inclusing , not inclusing means taht not be 9 that will be that in actual.]
// initial index = page-1*10
// slice = page-1*10 + 9
// initial index = page-1*10
// page 1 => 1-1* 10 = 0
// page 2 => 2-1* 10 = 10
// page 3 => 3-1* 10 = 20
// slice will be go upto +9 
// so 0 + 9 = 9
//    10 + 9 = 19
//    20 + 9 = 29

// page -> coin.slice(0,9) [inclusing , not inclusing means taht not be 9 that will be that in actual.]
// so it will become - 
// [0,99]
// page 1 -> [0,10)         slice(0,10)  
// page 2 ->[10,20)
// page 3 ->[20,30)
// .......
// page 10 ->[90,100)