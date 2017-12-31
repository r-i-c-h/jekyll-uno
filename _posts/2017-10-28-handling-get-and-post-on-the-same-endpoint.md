---
title:  "&#35TIL&#58 Handling GET and POST on the same endpoint"
subtitle: "2-for-1 What a Bargain"
date:   2017-10-28 12:00:01
categories: [rw, TIL, node]
tags: [TIL, webdev, express, node, backend]
---
Today's TIL: You can use `app.route()` for handling _both_ GET and POST requests on the exact same endpoint in Express:
Just chain them together after using `app.route('/endpoint')` like so...

```javascript
app.route('/things')
  .get(function (req, res) {    res.send('Get a thing')  })
  .post(function (req, res) {    res.send('Add a thing')  })
  .put(function (req, res) {    res.send('Update a thing')  })
```

Keepin' it clean...




