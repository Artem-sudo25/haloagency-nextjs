import Hero from './components/sections/Hero';
import ProblemSolution from './components/sections/ProblemSolution';
import ServicesOverview from './components/sections/ServicesOverview';
import Pricing from './components/sections/Pricing';
import Process from './components/sections/Process';
import Testimonials from './components/sections/Testimonials';
import FinalCTA from './components/sections/FinalCTA';

export default function Home() {
  return (
    <div>
      <Hero />
      <ProblemSolution />
      <ServicesOverview />
      <Pricing />
      <Process />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}
