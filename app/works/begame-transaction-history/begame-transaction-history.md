---
date: "2020-07-15"
draft: false
secret: false
title: Transforming the online gaming transaction experience
client: Begame
role: Begame · 2021
tags: Wireframe, User flow, UX, UI, Prototype, Responsive design, Whimsical, Marwel app, Sketch, Zeplin, Jira
listVideos: true
listImages: false
---

<div class="container">
    
  <div class="case-study-image">
    <img src="/works/begame-transaction-history/Transaction_00000.png" alt="Final mock" />
  </div>

  <div class="case-study-text">
    <p>This is where your case study description goes. You can write as much as you want, and it will stay in a two-column layout on desktop but collapse to a single column on mobile.</p>
  </div>

</div>

![The end result of this project](/works/begame-transaction-history/Transaction_01.png "Final mocks")

## Impact
- Enhanced user satisfaction with improved usability and intuitive design.

- Decreased support inquiries by streamlining workflows and reducing friction points.

- Accelerated deposit and withdrawal processes, making transactions smoother and more efficient.

- Improved user engagement by creating a more seamless and enjoyable experience.

## Problem statement
Bingocams’ community members experienced challenges in obtaining a clear, organized overview of their transactions. Although the transaction processes themselves were functional, a lack of clear information led to user confusion, increased customer support inquiries, and, potentially, member loss.

## Role
- User research & analysis
- UX and UI redesign
- Component creation
- Usability testing

## Timeline
- 3X2 weeks sprints

## Tools
- Sketch
- Zeplin
- Abstract
- Whimsical
- Usertesting.com
- BootstrapVue
- Material Icons
- Jira

## Project overview
Confusing transaction processes led to frequent support requests. This project focused on deposits and withdrawals, improved transaction flows, and enhanced clarity of transaction history, reducing support needs and boosting user satisfaction.

## Problem discovery
- Reviewed insights from the customer success team to understand recurring user concerns.

- To uncover hidden pain points and validate customer success feedback, I conducted usability tests with 5 new and 5 returning users via UserTesting.com, focusing on deposits, withdrawals, and navigation.

![Before state of the transaction overview](/works/begame-transaction-history/Transaction_02.png "Preview of transactions before the redesign")

## Key findings
What do users want: 

![What do users want](/works/begame-transaction-history/Transaction_03.png "List of users' needs")


## Solution
To address these challenges, I proposed a redesign of the transactions page. The updated design was intended to provide a more organized, accessible, and informative transaction experience that empowered users to track their activity confidently and independently.

## Wireframes
I created wireframes to outline key layout variations for the transaction overview page and gathered user feedback on the concepts.

![Wiewframe](/works/begame-transaction-history/Transaction_04.png "Concepts of new transaction")

## High-fidelity design
Once the direction was decided, I developed high-fidelity prototypes that emphasized transaction status and clear labels, covering all responsive breakpoints for a seamless experience across screen sizes.

![Breakpoints](/works/begame-transaction-history/Transaction_06.png "Preview of all breakpoints and how cards were set up")

## Error handeling and empty states
I designed mockups for errors, empty states, and edge cases, collaborating closely with the development team.

![Unhappy flows](/works/begame-transaction-history/Transaction_07.png "Preview of all errors that can happen during deposit and withdrawal")

## Usability testing 
I set up usability tests on UserTesting.com to gather feedback from users and refine the high-fidelity prototypes. The most important insights from were: 
- Allowing users to save payment methods saves time and boosts satisfaction.
- Toast messages offer sufficient feedback, while dialog boxes are distracting and unnecessary.

![Feedback from user](/works/begame-transaction-history/Transaction_08.png "Being able to see the status of my transactions gives me such peace of mind, especially compared to before. Depositing and withdrawing is now a breeze!")

## Design system
To ensure consistency, I designed the transaction card components for the shared library and created detailed guidelines to support development and QA teams.

![Transaction history component](/works/begame-transaction-history/Transaction_05.png "Transaction cards in component library")

## But UX is never done...
This project was completed four years ago, and looking back, here are a few areas I’d love to improve today:

- Measure system usability with a usability scale.

- Test for accessibility across different devices and user groups.

- Improve micro-interactions, especially during loading states.

- Conduct more frequent usability testing throughout the product lifecycle.

- Enhance assisted onboarding to help all users quickly understand the updated transaction processes.


<style>
    .container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    .case-study-text, .case-study-image {
        flex: 1;
        min-width: 300px;
    }

    .case-study-image img {
        width: 100%;
        height: auto;
    }

    @media (max-width: 768px) {
        .case-study-container {
            flex-direction: column;
        }
    }
</style>