# Backend Interview Coach（后端面试教练）

简历驱动的后端面试训练 Skill，适用于 Hermes、Claude Code、Codex CLI 等 AI Agent。模拟真实后端面试官的提问方式，读取简历后精准提问、持续追问、打分复盘，帮你补齐短板。

[English](README.md)

## 快速安装

```bash
npx backend-interview-coach hermes    # Hermes Agent
npx backend-interview-coach claude    # Claude Code
npx backend-interview-coach codex     # Codex CLI
npx backend-interview-coach all       # 全部安装
```

或通过 npm 全局安装：

```bash
npm install -g backend-interview-coach
backend-interview-coach hermes
```

## 训练模式

| 模式 | 说明 |
|------|------|
| 真实模拟面试 | 完整 7+ 轮后端 Tech Lead 面试模拟，动态追问 |
| 项目深挖 | 7 层追问链：事实细节 → 技术方案 → 取舍原因 → 底层原理 → 边界异常 → 线上故障 → 复盘改进 |
| JD 匹配 | 对比简历和目标岗位 JD，给出匹配度、缺口和最可能被挑战的点 |
| 定级评估 | 基于简历和面试回答，判断 P5/P6/P7/P8 水平并说明差距 |
| 系统设计面试 | 从 0 到 1 设计支付、限流器、排行榜、短链、风控等系统 |
| 高并发专项训练 | 围绕简历中的每个系统追问"流量翻 10 倍怎么办" |
| 故障排查面试 | 模拟线上事故：CPU 飙高、接口超时、MQ 堆积、慢 SQL、Redis 热 key |
| 编码面试 | 算法、SQL、并发伪代码、事务边界 |
| 知识点查漏 | 基于简历技术栈抽查八股（JVM/Spring/MySQL/Redis/MQ/网络/分布式） |
| 行为面试 | Owner 意识、跨团队协作、冲突处理、失败复盘 |
| 自我介绍打磨 | 基于简历生成 1 分钟/3 分钟/5 分钟版本 |
| 反问环节准备 | 根据目标公司和岗位生成高质量反问问题 |
| 面试复盘 | 分析真实面试录音或题目，定位扣分点，生成补强计划 |
| 简历表达优化 | 优化措辞但保持事实等价，绝不编造 |

## 使用示例

- "基于这份简历做一轮 Java 后端模拟面试"
- "这是我的简历和目标 JD，帮我判断匹配度和短板"
- "从面试官视角拷打我的支付项目"
- "按大厂标准出一道系统设计题"
- "模拟线上故障排查：接口超时和 MQ 堆积"
- "帮我找出简历里最容易被追问穿的 10 个点"
- "训练我的行为面试：冲突、失败、复盘"
- "帮我打磨 1 分钟自我介绍"
- "这是我今天面试的问题，帮我复盘哪里扣分"

## 支持的技术栈

Java/JVM、Go、Python、Spring/Spring Boot、MyBatis、Netty、Gin、MySQL、Redis、RocketMQ、Kafka、Elasticsearch、HBase、分布式事务、分布式锁、系统设计、高并发。

## 设计原则

- 所有问题必须标注简历依据
- 绝不编造 QPS、故障案例、项目规模和个人职责
- 每次只问 1-2 个问题，根据回答质量决定追问还是换题
- 追问深度逐层递进：L1 事实 → L2 方案 → L3 原理 → L4 边界 → L5 复盘
- 追问约 5 层或候选人坦诚边界后停止

## License

MIT
