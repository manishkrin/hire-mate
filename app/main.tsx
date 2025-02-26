import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarouselComponent from '@/components/ui/Caraousal';
import Caraousal2 from '@/components/ui/CarousalType2';

export default function Main() {
  return (
    <div className='section-row white bg-dark t-center home-header'>
      <Container>
      <Row>
        <Col xs={12} sm={6} md={4}>
         <p className=''>First</p>
        </Col>
        <Col xs={12} sm={6} md={4}>
         <p>Second</p>
        </Col>
      </Row>
      </Container>
      
      <Container className="py-5" fluid="md">
        <Caraousal2 />
      </Container>
    </div>
    
  );
}