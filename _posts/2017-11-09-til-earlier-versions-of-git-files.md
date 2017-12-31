---
title:  "&#35TIL&#58 Earlier Verions of git files"
subtitle: "Yer living in the past maaaan"
date:   2017-11-09 12:00:01
categories: [rw, TIL, code]
tags: [TIL, code, git, github]
---

I had a _specfic_ file that I wanted to see an older-than-the-last-commit version of from a _specific_ past `commit`.

The pattern to do this is `git show <treeish>:<filename>`

Ex: Show the version of `foo.html` from four commits ago:  
(Don't forget that to go 'backwards' from the HEAD [last commit] we use the `~` and *not* `-`): 

`git show HEAD~4:foo.html`
