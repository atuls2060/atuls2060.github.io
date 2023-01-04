import { Card, Container, HStack, Spacer, Icon, Show, Hide, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Stack, useDisclosure, VStack } from '@chakra-ui/react'
import Styles from "./navbar.module.css"
import { BiMoon } from "react-icons/bi"
import { RxHamburgerMenu } from "react-icons/rx"
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

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
    <Card bg="#FBFDFE" p={4} color="black" position="fixed" w="100%">
      <Container maxW="80%">
        <HStack>
          <NavLink>Atul Singh</NavLink>
          <Spacer />
          <HStack gap={4}>
            <Show above='md'>
              {
                Links.map((item, index) => {
                  return <NavLink style={({ isActive }) => isActive ? { color: "#FF597B" } : { color: "black" }} className={Styles.navbar_links} key={index} to={item.path}>{item.label}</NavLink>
                })
              }
            </Show>

            <NavLink> <Icon as={BiMoon} /></NavLink>
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
                  return <NavLink style={({ isActive }) => isActive ? { color: "#FF597B" } : { color: "black" }} className={Styles.navbar_links} key={index} to={item.path}>{item.label}</NavLink>
                })
              }
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}