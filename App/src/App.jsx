import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import './App.css'
import SearchResult from './components/SearchResult';

export const BASE_URL = "http://localhost:9000";


const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {

        const response = await fetch(BASE_URL);
        const json = await response.json();
        setLoading(false)
        setFilteredData(json);
        setData(json);
      } catch (error) {
        setError("Error!!!")
      }
    }
    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;
    //Search for the food

    const filter = data?.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredData(filter);
  }
  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      return
    }
    const filter = data?.filter((food) => food.type.toLowerCase().includes(type.toLowerCase()));
    setFilteredData(filter);
  }
  if (error) return <div>{error}</div>
  if (loading) return <div>loading...</div>

  return (
    <>
      <MainContainer>
        <TopContainer>
          <div className="logo">
            <img src="./Foody Zone.png" alt="logo" />
          </div>
          <div className="search">
            <input onChange={searchFood} type="text" placeholder='Search Food...' />
          </div>
        </TopContainer>
        <FilterContainer>
          <Button onClick={() => { filterFood("all") }}>All</Button>
          <Button onClick={() => { filterFood("breakfast") }}>breakFast</Button>
          <Button onClick={() => { filterFood("lunch") }}>Lunch</Button>
          <Button onClick={() => { filterFood("dinner") }}>Dinner</Button>
        </FilterContainer>

        <SearchResult data={filteredData} />
      </MainContainer>
    </>

  )
}
export default App

const MainContainer = styled.div`
  background-color: #323334;
  width: 100%;
  margin: -2px auto;
  position: relative;
`
const TopContainer = styled.div`
  max-width: 1440px;
  height: 115px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  align-items: center;

  .logo{
    width: 185px;
    height: 39px;
  }
  .search input{
    all: unset;
    width: 285px;
    height: 40px;
    background-color: transparent;
    border: 1px solid red;
    border-radius: 4px;
    color: white;
    padding-left:10px ;
  }
  .search input::placeholder{
    color: white;
  }
  @media (0<width<600px){
    flex-direction: column;
  }
`
const FilterContainer = styled.div`
  max-width:25vw;
  display: flex;
  justify-content: center;
  margin: 0px auto;
  gap: 24px;
  @media (0<width<600px){
  width: 10vw;
  }
`
const Button = styled.div`
  width: auto;
  padding: 6px 12px 6px 12px;
  height: auto;
  background-color: red;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom:10px;
  font-weight:600;
  &:active{
    transform: scale(0.96);
  }
  &:hover{
    background-color: #bf0000;
  }
  
`


