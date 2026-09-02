---
title:          "SuperCoder: Assembly Program Superoptimization with Large Language Models"
date:           2026-07-08 00:00:00 +0800
selected:       true
pub:            "COLM 2026"
pub_date:       "2026"

abstract: >-
  Superoptimization is the task of transforming a program into a faster one, and ideally the very fastest possible one, while preserving its input-output behavior. In this work, we investigate whether large language models (LLMs) can serve as superoptimizers, generating assembly programs that outperform code already optimized by industry-standard compilers in end-to-end runtime. We construct the first large-scale benchmark for this problem, consisting of 8,072 assembly programs averaging 130 lines, in contrast to prior datasets restricted to 2-15 straight-line, loop-free programs. We evaluate 23 LLMs on this benchmark and find that the strongest baseline, Claude-opus-4, achieves a 51.5% test-passing rate and a 1.43x average speedup over gcc -O3. To further enhance performance, we fine-tune models with reinforcement learning, optimizing a reward function that integrates correctness and performance speedup. Starting from Qwen2.5-Coder-7B-Instruct (61.4% correctness, 1.10x speedup), the fine-tuned model SuperCoder attains 95.0% correctness and 1.46x average speedup, with additional improvement enabled by Best-of-N sampling and iterative refinement. Our results demonstrate, for the first time, that LLMs can be applied as superoptimizers for assembly programs, establishing a foundation for future research in program performance optimization beyond compiler heuristics.

authors:
  - Anjiang Wei
  - Tarun Suresh
  - "<strong>Huanmi Tan</strong>"
  - Yinglun Xu
  - Gagandeep Singh
  - Ke Wang
  - Alex Aiken
links:
  arXiv: https://arxiv.org/abs/2505.11480
  OpenReview: https://openreview.net/forum?id=VsaeinNuM7
---
