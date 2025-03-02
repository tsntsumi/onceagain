import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "私たちについて",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "サービス",
    path: "/pricing",
    newTab: false,
  },
  {
    id: 5,
    title: "コンタクト",
    path: "/contact",
    newTab: false,
  },
  {
    id: 5,
    title: "ブログ",
    path: "/blogs",
    newTab: false,
  },
  {
    id: 6,
    title: "ページ",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "私たちについて",
        path: "/about",
        newTab: false,
      },
      {
        id: 62,
        title: "サービス一覧",
        path: "/pricing",
        newTab: false,
      },
      {
        id: 63,
        title: "コンタクト",
        path: "/contact",
        newTab: false,
      },
      {
        id: 64,
        title: "ブログ",
        path: "/blogs",
        newTab: false,
      },
      {
        id: 66,
        title: "サインアップ",
        path: "/signup",
        newTab: false,
      },
      {
        id: 67,
        title: "サインイン",
        path: "/signin",
        newTab: false,
      },
      /* {
       *   id: 68,
       *   title: "エラーページ",
       *   path: "/error",
       *   newTab: false,
       * }, */
    ],
  },
];
export default menuData;
