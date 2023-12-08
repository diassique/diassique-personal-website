import NextLink from 'next/link'
import { 
  Container,
  Box, 
  Heading, 
  Link, 
  List, 
  ListItem, 
  Button, 
  useColorModeValue, 
  chakra, 
  IconButton,
  Flex,
} from '@chakra-ui/react'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Image from 'next/image'
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
} from 'react-icons/io5'
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


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

      {/* Social Media Links */}
      <Flex align="center" mt={4} justifyContent="left" gap={4}>
        <Link href="https://github.com/diassique" isExternal>
          <IconButton
            icon={<IoLogoGithub />}
            variant="outline"
            size="lg"
            colorScheme="gray"
            aria-label="GitHub"
            isRound={true}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/dias-mukash-5116631b6/" isExternal>
          <IconButton
            icon={<IoLogoLinkedin />} // Replace with the correct icon for Instagram if needed
            variant="outline"
            size="lg"
            colorScheme="gray"
            aria-label="Linkedin"
            isRound={true}
          />
        </Link>
        <Link href="https://twitter.com/diasmks" isExternal>
          <IconButton
            icon={<FaXTwitter />}
            variant="outline"
            size="lg"
            colorScheme="gray"
            aria-label="Twitter"
            isRound={true}
          />
        </Link>
        <Link href="https://t.me/diassique" isExternal>
          <IconButton
            icon={<FaTelegram />}
            variant="outline"
            size="lg"
            colorScheme="gray"
            aria-label="Telegram"
            isRound={true}
          />
        </Link>
      </Flex>
      
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

      {/*  */}
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <BioSection>
          <BioYear>Frameworks & Languages:</BioYear>
          HTML, CSS, JavaScript, React.js, Vue.js, Next.js, Node.js, 
        </BioSection>
        <BioSection>
          <BioYear>Other Tools:</BioYear>
          Git, MongoDB, MySQL, PostgreSQL
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

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @diasmks
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @diasmks
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @diasmks
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>

    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'