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
    radius?: number; // default: 0.5
    strength?: number; // default: 1.5
    lerp?: number; // default: 0.075
    tint?: string; // default: '#fff'
    intensity?: number; // default: 0
    blendFunction?: BlendFunction;
    invert?: boolean; // default: true
    radial?: boolean; // default: true
    controls?: boolean;
};

export type BulgeEffectProps = BulgeProps & {
    tTarget?: Texture;
    invert?: boolean;
    aspectRatio?: number;
    radial?: boolean;
};
