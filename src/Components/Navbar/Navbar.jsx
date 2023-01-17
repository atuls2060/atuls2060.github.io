import { Card, Container, HStack, Spacer, Show, Text, Drawer, DrawerOverlay, DrawerContent,DrawerCloseButton, DrawerHeader, DrawerBody, useDisclosure, VStack, useColorMode, IconButton } from '@chakra-ui/react'
import Styles from "./navbar.module.css"
import { BiMoon, BiSun } from "react-icons/bi"
import { RxHamburgerMenu } from "react-icons/rx"
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'
import { RxArrowUp } from 'react-icons/rx';
import { HashLink } from 'react-router-hash-link';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const Navbar = () => {
  const [shadow, setShadow] = useState('xs')
  const [showGotoTop, setShowGotoTop] = useState('xs')
  const { colorMode, toggleColorMode } = useColorMode()

  let Links = [
    {
      path: "/#home",
      label: "Home"
    },
    {
      path: "/about/#about",
      label: "About"
    },
    {
      path: "/skills/#skills",
      label: "Skills"
    },
    {
      path: "/projects/#projects",
      label: "Projects"
    },
    {
      path: "/contact/#contact",
      label: "Contact"
    },
    {
      path: "resume",
      label: "Resume"
    }
  ]


  useScrollPosition(({ prevPos, currPos }) => {
    let showShadow = currPos.y < -30
    setShadow(showShadow ? 'base' : 'xs')
    setShowGotoTop(currPos.y > -250)
  }, [shadow])

  return (
    <Card zIndex="1" bg="background" p={2} color="navbar_links" position="fixed" w="100%" boxShadow={shadow}>
      <Container maxW={{ base: '90%', md: '90%', xl: '80%' }}>
        <HStack>
          <NavLink style={{ color: "#3C6255" }}><Text fontSize={["30px", "40px"]} className={Styles.logo}>Atul Singh</Text></NavLink>
          <Spacer />
          <HStack gap={4}>
            <Show above='md'>
              {
                Links.map((item, index) => {
                  return item.label === "Resume" ?
                    <a href='https://drive.google.com/file/d/10FdVUHI3nLJzKavREff1dayztKlLoWWK/view' target="_blank">Resume</a>
                    : <NavHashLink key={index} style={({ isactive }) => isactive ? { color: "#3C6255" } : { color: "navbar_links" }} className={Styles.navbar_links} smooth to={item.path}>{item.label}</NavHashLink>
                })
              }
            </Show>

            <NavLink> <IconButton onClick={toggleColorMode} icon={colorMode === "light" ? <BiSun /> : <BiMoon />} /></NavLink>
            <Show below='md'>
              <MobileNav />
            </Show>
          </HStack>
        </HStack>
      </Container>
      <HashLink smooth to="#home">
        <IconButton hidden={showGotoTop} zIndex={12} position="fixed" bottom="2rem" right="2rem" bg="brand" icon={<RxArrowUp color='white' />} />
      </HashLink>
    </Card>
  )
}

export default Navbar


export const MobileNav = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('right')

  let Links = [
    {
      path: "/",
      label: "Home"
    },
    {
      path: "/about",
      label: "About"
    },
    {
      path: "/skills",
      label: "Skills"
    },
    {
      path: "/projects",
      label: "Projects"
    },
    {
      path: "/contact",
      label: "Contact"
    },
    {
      path: "/resume",
      label: "Resume"
    }
  ]

  return (
    <>
      <RxHamburgerMenu onClick={onOpen} />
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>Atul Singh</DrawerHeader>
          <DrawerBody>
            <VStack>
              {
                Links.map((item, index) => {
                  return <NavLink style={({ isactive }) => isactive ? { color: "#3C6255" } : { color: "black" }} className={Styles.navbar_links} key={index} to={item.path}>{item.label}</NavLink>
                })
              }
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}