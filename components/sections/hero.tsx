"use client"

import { Box, Button, Container, Heading, HStack, Text } from "@chakra-ui/react"
import Link from "next/link"
import ParticlesBackground from "@/components/sections/particles"
import { useColorModeValue } from "@/components/ui/color-mode"

export default function Hero() {
  const gradient = useColorModeValue(
    "linear-gradient(to bottom, rgba(255,255,255,1), rgba(248,250,252,1))",
    "linear-gradient(to bottom, rgba(0,0,0,1), rgba(17,24,39,1))",
  )
  return (
    <Box as="section" pt={12} pb={16} position="relative" overflow="hidden">
      <Box position="absolute" inset={0} zIndex={0} style={{ backgroundImage: gradient }} />
      <ParticlesBackground zIndex={1} />
      <Container maxW="7xl" position="relative" zIndex={2}>
        <Text color="fg.muted" fontWeight="medium">Hi, I’m</Text>
        <Heading size={{ base: "2xl", md: "3xl" }} mt={2}>Sami Nafis</Heading>
        <Text mt={4} fontSize={{ base: "md", md: "lg" }} color="fg.muted">
          A solutions-focused Full-Stack Developer dedicated to building fast, accessible, and elegant digital experiences. I leverage a robust, polyglot skill set, including Next.js, Python, PHP, and C#, to drive end-to-end application development and optimization.        </Text>
        <HStack gap={4} mt={8}>
          <Button asChild colorPalette="blue">
            <Link href="#projects">View Projects</Link>
          </Button>
          {/* <Button asChild variant="outline" colorPalette="blue">
            <a href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
          </Button> */}
        </HStack>
      </Container>
    </Box>
  )
}
