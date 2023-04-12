import { Card, Container, HStack, Spacer, Show, Text, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, useDisclosure, VStack, useColorMode, IconButton } from '@chakra-ui/react'
import Styles from "./navbar.module.css"
import { BiMoon, BiSun } from "react-icons/bi"
import { BiMenuAltRight } from "react-icons/bi"
import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'
import { RxArrowUp } from 'react-icons/rx';
import { HashLink } from 'react-router-hash-link';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const Navbar = () => {
  const { hash } = useLocation()
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

  const handleClick = () => {
    window.open("https://drive.google.com/file/d/10FdVUHI3nLJzKavREff1dayztKlLoWWK/view")
  }

  useScrollPosition(({ prevPos, currPos }) => {
    let showShadow = currPos.y < -30
    setShadow(showShadow ? 'base' : 'xs')
    setShowGotoTop(currPos.y > -250)
  }, [shadow])


  return (
    <Card zIndex="2" bg="bgColor" p={2} position="fixed" w="100%" boxShadow={shadow}>
      <Container maxW={{ base: '90%', md: '90%', xl: '80%' }}>
        <HStack>
          <NavLink ><Text color="mainColor" fontSize={["30px", "40px"]} className={Styles.logo}>Atul Singh</Text></NavLink>
          <Spacer />
          <HStack gap={4} color="textColor">
            <Show above='md'>
              {
                Links.map((item, index) => {
                  return item.label === "Resume" ?
                    <a key={index} onClick={handleClick} href='https://drive.google.com/uc?export=download&id=10FdVUHI3nLJzKavREff1dayztKlLoWWK'>Resume</a>
                    : <NavHashLink key={index} className={hash === "#" + item.path.split("#")[1] ? Styles.active_link : Styles.navbar_links} smooth to={item.path}>{item.label}</NavHashLink>
                })
              }
            </Show>

            <NavLink> <IconButton borderRadius="3px" bg="mainColorSecondary" _hover={{ backgroundColor: "mainColor" }} color="white" onClick={toggleColorMode} icon={colorMode === "dark" ? <BiSun /> : <BiMoon />} /></NavLink>
            <Show below='md'>
              <MobileNav />
            </Show>
          </HStack>
        </HStack>
      </Container>
      <HashLink smooth to="#home">
        <IconButton borderRadius="3px" hidden={showGotoTop} zIndex={12} position="fixed" bottom="2rem" right="2rem" bg="mainColorSecondary" color="white" _hover={{ backgroundColor: "mainColor" }} icon={<RxArrowUp color='white' />} />
      </HashLink>
    </Card>
  )
}

export default Navbar


export const MobileNav = () => {
  const { hash } = useLocation()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('right')

  const handleClick = () => {
    onClose();
    window.open("https://drive.google.com/file/d/10FdVUHI3nLJzKavREff1dayztKlLoWWK/view")
  }
  const linkClick = () => {
    onClose();
  }

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
    <>
      <BiMenuAltRight cursor="pointer" fontSize="25px" onClick={onOpen} />
      <Drawer closeOnOverlayClick color="textColor" placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton textColor="textColor" />
          <DrawerHeader bg="bgColor" borderBottomWidth='1px' textAlign="center" textColor="textColor">Atul Singh</DrawerHeader>
          <DrawerBody bg="bgColor" textColor="textColor">
            <VStack spacing="25px">
              {
                Links.map((item, index) => {
                  return item.label === "Resume" ?
                    <a key={index} onClick={handleClick} href='https://drive.google.com/uc?export=download&id=10FdVUHI3nLJzKavREff1dayztKlLoWWK'>Resume</a> : <NavHashLink key={index} onClick={linkClick} className={hash === "#" + item.path.split("#")[1] ? Styles.active_link : Styles.navbar_links} to={item.path}>{item.label}</NavHashLink>
                })
              }
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}