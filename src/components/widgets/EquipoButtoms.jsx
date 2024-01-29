import React from "react";
import { Box, Image, Button, Text, Center } from "@chakra-ui/react";
import felipe from "../../assets/img/equipo/felipe.jpg";

function EquipoButtoms({ nombre, foto, labor }) {
  console.log(nombre);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Image
          borderRadius={"50%"}
          maxW={{ lg: "120px", md: "60px", base: "10rem" }}
          h={{ lg: "120px", md: "60px", base: "10rem" }} // Ajusta la altura de la imagen según tus necesidades
          src={foto}
        />
        <Text marginTop={"10px"} fontSize={"20px"} color={"whiteAlpha.900"}>
          {nombre}
        </Text>
        <Text marginTop={"10px"} fontSize={"15px"} color={"whiteAlpha.900"}>
          {labor}
        </Text>
      </div>
    </div>
  );
}

export default EquipoButtoms;
