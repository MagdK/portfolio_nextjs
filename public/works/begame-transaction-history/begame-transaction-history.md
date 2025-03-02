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

![The end result of this project](/works/begame-transaction-history/Transaction_00000.png "Final mocks")

## Impact
- Enhanced user satisfaction with improved usability and intuitive design.

- Decreased support inquiries by streamlining workflows and reducing friction points.

- Accelerated deposit and withdrawal processes, making transactions smoother and more efficient.

- Improved user engagement by creating a more seamless and enjoyable experience.

## Project overview
Users found the transaction processes confusing, leading to frequent support requests. 
This project simplified deposits and withdrawals, introduced intuitive transaction flows, and provided a clear overview, reducing support needs and enhancing user satisfaction.

## Problem statement
Bingocams’ community members experienced challenges in obtaining a clear, organized overview of their transactions. Although the transaction processes themselves were functional, a lack of clear information led to user confusion, increased customer support inquiries, and, potentially, member attrition.

## Problem discovery research
- Feedback analysis: Reviewed insights from the customer success team to understand recurring user concerns.

- User testing: Conducted usability tests with 5 new and 5 returning users via UserTesting.com, focusing on depositing, withdrawing, and navigation.

- Key findings: Identified frustrations with unclear transaction statuses, cumbersome navigation, and the inability to cancel transactions, which drove dissatisfaction.

![Before state of the transaction overview](/works/begame-transaction-history/Transaction_10.png "Preview of transactions before the redesign")

## Key findings
What do users want: 

![What do users want](/works/begame-transaction-history/Transaction_00.png "List of users' needs")


## Solution
To address these challenges, I proposed a redesign of the transactions page. The updated design was intended to provide a more organized, accessible, and informative transaction experience that empowered users to track their activity confidently and independently.

## Wireframes
I created wireframes to outline key layout variations for the transaction overview page and gathered user feedback on the concepts.

## High-fidelity design
Once the decision was made which direction to take, I developed high-fidelity prototypes that visually emphasized transaction status, and clear labels for each transaction type.

## Design system
To ensure consistency, I designed the transaction card components for the shared library and created detailed guidelines to support development and QA teams.

![Transaction history component](/works/begame-transaction-history/Transaction_08.png "Transaction cards in component library")

## Mockup
I created mockups for all responsive breakpoints to ensure a seamless experience across different screen sizes.

![Breakpoints](/works/begame-transaction-history/Transaction_001.png "Preview of all breakpoints and how cards were set up")

## Error handeling and empty states
I designed mockups for errors, empty states, and edge cases, collaborating closely with the development team.

![Unhappy flows](/works/begame-transaction-history/Transaction_003.png "Preview of all errors that can happen during deposit and withdrawal")

## Usability testing 
I set up usability tests on UserTesting.com to gather feedback from users and refine the high-fidelity prototypes.

![Feedback from user](/works/begame-transaction-history/Transaction_09.png "Being able to see the status of my transactions gives me such peace of mind, especially compared to before. Depositing and withdrawing is now a breeze!")

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