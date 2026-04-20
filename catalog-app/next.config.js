/**
 * Next.js Configuration with Module Federation
 * 
 * Di sini kita mengonfigurasi aplikasi ini agar bisa bertindak sebagai "Remote"
 * yang mengekspos komponen-komponennya untuk digunakan oleh aplikasi lain (Host).
 */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, _options) {
    // Kita tambahkan plugin Module Federation ke dalam pipeline Webpack
    config.plugins.push(
      new NextFederationPlugin({
        name: 'catalog', // Nama unik aplikasi remote ini
        filename: 'static/chunks/remoteEntry.js', // Output file manifest yang akan di-load oleh Host
        exposes: {
          // Komponen yang ingin dibagikan: { 'nama_panggil': 'path_file_asli' }
          './ProductList': './components/ProductList.tsx',
        },
        shared: {
          // Library yang digunakan bersama (singleton agar tidak dobel load)
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