import { useNavigate } from 'react-router-dom';
import CoursesSection from '../components/CoursesSection';

export default function CoursesPage() {
  const navigate = useNavigate();

  const handleNavigate = (section: string) => {
    navigate(`/${section}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="pt-20">
      <CoursesSection onNavigate={handleNavigate} />
    </div>
  );
}
