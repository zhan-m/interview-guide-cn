---
title: "帮我通过 FAANG 和 big tech 面试的 leetcode 练习流程"
pubDate: "2023-10-05"
slug: "my-leetcode-process"
description: "深入讲讲我练 leetcode 的流程"
hero: "/images/desk.jpg"
tags: ["interviewing", "leetcode"]
layout: "../../layouts/BlogPostLayout.astro"
---

编码面试很吓人。**FAANG** 编码面试？**简直恐怖**。

我从没觉得自己是那种能通过 FAANG 编码面试的人。我记得刚出大学（很多年前了）就被白板面**打爆**——50% 的题我**完全**不知道怎么入手，剩下 50% 我挣扎着给出次优解。那时我基本认定：通过最严苛的编码面试**这辈子都不可能**轮到我。

快进到今天——我最近一轮面试中，我**通过了** FAANG 和 big tech 的面试，包括解了**很多** leetcode 风格的题。

本文讲我怎么从 easy 都磕磕碰碰，到能解 hard、最终通过这些行业最严苛的编码面试。

# 这里**没有秘籍**

抱歉令你失望——这篇文章不叫"FAANG 不想让你知道的一个编码秘诀！"，是因为说到底，攻克 FAANG 面试就靠**练习**。

好消息是：**练习也分高效低效**——本文要狠狠强调的是：我**怎么高效**练 leetcode、怎么让**概念真正留下来**。

如果你已经做了几十甚至上百道 leetcode 题但**感觉进步不大**，本文对你尤其有用——你很可能没**用对方法**，希望本文能帮到你！

# 制定一份练习计划

**还没开始练之前**，先做计划。你打算开始面试前练几天/几周/几个月？每周几天？哪几天？每天几小时？打算做哪些题？（注：我**强烈推荐**从 NeetCode 150 开始！）

**如果你不做计划**（最好写下来），你大概率会做以下两件事之一：

1. 没结构，所以**不学**
2. 没结构，所以**学过头 → burnout**

如果你有家人或被你 depended on 的人，做计划尤其重要。你有计划，**他们也知道你什么时候忙**——共同预期总是好事。

## 别学太多

我听过太多人在练 leetcode 时 burnout。要么是过度沉迷、要么是没结构而无止境地学。**别这样**——这没用：burnout 时你的认知能力下降，记不住信息。

# 怎么解每一题

下面是我**当年开始学 leetcode 时希望知道**的流程。这能让我少走很多弯路、最大化时间收益。

## 第一步：自己解

打开 LeetCode，**读懂题**，自己解。这一步里我经常**先用伪代码或注释搭骨架**，再写真代码。比如：

```python
def two_sum(arr, target):
    # Iterate over the array

    # Create a second loop Iterating over the array

    # If the first loop value + second loop value = target, return them
```

走到这一步，**很好**！现在该想**怎么优化**。这个例子里 O(n²) 的复杂度并不好，可以优化到 O(n)：

```python
def two_sum(arr, target):
    # create set of existing values

    # iterate over array

    # if target - current element in set of existing values, return
    # [current, target - current]

    # add current element to set of existing values
```

现在写代码。如果你想不出更优解，**没关系**！就把你想出的那个解写出来。注释甚至可以保留——它就是你"怎么解"的好文档：

```python
def two_sum(arr, target):
    # create set of existing values
    existing = set()
    # iterate over array
    for i in range(len(arr)):
        # if target - current element in set of existing values, return
        # [current, target - current]
        if target - arr[i] in existing:
            return [target - arr[i], arr[i]]
         else:
            # add current element to set of existing values
            existing.add(arr[i])
```

## 什么时候"放弃"一题

我的经验法则是：**一道题最多卡 20 分钟**。到这个点，我会去看题解、**真正读懂它**。然后——**这一步极其重要**——我会回到 leetcode，**不看题解再写一遍**。

我可以保证：哪怕你**自以为**懂了题解，你**大概率没真懂**——凭记忆把题解写出来，会把它**真正打入你的脑子**。

凭记忆解出之后，我**仍然**不会把它当作"已搞定"。**标记**它，过段时间再做。你要反复回到这种题，直到**完全理解**、并且**一坐下不看任何东西**就能解出来。

你甚至可以做一个 spreadsheet 记录每道题的状态。我的长这样：

| 题目                        | 状态                |
| --------------------------- | ------------------- |
| Two sum                     | 已解，最优         |
| Three sum                   | 已解，非最优       |
| Median of Two Sorted Arrays | 借助题解才解出     |

理想情况你把所有题都推到"已解，最优"（或至少"已解，非最优"）状态。

# 尽可能模拟真实环境

最后一条建议：**尽可能模拟真实面试环境**。如果你将远程面试，那你可以**完美模拟**！意味着你应该坐在你计划面试时坐的桌前解题。**关掉背景里的电视**和其他干扰。

还有——**第一次会觉得很怪**——**练 leetcode 时大声讲出来**！你会惊讶："默默解题"和"边解边解释"完全是两种感觉。**不要让真实面试是你第一次描述自己的解题过程**。

# 结语

文章开头我说过——通过 FAANG 面试**不在我的人生剧本里**——或者我以为不在。结果它是**可达的**——通过自律的练习 + 上面这套方法论。**祝你好运！**
