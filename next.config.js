/** @type {import('next').NextConfig} */

const prodUrl = 'https://ate-u.heteml.net/test/ito_test/next/'; // 配置先のURLを記載する
const localUrl = 'http://localhost:3001/'; // 作業時はlocalにしておく
const baseUrl = localUrl; // 👈 開発時はlocalUrl 本番にあげるときはprodUrl

module.exports = {
    reactStrictMode: true,
    env: {
        baseUrl: baseUrl // processで使えるように指定
    },
    assetPrefix: baseUrl, // vercelで閲覧する際には不要
    trailingSlash: true, // スラッシュ強制
    exportPathMap: async function(
        defaultPathMap, { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/' }
            // '/about/': { page: '/about' } // スラッシュ強制したいのでpathにもスラッシュ入れる
            // '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
            // 👆page配下にファイルが増えたら使いそう
        };
    }
};