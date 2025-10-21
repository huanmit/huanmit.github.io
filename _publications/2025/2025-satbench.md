---
title:          "SATBench: Benchmarking LLMs’ Logical Reasoning via Automated Puzzle Generation from SAT Formulas"
date:           2025-05-20 00:00:00 +0800
selected:       true
pub:            "EMNLP Main"
# pub_pre:        "arXiv:"
# pub_post:       "2504.15659"
# pub_pre:        "Submitted to "
# pub_post:       ' Under review.'
pub_date:       "2025"

abstract: >-
  We introduce SATBench, a benchmark for evaluating the logical reasoning capabilities of large language models (LLMs) through logical puzzles derived from Boolean satisfiability (SAT) problems. Unlike prior work that focuses on inference rule-based reasoning, which often involves deducing conclusions from a set of premises, our approach leverages the search-based nature of SAT problems, where the objective is to find a solution that fulfills a specified set of logical constraints. Each instance in SATBench is generated from a SAT formula, then translated into a story context and conditions using LLMs. The generation process is fully automated and allows for adjustable difficulty by varying the number of clauses. All 2100 puzzles are validated through both LLM-assisted and solver-based consistency checks, with human validation on a subset. Experimental results show that even the strongest model, o4-mini, achieves only 65.0% accuracy on hard UNSAT problems, close to the random baseline of 50%. SATBench exposes fundamental limitations in the search-based logical reasoning abilities of current LLMs and provides a scalable testbed for future research in logical reasoning.
authors:
  - Anjiang Wei
  - Yuheng Wu
  - Yingjia Wan
  - Tarun Suresh
  - "<strong>Huanmi Tan</strong>"
  - Zhanke Zhou
  - Sanmi Koyejo
  - Ke Wang
  - Alex Aiken

links:
  arXiv: https://arxiv.org/pdf/2505.14615
---
