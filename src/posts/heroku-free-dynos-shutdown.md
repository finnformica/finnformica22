---
title: "Heroku: Free Dynos Shutdown"
date: "October 27, 2022"
excerpt: "Heroku has decided to remove their free tier, is Railway a good alternative and how similar is the process of deploying an app."
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
