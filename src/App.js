import Container from './Components/Container';
import { ThemeProvider } from './Context/ThemeContext';
import { UserProvider } from './Context/UserContext';


function App() {
  
  return (
    <ThemeProvider>
      <UserProvider>
        <Container/>
      </UserProvider>
    </ThemeProvider>

  );
}

export default App;
