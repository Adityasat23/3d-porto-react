import { useRef, useEffect, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { a } from '@react-spring/three';
import islandScene from '../assets/3d/island.glb';

export function Island({ isRotating, setIsRotating, setCurrentStage, ...props }) {
  const islandRef = useRef();
  const { gl, viewport } = useThree();
  const { nodes, materials } = useMemo(() => useGLTF(islandScene), []);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95; // Untuk mengurangi kecepatan secara bertahap

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
    lastX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handlePointerUp = () => {
    setIsRotating(false);
  };

  const handlePointerMove = (e) => {
    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;

      rotationSpeed.current = delta * 0.05 * Math.PI; // Smooth movement
      islandRef.current.rotation.y += rotationSpeed.current;
      lastX.current = clientX;
    }
  };

  useFrame((state) => {
    const delta = state.clock.getDelta(); // FPS-based movement

    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;
      if (Math.abs(rotationSpeed.current) < 0.0001) {
        rotationSpeed.current = 0;
      }
      islandRef.current.rotation.y += rotationSpeed.current * delta * 60;
    }

    // Menentukan stage berdasarkan rotasi
    const rotation = islandRef.current.rotation.y;
    const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    switch (true) {
      case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
        setCurrentStage(4);
        break;
      case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
        setCurrentStage(3);
        break;
      case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
        setCurrentStage(2);
        break;
      case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
        setCurrentStage(1);
        break;
      default:
        setCurrentStage(null);
    }
  });

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
    };
  }, [gl, isRotating]);

  return (
    <a.group ref={islandRef} {...props} >
      <group position={[4.453, 0.404, 4.448]} rotation={[0, Math.PI / 4, 0]} scale={0.657}>
        <mesh
          geometry={nodes.Circle066.geometry}
          material={materials['lampu jalan']}
        />
        <mesh
          geometry={nodes.Circle066_1.geometry}
          material={materials.emision}
        />
        <mesh
          geometry={nodes.Circle066_2.geometry}
          material={materials.mainland}
        />
        <mesh
          geometry={nodes.Circle066_3.geometry}
          material={materials.Black}
        />
        <mesh
          geometry={nodes.Circle066_4.geometry}
          material={materials['Wood main']}
        />
        <mesh
          geometry={nodes.Circle066_5.geometry}
          material={materials.silver}
        />
        <mesh
          geometry={nodes.Circle066_6.geometry}
          material={materials.cardboard}
        />
        <mesh
          geometry={nodes.Circle066_7.geometry}
          material={materials['Barrier 2']}
        />
        <mesh
          geometry={nodes.Circle066_8.geometry}
          material={materials['Street Light']}
        />
        <mesh
          geometry={nodes.Circle066_9.geometry}
          material={materials.Box}
        />
        <mesh
          geometry={nodes.Circle066_10.geometry}
          material={materials['Fire Hydrant']}
        />
        <mesh
          geometry={nodes.Circle066_11.geometry}
          material={materials['Traffic Cone']}
        />
        <mesh
          geometry={nodes.Circle066_12.geometry}
          material={materials['car body.001']}
        />
        <mesh
          geometry={nodes.Circle066_13.geometry}
          material={materials['steel parts']}
        />
        <mesh
          geometry={nodes.Circle066_14.geometry}
          material={materials['black parts']}
        />
        <mesh
          geometry={nodes.Circle066_15.geometry}
          material={materials['black tries ']}
        />
        <mesh
          geometry={nodes.Circle066_16.geometry}
          material={materials.interior}
        />
        <mesh
          geometry={nodes.Circle066_17.geometry}
          material={materials['tries metal']}
        />
        <mesh
          geometry={nodes.Circle066_18.geometry}
          material={materials['car body']}
        />
        <mesh
          geometry={nodes.Circle066_19.geometry}
          material={materials.trims}
        />
        <mesh
          geometry={nodes.Circle066_20.geometry}
          material={materials.tires}
        />
        <mesh
          geometry={nodes.Circle066_21.geometry}
          material={materials['red light']}
        />
        <mesh
          geometry={nodes.Circle066_22.geometry}
          material={materials['cinza claro']}
        />
        <mesh
          geometry={nodes.Circle066_23.geometry}
          material={materials.white}
        />
        <mesh
          geometry={nodes.Circle066_24.geometry}
          material={materials.cinza}
        />
        <mesh
          geometry={nodes.Circle066_25.geometry}
          material={materials.merah}
        />
        <mesh
          geometry={nodes.Circle066_26.geometry}
          material={materials['Material.025']}
        />
        <mesh
          geometry={nodes.Circle066_27.geometry}
          material={materials.Green}
        />
        <mesh
          geometry={nodes.Circle066_28.geometry}
          material={materials.Black}
        />
        <mesh
          geometry={nodes.Circle066_29.geometry}
          material={materials.Skyblue}
        />
        <mesh
          geometry={nodes.Circle066_30.geometry}
          material={materials['beige 2']}
        />
        <mesh
          geometry={nodes.Circle066_31.geometry}
          material={materials.Yellow}
        />
        <mesh
          geometry={nodes.Circle066_32.geometry}
          material={materials.Orange}
        />
        <mesh
          geometry={nodes.Circle066_33.geometry}
          material={materials.Red}
        />
        <mesh
          geometry={nodes.Circle066_34.geometry}
          material={materials.Magenta}
        />
        <mesh
          geometry={nodes.Circle066_35.geometry}
          material={materials['Beige 1']}
        />
        <mesh
          geometry={nodes.Circle066_36.geometry}
          material={materials.asin}
        />
        <mesh
          geometry={nodes.Circle066_37.geometry}
          material={materials.kuning}
        />
        <mesh
          geometry={nodes.Circle066_38.geometry}
          material={materials.ijo}
        />
        <mesh
          geometry={nodes.Circle066_39.geometry}
          material={materials.biru}
        />
        <mesh
          geometry={nodes.Circle066_40.geometry}
          material={materials['biru tua']}
        />
        <mesh
          geometry={nodes.Circle066_41.geometry}
          material={materials.b1}
        />
        <mesh
          geometry={nodes.Circle066_42.geometry}
          material={materials.b2}
        />
        <mesh
          geometry={nodes.Circle066_43.geometry}
          material={materials.b3}
        />
        <mesh
          geometry={nodes.Circle066_44.geometry}
          material={materials.bimo}
        />
        <mesh
          geometry={nodes.Circle066_45.geometry}
          material={materials.BROWN}
        />
        <mesh
          geometry={nodes.Circle066_46.geometry}
          material={materials.Wood}
        />
        <mesh
          geometry={nodes.Circle066_47.geometry}
          material={materials.Leaves}
        />
        <mesh
          geometry={nodes.Circle066_48.geometry}
          material={materials.asphalt}
        />
        <mesh
          geometry={nodes.Circle066_49.geometry}
          material={materials.Land}
        />
        <mesh
          geometry={nodes.Circle066_50.geometry}
          material={materials.stone}
        />
        <mesh
          geometry={nodes.Circle066_51.geometry}
          material={materials.Land}
        />
        <mesh
          geometry={nodes.Circle066_52.geometry}
          material={materials.Red}
        />
        <mesh
          geometry={nodes.Circle066_53.geometry}
          material={materials.Leaves}
        />
        <mesh
          geometry={nodes.Circle066_54.geometry}
          material={materials.Gedong}
        />
      </group>
    </a.group>
  )
}
export default Island;