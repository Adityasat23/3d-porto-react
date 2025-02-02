import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerformanceMonitor, Sky } from '@react-three/drei';
import Loader from '../components/Loader';
import Island from '../models/Island';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(null);
  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <PerformanceMonitor />
        <Suspense fallback={<Loader />}>
          <directionalLight position={[7, 1, 1]} intensity={4} />
          <ambientLight intensity={0.7} />
          <hemisphereLight skyColor="#0068FAFF" groundColor="#000000" intensity={1} />
          <Sky />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

const adjustIslandForScreenSize = () => {
  let screenScale = window.innerWidth < 768 ? [2, 2, 2] : [1, 1, 1];
  let screenPosition = [0, -6.5, -43];
  let rotation = [0.1, 4.7, 0];
  return [screenScale, screenPosition, rotation];
};

export default Home;
