import { Box, Container, Flex, HStack, Link as ChakraLink, Text } from "@chakra-ui/react"

export default function Footer() {
  return (
    <Box as="footer" borderTopWidth="1px" mt={16}>
      <Container maxW="7xl" py={8}>
        <Flex direction={{ base: "column", md: "row" }} gap={4} align={{ base: "flex-start", md: "center" }} justify="space-between">
          <Text color="fg.muted">© {new Date().getFullYear()} Sami Nafis. All rights reserved.</Text>
          <HStack gap={4}>
            <ChakraLink colorPalette="blue" href="https://github.com/saminafisdev" target="_blank" rel="noreferrer">GitHub</ChakraLink>
            <ChakraLink colorPalette="blue" href="https://www.linkedin.com/in/saminafis/" target="_blank" rel="noreferrer">LinkedIn</ChakraLink>
            <ChakraLink colorPalette="blue" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</ChakraLink>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
