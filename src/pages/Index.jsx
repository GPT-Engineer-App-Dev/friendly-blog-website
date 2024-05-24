import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer } from "@chakra-ui/react";
import { FaHome, FaUser, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="gray.800" color="white" p={4} align="center">
        <Heading size="md">My Blog</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#" display="flex" alignItems="center">
            <FaHome />
            <Text ml={2}>Home</Text>
          </Link>
          <Link href="#" display="flex" alignItems="center">
            <FaUser />
            <Text ml={2}>About</Text>
          </Link>
          <Link href="#" display="flex" alignItems="center">
            <FaEnvelope />
            <Text ml={2}>Contact</Text>
          </Link>
        </HStack>
      </Flex>
      <Flex direction={{ base: "column", md: "row" }} mt={4}>
        <Box flex="3" p={4}>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Blog Post Title</Heading>
              <Text mt={4}>This is a summary of the blog post. Click to read more...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Another Blog Post</Heading>
              <Text mt={4}>This is another summary of a blog post. Click to read more...</Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" p={4} bg="gray.50">
          <Heading size="md" mb={4}>Sidebar</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="md">About Me</Heading>
              <Text mt={4}>A short bio about the blog author...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="md">Links</Heading>
              <VStack mt={4} spacing={2} align="stretch">
                <Link href="#">Link 1</Link>
                <Link href="#">Link 2</Link>
                <Link href="#">Link 3</Link>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;