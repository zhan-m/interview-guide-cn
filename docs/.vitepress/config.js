// GitHub Pages 部署：默认假设仓库名为 interview-guide-cn，
// 即站点最终在 https://<username>.github.io/interview-guide-cn/
// 如果绑定了自定义域名（CNAME 文件存在）或仓库是 <username>.github.io，把 base 改为 "/"
export default {
  base: "/interview-guide-cn/",
  title: "面试指南（中文版）",
  description: "软件工程师面试免费中文指南",
  head: [
    ["link", { rel: "stylesheet", href: "/interview-guide-cn/custom.css" }],
  ],
  cleanUrls: true,
  themeConfig: {
    siteTitle: "面试指南（中文版）",
    socialLinks: [
      { icon: "github", link: "https://github.com/nas5w/interview-guide" },
    ],
    sidebar: [
      {
        text: "导论",
        items: [
          { text: "前言", link: "/" },
          { text: "心态准备", link: "/preparing-mentally" },
          { text: "制定计划", link: "/creating-a-schedule" },
          { text: "面试类型", link: "/types-of-interviews" },
          {
            text: "去哪里面试？",
            link: "/where-should-i-interview",
          },
          { text: "我准备好了吗？", link: "/am-i-ready" },
        ],
      },
      {
        text: "面试类型",
        items: [
          { text: "行为面 Behavioral", link: "/behavioral" },
          { text: "价值观面 Values", link: "/values" },
          { text: "Leetcode 算法面", link: "/leetcode" },
          { text: "实战编码面 Practical Coding", link: "/practical-coding" },
          { text: "系统设计面 System Design", link: "/system-design" },
          { text: "知识点面 Technical Knowledge", link: "/technical-knowledge" },
        ],
      },
      {
        text: "沟通",
        items: [
          { text: "面试前", link: "/before-the-interview" },
          { text: "面试中", link: "/during-the-interview" },
          { text: "面试后", link: "/after-the-interview" },
        ],
      },
      {
        text: "其他",
        items: [
          { text: "面试礼仪", link: "/etiquette" },
          {
            text: "向公司提问",
            link: "/questions-for-the-company",
          },
          { text: "推荐资源", link: "/resources" },
          { text: "反馈", link: "/feedback" },
          { text: "致谢", link: "/credits" },
          { text: "支持本指南", link: "/support" },
        ],
      },
    ],
    nav: [
      {
        text: "支持本指南",
        link: "https://buy.stripe.com/4gM9AUfsj6xt6Es53y4c800",
      },
    ],
  },
};
