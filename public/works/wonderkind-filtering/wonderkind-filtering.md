---
date: "2023-05-20"
draft: false
title: Wonderkind filtering

client: Wonderkind
role: Design
tags: UX/UI, Desktop layout, Design system, Figma, Vuetify, Storybook
---

Working at Wonderkind, a company that has developed an innovative talent attraction technology to automate social media campaigns, I had the opportunity to engage in UX processes for a short time. During this period, I was fortunate to be assigned the task of creating a scalable and reusable filtering solution.

## Problem
To create job lists for social media campaigns, a Wonderkind user must select specific jobs. This task is time-consuming and error-prone, as the user has to sift through numerous pages of jobs to manually choose the ones needed for the job list.

## Objectives
- Research enterprise filtering solutions.
- Find a way to give users a clear overview of their data.
- Design a scalable and intuitive filtering solution.

## Goal
The main goal is to reduce time and minimise errors during the job list creation process by introducing a user-friendly, scalable, and easy-to-use filtering solution.

## Impact
Unfortunately, my time at the company ended before I could see the impact of the solution.

## Process
Resources\
A confluence entry about the requirments,  which was written by the [*Felicia van Jaarsveld*][Felicia], one of Wonderkind's product owners.
Desktop layout for campaigns page with filter designs proposal created by [*Ira Bykova*][Ira], the previous UXer. 

Research\
Using the [*Filter UX design pattern*][Article] article as a reference, I considered multiple filtering patterns. Ultimately, I chose the sidebar filter solution for its scalability. Since users need to see the results of each additional filter immediately, I decided against batch filtering and opted to show results per filter instead.
It was clear that the list of filters only will increase with time. The solution was also reusable on other page if need be.

Validation\
Unfortunately I did not have access to testing the solution with actual users, the PO, [*Felicia van Jaarsveld*][Felicia] reviewed the user flow. 

Handover to dev\
This project used Vuetify components from the beginning, so I ensured that my solution consisted of Vuetify components as much as possible. I thoroughly researched the Vuetify library to identify suitable sidebar components, examine the appearance of accordions, and determine how well they could be customised to our needs. 
I have created guidlines for the dev and QA. We already had chips/pill components, which only required the addition of a remove option. I regularly checked in with our front-end lead, [*Oleksandr Zinchenko*][Alex], for guidance. 
Additionally, I had the opportunity to create the Storybook components for the collapse/accordion elements after the filtering flow was done.


[Felicia]: https://nl.linkedin.com/in/feliciavanj?trk=public_post_feed-actor-name
[Alex]: https://nl.linkedin.com/in/oleksandr-zinchenko-phd-55526a72
[Ira]: https://nl.linkedin.com/in/erabykova
[Article]: https://www.pencilandpaper.io/articles/ux-pattern-analysis-enterprise-filtering