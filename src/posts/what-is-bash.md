---
title: "What is Bash?"
date: "November 27, 2022"
excerpt: "Bash is an important tool for any aspiring developer, but what is it and what are some useful commands to know."
cover_image: "/images/posts/bash-img.jpeg"
---

For one of my university modules about cloud computing with AWS a couple of our practical labs involve SSH into a Linux server and controlling the actions from the terminal using Bash commands. Although I've used Bash for several years now I have never stopped to think about what it actually is and what roles it plays on our computers.

# Unix Shell

Bash was first developed as a free software replacement for a Unix shell, and has been used as the default login shell for most Linux distros since 1989. Apple also used Bash as their default until 2019 when macOS Catalina changed it to zsh. However, in essence Bash is just an application, and its primary job is to run other applications on the computer using commands. These commands are stored by default in system directories like `/usr/bin`. Bash does not inherently know these commands, but can look them up by searching through the system directories. This is why when there is an issue with the `$PATH` on the computer, Bash often does not understand simple commands like `ls` and `cd`.

<br/>

## Bash scripting

A powerful feature of Bash is scripting, instead of individually typing commands into the terminal the code can be written into a plain-text file and have Bash run it. This allows many Linux users to automate complex but tedious tasks that may take hours.

# Z Shell (zsh)

**zsh** is an extended version of the Bourne Shell (predecessor to Bash) with lots of newer features and support for plugins and themes. Since it is based on the same shell as Bash, zsh has many of the same features and switching over is simple.

# Commonly used Bash commands

| Command            | Explanation                            |
| ------------------ | -------------------------------------- |
| cd `<dirName>`     | change into directory `<dirName>`      |
| cd ..              | move up one directory                  |
| ls                 | list all files in current directory    |
| mkdir `<dirName>`  | make a directory with name `<dirName>` |
| rm `<fileName>`    | remove file with name `<fileName>`     |
| rm -rf `<dirName>` | delete directory and all files inside  |
| touch `<fileName>` | create file with name `<fileName>`     |
