---
title:          "Improving Assembly Code Performance with Large Language Models via Reinforcement Learning"
date:           2025-05-16 00:00:00 +0800
selected:       true
pub:            "NeurIPS 2025 Fourth Workshop on Deep Learning for Code "
# pub_pre:        "arXiv:"
# pub_post:       "2504.15659"
# pub_pre:        "Submitted to "
# pub_post:       ' Accepted.'
pub_date:       "2025"

abstract: >-
  Large language models (LLMs) have demonstrated strong performance across a wide range of programming tasks, yet their potential for code optimization remains underexplored. This work investigates whether LLMs can optimize the performance of assembly code, where fine-grained control over execution enables improvements that are difficult to express in high-level languages. We present a reinforcement learning framework that trains LLMs using Proximal Policy Optimization (PPO), guided by a reward function that considers both functional correctness, validated through test cases, and execution performance relative to the industry-standard compiler gcc -O3. To support this study, we introduce a benchmark of 8,072 real-world programs. Our model, Qwen2.5-Coder-7B-PPO, achieves 96.0% test pass rates and an average speedup of 1.47x over the gcc -O3 baseline, outperforming all 
  20 other models evaluated, including Claude-3.7-sonnet. These results indicate that reinforcement learning can unlock the potential of LLMs to serve as effective optimizers for assembly code performance.

authors:
  - Anjiang Wei
  - Tarun Suresh
  - "<strong>Huanmi Tan</strong>"
  - Yinglun Xu
  - Gagandeep Singh
  - Ke Wang
  - Alex Aiken
links:
  arXiv: https://arxiv.org/pdf/2505.11480
---
