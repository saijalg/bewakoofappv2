import { AddIcon, ArrowRightIcon, CloseIcon } from '@chakra-ui/icons';
import { Badge, Box, Button, ButtonGroup, Divider, Flex, HStack, IconButton, Image, Spacer, Spinner, Stack, Text, VStack, Wrap } from '@chakra-ui/react';
import React, { useContext, useState } from 'react'
import HoverImage from 'react-hover-image/build';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import CartSingleCard from './smallComp.jsx/CartSingleCard';
import OrdersSingleCard from './smallComp.jsx/OrdersSingleCard';
import ReturnSingleCard from './smallComp.jsx/ReturnSingleCard';
import Loading from './smallComp.jsx/Loding';

const Return = () => {



 //   https://cdn.dribbble.com/users/887568/screenshots/3172047/ufo.gif

    // is Loading   //
 const {cartDataConfirmed,price, discountPrice, Totalprice, TotalQty} = useContext(AppContext)
 
 
  
 // is Loading   // 
 const [isLoading, setIsLoading] = useState(true);
 const [isButLoading, setIsButLoading] = useState(false);
 const navigate = useNavigate();

 setTimeout(() => {
 setIsLoading(false)
  
 }, 1500);


 console.log(discountPrice)
  

 console.log(cartDataConfirmed)


 
 const BackToPRoductPage = () => {
    setIsButLoading(true);
    
    setTimeout(() => {
      
    
      setIsButLoading(false);
      navigate("/men-clothing")
    }, 1500);
   
  };


// console.log(price)





 if(isLoading){

  return (  
     <Loading />
    ) 

 } 
 
 
 if(cartDataConfirmed.length===0){

    return (  

        <Wrap justify="center" style={{marginTop: "80px"}}>

            <HStack>

            <Image src='https://cdn.dribbble.com/users/887568/screenshots/3172047/ufo.gif' />
         
           <VStack spacing={30} >
           <Text fontSize="3xl" >Nothing In The Bag </Text>

           <Divider />
<Button  onClick={()=>BackToPRoductPage()} fontSize="x-large" padding={8}  colorScheme='yellow'> 


<BiShoppingBag fontSize="30px" /> 
{!isButLoading &&  "Continue Shopping" }
    {isButLoading && (
      <Spinner
        thickness="4px"
        speed="0.55s"
        emptyColor="gray.200"
        color="blue.500"
        size="lg"
      />
    )}


</Button>



           </VStack>
            </HStack>

        </Wrap>
      
      ) 
  
   }  

 

  return (

  
 <VStack marginTop="180px" justify="center" >

  <Text fontSize="2xl" fontWeight="extrabold" >Return Order</Text>

    <Wrap  padding={10} spacing={50} >
      
      <VStack  spacing={5}   >

         <HStack spacing={5} w="full"  padding={3} bg="#fcffee" > <Image w={10} src='https://images.bewakoof.com/web/Red-truck.png' /> <Text>Customer Return Portal</Text></HStack>
      {
        cartDataConfirmed.map((el)=> (
           <ReturnSingleCard el={el} />
        ) )
      }

      </VStack>
   
    </Wrap>

 </VStack>

  )
}

export default Return
