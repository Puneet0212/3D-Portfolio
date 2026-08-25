import { PointMaterial, Points, Preload } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { Suspense, useRef, useMemo } from 'react'

const generateSpherePoints = (count, radius) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    let x, y, z, lengthSq;
    do {
      x = (Math.random() * 2 - 1);
      y = (Math.random() * 2 - 1);
      z = (Math.random() * 2 - 1);
      lengthSq = x * x + y * y + z * z;
    } while (lengthSq === 0 || lengthSq > 1);

    const scale = radius / Math.sqrt(lengthSq) * Math.cbrt(Math.random());
    positions[i * 3] = x * scale;
    positions[i * 3 + 1] = y * scale;
    positions[i * 3 + 2] = z * scale;
  }
  return positions;
};

const Stars = (props) => {
  const ref = useRef();
  const sphere = useMemo(() => generateSpherePoints(5000, 1.2), []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1]}}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}
export default StarsCanvas;