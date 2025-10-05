// في vite.config.js تأكد من الإعدادات:
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    // أضف هذا للإنتاج
    build: {
        assetsDir: 'assets',
    }
})