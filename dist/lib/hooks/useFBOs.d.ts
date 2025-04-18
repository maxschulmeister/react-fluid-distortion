import * as THREE from 'three';
export declare const useFBOs: () => {
    density: {
        read: THREE.WebGLRenderTarget;
        write: THREE.WebGLRenderTarget;
        swap: () => void;
        dispose: () => void;
    };
    velocity: {
        read: THREE.WebGLRenderTarget;
        write: THREE.WebGLRenderTarget;
        swap: () => void;
        dispose: () => void;
    };
    pressure: {
        read: THREE.WebGLRenderTarget;
        write: THREE.WebGLRenderTarget;
        swap: () => void;
        dispose: () => void;
    };
    divergence: THREE.WebGLRenderTarget<THREE.Texture>;
    curl: THREE.WebGLRenderTarget<THREE.Texture>;
};
//# sourceMappingURL=useFBOs.d.ts.map