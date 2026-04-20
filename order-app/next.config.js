/**
 * Next.js Configuration with Module Federation
 * 
 * Konfigurasi untuk mengekspos modul 'OrderDetail' agar bisa dikonsumsi oleh Host.
 */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, _options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'order', // Nama unik aplikasi remote
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          // Komponen yang dibagikan
          './OrderDetail': './components/OrderDetail.tsx',
        },
        shared: {
          // Singleton sharing library inti
          react: {
            singleton: true,
            requiredVersion: false,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: false,
          },
        },
      })
    );
    return config;
  },
};