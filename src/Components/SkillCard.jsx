import React from 'react'
import Styles from "./SkillCard.module.css"
import { Box, Flex, Image, Text } from '@chakra-ui/react'

const SkillCard = ({ label, url }) => {
  return (
      <Box className={Styles.hexagon} bg="bgColor">
        <Flex gap="10px" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
          <Image src={url} alt={label} width="50%" m="auto" />
          <Text color="textColor">{label}</Text>
        </Flex>
      </Box>
  )
}

export default SkillCard