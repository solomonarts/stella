function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export const icons = importAll(
  require.context("../Assets/images/icons", false, /\.(png|jpe?g|svg)$/)
);
