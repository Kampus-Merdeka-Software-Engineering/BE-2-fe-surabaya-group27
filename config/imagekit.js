// const imagekit = require('imagekit'); // Periksa penamaan modul di sini

// module.exports = new Imagekit({
//   urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
//   publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
//   privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
// });


// Pastikan untuk mengimpor modul Imagekit
const Imagekit = require('imagekit');

// Gunakan konfigurasi yang sesuai untuk proyek Anda
const imagekit = new Imagekit({
  publicKey: 'IMAGEKIT_PUBLIC_KEY',
  privateKey: 'IMAGEKIT_PRIVATE_KEY',
  urlEndpoint: 'IMAGEKIT_URL_ENDPOINT',
});

// Ekspor instance Imagekit yang telah didefinisikan
module.exports = imagekit;
