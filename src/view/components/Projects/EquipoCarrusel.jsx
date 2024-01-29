import React from "react";
import { Box } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import EquipoButtoms from "../../../components/widgets/EquipoButtoms";
import felipe from "../../../assets/img/equipo/felipe.jpg";
import alfredo from "../../../assets/img/equipo/alfredo.jpg";
import maria from "../../../assets/img/equipo/maria.jpg";
import mariaDev from "../../../assets/img/equipo/maria_dev.jpg";
import jesus from "../../../assets/img/equipo/jesus.jpg";
import nelson from "../../../assets/img/equipo/nelson.jpg";
import { useMediaQuery } from "react-responsive";

function EquipoCarrusel(props) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  if (isDesktopOrLaptop) {
    // Render en modo escritorio
    return (
      <Box
        margin={"100px 50px 200px 50px"}
        display={"flex"}
        justifyContent={"space-around"}
      >
        <EquipoButtoms foto={nelson} nombre={"Nelson Rosales"} labor={"CEO"} />
        <EquipoButtoms
          foto={alfredo}
          nombre={"Alfredo Villamizar"}
          labor={"Scrum Master"}
        />
        <EquipoButtoms
          foto={maria}
          nombre={"Maria Villamizar"}
          labor={"Diseñadora UX/UI"}
        />
        <EquipoButtoms
          foto={felipe}
          nombre={"Felipe Colmenares"}
          labor={"Desarrollador Frontend"}
        />
        <EquipoButtoms
          foto={mariaDev}
          nombre={"Maria Carrero"}
          labor={"Desarrollador Frontend"}
        />
        <EquipoButtoms
          foto={jesus}
          nombre={"Jesus Reyes"}
          labor={"Desarrollador Backend"}
        />
      </Box>
    );
  } else {
    // Render en modo responsivo (carrusel)
    return (
      <Box
        margin={"100px 50px 200px 50px"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Carousel
          showIndicators={false}
          showArrows={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={2000}
        >
          <EquipoButtoms
            foto={felipe}
            nombre={"Felipe Colmenares"}
            labor={"Desarrollador Frontend"}
          />
          <EquipoButtoms
            foto={alfredo}
            nombre={"Alfredo Villamizar"}
            labor={"Scrum Master"}
          />
          <EquipoButtoms
            foto={maria}
            nombre={"Maria Villamizar"}
            labor={"Diseñadora UX/UI"}
          />
          <EquipoButtoms
            foto={mariaDev}
            nombre={"Maria Carrero"}
            labor={"Desarrollador Frontend"}
          />
          <EquipoButtoms
            foto={nelson}
            nombre={"Nelson Rosales"}
            labor={"CEO"}
          />
          <EquipoButtoms
            foto={jesus}
            nombre={"Jesus Reyes"}
            labor={"Desarrollador Backend"}
          />
        </Carousel>
      </Box>
    );
  }
}

export default EquipoCarrusel;
