import { useTexture } from '@react-three/drei';
import { EffectComposer } from '@react-three/postprocessing';
import { Fluid } from '../../lib';
import { ThreeTunnel } from './tunel';

import img from '@/assets/img2.jpg';

import Text from './Text';

const Image = () => {
    const texture = useTexture(img);

    return (
        <mesh position-z={-4}>
            <planeGeometry args={[7, 10, 20, 20]} attach='geometry' />
            <meshBasicMaterial map={texture} color='#d5cfc9' />
        </mesh>
    );
};

const Example3 = () => {
    return (
        <ThreeTunnel.In>
            <Text />
            <Image />
            <EffectComposer>
                <Fluid
                    blend={0.5}
                    force={2}
                    radius={0.2}
                    curl={10}
                    swirl={5}
                    intensity={0.7}
                    distortion={0.5}
                    fluidColor='#cfc0a8'
                    backgroundColor='#1a1a1a'
                    showBackground={true}
                    rainbow={false}
                    pressure={0.5}
                    densityDissipation={0.98}
                    velocityDissipation={0.99}
                    controls={false}
                />
            </EffectComposer>
        </ThreeTunnel.In>
    );
};

export default Example3;
