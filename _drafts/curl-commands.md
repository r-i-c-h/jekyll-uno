I often want to quickly check a server ala 'Is this thing on?', or 'What does that API's response look like?'. For those sorts of things, I go `old sk00l` and prefer the now unloved terminal **`curl`** command. These days, for most folks Postman is _the tool_, and I am a fan of it for ease-of-use and making parsing API-interactions waaaaay easier and prettier. But who knows if you're in an environment where you can even download and set it up, (plus I hate touching the mouse and I can't for the life of me figure out how to trigger it via my keyboard!). The truth is, curl can do anything and everything that a program like Postman can do, but it lacks any polish.

The good news is that _it is already on EVERY MacOSX/linux/*nix system in the world_.  The bad news for some, welll... Terminal/Command-Line means your mouse will be of no value and some of the modifier/`-` 'flags' are CaSe SeNsItIvE. Becuase there are lots of options you can put together, eventually it can look like a rediculous combination of -letters and "text" values. 

Please note that I am totally using the curl-command's one letter shortcuts. For all of the modifier flags there are more verbose and sensible versions, but I'm going for speed. Ex: I'm using `-X` not `--request`, `-H` not `--header`.

* For **FULL** details As always, `man curl`. 
* For **Summary Version** I found a quick [gist that summarizes alot about curl](https://gist.github.com/subfuzion/08c5d85437d5d4f00e58) by a 'subfuzion'
* For **MAKE GO NAO!**: Here is my super mini version...

## For testing GET
`curl http://localhost:3000/`   
A basic one shot GET request, in this case to a localhost http server at port 3000. That's it. 

## For testing POST 'is on':
`curl -X POST http://localhost:3000/post-endpoint/`   
The `-X POST` modifier tells curl to use a POST method, but this isn't sending any data.

## For testing POST with **Form** data:
`curl -X POST -d "foo=bar&data=fake" http://localhost:3000/post-endpoint/`   
Obviously, the `-d "foo=bar&key=val"` tells curl the data to use in the POST request. 

## For testing POST with **JSON** data:
See now here's the thing, remember, we're looking under the hood here and this would be the limit of where I'd normally be using curl...   
Since curl is a 'vintage' command, it defaults to a sending a 'Content-Type' in the header with an older non-json format[^1]. However, _we usually use JSON nows-a-days_, so for **testing JSON you must change the header**_ with `-H "Content-Type: application/json"`. 

Know that for the example I'm giving, your life can be made much easier if you _have your test data in a saved file_, because you can use `-d @someFileName` instead of typing everything out. Otherwise, in order to send a 'fake' JSON payload, _you need to write your dummy-data in "real" JSON format_ which means either mixing single and double-quotes (like if you were using quotes inside of a javascript string) or needing to use a bunch of `\`s in order to escape the quotes and that seems silly to me.

So, for my final big example:
`curl -X POST -d '{"foo":"bar", "fake":"data"}' -H "Content-Type: application/application-json" http://localhost:3000/post-endpoint`


## Some Modifiers
* `-v` Verbose - show me every everything that comes back, headers n' all... 
* `-#` Displays a progress bar. Occasionally useful for a quick glance.

Also, check out https://davidwalsh.name/curl-post-file for a bit more... 

[1]: Form-Encoded data, ie `Content-Type: application/x-www-form-urlencoded`