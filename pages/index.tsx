import { PageNavigation } from '../src/components/molecules/Navigation';
import { LandingPage } from 'src/components/features';

export default function Landing() {
  return (
    <div className="flex flex-col items-start justify-start min-h-screen">
      <PageNavigation />
      <LandingPage />
    </div>
  );
}
