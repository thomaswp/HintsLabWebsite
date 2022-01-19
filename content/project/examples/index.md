---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Example-based Feedback"
summary: "Using examples to support students as they program."
authors: 
- Emma Wang
- Thomas W. Price
- Rui Zhi
tags:
- Computing Education
- Block-based
- Educational Data Mining
categories: []
date: 2021-07-07T16:46:48-04:00

# Optional external URL for project (replaces project detail page).
external_link: ""

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""
---

# Overview
Students often get stuck when programming independently, and need help to progress. We explore ways to help students by offering them example-based support. 
- Worked Examples. Worked examples present a demonstration of how to solve a similar problem, before a student works on their current problem. Research in a variety of domains has shown that viewing worked examples (WEs) can be a more efficient way to learn than solving equivalent problems. We investigate the effect of  Worked Examples on novices' learning in block-based programming environments. ([SIGCSE'19](https://dl.acm.org/citation.cfm?id=3287385)).
-  Example-Based Feedback. Worked Examples does not support students when they are stuck in the middle of programming. We designed example-based, step-by-step support to help students in the middle of programming. ([ITiCSE'20](https://emmableu.github.io/publications/wang2020step.pdf)).

### Peer Code Helper
In this work,  we designed a Peer Code Helper system to display worked examples, along with scaffolded self-explanation prompts. We found that WEs saved students time on initial tasks compared to writing code, but some of the time saved was lost in subsequent programming tasks. Overall, students with WEs completed more tasks within a fixed time period, but not significantly more.

### Step Tutor 
![[wang2020step.png]]
Step Tutor helps struggling students during programming by presenting them with relevant, step-by-step examples. The goal of Step Tutor is to help students progress, and engage them in comparison, reflection, and learning. When a student requests help, Step Tutor adaptively selects an example to demonstrate the next meaningful step in the solution. It engages the student in comparing *before* and *after* code snapshots, and their corresponding visual output, and guides them to reflect on the changes.[ We published this work in ITiCSE 2021](https://emmableu.github.io/publications/wang2020step.pdf).

### Generating Example-Based Feedback
We also developed algorithms to automatically generate data-driven example-based feedback. ([EDM'19](https://drive.google.com/file/d/1S7USPKkJLgFAVyYJeEq-uRhCF8RxifB7/view))

