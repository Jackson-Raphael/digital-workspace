import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Container,
  Separator,
  Icon,
} from '@chakra-ui/react';
import { MdArrowForward } from 'react-icons/md';

const Home = () => {
  return (
    <Container maxW="container.md" centerContent py={16}>
      <VStack
        gap={6}
        align="stretch"
        p={8}
        bg="white"
        boxShadow="xl"
        borderRadius="lg"
        textAlign="center"
        w="100%"
      >
        <Heading as="h1" size="2xl" color="teal.500">
          Welcome to Our Application
        </Heading>

        <Text fontSize="lg" color="gray.600">
          This is a sample page built with TanStack Start and Chakra UI. Explore the features and see how easy it is to build beautiful, responsive interfaces.
        </Text>

        <Separator />

        <Text fontSize="md" color="gray.500">
          Ready to get started? Click the button below to navigate to the next section.
        </Text>

        <Box>
          <Button
            colorScheme="teal"
            size="lg"
            gap={2}
          >
            Explore Features
            <Icon as={MdArrowForward} />
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Home;
