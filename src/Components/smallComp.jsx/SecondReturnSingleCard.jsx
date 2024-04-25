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
  Spinner,
  InputGroup,
  InputLeftElement,
  FormErrorMessage,
  Code,
  Icon,
} from "@chakra-ui/react";
import HoverImage from "react-hover-image/build";
import { AddIcon, ArrowRightIcon, CloseIcon } from "@chakra-ui/icons";
import { AiOutlineHeart } from "react-icons/ai";

import React, { useContext, useEffect, useState, useRef } from "react";
import { AppContext } from "../../Context/AppContext";
import { NavLink, useNavigate } from "react-router-dom";

import { FiFile, FiPlus } from "react-icons/fi";
import { useController } from "react-hook-form";

import Modal from "react-modal";

const SecondReturnSingleCard = ({ el }) => {
  const { handleChange, handleRemove, handlePrice } = useContext(AppContext);

  const [isButLoading, setIsButLoading] = useState(false);
  const [isReasonFilled, setIsReasonFilled] = useState(false);
  const [isFirstReturnEnable, setFirstReturnEnable] = useState(true);
  const [isSecondReturnEnable, setSecondReturnEnable] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([{ file: null }]);

  const firstReturn = () => {
    if (!isReasonFilled) {
      alert("Please fill the required field.");
      return;
    }

    setIsButLoading(true);

    setTimeout(() => {
      alert(
        "Your initial return request could not be processed due to a mismatch with our QC parameters. Please select the Second Return option below to initiate a new return."
      );
      setIsButLoading(false);
      setFirstReturnEnable(false);
      setSecondReturnEnable(true);
    }, 5000);
  };

  const FileUpload = ({
    name,
    placeholder,
    acceptedFileTypes,
    control,
    children,
    isRequired = false,
  }) => {
    const inputRef = useRef();
    const {
      field: { ref, value, ...inputProps },
      meta: { invalid, isTouched, isDirty },
    } = useController({
      name,
      control,
      rules: { required: isRequired },
    });
  };

  const handleFileChange = (event, index) => {
    const file = event.target.files[0];
    const updatedFiles = [...selectedFiles];
    updatedFiles[index] = { file };
    setSelectedFiles(updatedFiles);
  };

  const handleAddInput = () => {
    setSelectedFiles([...selectedFiles, { file: null }]);
  };

  const handleRemoveInput = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  return (
    <Wrap
      w={600}
      spacing={3}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      padding="5"
    >
      <HStack w="full">
        <VStack align="revert-layer" spacing={4}>
          <Text fontSize="xl" color="gray.500">
            {el.Title}
          </Text>

          <Badge
            fontSize="10x"
            variant="outline"
            width="fit-content"
            colorScheme="teal"
          >
            {"4.4  ⭐"}
          </Badge>

          <Stack>
            <HStack alignContent="center">
              <Text fontWeight="bold" fontSize="2xl">
                ₹{el.price}
              </Text>

              <Text as="s" marginLeft={4} fontSize="l">
                ₹{el.strikeprice}
              </Text>
            </HStack>

            <HStack spacing={35}>
              <Badge
                w="fit-content"
                padding="3px 10px"
                variant="subtle"
                colorScheme="teal"
              >
                {" "}
                inclusive of all taxes{" "}
              </Badge>

              <ButtonGroup size="sm" isAttached variant="outline">
                <Button
                  disabled
                  fontWeight="bold"
                  fontSize="xl"
                  onClick={() => handleChange(el, -1)}
                >
                  -
                </Button>

                <Button>{el.amount}</Button>

                <IconButton
                  disabled
                  onClick={() => handleChange(el, 1)}
                  aria-label="Add to friends"
                  icon={<AddIcon w={3} h={3} />}
                />
              </ButtonGroup>
            </HStack>
          </Stack>
        </VStack>

        <Spacer />

        <Stack w={120}>
          <HoverImage
            style={{ borderRadius: "5px" }}
            src={el.Display_image}
            hoverSrc={el.hover_Image}
          />
        </Stack>
      </HStack>

      <Divider />

      <HStack w="full" spacing={5}>
        <form width="150%">
          <Box width="150%">
            <Stack align="flex-start" w={500}>
              <FormControl
                isRequired
                display="flex"
                alignItems="center"
                width="100%"
              >
                <FormLabel width={"23%"}>Reason:</FormLabel>
                <Select
                  placeholder="Select reason"
                  onChange={(e) => setIsReasonFilled(!!e.target.value)}
                >
                  <option>United Arab Emirates</option>
                  <option>Nigeria</option>
                </Select>
              </FormControl>
            </Stack>
          </Box>
        </form>
      </HStack>

      <HStack w="full" spacing={5}>
        <form width="150%">
          <Box width="150%">
            <Flex alignItems="center" marginTop="10px" width="100%">
              <FormLabel htmlFor="firstname" marginRight="10px">
                Comments:
              </FormLabel>
              <Input id="firstname" placeholder="Comments" width="100%" />
            </Flex>
          </Box>
        </form>
      </HStack>

      <HStack w={"full"}>
        <Button
          disabled={!isFirstReturnEnable}
          onClick={() => firstReturn()}
          w="full"
          size="md"
          isAttached
          variant="outline"
        >
          {isButLoading ? (
            <Spinner
              thickness="4px"
              speed="0.55s"
              emptyColor="gray.200"
              color="blue.500"
              size="lg"
            />
          ) : (
            "SUBMIT RETURN REQUEST"
          )}
        </Button>
      </HStack>

      <VStack spacing={4} align="stretch">
      {selectedFiles.map((selectedFile, index) => (
        <HStack key={index} align="stretch" >
          <FormControl isRequired>
            <FormLabel htmlFor={`writeUpFile-${index}`}>
              Your File {index + 1}
            </FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={FiFile} />}
              />
              <input
                type="file"
                accept=".pdf, .jpg, .jpeg, .png"
                id={`writeUpFile-${index}`}
                name={`writeUpFile-${index}`}
                style={{ display: "none" }}
                onChange={(e) => handleFileChange(e, index)}
              />
              <Input
                placeholder="Your file ..."
                value={selectedFile.file ? selectedFile.file.name : ""}
                onClick={(e) => e.target.previousSibling.click()}
                readOnly
              />
              {index !== 0 && (
                <Button onClick={() => handleRemoveInput(index)}>Remove</Button>
              )}
              {index === selectedFiles.length - 1 && (
                <Button onClick={handleAddInput}>
                  <Icon as={FiPlus} />
                </Button>
              )}
            </InputGroup>
            <FormErrorMessage>File is required</FormErrorMessage>
          </FormControl>
          {index + 1 < selectedFiles.length && (
            <FormControl isRequired>
              <FormLabel htmlFor={`writeUpFile-${index + 1}`}>
                Your File {index + 2}
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Icon as={FiFile} />}
                />
                <input
                  type="file"
                  accept=".pdf, .jpg, .jpeg, .png"
                  id={`writeUpFile-${index + 1}`}
                  name={`writeUpFile-${index + 1}`}
                  style={{ display: "none" }}
                  onChange={(e) => handleFileChange(e, index + 1)}
                />
                <Input
                  placeholder="Your file ..."
                  value={
                    selectedFiles[index + 1].file
                      ? selectedFiles[index + 1].file.name
                      : ""
                  }
                  onClick={(e) => e.target.previousSibling.click()}
                  readOnly
                />
                {index + 1 !== 0 && (
                  <Button onClick={() => handleRemoveInput(index + 1)}
                  style={{ marginRight: '8px', marginLeft: '8px' }}>
                    Remove
                  </Button>
                )}
                {index + 1 === selectedFiles.length - 1 && (
                  <Button style = { { marginLeft: "8px"}} onClick={handleAddInput}>
                    <Icon as={FiPlus} />
                  </Button>
                )}
              </InputGroup>
              <FormErrorMessage>File is required</FormErrorMessage>
            </FormControl>
          )}
        </HStack>
      ))}
    </VStack>
    </Wrap>
  );
};

export default SecondReturnSingleCard;
