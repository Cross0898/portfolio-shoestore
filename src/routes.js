import LandingPage from "./components/Dashboard/LandingPage";

class Navigation {
  routes = [
    {
      path: "/",
      protected: true,
      navigation: true,
      name: "landingPage",
      default: true,
      component: LandingPage,
    },
  ];
  getDefaultRoute() {
    return this.routes.find((r) => r.default).path;
  }

  getRoutes(type) {
    return this.routes.filter((route) => {
      let validate = false;
      switch (type) {
        case "public":
          validate = !route.protected;
          break;
        case "private":
          validate = route.protected;
          break;
        case "redirect":
          validate = route.redirect;
          break;
        default:
      }
      return validate;
    });
  }
}

export default new Navigation();
