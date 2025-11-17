"use client"

import {
    Box,
    Container,
    Flex,
    HStack,
    Link as ChakraLink,
    Text,
    Spacer,
    Menu,
    IconButton,
    Portal
} from "@chakra-ui/react"
import Link from "next/link"
import { ColorModeButton } from "@/components/ui/color-mode"
import {LuMenu} from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
    const links = [
        {
            "name": "About",
            "link": "#about"
        },
        {
            "name": "Projects",
            "link": "#projects"
        },
        {
            "name": "Skills",
            "link": "#skills"
        },
        // {
        //     "name": "Contact",
        //     "link": "#contact"
        // }
    ]

  return (
    <Box position="sticky" top="0" zIndex={10} bg={{ base: "bg", _dark: "bg" }} borderBottomWidth="1px">
      <Container maxW="7xl" py={{ base: 3, md: 4 }}>
        <Flex align="center">
          <ChakraLink as={Link} href="/" _hover={{ textDecoration: "none" }}>
            <Text fontWeight="bold" fontSize={{mdDown: "md",md: "lg"}}>{`<SamiNafis />`}</Text>
          </ChakraLink>
          <Spacer />
          {/* Desktop links */}
          <HStack gap={{ base: 2, md: 4 }} display={{ base: "none", md: "flex" }}>
            {links.map((l) => (
              <ChakraLink key={l.link} href={l.link} fontWeight="medium" colorPalette="blue">
                {l.name}
              </ChakraLink>
            ))}
          </HStack>
          {/* Always-visible socials + color mode (beside mobile menu) */}
          <HStack ms="2" align="center">
            <IconButton asChild aria-label="GitHub" variant="ghost" size="sm" colorPalette="blue">
              <a href="https://github.com/saminafisdev/" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            </IconButton>
            <IconButton asChild aria-label="LinkedIn" variant="ghost" size="sm" colorPalette="blue">
              <a href="https://www.linkedin.com/in/saminafisdev/" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </IconButton>
            <ColorModeButton />
          </HStack>
          {/* Mobile menu */}
          <Box display={{ base: "flex", md: "none" }}>
            <Menu.Root>
              <Menu.Trigger asChild>
                <IconButton aria-label="Open menu" variant="ghost" size="sm">
                  <LuMenu />
                </IconButton>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    {links.map((l) => (
                      <Menu.Item key={l.link} value={l.name.toLowerCase()}>
                        <ChakraLink href={l.link} colorPalette="blue">{l.name}</ChakraLink>
                      </Menu.Item>
                    ))}
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
