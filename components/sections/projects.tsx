import { Box, Button, Card, Container, Heading, HStack, SimpleGrid, Text, IconButton, Tooltip } from "@chakra-ui/react"
import Image from "next/image"
import { SiDjango, SiReact, SiChakraui, SiPostgresql, SiDocker, SiPhp, SiMysql, SiSass, SiWordpress } from "react-icons/si"

type TechKey = "django" | "react" | "chakra" | "postgres" | "docker" | "php" | "mysql" | "sass" | "wordpress"

const TECH_ICON: Record<TechKey, { label: string; icon: React.ReactNode }> = {
  django: { label: "Django", icon: <SiDjango /> },
  react: { label: "React", icon: <SiReact /> },
  chakra: { label: "Chakra UI", icon: <SiChakraui /> },
  postgres: { label: "PostgreSQL", icon: <SiPostgresql /> },
  docker: { label: "Docker", icon: <SiDocker /> },
  php: { label: "PHP", icon: <SiPhp /> },
  mysql: { label: "MySQL", icon: <SiMysql /> },
  sass: { label: "Sass", icon: <SiSass /> },
  wordpress: { label: "WordPress API", icon: <SiWordpress /> },
}

const projects: Array<{
  title: string
  description: string
  tech: TechKey[]
  link: string
  repo: string
  image: string
}> = [
  {
    title: "DjSocial",
    description: "A social platform with a Django REST backend and a React + Chakra UI frontend, backed by PostgreSQL and fully Dockerized.",
    tech: ["django", "react", "chakra", "postgres", "docker"],
    link: "https://djsocial-omega.vercel.app",
    repo: "https://www.github.com/saminafisdev/pynext-social",
    image: "/social-banner.png",
  },
  {
    title: "sorce.io",
    description: "Content platform powered by a PHP backend consuming the WordPress REST API, React frontend, MySQL, and Sass; containerized for deployment.",
    tech: ["php", "react", "mysql", "sass", "wordpress"],
    link: "https://www.sorce.io",
    repo: "#",
    image: "/sorceio.png",
  },
]

export default function Projects() {
  return (
    <Box as="section" id="projects" py={16}>
      <Container maxW="7xl">
        <Heading size="xl">Projects</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} mt={6}>
          {projects.map((p) => (
            <Card.Root key={p.title}>
              <Card.Body p={6}>
                <Box
                  mb={4}
                  borderRadius="md"
                  overflow="hidden"
                  css={{ transition: "transform 200ms ease, filter 200ms ease" }}
                  _hover={{ transform: "scale(1.02)", filter: "brightness(1.05)" }}
                >
                  <a href={p.link} target="_blank" rel="noreferrer">
                    <Image
                      src={p.image}
                      alt={`${p.title} cover`}
                      width={1200}
                      height={630}
                      priority={false}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </a>
                </Box>
                <Heading size="md">{p.title}</Heading>
                <Text mt={2} color="fg.muted">{p.description}</Text>
                <HStack mt={3} gap={2}>
                  {p.tech.map((t) => (
                    <Tooltip.Root key={t} positioning={{ placement: "top" }}>
                      <Tooltip.Trigger asChild>
                        <IconButton aria-label={TECH_ICON[t].label} variant="ghost" size="xs" colorPalette="blue">
                          {TECH_ICON[t].icon}
                        </IconButton>
                      </Tooltip.Trigger>
                      <Tooltip.Positioner>
                        <Tooltip.Content>{TECH_ICON[t].label}</Tooltip.Content>
                      </Tooltip.Positioner>
                    </Tooltip.Root>
                  ))}
                </HStack>
                <HStack gap={3} mt={4}>
                  <Button asChild size="sm" colorPalette="blue">
                    <a href={p.link} target="_blank" rel="noreferrer">Live</a>
                  </Button>
                  <Button asChild size="sm" variant="outline" colorPalette="blue">
                    <a href={p.repo} target="_blank" rel="noreferrer">Code</a>
                  </Button>
                </HStack>
              </Card.Body>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
