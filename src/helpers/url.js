export const imageUrlCSS = filename =>
  `url(/images/${encodeURIComponent(filename)})`;

export const imageUrl = filename => `/images/${encodeURIComponent(filename)}`;
