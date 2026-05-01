<img style="margin: 0 auto; max-width:13rem; margin-bottom: 2rem" width="208" height="208" alt="Person explaining complicated system" src="/system.svg" />

# 系统设计面（System Design Interviews）

<star />

## 什么是系统设计面？

系统设计面通常会给你一组**相对复杂**系统的需求，让你拿出一份设计。需求一开始往往**有点模糊**，目的是看你**会不会问问题**把系统搞清楚。这类面试一般针对**资深**候选人——junior 不能被期望已经做过太多系统设计工作。

这类面试是衡量资深工程师水平的最好量尺之一，但我个人觉得它们**最难**，因为它们**开放**。

## 系统设计面的类型

我见过两类：

- **纯设计（Pure design）**。你完全聚焦在**指明**系统、讲清你**会怎么设计**它。你可能要画一些图把架构传达给面试官。
- **设计 + 编码（Design + coding）**。题目范围会**稍小**一些。你先讲设计，再写代码开始实现一部分。

系统设计面的样貌因方向差别很大。我面过 front-end 和 full stack 两种岗位。front-end 的系统设计面常常聚焦在设计一个 UI 组件、再去写它的 HTML/CSS/JavaScript；full stack 的设计面我见过更多**纯设计**题，要你讲清楚怎么 scale 应用、数据库 schema、API 设计等等。

## 怎么准备系统设计面

我练习系统设计的流程是：

1. **列出对应方向的考点清单。** 比如我面 front-end，面试很可能涉及 accessibility、internationalization 等话题。
2. **在线找相关题。** 网上有很多好例子；自己想一个题也不难。
3. **设计系统。** 花 45 分钟到 1 小时设计你列的某一题。务必**画出/草绘**架构组件——这在面试现场也很有用。设计完后回头检查、确认你已覆盖所有清单上的话题。如果有薄弱处，针对性补一下。

### 制定话题清单

下面分别给 front-end 和 backend 列了考点清单。如果你方向不同，自己 google 找你领域的相关考点。

#### 前端 Front-end

- Accessibility（可访问性）
- Performance（性能）
- Security（安全）
- Caching（缓存）
- Device types / responsiveness（设备类型 / 响应式）
- Languages / internationalization（多语言 / 国际化）
- Componentization（组件化）
- Component API（组件 API）
- User experience（用户体验）
- Multi-tenancy（多租户）
- Analytics / telemetry（埋点 / 遥测）

#### 后端 Back-end

- Database design（数据库设计）
- Scalability（可扩展性）
- Security（安全）
- API design（API 设计）
- Caching（缓存）
- Availability（可用性）
- Reliability（可靠性）
- Performance（性能）
- Authentication / authorization（认证 / 授权）
- Telemetry（遥测）

### 永远练不够的一项：问问题

系统设计面里最难搞的一点是：你**真的不知道**面试官最关心上面清单里的哪几项，因此你需要**多问问题**。比如，front-end 里一个好澄清问题是问系统是否要支持多语言。如果面试官说"是"，你就花点时间讲多语言架构；如果说"否"，就在你的设计里跳过这一话题。

### 用 RADAD 框架

Frontend Interview Handbook 介绍了一个叫 [RADAD](https://www.frontendinterviewhandbook.com/front-end-system-design/#radad-framework) 的框架，我觉得它能很好地帮你**分配**面试时间。下面是从 Frontend Interview Handbook 复制过来的简介，强烈推荐你去原文看更详细的内容：

- **Requirements clarifications/alignment（需求澄清与对齐）** —— 把系统的需求问清楚。
- **Architecture（架构）** —— 给出系统的整体架构（取决于题目，可能是 UI 组件或一个 app）。在合适的地方画图。
- **Data model（数据模型）** —— 这个组件怎么存放传给它的数据？用了哪些数据结构？
- **API design（API 设计）** —— 这个组件的 API 是什么？组件上允许哪些 options？
- **Deep dive（深入）** —— UX、Performance、Accessibility（a11y）、Internationalization（i18n）、多端支持、Security。

这份清单偏 front-end，但同样适用于 backend 或 full stack 的系统设计面。

### 弄清要把时间花在哪里

把你能想到的 clarifying questions 都问完之后，建议**再问一句**："系统的哪一部分你最感兴趣？"很多时候面试官会说"由你"，那就你来选重点。但如果他正好特别关心某一块，那这个信息**极其宝贵**。问 clarifying questions 时**记笔记**！

下面是一些好的 clarifying questions，是否适用取决于你具体设计什么系统：

如果题目让你设计一个消息服务，你可以问：

- 消息要多实时？
- 是否有特殊安全要求（例如端到端加密）？
- 我们对预期用量有没有把握？
- 消息要保留多久？
- 是否支持媒体（图片、视频）？

如果题目让你设计一个日历组件，你可以问：

- 是否需要支持多语言 / 国际化？
- 是否需要支持日期范围还是只要单个日期？
- 它会被用在哪些浏览器和设备？
- 日历里要存什么类型的数据？

### 系统设计题示例

下面是我听过的部分系统设计题（不全）。可以拿来练习。也建议你 google 一些其他例子。

#### 后端 Back-end

- 聊天 / 消息应用
- Twitter / 微博平台
- 短链服务（如 bit.ly）
- 任意 CRUD API
- 公共图书馆借阅系统 API
- 视频流媒体服务
- Pinterest

#### 前端 Front-end

- 上面 backend 列表里任何一项的前端
- 具体组件：
  - 日期选择器（date-picker）
  - 图片轮播
  - Modal
  - Accordion

下面这份资料里也有不少系统设计题及示例答案：

- [31 system design interview questions (and sample answers)](https://igotanoffer.com/blogs/tech/system-design-interviews)

<foot />
