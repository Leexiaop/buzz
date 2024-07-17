import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	build: {
		emptyOutDir: true,
		lib: {
			formats: ['es', 'cjs', 'iife', 'umd'],
			entry: './src/index.ts',
			name: 'buzzs',
			fileName: 'index'
		}
	},
	plugins: [dts({ rollupTypes: true })],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	}
});
