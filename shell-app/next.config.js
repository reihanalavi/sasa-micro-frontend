/**
 * Next.js Configuration (Shell App Host)
 * 
 * Pengaturan Module Federation untuk bertindak sebagai Host yang 
 * mengonsumsi ('catalog' & 'order').
 */
const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'shell', // Nama unik aplikasi Host
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          // Mendefinisikan endpoint untuk modul remote
          catalog: `catalog@http://localhost:3001/_next/static/chunks/remoteEntry.js`,
          order: `order@http://localhost:3002/_next/static/chunks/remoteEntry.js`,
        },
        shared: {
          // Singleton sharing library inti (Sangat krusial untuk kestabilan react hooks)
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