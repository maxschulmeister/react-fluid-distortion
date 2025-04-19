import { forwardRef, useEffect, useMemo } from 'react';
import { BulgeEffectProps } from '../types';
import { BulgeEffect } from './BulgeEffect';

export const Effect = forwardRef(function Bulge(props: BulgeEffectProps, ref) {
    // prevent re-creating the effect on every render
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const effect = useMemo(() => new BulgeEffect(props), []);

    useEffect(() => {
        effect.state = { ...props };
        effect.update();
    }, [effect, props]);

    useEffect(() => {
        return () => {
            effect.dispose?.();
        };
    }, [effect]);

    return <primitive ref={ref} object={effect} dispose={null} />;
});
