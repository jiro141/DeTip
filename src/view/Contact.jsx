import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Textarea,
  Text,
  Flex,
  Link,
  Grid,
} from "@chakra-ui/react";
import UnputFlotante from "../components/widgets/UnputFlotante";
import {
  AiFillInstagram,
  AiOutlineWhatsApp,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import "../assets/css/Equipos.css";
import "../assets/css/fondo.css";
import { Title, Parrafo } from "../components/widgets/Texts";

const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [cargo, setCargo] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [mensaje, setMensaje] = useState("");
  const notify = () =>
    toast("Tu solicitud ha sido enviada con exito.", {
      icon: "🚀",
      style: {
        borderRadius: "20px",
        background: "#333",
        color: "#fff",
      },
    });
  const Error = () => toast.error("Ocurrio un error.");

  const form = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();

    // Preparar los datos del formulario
    const formData = {
      nombreApellido: nombre + " " + apellido,
      destinatario: correo,
      nombreEmpresa: nombreEmpresa,
      cargo: cargo,
      fecha: fecha,
      hora: hora,
      mensaje: mensaje,
    };
    console.log(formData, "datos");
    try {
      // Realizar una solicitud POST al endpoint especificado
      const response = await axios.post(
        "detip-server.vercel.app/enviar-correo",
        formData
      );

      // Verificar si la solicitud fue exitosa
      if (response.status === 200) {
        notify();
        console.log(response.data);
      } else {
        Error();
        console.log(response.data);
      }
    } catch (error) {
      Error();
      console.error(error);
    }
  };

  return (
    <Box marginX={{ base: "5%", md: "0", lg: "0" }}>
      <Grid
        className="contacto"
        gap={"20px"}
        templateColumns={{ base: "1fr", md: " 1fr", lg: "1fr 1fr" }}
      >
        <Box className="slide-up" margin={"10%"}>
          <Title aline={"left"} text={"¡Contáctanos!"} />
          <Parrafo
            text={
              "Concreta una cita con nuestro equipo de trabajo y nos comunicaremos contigo a la brevedad posible. Llena nuestro formulario y háblanos sobre tu proyecto. Puedes conococer más de nosotros a través de nuestras redes sociales."
            }
            aline={"justify"}
          />
          <Flex marginY={"20px"} gap={"50px"} alignItems={"center"}>
            <Link href="https://wa.me/14095974199">
              <AiOutlineWhatsApp color="#FFFF" size={"4vw"} />
            </Link>
            <Link href="https://www.linkedin.com/company/detip-company/about/">
              <AiFillLinkedin color="#FFFF" size={"4vw"} />
            </Link>
            <Link href="https://www.instagram.com/detip_company">
              <AiFillInstagram color="#FFFF" size={"4vw"} />
            </Link>
            <Link href="mailto:Contacto@DeTipCompany.com">
              <AiFillMail color="#FFFF" size={"4vw"} />
            </Link>
          </Flex>
        </Box>
        <Box
          className="slide-up"
          paddingY={"60px"}
          borderRadius={"10px"}
          m={{ lg: "10%", md: "8%", sm: "5%" }}
          backgroundColor={"#bababac1"}
        >
          <form ref={form} onSubmit={sendEmail}>
            <VStack>
              <FormControl padding={"1% 2.5%"}>
                <UnputFlotante
                  type="text"
                  name="nombreApellido"
                  placeholder="Nombre y apellido"
                  value={nombre + " " + apellido}
                  onChange={(e) => {
                    const [newNombre, newApellido] = e.target.value.split(" ");
                    setNombre(newNombre);
                    setApellido(newApellido);
                  }}
                />
              </FormControl>
              <FormControl padding={"1% 2.5%"}>
                <UnputFlotante
                  type="email"
                  name="destinatario"
                  placeholder="Correo"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />
              </FormControl>
              <Box
                w={"100%"}
                display={{ lg: "flex", md: "block", sm: "block" }}
              >
                <FormControl padding={"1% 2.5%"}>
                  <UnputFlotante
                    type="text"
                    placeholder="Nombre de la empresa"
                    name="nombreEmpresa"
                    value={nombreEmpresa}
                    onChange={(e) => setNombreEmpresa(e.target.value)}
                  />
                </FormControl>
                <FormControl padding={"1% 2.5%"}>
                  <UnputFlotante
                    type="text"
                    placeholder="Cargo"
                    name="cargo"
                    value={cargo}
                    onChange={(e) => setCargo(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box
                w={"100%"}
                display={{ lg: "flex", md: "block", sm: "block" }}
              >
                <FormControl padding={"1% 2.5%"}>
                  <Input
                    name="fecha"
                    type="date"
                    placeholder="Fecha"
                    borderRadius="5px"
                    border={"none"}
                    backgroundColor={"#dadada"}
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                  />
                </FormControl>
                <FormControl padding={"1% 2.5%"}>
                  <Input
                    name="hora"
                    type="time"
                    placeholder="Hora"
                    borderRadius="5px"
                    border={"none"}
                    backgroundColor={"#dadada"}
                    value={hora}
                    onChange={(e) => setHora(e.target.value)}
                  />
                </FormControl>
              </Box>
              <FormControl
                padding={"1% 2.5%"}
                w={"100%"}
                display={{ lg: "flex", md: "block", sm: "block" }}
              >
                <Textarea
                  maxH={"100px"}
                  borderRadius="5px"
                  border={"none"}
                  backgroundColor={"#dadada"}
                  placeholder="Mensaje"
                  name="mensaje"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                />
              </FormControl>
              <Button
                type="submit"
                value="Send"
                borderRadius={"5px"}
                w={"95%"}
                backgroundColor="#000"
                color={"#FFF"}
              >
                Envía tu mensaje
              </Button>
            </VStack>
          </form>
        </Box>
      </Grid>
      <Toaster />
    </Box>
  );
};

export default Contact;
