import { 
    Wrap,
    HStack,
    VStack,
    Text,
    Badge,
    ButtonGroup,
    IconButton,
    Button,
    Spacer,
    Stack,
    Divider,
    Box,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Select,
    Spinner


} from '@chakra-ui/react'
import HoverImage from 'react-hover-image/build';
import { AddIcon, ArrowRightIcon, CloseIcon } from '@chakra-ui/icons';
import { AiOutlineHeart } from 'react-icons/ai';

import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context/AppContext';
import { NavLink, useNavigate } from "react-router-dom";

import Modal from 'react-modal';





const CartSingleCard = ({el}) => {

const firstReturn = () => {

  if (!isReasonFilled) {
    alert("Please fill the required field.");
    return;
  }

  setIsButLoading(true);

  setTimeout(() => {
    alert("Your initial return request could not be processed due to a mismatch with our QC parameters. Please select the Second Return option below to initiate a new return.");
    setIsButLoading(false);
    setFirstReturnEnable(false)
    setSecondReturnEnable(true);
  }, 5000);
  ;
}

const {handleChange,handleRemove,handlePrice } = useContext(AppContext)
  
  const [isButLoading, setIsButLoading] = useState(false);
  const [isReasonFilled, setIsReasonFilled] = useState(false);
  const [isFirstReturnEnable, setFirstReturnEnable] = useState(true);
  const [isSecondReturnEnable, setSecondReturnEnable] = useState(false);


  
  return (


    <Wrap w={600} spacing={3} borderWidth='1px' borderRadius='lg' overflow='hidden' padding="5">
          
          <HStack w="full" >
           
           
                 <VStack align="revert-layer" spacing={4} >
            
           
            <Text  fontSize="xl" color="gray.500" >{el.Title}</Text>
            
            <Badge fontSize="10x" variant="outline" width="fit-content" colorScheme="teal">{"4.4  ⭐"}</Badge>
            
            <Stack>
            
                   <HStack alignContent="center">
                   <Text fontWeight="bold" fontSize="2xl" >₹{el.price}</Text>
                   
                   <Text as="s" marginLeft={4} fontSize="l" >₹{el.strikeprice}</Text>
                   </HStack>
       
                   <HStack spacing={35} >
                       <Badge w="fit-content" padding="3px 10px" variant="subtle" colorScheme="teal"> inclusive of all taxes </Badge>
                         
                       <ButtonGroup size='sm' isAttached variant='outline'>
                          
                          <Button  disabled fontWeight="bold" fontSize="xl" onClick={()=> handleChange(el, -1)  } >-</Button>
                       
                           <Button>{el.amount}</Button>
                          
                           <IconButton disabled
                           onClick={()=> handleChange(el, 1)  } 
                           aria-label='Add to friends' icon={<AddIcon w={3} h={3} />} />
                         </ButtonGroup>


                   </HStack>
                  
                </Stack>
            
            
                </VStack>
            
            <Spacer />

              <Stack w={120}>
              <HoverImage style={{borderRadius: "5px"}}  src={el.Display_image} hoverSrc={el.hover_Image}  />
    
              </Stack>
              
          </HStack>

          <Divider   />
            
          <HStack w="full" spacing={5} >
            <form width = "150%">
              <Box width = "150%">               
                <Stack align = "flex-start" w={500}>
                <FormControl isRequired display="flex" alignItems="center" width="100%">
                  <FormLabel width={"23%"}>Reason:</FormLabel>
                  <Select placeholder='Select reason'  onChange={(e) => setIsReasonFilled(!!e.target.value)} >
                    <option>United Arab Emirates</option>
                    <option>Nigeria</option>
                  </Select>
                </FormControl>
                </Stack>
              </Box>
            </form>
          </HStack>

          <HStack w="full" spacing={5} >
            <form width = "150%">
              <Box width = "150%">
                
                <Flex alignItems="center" marginTop="10px" width="100%">
                  <FormLabel htmlFor="firstname" marginRight="10px">Comments:</FormLabel>
                  <Input id="firstname" placeholder='Comments' width="100%" />
                </Flex>
              </Box>
            </form>
          </HStack>

          

          <HStack w={"full"}>
            <Button disabled = { !isFirstReturnEnable } onClick={ () => firstReturn() } w="full" size='md' isAttached variant='outline'>
                  {isButLoading ? (
                    <Spinner
                      thickness="4px"
                      speed="0.55s"
                      emptyColor="gray.200"
                      color="blue.500"
                      size="lg"
                    />
                  ) : ( 
                    "SUBMIT RETURN REQUEST" )}
                  </Button>
            <Divider orientation='vertical' />
            <NavLink to="/SecondReturn">
              <Button disabled = { !isSecondReturnEnable } w="full"  size='md' isAttached variant='outline'> 
                <HStack spac > <Text>SECOND RETURN</Text></HStack>
              </Button>
            </NavLink>
          </HStack>

          </Wrap>
  )
}

export default CartSingleCard
