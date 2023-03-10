import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Text,
} from '@chakra-ui/react';
import {
  FiMenu,
} from 'react-icons/fi';

import {
  GoMail,
  GoMarkGithub,
  GoQuestion
} from 'react-icons/go';

import {
  GiFarmTractor, GiParachute, GiUnicorn
} from 'react-icons/gi';

import {
  IoRocketOutline
} from 'react-icons/io5';

import { IconType } from 'react-icons';
import NextLink from 'next/link'

interface LinkItemProps {
  name: string
  page: string
  icon: IconType
  isExternal?: boolean
}
const LinkItemsTop: Array<LinkItemProps> = [
  { name: 'Token Launcher', icon: IoRocketOutline, page: '/' },
  { name: 'List on Uniswap', icon: GiUnicorn, page: '/faq'},
  { name: 'Airdrop Token', icon: GiParachute, page: '/faq' },
  { name: 'Setup Farming', icon: GiFarmTractor, page: '/faq'},
]

const LinkItemsBottom: Array<LinkItemProps> = [

  { name: 'Faq', icon: GoQuestion, page: '/faq' },
  { name: 'GitHub', icon: GoMarkGithub, page: 'https://github.com/TokenLauncherCode', isExternal: true },
  { name: 'Contact ', icon: GoMail, page: 'mailto:support@tokenlauncher.com', isExternal: true }
]

export default function SimpleSidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <NextLink href={`/`} passHref>
        <Flex p='3' h="20" alignItems="center" justifyContent="space-between">
          <IoRocketOutline size='100%'/>
          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Flex>
      </NextLink>

      <Box>
        {LinkItemsTop.map((link) => (
          <NavItem isExternal={link.isExternal} onClose={onClose} page={link.page} key={link.name} icon={link.icon}>
            <Text fontWeight={'bold'}>{link.name}</Text>
          </NavItem>
        ))}
      </Box>

      <Box mt='2em'>
        {LinkItemsBottom.map((link) => (
          <NavItem isExternal={link.isExternal} onClose={onClose} page={link.page} key={link.name} icon={link.icon}>
            <Text fontWeight={'bold'}>{link.name}</Text>
          </NavItem>
        ))}
      </Box>

    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType
  children: any
  page: string
  isExternal?: boolean
  onClose: any
}
const NavItem = ({ onClose, page, icon, children, isExternal, ...rest }: NavItemProps) => {
  if(!isExternal)
  return (
    <NextLink onClick={onClose} href={`${page}`} passHref>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex></NextLink>
  )
  return (<Link isExternal href={`${page}`}>
  <Flex
    align="center"
    p="4"
    mx="4"
    borderRadius="lg"
    role="group"
    cursor="pointer"
    _hover={{
      bg: 'cyan.400',
      color: 'white',
    }}
    {...rest}>
    {icon && (
      <Icon
        mr="4"
        fontSize="16"
        _groupHover={{
          color: 'white',
        }}
        as={icon}
      />
    )}
    {children}
  </Flex></Link>
)
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      position={'absolute'}
      left={'2%'}
      top={'0%'}
      height="20"
      alignItems="center"
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
    </Flex>
  )
}