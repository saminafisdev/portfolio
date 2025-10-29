import { Box } from "@chakra-ui/react";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <Box as="main">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Box>
  );
}
