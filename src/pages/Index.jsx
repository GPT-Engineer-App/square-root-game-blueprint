// Square Root Board Game Blueprint using Chakra UI and React Icons
import { Box, Button, Container, Flex, Grid, Heading, Text, useToast } from "@chakra-ui/react";
import { FaDice, FaQuestionCircle, FaRegSmile } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  // Function to simulate rolling a dice and getting a random number
  const rollDice = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    const squareRoot = Math.sqrt(number).toFixed(2);

    toast({
      title: `You rolled: ${number}`,
      description: `Square root: ${squareRoot}`,
      status: "info",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <Container maxW="container.xl" p={5}>
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        Square Root Board Game <FaRegSmile />
      </Heading>
      <Text fontSize="lg" mb={4}>
        Roll the dice to find a number and calculate its square root! <FaQuestionCircle />
      </Text>
      <Flex justifyContent="center">
        <Button leftIcon={<FaDice />} colorScheme="purple" onClick={rollDice} size="lg">
          Roll Dice
        </Button>
      </Flex>
      <Grid templateColumns="repeat(10, 1fr)" gap={6} mt={10}>
        {Array.from({ length: 100 }).map((_, index) => (
          <Box key={index} p={3} bg="gray.100" borderRadius="md" textAlign="center" fontWeight="bold">
            {index + 1}
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

export default Index;
