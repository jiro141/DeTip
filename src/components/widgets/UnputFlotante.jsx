import {
    ChakraProvider,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Input,
    extendTheme,
    Box
  } from "@chakra-ui/react";
  const activeLabelStyles = {
    transform: "scale(0.85) translateY(-24px)"
  };
  export const theme = extendTheme({
    components: {
      Form: {
        variants: {
          floating: {
            container: {
              _focusWithin: {
                label: {
                  ...activeLabelStyles
                }
              },
              "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": {
                ...activeLabelStyles
              },
              label: {
                top: 0,
                left: 0,
                zIndex: 2,
                position: "absolute",
                backgroundColor: "#dadada",
                pointerEvents: "none",
                mx: 1,
                px: 2,
                my: 2,
                transformOrigin: "left top",
                borderRadius: '5px',
                fontSize: '14px',
              }
            }
          }
        }
      }
    }
  });
  
  export default function UnputFlotante({placeholder,nameI,type}) {
    return (
      <ChakraProvider theme={theme}>
        <Box >
          <FormControl  variant="floating" id="first-name" isRequired >
            <Input type={type} name={nameI}   borderRadius= '5px' border={'none'} backgroundColor={'#dadada'} placeholder=" " />
            <FormLabel  >{placeholder}</FormLabel>
          </FormControl>
        </Box>
      </ChakraProvider>
    );
  }
  