const ollVerk = require("./src/data/verk.json");


exports.createPages = async ({ actions: { createPage } }) => {
  createPage({
    path: `/`,
    component: require.resolve('./src/templates/yfirlit.js'),
    context: { ollVerk }
  });

  // Create a page for each Pokémon.
  ollVerk.forEach(verk => {
    createPage({
      path: `/verk/${verk.id}/`,
      component: require.resolve('./src/templates/verk.js'),
      context: { verk }
    });
  });
};
