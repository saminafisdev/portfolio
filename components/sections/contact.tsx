import { Box, Button, Container, Heading, HStack, Input, Textarea } from "@chakra-ui/react"

export default function Contact() {
  return (
    <Box as="section" id="contact" py={16}>
      <Container maxW="2xl">
        <Heading size="xl">Contact</Heading>
        <HStack as="form" gap={3} mt={6} flexWrap="wrap">
          <Input placeholder="Your email" type="email" flexGrow={1} minW={{ base: "full", md: "xs" }} />
          <Textarea placeholder="Message" minH="120px" flexGrow={1} minW={{ base: "full", md: "md" }} />
          <Button colorPalette="blue">Send</Button>
        </HStack>
      </Container>
    </Box>
  )
}
