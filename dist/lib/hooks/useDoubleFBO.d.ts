import * as THREE from 'three';
type FBO = {
    read: THREE.WebGLRenderTarget;
    write: THREE.WebGLRenderTarget;
    swap: () => void;
    dispose: () => void;
};
type Options = {
    minFilter?: THREE.TextureFilter;
    format?: THREE.PixelFormat;
    type?: THREE.TextureDataType;
    depth: boolean;
};
export declare const useDoubleFBO: (width: number, height: number, options: Options) => FBO;
export {};
//# sourceMappingURL=useDoubleFBO.d.ts.map