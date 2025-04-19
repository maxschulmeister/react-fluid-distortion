import { useFrame, useThree } from '@react-three/fiber';
import { BlendFunction } from 'postprocessing';
import { useMemo, useRef } from 'react';
import { Mesh, Vector2 } from 'three';
import { Effect as BulgeEffect } from './effect/Bulge';
import { BulgeProps } from './types';

export const Bulge = ({
    radius = 0.2,
    strength = 0.7,
    lerpFactor = 0.1,
    tintColor = '#ffe4c4',
    tintIntensity = 0.1,
    blendFunction = BlendFunction.NORMAL,
    invert = false,
}: BulgeProps) => {
    const effectRef = useRef<any>(null);
    const meshRef = useRef<Mesh>(null);
    // current and target mouse positions
    const mouseRef = useRef(new Vector2(0, 0));
    const { viewport, camera } = useThree();

    // Calculate aspect ratio once per viewport change
    const aspect = useMemo(() => viewport.width / viewport.height, [viewport]);

    useFrame((state) => {
        if (effectRef.current) {
            const { x: mx, y: my } = state.mouse;
            // smooth lerp towards current mouse position
            mouseRef.current.x += (mx - mouseRef.current.x) * lerpFactor;
            mouseRef.current.y += (my - mouseRef.current.y) * lerpFactor;

            // update effect uniforms
            effectRef.current.setMousePosition(mouseRef.current);
            effectRef.current.state.aspectRatio = aspect;
            effectRef.current.state.invert = invert;
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
                radius={radius}
                strength={strength}
                tintColor={tintColor}
                tintIntensity={tintIntensity}
                blendFunction={blendFunction}
                aspectRatio={aspect}
            />
        </>
    );
};
