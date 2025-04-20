import { Effect } from 'postprocessing';
import { Vector2 } from 'three';
import { BulgeEffectProps } from '../types';
export declare class BulgeEffect extends Effect {
    state: Partial<BulgeEffectProps>;
    private mousePosition;
    constructor(props?: BulgeEffectProps);
    private updateUniform;
    setMousePosition(position: Vector2): void;
    update(): void;
}
//# sourceMappingURL=BulgeEffect.d.ts.map