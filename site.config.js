const {
  setTitle,
  googleFonts,
  getAsset,
  imagePreloads,
  backgroundImages,
  getTags,
  getYear,
} = require('./functions');


module.exports = {
  site: {
    title: 'My So-Called Blog',
    description: 'My Personal Blog',
    author: 'Michael Kornblum',
    url: 'http://mysocalledblog.com',
    assetPath: '/assets',
    cssPath: '/styles/',
    jsPath: '/scripts/',
    imgPath: '/iamges/',
    breakpoints: [
      320,
      480,
      768,
      992,
      1200
    ],
  },
  helpers: {
    setTitle,
    googleFonts,
    getAsset,
    imagePreloads,
    backgroundImages,
    getTags,
    getYear,
  },
};