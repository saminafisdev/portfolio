import { Box, Card, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react"

const skills = {
  Languages: ["JavaScript", "Python", "PHP", "C#"],
  Frontend: ["Next.js", "React", "Chakra UI", "Tailwind CSS"],
  Backend: ["Node.js", ".NET", "Django", "FastAPI", "Laravel"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "Prisma"],
  DevOps: ["Docker", "GitHub Actions", "Vercel", "AWS"],
  Testing: ["Jest", "Vitest", "Playwright", "pytest"],
}

export default function Skills() {
  return (
    <Box as="section" id="skills" py={16}>
      <Container maxW="7xl">
        <Heading size="xl">Skills</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} mt={6}>
          {Object.entries(skills).map(([category, list]) => (
            <Card.Root key={category}>
              <Card.Body p={6}>
                <Heading size="md">{category}</Heading>
                <Text mt={3} color="fg.muted">{list.join(" · ")}</Text>
              </Card.Body>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
