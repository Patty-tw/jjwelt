export default [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About us",
    url: "/aboutus",
  },
  {
    id: 3,
    title: "Product",
    children: [
      {
        id: 4,
        title: "Leather",
        url: "/leather",
        children: [
          {
            id: 5,
            title: "Leather Welt",
            url: "/leather-welt",
          },
          {
            id: 6,
            title: "Leathboard Welt",
            url: "/leatherboard-welt",
          },
        ],
      },
      {
        id: 7,
        title: "Plastic Welt",
        url: "/plastic-welt",
      },
      {
        id: 8,
        title: "Outsole",
        url: "/outsole",
        children: [
          {
            id: 9,
            title: "Stock Fitting",
            url: "/outsole-stock-fitting",
          },
          {
            id: 10,
            title: "Stacked Leather",
            url: "/stacked-leather",
          },
          {
            id: 11,
            title: "Dessicants",
            url: "/desiccant",
          },
        ],
      },
    ],
  },
];
