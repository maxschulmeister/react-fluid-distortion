import { Effect } from 'postprocessing';
import { EffectProps } from '../types';
export declare class FluidEffect extends Effect {
    state: Partial<EffectProps>;
    constructor(props?: EffectProps);
    private updateUniform;
    update(): void;
}
//# sourceMappingURL=FluidEffect.d.ts.map