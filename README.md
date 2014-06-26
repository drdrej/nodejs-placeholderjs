nodejs-placeholderjs
====================

Creates placeholder-thumbnails. Uses a config file to define thumbnails.

    author:  Andreas Siebert (aka drdrej) / touchableheroes.com
    version: 0.0.1
    state:   experimental


## Dependencies

PlaceholdersJS is based on other open-source projects:
# graphicsmagick
# JSONSelect
# UnderscoreJS
# npm
# nopt
... and others

I like to say thank you to guys who develop this useful stuff!

## Getting started

First of all you need to install placeholderjs in npm.
```
   > npm install -g placeholderjs
```


```
   > placeholderjs -c "./placeholder.json"
```
But before you run this command you need to create placeholder.json.

**Example**:
```json

   // this is a transformation-file
   exports.transform = function( element ){
               ...
   };
```


write code and have fun!
A. Siebert
