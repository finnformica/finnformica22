---
title: "SSL Certificates on macOS"
date: "November 07, 2022"
excerpt: "Fixing the [SSL: CERTIFICATE VERIFY FAILED] bug when downloading images with the fast.ai deep learning course."
cover_image: "/images/posts/macOS-img.jpeg"
---

Whilst working through the first notebook of the fast.ai deep learning course I encountered an error I had never seen before:

<br/>

```python
URLError: <urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:997)>
```

<br/>

so of course I ask my trusty friend Google what is going on.

# Fixing the bug

Apparently, macOS does not automatically install SSL certificates that come with the Python3 bundle upon download, so the first solution was to navigate to the /Applications/Python3.x folder and execute the `Install Certificates.command` script that was there. However, I did not download Python directly from the website, and instead used Homebrew. This meant that the file was not present and I needed to find the source code to run directly. After executing the script below, the issue was resolved perfectly.

<br />

<a href="https://github.com/finnformica/fast.ai-course22/blob/master/install_certificates.py" target="_blank" style="text-decoration: underline; color: lightgrey">Install Certificates</a>
