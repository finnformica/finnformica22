---
title: "Static Blog with Markdown"
date: "October 23, 2022"
excerpt: "How to generate static html blog pages using Next.js and Markdown files."
cover_image: "/images/posts/static-blog-img.png"
---

I have wanted to start a blog to document some of my software struggles for a while now, but I never liked the idea of signing up to a platform like **Substack**. Like many of my software projects the solution was to spend way too much time implementing some code that kind of works as a form of procrastination for the thing that I actually wanted to do...

# How does it work?

At its core, this blog parses Markdown files held within a directory into HTML code using the package **marked**. This HTML code is then set to the `innerHTML` of a div on the blog page, displaying the text as seen here. In React, this is achieved via the property:

<br />

```jsx
<div dangerouslySetInnerHTML={{__html: "My Content"}}><div/>
```

<br />

To speed up the loading of the Markdown file, Next.js converts all of the files into HTML at build, creating a truly static website that is fast and responsive.

<br />

Another great feature of Next.js that can be exploited is dynamic routing. Using the name of the Markdown file, a slug can be generated which acts as the url path for that particular blog post. This provides a better experience for the users, and also allows specific posts to be accessed via the url. This can be easily accomplished using `getStaticPaths()` and `getStaticProps()`; however, to prevent simply any url from being access, **fallback** must be set to false.

<br />

## Making the Blog Cards

The information contained within the **Blog Cards** contained within the index page can be extracted from the frontmatter of the Markdown file. Afer extracting into an object using the package **gray-matter**, the list of objects can be mapped into the Blog Card component.

<br />

Overall, the process of parsing Markdown files into static HTML was relatively simple. I actually had the most difficulty with floating the title next to the cover image. This method of generating static blog pages also does not allow for a huge amount of customisation of the page itself, since Next.js is unable to provide any styles to the generated HTML.
