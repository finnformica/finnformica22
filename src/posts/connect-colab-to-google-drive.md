---
title: "Connect Google Colab to Google Drive"
date: "December 04, 2022"
excerpt: "Reading and writing files to Google Drive storage from within a Google Colab notebook."
cover_image: "/images/posts/google-drive-img.jpeg"
---

With the end of the first term looming many of my modules are releasing the final graded coursework. One of them involves simulating a stock exchange with a limit order book. The students are tasked with analysing the behaviour of an automated trading agent as several of its parameters are evaluated. Naturally, this produced a lot of output files which needed to be stored on Google Drive.

# Mounting Google Drive

In order for the Google Drive files to be accessed by Google Colab, the drive must be 'mounted' - but what does this mean? Mounting a drive is to set up a local operating system so that the drive looks like a normal local disk to the operating system and can be accessed and used as such. In the cloud this is process is equivalent, the server that is running the Colab notebook will mount the Google Drive server so that it can access the files and folders.

```python
# mount google drive in google colab
from google.colab import drive
drive.mount('/content/drive')
```

An authentication popup will then show asking for permission for the Colab notebook to access the Google Drive files.

<br/>

Google Colab files within a Google Drive account are stored at location `My Drive/Colab Notebooks`. The full path to access files is `/content/drive/My Drive/Colab Notebooks`. E.g:

```python
# create test.csv file within Google Colab directory
filename = '/content/drive/My Drive/Colab Notebooks/test.csv'
with open(filename, 'w') as file:
    file.write('Hello world')
```

## Importing modules from Google Drive

In order to import any functions and classes from `.py` files in the Google Drive, the directory needs to be inserted into the python path using sys:

```python
import sys
sys.path.insert(0,  '/content/drive/My Drive/Colab Notebooks')

# import module or file
import my_module
```
