import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '../components/LoadingScreen';
import Hero from '../components/Hero';
import GlobalEffects from '../components/GlobalEffects';
import FlowerEffect from '../components/FlowerEffect';
import Timeline from '../components/Timeline';
import MemoryGallery from '../components/MemoryGallery';
import Moodboard from '../components/Moodboard';
import ReasonsSection from '../components/ReasonsSection';
import ChaosMeter from '../components/ChaosMeter';
import HoldHeart from '../components/HoldHeart';
import CinematicTransition from '../components/CinematicTransition';
import SecretLetter from '../components/SecretLetter';
import ForeverCounter from '../components/ForeverCounter';
import FinalScene from '../components/FinalScene';

type Stage = 'loading' | 'hero' | 'main';

export default function Index() {
  const [stage, setStage] = useState<Stage>('loading');

  return (
    <>
      <GlobalEffects />
      <FlowerEffect />

      <AnimatePresence mode="wait">
        {stage === 'loading' && (
          <LoadingScreen key="loading" onComplete={() => setStage('hero')} />
        )}
      </AnimatePresence>

      {stage !== 'loading' && (
        <>
          <Hero onStart={() => setStage('main')} />

          {stage === 'main' && (
            <main>
              <Moodboard />
              <Timeline />
              <CinematicTransition />
              <MemoryGallery />
              <ReasonsSection />
              <ChaosMeter />
              <HoldHeart />
              <SecretLetter />
              <ForeverCounter />
              <FinalScene />
            </main>
          )}
        </>
      )}
    </>
  );
}
