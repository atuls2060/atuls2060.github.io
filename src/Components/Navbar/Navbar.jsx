import { Card, Container, HStack, Spacer, Show, Text, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, useDisclosure, VStack, useColorMode, IconButton } from '@chakra-ui/react'
import Styles from "./navbar.module.css"
import { BiMoon, BiSun } from "react-icons/bi"
import { RxHamburgerMenu } from "react-icons/rx"
import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'

const Navbar = () => {
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

  return (
    <Card zIndex="1" bg="background" p={4} color="navbar_links" position="fixed" w="100%">
      <Container maxW="80%">
        <HStack>
          <NavLink style={{ color: "#3C6255" }}><Text fontWeight="bold">Atul Singh</Text></NavLink>
          <Spacer />
          <HStack gap={4}>
            <Show above='md'>
              {
                Links.map((item, index) => {
                  return <NavHashLink key={index} style={({ isActive }) => isActive ? { color: "#3C6255" } : { color: "navbar_links" }} className={Styles.navbar_links} smooth to={item.path}>{item.label}</NavHashLink>
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
          <DrawerHeader borderBottomWidth='1px'>Atul Singh</DrawerHeader>
          <DrawerBody>
            <VStack>
              {
                Links.map((item, index) => {
                  return <NavLink style={({ isActive }) => isActive ? { color: "#3C6255" } : { color: "black" }} className={Styles.navbar_links} key={index} to={item.path}>{item.label}</NavLink>
                })
              }
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}