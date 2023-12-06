import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  align-items: center;
  line-height: 100%;
`

const Logo = () => {
  return (
    (<Link href="/" scroll={false}>
      <LogoBox>
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='Montserrat, sans-serif'
          fontWeight="bold"
          alignItems="center"
          
        >
          Dias Mukash
        </Text>
      </LogoBox>
    </Link>)
  );
}

export default Logo
