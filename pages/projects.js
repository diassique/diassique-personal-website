import {  
  Container,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbHireSphere from '../public/images/hiresphere-banner.jpg'
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
            <WorkGridItem id="inkdrop" title="HireSphere" thumbnail={thumbHireSphere}>
              An online recruitment platform with AI chat for employers and job seekers
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="inkdrop" title="Prompter" thumbnail={thumbHireSphere}>
              An online recruitment platform with AI chat for employers and job seekers
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects