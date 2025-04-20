import { BlendFunction } from 'postprocessing';
import { Texture } from 'three';
export type SharedProps = {
    blend?: number;
    intensity?: number;
    distortion?: number;
    rainbow?: boolean;
    fluidColor?: string;
    backgroundColor?: string;
    showBackground?: boolean;
    blendFunction?: BlendFunction;
};
export type Props = SharedProps & {
    densityDissipation?: number;
    pressure?: number;
    velocityDissipation?: number;
    force?: number;
    radius?: number;
    curl?: number;
    swirl?: number;
    controls?: boolean;
};
export type EffectProps = SharedProps & {
    tFluid?: Texture;
};
export type BulgeProps = {
    radius?: number;
    strength?: number;
    lerp?: number;
    tint?: string;
    intensity?: number;
    blendFunction?: BlendFunction;
    invert?: boolean;
    radial?: boolean;
    controls?: boolean;
};
export type BulgeEffectProps = BulgeProps & {
    tTarget?: Texture;
    invert?: boolean;
    aspectRatio?: number;
    radial?: boolean;
};
//# sourceMappingURL=types.d.ts.map