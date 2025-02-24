import { useContext } from 'react';
import { ChakraProvider, Box, Flex, Grid, Button } from '@chakra-ui/react';
import { AuthContext } from './AuthContext';
import { ThemeContext } from './ThemeContext';

function App() {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const bgColor = theme === 'light' ? 'gray.100' : 'gray.800';
  const cardBg = theme === 'light' ? 'gray.200' : 'gray.600';
  const footerBg = theme === 'light' ? 'gray.300' : 'gray.700';

  return (
    <ChakraProvider>
      <Flex as="nav" p="4" bg={bgColor} justifyContent="space-between">
        <Button onClick={toggleAuth}>
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </Button>
        <Button onClick={toggleTheme}>
          Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </Button>
      </Flex>
      <Grid templateColumns="repeat(3, 1fr)" gap="4" p="4">
        {['Card 1', 'Card 2', 'Card 3'].map((card) => (
          <Box key={card} p="4" shadow="md" bg={cardBg}>
            {card}
          </Box>
        ))}
      </Grid>
      <Box as="footer" p="4" bg={footerBg}>
        Footer Content
      </Box>
    </ChakraProvider>
  );
}

export default App;

