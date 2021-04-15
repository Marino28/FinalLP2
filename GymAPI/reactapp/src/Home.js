import {Container} from 'react-bootstrap';
const Home = () => {

  return (
    
    <Container bg="dark" style={{ padding : 10 }}>
      
        <h1>Marino Gym Client</h1>
        <hr/>
        <iframe width="720px" height="405px" 
         src="https://www.youtube.com/embed/uUGAsUFKKp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; muted; clipboard-write; encrypted-media; gyroscope" allowfullscreen></iframe>
        
    </Container>
    
  );
};

export default Home;