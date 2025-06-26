import LandingPage from '@/components/LandingPage';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <LandingPage
        title="Coming Soon"
        subtitle="Something amazing is being crafted. Stay tuned for updates."
        linkedinUrl="https://linkedin.com/in/your-profile"
        githubUrl="https://github.com/your-username"
        externalUrl="https://your-website.com"
      />
    </>
  );
}
