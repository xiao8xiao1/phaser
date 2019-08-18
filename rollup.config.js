import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import replace from 'rollup-plugin-replace';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	// input: './myGame.js',
	input: './src/phaser-custom.js',
	// input: './src/phaser.js',
	output: {
		file: './phaser.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		name: 'phaser3_test_npm',
		sourcemap: true
	},
	plugins: [
		resolve(), // tells Rollup how to find date-fns in node_modules
		commonjs(), // converts date-fns to ES modules
		production && terser(), // minify, but only in production
		// replace({
        //     "typeof CANVAS_RENDERER": JSON.stringify(false),
        //     "typeof EXPERIMENTAL": JSON.stringify(false),
        //     "typeof PLUGIN_CAMERA3D": JSON.stringify(false),
        //     "typeof PLUGIN_FBINSTANT": JSON.stringify(false),
		// 	"typeof FEATURE_SOUND": JSON.stringify(false),
		// 	"typeof WEBGL_RENDERER": JSON.stringify(true),
		// })
	]
};