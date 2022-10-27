---
title: "Heroku: Free Dynos Shutdown"
date: "November 01, 2022"
excerpt: "Heroku has decided to remove their free tier, what is a good alternative and how similar is the process of deploying an app."
cover_image: "/images/posts/railway-img.png"
---

After many years as the default hosting service for hobbyist developers looking to deploy their apps on the web, Heroku has decided to remove their free tier and focus on other areas of the business. As a student with a limited budget upgrading to a paid tier is not particularly favourable. Although Heroku are offering student plans, I thought this a good opportunity to see what other hosting services are available.

# Railway.app

Railway is another hosting service, and has been gaining in popularity over the years. They are similar to Heroku with GitHub repo deployments, CLI tooling, and built-in databases, however; their own buildpack - **Nixpacks** - is faster, has intelligent caching, and detects more languages than Heroku.

<br />

Railway also allows users to pay only for what they use, with no need to size dynos like with Heroku. They provide $5 worth of credits each month (equating to 500 hours worth of compute) which is more than enough to cover the average hobbyist developer. The final, less relevant, difference is how clean their website and dashboard applications are, especially compared with Heroku's slightly clunkier design.

<br/>

## Deploying an app

I recently migrated one of my Flask apps from Heroku over to Railway to prepare for the shutdown of the free dynos. The build immediately failed, and after a few minutes of debugging, I noticed that Railway had alerted me to some banned dependencies in my `requirements.txt` file. Although a bit of a nuisance, the rest of the process was seamless and I'll definitely deploy more of my applications with Railway in the future.

# Vercel

Vercel is a hosting platform I have been using for a few months now to host this very website and blog. I have found it incredibly easy to use when deploying front-end applications, especially since it is made by the creators of Next.js, and hence, has native support for those applications. The process for deploying an app on Vercel is similarly as simple as Railway when connecting to GitHub.

<br/>

Vercel not only automatically builds and redeploys the website when changes are pushed to the main branch, but they also deploy a preview site of any other branches in use in the repo. This feature has been particularly useful during the development of this blog since I am able to share the link and receive feedback on aspects of the website before I push my changes to main.

<br/>

However, when it comes to other applications that do not involve a front-end JavaScript framework, it seems Vercel does not have good support for the software (or I really struggle to correctly use the platform). Moving forward, I have decided to utilise Vercel for my JavaScript based front-end apps and Railway for anything else I want to deploy.
