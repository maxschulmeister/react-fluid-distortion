import { Environment, MeshTransmissionMaterial } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { EffectComposer } from '@react-three/postprocessing';
import { useControls } from 'leva';
import { useRef } from 'react';
import { Mesh } from 'three';
import { Bulge } from '../../lib/Bulge';
import Text from './Text';
import { ThreeTunnel } from './tunel';

export const Torus = () => {
    const meshRef = useRef<Mesh>(null);

    const { camera } = useThree();

    useFrame(({ clock }) => {
        if (!meshRef.current) return;

        const time = clock.getElapsedTime();
        const cameraRadius = 10;
        const speed = 0.25;

        // Calculate camera angle
        const cameraAngle = time * speed; // Current angle of camera around Y axis

        // Only rotate horizontally (around Y axis)
        const cameraX = Math.sin(cameraAngle) * cameraRadius;
        const cameraY = 0; // Fixed height
        const cameraZ = Math.cos(cameraAngle) * cameraRadius;

        camera.position.set(cameraX, cameraY, cameraZ);
        camera.lookAt(0, 0, 0);
    });

    return (
        <>
            <ambientLight intensity={10.1} />
            <directionalLight position={[2, 20, 10]} />
            <Environment preset='warehouse' />

            <mesh position-z={-4} ref={meshRef}>
                <torusGeometry attach='geometry' args={[2.8, 0.8, 100, 100]} />

                <MeshTransmissionMaterial
                    transmission={1}
                    samples={1}
                    anisotropy={0}
                    chromaticAberration={0}
                />
            </mesh>
        </>
    );
};

const Example4 = () => {
    const { radius, strength, lerpFactor, tintColor, tintIntensity, invert } = useControls(
        'Bulge Effect',
        {
            radius: {
                value: 0.1,
                min: 0.1,
                max: 1.0,
                step: 0.01,
                label: 'Radius',
            },
            strength: {
                value: 1,
                min: 0.1,
                max: 3.0,
                step: 0.1,
                label: 'Strength',
            },
            lerpFactor: {
                value: 0.05,
                min: 0.01,
                max: 1.0,
                step: 0.01,
                label: 'Smoothness',
            },
            tintColor: {
                value: '#fff',
                label: 'Tint Color',
            },
            tintIntensity: {
                value: 0.1,
                min: 0.0,
                max: 1.0,
                step: 0.01,
                label: 'Tint Intensity',
            },
            invert: {
                value: false,
                label: 'Invert',
            },
        },
    );

    return (
        <ThreeTunnel.In>
            <Text />
            <Torus />

            <EffectComposer>
                <Bulge
                    radius={radius}
                    strength={strength}
                    lerpFactor={lerpFactor}
                    tintColor={tintColor}
                    tintIntensity={tintIntensity}
                    invert={invert}
                />
            </EffectComposer>
        </ThreeTunnel.In>
    );
};

export default Example4;
