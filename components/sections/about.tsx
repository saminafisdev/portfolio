import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import Image from "next/image"

export default function About() {
  return (
    <Box as="section" id="about" py={16}>
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 8, md: 12 }} alignItems="center">
          <Box>
            <Heading size="xl">About</Heading>
            <Text mt={4} color="fg.muted">
              I’m a developer who enjoys building polished user experiences and robust backends. I value clean code, automation, and thoughtful DX.
            </Text>
          </Box>
          <Box borderRadius="xl" boxShadow="lg" overflow="hidden">
            <Image
              src="/about-me.jpg"
              alt="Sami Nafis portrait"
              width={640}
              height={640}
              priority
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
