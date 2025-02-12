"use client";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '@/components/ui/navbar';

export default function Home() {
  return (
    <>
      {/* Navigation Bar */}

      <Navigation />
      {/* Main Content Area */}
      <Container className="py-5">
        <h1>Welcome to Our Website</h1>
        <p>This is the main content area of your website.</p>
      </Container>

      {/* Optional: Add Footer */}
      <footer className="bg-dark text-light py-4 mt-auto">
        <Container>
          <p className="text-center mb-0">© 2025 Your Company. All rights reserved.</p>
        </Container>
      </footer>
    </>
  );
}