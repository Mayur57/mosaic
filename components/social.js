import {
  Center,
  Grid,
  GridItem,
  Link,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import {
  BsLinkedin,
  BsGithub,
  BsTwitter,
  BsMedium,
  BsInstagram
} from 'react-icons/bs'
import NextLink from 'next/link'

const SocialIcon = ({ icons, link, size = 16 }) => {
  return (
    <GridItem>
      <NextLink href={link} passHref>
        <Link>
          <Center>
            <Icon
              fontSize={size}
              _hover={{
                transition: '250ms',
                opacity: 0.7,
                transform: 'translate(0px, -4px)'
              }}
              bgColor="transparent"
              color={useColorModeValue('#000', '#fff')}
              opacity={0.5}
              transition="250ms"
            >
              {icons}
            </Icon>
          </Center>
        </Link>
      </NextLink>
    </GridItem>
  )
}

const Social = ({ spacing, size }) => {
  return (
    // <Center mt={10}>
    <Grid templateColumns={`repeat(5, ${spacing})`} gap={6}>
      <SocialIcon
        icons={<BsLinkedin />}
        link="https://www.linkedin.com/in/mayur-bhoi/"
        size={size}
      />
      <SocialIcon
        icons={<BsGithub />}
        link="https://github.com/Mayur57"
        size={size}
      />
      <SocialIcon
        icons={<BsTwitter />}
        link="https://twitter.com/mayurbhoii"
        size={size}
      />
      <SocialIcon
        icons={<BsMedium />}
        link="https://mayurbhoi.medium.com/"
        size={size}
      />
      <SocialIcon
        icons={<BsInstagram />}
        link="https://www.instagram.com/mayurbhoii"
        size={size}
      />
    </Grid>
    // </Center>
  )
}

export default Social
