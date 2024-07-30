import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/posts/",
  {
    text: "博文",
    icon: "list",
    prefix: "/posts/",
    children: [
      // {
      //   text: "苹果",
      //   icon: "pen-to-square",
      //   prefix: "apple/",
      // },
      // {
      //   text: "香蕉",
      //   icon: "pen-to-square",
      //   prefix: "banana/",
      // },

      { text: "Angular", icon: "pen-to-square", link: "/category/linux/" },
      { text: "Vue", icon: "pen-to-square", link: "/category/vue/" },
      { text: "Node", icon: "pen-to-square", link: "/category/node/" },
      { text: "Java", icon: "pen-to-square", link: "/category/java/" },
      { text: "Linux", icon: "pen-to-square", link: "/category/linux/" },
      { text: "数据库", icon: "pen-to-square", link: "/category/数据库/" },
      { text: "技术积累", icon: "pen-to-square", link: "/category/技术积累/" },
      { text: "GIS相关", icon: "pen-to-square", link: "/category/gis相关/" },
      // "tomato",
      // "strawberry",
    ],
  },

  {
    text: "标签",
    icon: "tag",
    link: "/tag/angular/",
  },

  {
    text: "时间轴",
    icon: "timeline",
    link: "/timeline/",
  },
  // {
  //   text: "关于我",
  //   icon: "street-view",
  //   link: "/intro.html",
  // },
]);
