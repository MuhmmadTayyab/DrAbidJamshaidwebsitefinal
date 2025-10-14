import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';

export default function HomePage() {
  const navigate = useNavigate();

  const handleNavigate = (section: string) => {
    navigate(`/${section}`);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Hero onNavigate={handleNavigate} />
    </div>
  );
}
