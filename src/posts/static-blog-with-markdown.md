---
title: "Static Blog with Markdown"
date: "October 23, 2022"
excerpt: "How to generate static html blog pages using Next.js and Markdown files."
cover_image: "/images/posts/img3.jpeg"
---

I have wanted to start a blog to document some of my software struggles for a while now, but I never liked the idea of signing up to a platform like **Substack**. Like many of my software projects the solution was to spend way too much time implementing some code that kind of works as a form of procrastination for the thing that I actually wanted to do...

# How does it work?

At its core, this blog parses Markdown files held within a directory into HTML code using the package **marked**. This HTML code is then set to the `innerHTML` of a div on the blog page, displaying the text as seen here. In React, this is accomplished via the property `dangerouslySetInnerHTML={{__html: "My Content"}}`.
