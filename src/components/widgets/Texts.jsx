import React from "react";
import { Text, Box, Grid } from '@chakra-ui/react';
export const Title = ({ text, color, aline }) => {
    return (
        <Text marginY={'10px'} textAlign={aline? aline: "center"} fontWeight={'bold'} color={color ? color : '#FFFFFF'} fontSize={{ base: "18px", md: "25px", lg: "35px" }}>
            {text}
        </Text>
    );
}

export const SubTitle = ({ text, color, aline }) => {
    return (
        <Text marginBottom={'10px'} textAlign={aline? aline: "center"} fontWeight={'semibold'} color={color ? color : '#FFFFFF'} fontSize={{ base: "18px", md: "20px", lg: "25px" }}>
            {text}
        </Text>
    );
}

export const Parrafo = ({ text, color,aline }) => {
    return (
        <Text color={color ? color : '#FFFFFF'} textAlign={aline? aline: "center"}  fontSize={{ base: "14px", md: "16px", lg: "18px" }}>
            {text}
        </Text>
    );
}