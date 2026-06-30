---
date: '2026-06-16T06:12:48+10:00'
draft: false
title: 'Publishing Website Workflow'
tags: ['post', 'how-to']
mermaid: true
---

## How this website is published (workflow)

1. Updates/changes etc made to website locally.
2. Changes committed to GIT and remote repo updated with these.
3. [Netlify](https://app.netlify.com/projects/joyful-pie-3d4dfb/overview) rebuilds website using atest GIT commit.
  
{{< mermaid >}}
graph LR;
A[Local Changes]-->B[Git Commit to Local]
B-->C[Git Commit to Remote]
C-->D[Netlify Build]
{{< /mermaid >}}


