module.exports = {
  title: "TypeScript4 document",
  description: "TypeScript4 latest office translation",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  base: '/learn-typescript/',
  theme: "reco",
  themeConfig: {
    nav: [
      { text: "main", link: "/;" },
      {
        text: "huiyiwanan JavaScript blog",
        items: [
          { text: "Github", link: "https://github.com/huiyiwanan" },
          { text: "Gitee", link: "https://gitee.com/huiyiwanan" },
        ],
      },
    ],
    sidebar: [
      {
        title: "home",
        path: "/",
        collapsable: false,
        children: [{ title: "home-children", path: "/" }],
      },
      {
        title: "bar",
        path: "/",
        collapsable: false,
        children: [
          { title: "bar-children-i", path: "/bar/i" },
          {
            title: "bar-children-ii",
            path: "/bar/ii",
            collapsable: false,
            children: [
              { title: "bar-children-ii-a", path: "/bar/ii/a" },
              { title: "bar-children-ii-b", path: "/bar/ii/b" },
            ],
          },
        ],
      },
      {
        title: "food",
        path: "/",
        collapsable: false,
        children: [
          { title: "food-children-i", path: "/food/i" },
          {
            title: "food-children-ii",
            path: "/food/ii",
          },
        ],
      },
    ],
    subSidebar: "auto",
  },
};
