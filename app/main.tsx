import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CarouselComponent from '@/components/ui/Caraousal';
import Caraousal2 from '@/components/ui/CarousalType2';

export default function Main() {
  return (
    <Container className="py-5" fluid>
        <Caraousal2 />
    </Container>
  );
}