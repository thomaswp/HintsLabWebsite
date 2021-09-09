---
# Documentation: https://wowchemy.com/docs/managing-content/

title: What Time is It? Student Modeling Needs to Know
subtitle: ''
summary: ''
authors:
- Ye Mao
- Samiha Marwan
- Thomas W Price
- Tiffany Barnes
- Min Chi
tags:
- Peer Reviewed Conference Paper (Full)
categories: []
date: '2020-01-01'
lastmod: 2021-07-07T11:39:30-04:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects:
- prediction
publishDate: '2021-07-07T15:39:29.034095Z'
publication_types:
- '1'
abstract: Modeling student learning processes is highly complex since it is influenced
  by many factors such as motivation and learning habits. The high volume of features
  and tools provided by computer-based learning environments confounds the task of
  tracking student knowledge even further. Deep Learning models such as Long-Short
  Term Memory (LSTMs) and classic Markovian models such as Bayesian Knowledge Tracing
  (BKT) have been successfully applied for student modeling. However, much of this
  prior work is designed to handle sequences of events with discrete timesteps, rather
  than considering the continuous aspect of time. Given that time elapsed between
  successive elements in a student's tra-jectory can vary from seconds to days, we
  applied a Time-aware LSTM (T-LSTM) to model the dynamics of student knowledge state
  in continuous time. We investigate the effectiveness of T-LSTM on two domains with
  very different characteristics. One involves an open-ended programming environment
  where students can self-pace their progress and T-LSTM is compared against LSTM,
  Recent Temporal Pattern Mining, and the classic Logistic Regression (LR) on the
  early prediction of student success; the other involves a classic tutor-driven intelligent
  tutoring system where the tutor scaffolds the student learning step by step and
  T-LSTM is compared with LSTM, LR, and BKT on the early prediction of student learning
  gains. Our results show that T-LSTM significantly outperforms the other methods
  on the self-paced, open-ended programming environment; while on the tutor-driven
  ITS, it ties with LSTM and outperforms both LR and BKT. In other words, while time-irregularity
  exists in both datasets, T-LSTM works significantly better than other student models
  when the pace is driven by students. On the other hand, when such irregularity results
  from the tutor, T-LSTM was not superior to other models but its performance was
  not hurt either.
publication: '*Proceedings of the International Conference on Educational Data Mining*'
---
