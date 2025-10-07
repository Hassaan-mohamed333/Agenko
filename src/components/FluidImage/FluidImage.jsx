// src/components/FluidImageHover/FluidImageHover.jsx
import * as THREE from 'three';
import { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useFBO, useTexture, MeshTransmissionMaterial } from '@react-three/drei';
import { easing } from 'maath';

function HoverImage({ imageUrl, position = [0, 0, 0], scale = 1, lensProps = {} }) {
  const meshRef = useRef();
  const glassRef = useRef();
  const buffer = useFBO();
  const texture = useTexture(imageUrl);
  const { viewport, mouse } = useThree();
  const [scene] = useState(() => new THREE.Scene());
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useFrame((state, delta) => {
    const { gl, camera } = state;
    
    if (meshRef.current && glassRef.current) {
      if (isHovered) {
        const mouseX = (mouse.x * viewport.width) / 4;
        const mouseY = (mouse.y * viewport.height) / 4;
        
        easing.damp3(glassRef.current.position, [
          position[0] + mouseX,
          position[1] + mouseY,
          position[2] + 0.1
        ], 0.1, delta);
        
        easing.damp(glassRef.current.scale, 'x', scale * 1.05, 0.1, delta);
        easing.damp(glassRef.current.scale, 'y', scale * 1.05, 0.1, delta);
        
        setIsActive(true);
      } else {
        easing.damp3(glassRef.current.position, position, 0.2, delta);
        easing.damp(glassRef.current.scale, 'x', scale * 0.001, 0.1, delta);
        easing.damp(glassRef.current.scale, 'y', scale * 0.001, 0.1, delta);
        
        if (glassRef.current.scale.x < 0.01) {
          setIsActive(false);
        }
      }
    }

    if (isActive && buffer && scene && camera) {
      gl.setRenderTarget(buffer);
      gl.render(scene, camera);
      gl.setRenderTarget(null);
    }
  });

  const {
    ior = 1.15,
    thickness = 2,
    chromaticAberration = 0.08,
    anisotropy = 0.02,
    transmission = 1,
    roughness = 0,
    ...extraMat
  } = lensProps;

  return (
    <>
      <mesh 
        ref={meshRef}
        position={position}
        scale={scale}
        onPointerOver={() => setIsHovered(true)}
        onPointerOut={() => setIsHovered(false)}
      >
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>

      <mesh ref={glassRef} position={position} scale={0.001}>
        <planeGeometry args={[1, 1]} />
        <MeshTransmissionMaterial
          buffer={isActive ? buffer.texture : null}
          ior={ior}
          thickness={thickness}
          anisotropy={anisotropy}
          chromaticAberration={chromaticAberration}
          transmission={transmission}
          roughness={roughness}
          transparent
          opacity={isHovered ? 1 : 0}
          {...extraMat}
        />
      </mesh>
    </>
  );
}

function ImageGallery({ images, lensProps }) {
  return (
    <>
      {images.map((url, index) => (
        <HoverImage
          key={index}
          imageUrl={url}
          position={[(index - (images.length - 1) / 2) * 1.8, 0, 0]}
          scale={1.2}
          lensProps={lensProps}
        />
      ))}
    </>
  );
}

export default function FluidImageHover({ images = [], className = "", style = {}, lensProps = {} }) {
  return (
    <div className={className} style={{ height: '500px', position: 'relative', ...style }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ alpha: true, antialias: true }}>
        <ImageGallery images={images} lensProps={lensProps} />
      </Canvas>
    </div>
  );
}