import { ThreeEvent } from '@react-three/fiber';
type SplatStack = {
    mouseX: number;
    mouseY: number;
    velocityX: number;
    velocityY: number;
};
export declare const usePointer: ({ force }: {
    force: number;
}) => {
    onPointerMove: (event: ThreeEvent<PointerEvent>) => void;
    splatStack: SplatStack[];
};
export {};
//# sourceMappingURL=usePointer.d.ts.map