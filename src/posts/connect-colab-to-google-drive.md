---
title: "Connect Google Colab to Google Drive"
date: "December 04, 2022"
excerpt: "Reading and writing files to Google Drive storage from within a Google Colab notebook."
cover_image: "/images/posts/google-drive-img.jpeg"
---

```python
# mount google drive in google colab
from google.colab import drive
drive.mount('/content/drive')
```

With the end of the first term looming many of my modules are releasing the final graded coursework. One of them involves simulating a stock exchange with a limit order book. The students are tasked with analysing the behaviour of an automated trading agent as several of its parameters are evaluated. Naturally, this produced a lot of output files which needed to be stored on Google Drive.

# Mounting Google Drive

In order for the Google Drive files to be accessed by Google Colab, the drive must be 'mounted' - but what does this mean? Mounting a drive is to set up a local operating system so that the drive looks like a normal local disk to the operating system and can be accessed and used as such. In the cloud this is process is equivalent, the server that is running the Colab notebook will mount the Google Drive server so that it can access the files and folders.

<br/>
