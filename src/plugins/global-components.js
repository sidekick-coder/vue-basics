const plugin = {
  install(app) {
    const components = import.meta.glob("../components/*.vue", {
      eager: true,
    });

    Object.entries(components).forEach(([key, value]) => {
      const name = key.replace("../components/", "").replace(".vue", "");

      app.component(name, value.default);
    });
  },
};

export default plugin;
