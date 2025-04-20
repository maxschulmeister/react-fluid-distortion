import { Environment, MeshTransmissionMaterial } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { EffectComposer } from '@react-three/postprocessing';
import { useControls } from 'leva';
import { useRef } from 'react';
import { Mesh } from 'three';
import { Bulge } from '../../lib';
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

const bulgeDefaults = {
    radius: 0.5,
    strength: 1.5,
    lerp: 0.075,
    tint: '#fff',
    intensity: 0,
    invert: true,
    radial: true,
};

const Example4 = () => {
    const { radius, strength, lerp, tint, intensity, invert, radial } = useControls(
        'Bulge Effect',
        {
            radius: {
                value: bulgeDefaults.radius,
                min: 0.1,
                max: 1.0,
                step: 0.01,
                label: 'Radius',
            },
            strength: {
                value: bulgeDefaults.strength,
                min: 0.1,
                max: 3.0,
                step: 0.1,
                label: 'Strength',
            },
            lerp: {
                value: bulgeDefaults.lerp,
                min: 0.01,
                max: 1.0,
                step: 0.01,
                label: 'Smoothness',
            },
            tint: {
                value: bulgeDefaults.tint,
                label: 'Tint',
            },
            intensity: {
                value: bulgeDefaults.intensity,
                min: 0.0,
                max: 1.0,
                step: 0.01,
                label: 'Intensity',
            },
            invert: {
                value: bulgeDefaults.invert,
                label: 'Invert',
            },
            radial: {
                value: bulgeDefaults.radial,
                label: 'Radial Mode',
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
                    lerp={lerp}
                    tint={tint}
                    intensity={intensity}
                    invert={invert}
                    radial={radial}
                    controls={true}
                />
            </EffectComposer>
        </ThreeTunnel.In>
    );
};

export default Example4;
