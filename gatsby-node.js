const ollVerk = require("./src/data/verk.json");


exports.createPages = async ({ actions: { createPage } }) => {
  createPage({
    path: `/`,
    component: require.resolve('./src/templates/yfirlit.js'),
    context: { ollVerk }
  });

  createPage({
    path: `/about`,
    component: require.resolve('./src/templates/text.js'),
    context: { ollVerk }
  });
  createPage({
    path: `/end`,
    component: require.resolve("./src/templates/end.js"),
    context: { ollVerk }
  });
   createPage({
     path: `/text`,
     component: require.resolve("./src/templates/text_2.js"),
     context: { ollVerk }
   });
  ollVerk.forEach((verk, i) => {
    createPage({
      path: `/verk/${verk.id}/`,
      component: require.resolve('./src/templates/verk.js'),
      context: { verk, prevVerk:ollVerk[i-1],nextVerk:ollVerk[i+1] }
    });
  });
};
