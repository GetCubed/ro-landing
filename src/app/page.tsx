import LandingPage from '@/components/LandingPage';
import { ThemeToggle } from '@/components/ThemeToggle';
import { PROFILE_CONFIG } from '@/constants/profile';

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <LandingPage
        profile={PROFILE_CONFIG}
      />
    </>
  );
}
