---
title:  "Getting Safari to read local files"
subtitle: "Painindabutt"
date:   2017-11-24 12:04:23
categories: [rw, mac, webdev]
tags: [mac, os x, webdev, safari]
---
Why was it so hard to get Safari to read my local file? File under annoying...

Well, if you're wondering... 
Let's say I am a Mac OSX user named `Bob`. I do my webdev work in a folder called `Work` that lives on my _Desktop_.  
Inside of the `Work` folder is a folder called `Project Alpha` and inside of that folder, I want to see `foo.html`?

Got that?:
* Bob
  * Desktop
    * Work
      * Project Alpha
        * foo.html

## The result to type into Safari's URL bar:
### `file:////Users/Bob/Desktop/Work/Project%20Alpha/foo.html`

Of course, you _could_ just go to the 'Open File...' menu item in the File menu, but isn't this just that much more fun to be annoyed with?