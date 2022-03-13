import { Heading, useColorModeValue } from '@chakra-ui/react'

const Title = ({ children }) => (
  <Heading
    as="h3"
    fontSize={36}
    color={useColorModeValue('#37352F', '#FEF6E5')}
    mt={2}
    mb={8}
    letterSpacing={-1}
  >
    {children}
  </Heading>
)

export default Title
