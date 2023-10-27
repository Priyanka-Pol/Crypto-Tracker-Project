import React, {useState, useEffect} from 'react';
import Header from "../Components/Common/Header";
import TabsComponent from '../Components/Dashboard/Tabs';
import axios from 'axios';
import Search from "../Components/Dashboard/Search";
import PaginationComponent from '../Components/Dashboard/Pagination';
import Loader from '../Components/Common/Loader';
import BackToTop from '../Components/Common/BackToTop';
import { get100Coins } from '../functions/get100Coins';


const DashboardPage = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSrearch] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [paginatedCoins, setPaginatedCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const handlePageChange = (event, value) => {
        setPageNumber(value);
        var startingIndex = (value - 1) * 10;
        setPaginatedCoins(coins.slice(startingIndex, startingIndex + 10));
      };
      useEffect(() => {
        getDate(); 
        // console.log(coins);
      }, [])

      const getDate = async () => {
        const myCoins = await get100Coins();
        if(myCoins) {
          setCoins(myCoins);
          setPaginatedCoins(myCoins.slice(0,10));
          setIsLoading(false);
        }
      }


    const onSearchChange=(e) => {
        setSrearch(e.target.value)
    }

    var filteredCoins = coins  && coins.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())  || 
        item.symbol.toLowerCase().includes(search.toLowerCase())
     );
  
     
    

  return (
    <>
     <Header />
     <BackToTop />
    {isLoading ? (
        <Loader />
        ) :(
        
        <div>
       
        <Search  search={search} onSearchChange={onSearchChange}/>
        <TabsComponent
            coins={search ? filteredCoins : paginatedCoins}
            setSearch={setSrearch}
          />
          {!search && (
            <PaginationComponent
              pageNumber={pageNumber}
              handleChange={handlePageChange}
            />
         )}
       
    </div>
    )}</>
  )
}

export default DashboardPage;