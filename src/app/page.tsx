import LandingPage from '@/components/LandingPage';
import { ThemeToggle } from '@/components/ThemeToggle';
import { PROFILE_CONFIG } from '@/constants/profile';

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <LandingPage
        title="Rhodri Mativo"
        subtitle="Full Stack Developer crafting beautiful digital experiences with Next.js, TypeScript, and modern web technologies."
        linkedinUrl="https://www.linkedin.com/in/rhodrimativo"
        githubUrl="https://github.com/GetCubed"
        externalUrl="https://ro-mativo.vercel.app/"
        profile={PROFILE_CONFIG}
      />
    </>
  );
}
