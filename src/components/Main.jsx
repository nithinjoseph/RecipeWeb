import React, { useEffect } from 'react'
import SearchBox from './SearchBox'
import SearchList from './SearchList'
import axios from 'axios'

import Wrapper from './Wrapper'
import { useState } from 'react'

const Main = () => {
    const [data, setData]=useState([])
    

   useEffect(()=>{
    const getData = async () => {
        const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
        setData(data.meals);
       };
    getData()
   },[])
  return (
    <Wrapper>
        <SearchBox/>
        <SearchList data={data}/>
    </Wrapper>
  )
}

export default Main