import {  
  Container,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import Layout from '../components/layouts/article'

const Projects = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>

        <SimpleGrid columns={[1,1,2]} gap={6}>
          <Section>
            <WorkGridItem id="inkdrop" title="HireSphere" thumbnail={thumbInkdrop}>
              An online recruitment platform with AI chat for employers and job seekers
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="walknote" title="walknote" thumbnail={thumbWalknote}>
              Music recommendation app for iOS
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="walknote" title="walknote" thumbnail={thumbWalknote}>
              Music recommendation app for iOS
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="walknote" title="walknote" thumbnail={thumbWalknote}>
              Music recommendation app for iOS
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.4} fontSize={20} mb={4}>
          Old projects
        </Section>
      </Container>
    </Layout>
  )
}

export default Projects