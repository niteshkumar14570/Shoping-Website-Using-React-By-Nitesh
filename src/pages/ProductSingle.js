import React from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../reponsive';
const Container = styled.div``;
const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile ({padding: "10px",flexDirection:"column"})}
`;
const ImgContainer = styled.div`
flex:1;
`;
const Image = styled.img`
width: 90%;
height: 60vh;
object-fit: cover;
${mobile ({height: "40vh"})}

`;
const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;
${mobile ({padding: "10px"})}
`;
const Title = styled.h1`
font-weight: 200;
`;
const Desc = styled.p`
margin: 20px 0px;
`;
const Price = styled.span `
font-weight: 100;
font-size: 40px;
`;
const FilterContainer = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
width: 50%;
${mobile ({width: "100%"})}
`;
const Filter = styled.div`
display: flex;
align-items: center;

`;
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`;
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`;
const FilterSizeOption = styled.option``;
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin:0px 5px ;
cursor: pointer;
`;
const AddContainer = styled.div`
display: flex;
align-items: center;
width: 50%;
justify-content: space-between;
${mobile ({width: "100%"})}
`;
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`;
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`;
const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
    background-color:#f8f4f4 ;
}
`;


const ProductSingle = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImgContainer>
        <Image src='https://tse3.mm.bing.net/th?id=OIP.EYR2d9E6GFY644wJ8WmllgHaJQ&pid=Api&P=0'/>
        </ImgContainer>
        <InfoContainer>
            <Title>Anarkali Kurti</Title>
            <Desc>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam maiores magni voluptatem. Consequuntur nihil labore dolorem quia enim adipisci nam ab culpa dolore ratione rerum, iusto voluptatem numquam, soluta dolor!</Desc>
            <Price>₹999</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color  </FilterTitle>
                    <FilterColor color='black'/>
                    <FilterColor color='darkblue'/>
                    <FilterColor color='gray'/>

                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>Xl</FilterSizeOption>
                        <FilterSizeOption>XXL</FilterSizeOption>
                        <FilterSizeOption>XXXL</FilterSizeOption>

                        </FilterSize> 

                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                <Button>ADD TO CART</Button>
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductSingle
