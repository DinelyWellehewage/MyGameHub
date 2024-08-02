import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding={1}>
      <Image src={logo} boxSize="100px"></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
