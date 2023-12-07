import NextLink from 'next/link'
import { Container, Box, Heading, Link, Button, useColorModeValue, chakra } from '@chakra-ui/react'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('gray.100', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m experienced software engineer! 👋
      </Box>
      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Dias Mukash
          </Heading>
          <p>Software Engineer (Developer & UX/UI Designer)</p>
          <p>I&apos;m Dias, a 22-year-old software engineer with a heart that beats in binary and a mind that dreams in code 💻. At the crossroads of technology and innovation, I find my calling.</p>
        </Box>
        
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/me.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>

        </Box>
      </Box>
      
      {/* Projects section */}
      <Section delay={0.1} pt={14}>
        <Heading as="h3" variant="section-title">
          Projects
        </Heading>
        <Paragraph>
          As a T-shaped professional, I possess a broad knowledge base in various aspects of technology, including design, allowing me to approach challenges with a holistic perspective. My journey transcends mere code development; it involves infusing vitality into concepts, transforming intricate issues into streamlined solutions, and perpetually enhancing my skills amidst the dynamic tapestry of the digital domain.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/projects"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My Portfolio
          </Button>
        </Box>
      </Section>

      {/* Skills section */}
      <Section delay={0.2} pt={14}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <Paragraph>
          sdfdsf
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in Almaty, Kazakhstan.
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Completed bla bla bla
        </BioSection>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          I love ❤️
        </Heading>
        <Paragraph>
          Art, Music, {' '}
          <Link href="https://illust.odoruinu.net/">
            Drawing
          </Link>
        </Paragraph>
      </Section>

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          My CV
        </Heading>
        <Paragraph>
          Feel free to download my CV
          <Link href="https://illust.odoruinu.net/">
            Drawing
          </Link>
        </Paragraph>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'