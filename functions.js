exports.setTitle = (siteTitle, pageTitle) =>
  `${siteTitle} | ${pageTitle}`;

exports.getAsset = (directory, subdirectory, filename) =>
  directory + subdirectory + filename;

const fontFormat = (arr) =>
  arr.map(item => item.split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join('+'))
    .join('|');

exports.googleFonts = function () {
  return `https://fonts.googleapis.com/css?family=${fontFormat([...arguments])}`;
};

exports.getYear = () => {
  const today = new Date();
  return today.getFullYear();
};

exports.imagePreloads = (path, ext, sizes) => {
  images = [];
  sizes.forEach((size, index) => {
    if (index !== sizes.length - 1) {
      images.push({
        name: `${path}-${size}px${ext}`,
        media: `(max-width: ${sizes[index +1] - 1}px)`,
      });
    } else {
      images.push({
        name: `${path}-${size}px${ext}`,
        media: `(min-width: ${size}px)`,
      });
    }
  });
  return images;
};

exports.backgroundImages = (className, path, ext, sizes) => {
  let css = `${className} {
    `;
  sizes.forEach((size, index) => {
    if (index === 0) {
      css += `background-image: url('${path}-${size}px${ext}');
      }`;
    } else {
      css += `@media screen and (min-width: ${size}px) {
        ${className} {
          background-image: url('${path}-${size}px${ext}');
        }
      }`;
    }
  });
  return css;
};

exports.getTags = (collection) => {
  let arr = [];
  collection.forEach((item) => { 
    if(item.hasOwnProperty('tags')) {
      item.tags.forEach((tag) => {
        arr.push(tag.name);
      })
    }
  });
  return arr.filter((tag, index) => arr.indexOf(tag) == index)
  .map((tag => {
    let pathName = tag.replace(' ', '-');
    return {
      name: tag,
      path: `categories/${pathName}/`
    };
  }));
};
