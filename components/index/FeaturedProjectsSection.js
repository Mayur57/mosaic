import { Heading, useColorModeValue, SimpleGrid } from '@chakra-ui/react'
import Section from '../section'
import { ProjectsGridItemIndex } from '../grid-item'
import LinkButton from '../linkButton'
import thumbPro1 from '../../public/images/projects/covid.jpg'

const FeaturedProjectSection = () => {
  return (
    <Section delay={0.3}>
      <Heading
        as="h3"
        variant="section-title"
        mt="45px"
        textDecorationColor={useColorModeValue(
          'rgba(121, 96, 206, 0.3)',
          'rgba(56,178,172, 0.5)'
        )}
      >
        Featured Projects
      </Heading>
      <SimpleGrid columns={[1, 2, 2]} gap={6} mt={4}>
        <ProjectsGridItemIndex
          id="project1"
          title="Dynamic Header"
          thumbnail={thumbPro1}
          sourcelink="https://github.com/mayur57"
          desc="Changes Twitter header dynamically to update the latest followers and more."
        />
        <ProjectsGridItemIndex
          id="project1"
          title="Twitter Nuke"
          thumbnail={thumbPro1}
          sourcelink="https://github.com/mayur57"
          bloglink="https://github.com/mayur57"
          desc="Quickly and efficiently delete your entire tweet history using your Twitter archive."
        />
      </SimpleGrid>
      <LinkButton link="/projects">all projects</LinkButton>
    </Section>
  )
}

export default FeaturedProjectSection
