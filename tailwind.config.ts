import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './node_modules/flowbite-react/lib/**/*.js',
        './pages/**/*.{ts,tsx}',
        './public/**/*.html',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [require('flowbite/plugin')],
};
export default config;
