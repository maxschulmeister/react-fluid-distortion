import { Effect } from 'postprocessing';
import { Texture, Uniform, Vector2, Vector3 } from 'three';
import bulgeFragmentShader from '../glsl/bulge.frag';
import { BulgeEffectProps } from '../types';
import { hexToRgb } from '../utils';

type Uniforms = {
    tTarget: Texture | null;
    uMouse: Vector2;
    uRadius: number;
    uStrength: number;
    uTintColor: Vector3;
    uTintIntensity: number;
    uAspectRatio: number;
    uInvert: number;
    uRadial: number;
};

export class BulgeEffect extends Effect {
    state: Partial<BulgeEffectProps>;
    private mousePosition: Vector2;

    constructor(props: BulgeEffectProps = {}) {
        const mousePosition = new Vector2(0.5, 0.5);

        const uniforms: Record<keyof Uniforms, Uniform> = {
            tTarget: new Uniform(props.tTarget || null),
            uMouse: new Uniform(mousePosition),
            uRadius: new Uniform(props.radius || 0.5),
            uStrength: new Uniform(props.strength || 0.7),
            uTintColor: new Uniform(hexToRgb(props.tint || '#fff')),
            uTintIntensity: new Uniform(props.intensity || 0),
            uAspectRatio: new Uniform(props.aspectRatio || 1.0),
            uInvert: new Uniform(props.invert !== undefined ? (props.invert ? 1.0 : 0.0) : 1.0),
            uRadial: new Uniform(props.radial !== undefined ? (props.radial ? 1.0 : 0.0) : 1.0),
        };

        super('BulgeEffect', bulgeFragmentShader, {
            blendFunction: props.blendFunction,
            uniforms: new Map(Object.entries(uniforms)),
        });

        this.mousePosition = mousePosition;
        this.state = { ...props };
    }

    private updateUniform<K extends keyof Uniforms>(key: K, value: Uniforms[K]) {
        const uniform = this.uniforms.get(key);
        if (uniform) {
            uniform.value = value;
        }
    }

    setMousePosition(position: Vector2) {
        this.mousePosition.copy(position);
        this.updateUniform('uMouse', this.mousePosition);
    }

    update() {
        this.updateUniform('uRadius', this.state.radius || 0.5);
        this.updateUniform('uStrength', this.state.strength || 0.7);

        if (this.state.tint) {
            this.updateUniform('uTintColor', hexToRgb(this.state.tint));
        } else {
            this.updateUniform('uTintColor', hexToRgb('#fff'));
        }

        if (this.state.intensity !== undefined) {
            this.updateUniform('uTintIntensity', this.state.intensity);
        } else {
            this.updateUniform('uTintIntensity', 0);
        }

        if (this.state.aspectRatio !== undefined) {
            this.updateUniform('uAspectRatio', this.state.aspectRatio);
        }

        this.updateUniform(
            'uInvert',
            this.state.invert !== undefined ? (this.state.invert ? 1.0 : 0.0) : 1.0,
        );
        this.updateUniform(
            'uRadial',
            this.state.radial !== undefined ? (this.state.radial ? 1.0 : 0.0) : 1.0,
        );
    }
}
