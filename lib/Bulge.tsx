import { useFrame, useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import { BlendFunction } from 'postprocessing';
import { useMemo, useRef } from 'react';
import { Mesh, Vector2 } from 'three';
import { Effect as BulgeEffect } from './effect/Bulge';
import { BulgeProps } from './types';

export const Bulge = ({
    radius = 0.5,
    strength = 1.5,
    lerp = 0.075,
    tint = '#fff',
    intensity = 0,
    blendFunction = BlendFunction.NORMAL,
    invert = true,
    radial = true,
    controls = false,
}: BulgeProps) => {
    const effectRef = useRef<any>(null);
    const meshRef = useRef<Mesh>(null);
    // current and target mouse positions
    const mouseRef = useRef(new Vector2(0, 0));
    const { viewport, camera } = useThree();

    // Calculate aspect ratio once per viewport change
    const aspect = useMemo(() => viewport.width / viewport.height, [viewport]);

    const bulgeDefaults = {
        radius: 0.5,
        strength: 1.5,
        lerp: 0.075,
        tint: '#fff',
        intensity: 0,
        invert: true,
        radial: true,
    };
    const levaControls = controls
        ? useControls('Bulge Effect', {
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
          })
        : ({} as BulgeProps);

    useFrame((state) => {
        if (effectRef.current) {
            const { x: mx, y: my } = state.mouse;
            // smooth lerp towards current mouse position
            let lerpValue = lerp;
            if (controls && typeof levaControls.lerp === 'number') {
                lerpValue = levaControls.lerp;
            }
            mouseRef.current.x += (mx - mouseRef.current.x) * lerpValue;
            mouseRef.current.y += (my - mouseRef.current.y) * lerpValue;

            // update effect uniforms
            effectRef.current.setMousePosition(mouseRef.current);
            effectRef.current.state.aspectRatio = aspect;
            effectRef.current.state.invert = controls ? levaControls.invert : invert;
            effectRef.current.state.radial = controls ? levaControls.radial : radial;
            effectRef.current.update();
        }
        if (meshRef.current) {
            // billboard plane to face camera
            meshRef.current.quaternion.copy(camera.quaternion);
        }
    });

    return (
        <>
            <mesh
                ref={meshRef}
                renderOrder={1000}
                position={[0, 0, 0]}
                scale={[viewport.width, viewport.height, 1]}>
                <planeGeometry args={[1, 1]} />
                <meshBasicMaterial transparent opacity={0} depthTest={false} />
            </mesh>

            <BulgeEffect
                ref={effectRef}
                radius={controls ? levaControls.radius : radius}
                strength={controls ? levaControls.strength : strength}
                tint={controls ? levaControls.tint : tint}
                intensity={controls ? levaControls.intensity : intensity}
                blendFunction={blendFunction}
                aspectRatio={aspect}
                invert={controls ? levaControls.invert : invert}
                radial={controls ? levaControls.radial : radial}
            />
        </>
    );
};
