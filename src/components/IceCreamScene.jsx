import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { TextureLoader } from 'three';
import textureImg from '../assets/images/texture.png';

function Scoop({ position, color, scale = 1 }) {
    const meshRef = useRef();
    const [hovered, setHover] = useState(false);
    const colorMap = useLoader(TextureLoader, textureImg);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        meshRef.current.rotation.x = Math.cos(t / 4) / 4;
        meshRef.current.rotation.y = Math.sin(t / 4) / 4;
        meshRef.current.position.y = position[1] + Math.sin(t / 1.5) / 10;
    });

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <mesh
                ref={meshRef}
                position={position}
                scale={hovered ? scale * 1.1 : scale}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <sphereGeometry args={[1, 128, 128]} />
                <meshStandardMaterial
                    map={colorMap}
                    color={color}
                    roughness={0.8}
                    displacementMap={colorMap}
                    displacementScale={0.15}
                />
            </mesh>
        </Float>
    );
}

const IceCreamScene = () => {
    return (
        <div style={{ height: '500px', width: '100%', background: 'linear-gradient(to bottom, #fdfbfb, #ebedee)' }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} color="#ffc1cc" intensity={1.5} />

                <group position={[0, -0.5, 0]}>
                    {/* Strawberry Scoop */}
                    <Scoop position={[-1.5, 0.5, 0]} color="#ff9aa2" />
                    {/* Vanilla Scoop center */}
                    <Scoop position={[0, 0, 0]} color="#fff5e6" scale={1.2} />
                    {/* Mint Scoop */}
                    <Scoop position={[1.5, 0.5, 0]} color="#b5ead7" />

                    {/* Floating bits */}
                    <Scoop position={[-2, -1, 1]} color="#e2f0cb" scale={0.4} />
                    <Scoop position={[2, -1.5, -1]} color="#c7ceea" scale={0.5} />
                </group>

                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
};

export default IceCreamScene;
