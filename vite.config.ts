import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import * as path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import glsl from 'vite-plugin-glsl';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [react(), glsl(), dts({ include: 'lib', insertTypesEntry: true }), tsConfigPaths()],

    resolve: {
        alias: [
            {
                find: '@',
                replacement: fileURLToPath(new URL('./src', import.meta.url)),
            },
        ],
    },
    build: {
        lib: {
            // eslint-disable-next-line no-undef
            entry: path.resolve(__dirname, 'lib/index.ts'),
            name: 'reactFluidDistortion',
            formats: ['es', 'umd'],
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: [
                'react',
                '@react-three/fiber',
                '@react-three/drei',
                'three',
                'postprocessing',
            ],
            output: {
                globals: {
                    react: 'React',
                    '@react-three/fiber': 'reactThreeFiber',
                    '@react-three/drei': 'drei',
                    three: 'THREE',
                    postprocessing: 'postprocessing',
                },
            },
        },
        sourcemap: true,
        emptyOutDir: true,
        copyPublicDir: false,
    },
});
