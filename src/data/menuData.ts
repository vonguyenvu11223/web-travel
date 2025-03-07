export const menuData = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Pages",
    children: [
      {
        id: 3,
        title: "About",
        url: "/about",
      },
      {
        id: 8,
        title: "Contact",
        url: "/contact",
      },

      {
        id: 8,
        title: "Reviews",
        url: "/reviews",
      },

      {
        id: 9,
        title: "404",
        url: "/error_404",
      },
    ],
  },

  {
    id: 212,
    title: "Account",
    children: [
      {
        id: 8,
        title: "Login",
        url: "/login",
      },

      {
        id: 8,
        title: "Signup",
        url: "/signup",
      },
      {
        id: 8,
        title: "Account",
        url: "/account",
      },

      {
        id: 8,
        title: "Forgot Password",
        url: "/forgot-password",
      },
    ],
  },

  {
    id: 12,
    title: "Tour",

    children: [
      {
        id: 15,
        title: "Tour List",
        url: "/tours/1",
      },
      {
        id: 16,
        title: "Tour Grid 3 Columns",
        url: "/tours/3",
      },

      {
        id: 17,
        title: "Tour Detail",
        url: "/tour/cannes-and-antibes-night-tour ",
      },
    ],
  },

  {
    id: 18,
    title: "Destinations",
    url: "/destinations",
  },

  {
    id: 22,
    title: "Blog",

    children: [
      {
        id: 23,
        title: "Blog",
        url: "/blog/all",
      },
      {
        id: 23,
        title: "Blog Detail",
        url: "/post/exploring-the-great-wall-of-china",
      },
    ],
  },
];
