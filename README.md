# Backend Interview Coach

Resume-driven backend interview training skill for AI agents (Hermes, Claude Code, Codex CLI). Simulates a backend Tech Lead interviewer that reads your resume, asks targeted questions with relentless follow-up, scores your answers, and builds personalized reinforcement plans.

[中文版](README_zh.md)

## Quick Install

```bash
npx backend-interview-coach hermes    # Hermes Agent
npx backend-interview-coach claude    # Claude Code
npx backend-interview-coach codex     # Codex CLI
npx backend-interview-coach all       # All of the above
```

Or install via npm:

```bash
npm install -g backend-interview-coach
backend-interview-coach hermes
```

## What It Does

| Mode | Description |
|------|-------------|
| Mock Interview | Full 7+ round backend Tech Lead simulation with dynamic follow-up |
| Project Deep Dive | 7-layer chain: facts → design → tradeoffs → internals → edge cases → incidents → retro |
| JD Matching | Compare resume against a target job description, score match, identify gaps |
| Leveling Assessment | Estimate P5/P6/P7/P8 based on resume and interview answers |
| System Design | Full system design interviews: payment, rate limiter, leaderboard, short URL, risk control |
| High-Concurrency Training | "What if traffic scales 10x?" for every system in your resume |
| Fault Diagnosis | Simulated incidents: CPU spike, timeout, MQ backlog, slow SQL, Redis hot key |
| Coding Interview | Algorithms, SQL, concurrency pseudo-code, transaction boundaries |
| Knowledge Check | Drills fundamentals anchored to your tech stack (JVM, Spring, MySQL, Redis, MQ, etc.) |
| Behavioral Interview | Ownership, cross-team collaboration, conflict resolution, failure retro |
| Self-Intro Polish | 1-min / 3-min / 5-min versions from your resume |
| Reverse Questions | High-quality counter-questions for the final 5 minutes |
| Interview Review | Scores real transcripts, identifies lost points, builds drill plans |
| Resume Rewriting | Optimizes wording with truth-preserving guarantees |

## Usage

Just mention your resume and what you need:

- "基于这份简历做一轮 Java 后端模拟面试"
- "这是我的简历和目标 JD，帮我判断匹配度和短板"
- "从面试官视角拷打我的支付项目"
- "按大厂标准出一道系统设计题"
- "模拟线上故障排查：接口超时和 MQ 堆积"
- "帮我找出简历里最容易被追问穿的 10 个点"
- "训练我的行为面试：冲突、失败、复盘"
- "帮我打磨 1 分钟自我介绍"
- "这是我今天面试的问题，帮我复盘哪里扣分"

## Supported Stacks

Java/JVM, Go, Python, Spring/Spring Boot, MyBatis, Netty, Gin, MySQL, Redis, RocketMQ, Kafka, Elasticsearch, HBase, distributed transactions, distributed locks, system design, high concurrency.

## Rules

- All questions must cite specific resume content
- Never fabricate QPS, incidents, or ownership
- Ask 1-2 questions at a time, follow up based on answer quality
- Follow-up ladder: L1 facts → L2 design → L3 internals → L4 limits → L5 incidents
- Stop after ~5 layers or when the candidate admits boundaries

## License

MIT
