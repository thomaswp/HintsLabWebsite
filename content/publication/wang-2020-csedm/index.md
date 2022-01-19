---
# Documentation: https://wowchemy.com/docs/managing-content/

title: Comparing Feature Engineering Approaches to Predict Complex Programming Behaviors
subtitle: ''
summary: ''
authors:
- Wengran Wang
- Yudong Rao
- Yang Shi
- Alexandra Milliken
- Chris Martens
- Tiffany Barnes
- Thomas W. Price
tags:
- Peer Reviewed Workshop Paper
categories: []
date: '2020-01-01'
lastmod: 2021-07-07T11:39:38-04:00
featured: false
draft: false

# links:
# - name: Custom Link
url_pdf: https://emmableu.github.io/publications/wang2020comparing.pdf
url_slides: https://docs.google.com/presentation/d/e/2PACX-1vRW0XuFroTG-zZM6vPjk5bHHFo3aWBIcAwCv4DCmUS-3CVINYNZ9FuMZhFavlhWPvNF-DhX2-z1o79e/pub?start=false&loop=false&delayms=60000


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
publishDate: '2021-07-07T15:39:37.295441Z'
publication_types:
- '1'
abstract: 'Using machine learning to classify student code has many applications in computer science education, such as auto-grading, identifying struggling students from their code, and propagating feedback to address particular misconceptions. However, a fundamental challenge of using machine learning for code classification is how to represent program code as a vector to be processed by modern learning algorithms. A piece of programming code is structurally represented by an abstract syntax tree (AST), and a variety of approaches have been proposed to extract features from these ASTs to use in learning algorithms, but no work has directly compared their effectiveness. In this paper, we do so by comparing three different feature engineering approaches for classifying the behavior of novices' open-ended programming projects according to expert labels. In order to evaluate the effectiveness of these feature engineering approaches, we hand-labeled a dataset of novice programs from the Scratch repository to indicate the presence of five complex, game-related programming behaviors. We compared these feature engineering approaches by evaluating their classification effectiveness. Our results show that the three approaches perform similarly across different target labels. However, we also find evidence that all approaches led to overfitting, suggesting the need for future research to select and reduce code features, which may reveal advantages in more complex feature engineering approaches.'
publication: "*Proceedings of the 4th Workshop on Educational Data Mining in Computer\
  \ Science Education (CSEDM) at EDM'20*"
---
