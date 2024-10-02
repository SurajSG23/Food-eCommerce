import React from 'react'
import styled from 'styled-components'
import { BASE_URL } from '../App'
const SearchResult = ({ data }) => {
  return (
    <div>
      <FoodContainer>
        <Foods>
          {
            data?.map((food) => <FoodCards key={food.name}>
              <div className="img">
                <img src={BASE_URL + food.image} alt="" />
              </div>
              <div className="text">
                <div> {food.name}</div>
                <div> {food.text}</div>
              </div>
              <div className="price">
                {"$" + food.price + ".00"}
              </div>
            </FoodCards>)
          }
        </Foods>
      </FoodContainer>
    </div>
  )
}

export default SearchResult

const FoodContainer = styled.section`
  background-image: url("./bg.png");
  background-size: cover;
  min-height: 80vh;
`
const Foods = styled.div`
  position:relative;
  max-width: 1060px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-left: 20vw;
  padding-top: 10vh;
  align-items: center;
  @media (0<width<600px){
  width: 400px;
  margin: 0;
  }
`
const FoodCards = styled.div`
cursor: pointer;
width: 340px;
height: 167px;
border: 1px solid #7c7c7c;
border-radius: 10px;
backdrop-filter: blur(15px);
display: flex;
.text{
  position: absolute;
  display: flex;
  flex-direction: column;
  color: white;
  gap: 20px;
  width:175px;
  right: 0px;
}

.text :nth-child(1){
  margin-top:10px;
  font-size: 20px;
}
.text :nth-child(2){
  font-size: 12px;
}

.img{
  width: 145px;
  height: 175px;
  display: flex;
  align-items: center;
}

.price{
  width: auto;
  height: 30px;
  border: 1px solid red;
  color: white;
  padding: 3px;
  background-color: red;
  border-radius: 5px;
  position: absolute;
  right: 10px;
  bottom: 10px;
}

`