nodejs-placeholderjs
====================

Creates placeholder-thumbnails. Uses a config file to define thumbnails.

    author:  Andreas Siebert (aka drdrej) / touchableheroes.com
    version: 0.0.1
    state:   experimental


## Dependencies

PlaceholdersJS is based on other open-source projects:
* graphicsmagick
* JSONSelect
* UnderscoreJS
* npm
* nopt
... and others

I like to say thank you to guys who develop this useful stuff!

## Getting started

First of all you need to install placeholderjs in npm.
```
   > npm install -g placeholderjs
```

Run placeholdersjs:
```
   > placeholderjs -c "./placeholder.json"
```
But before you run this command you need to create placeholder.json.

**Example**:
```json

{
    "version"        : 1,
    "images" : [
        {
            "path"   : "./img",
            "output" : "./dist",

            "src"    : "test",
            "type"   : "png",

            "width"  : 100,
            "height" : 100,

            "copy" : [
                "btn_example_state_on"
            ]
        }
    ]
}
```

**Important:** "path" and "output" should be relative to directory where placeholderjs is executed.

## License: MIT
*(check LICENSE file.)*

The MIT License (MIT)

Copyright (c) 2014 Andreas Siebert

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

write code and have fun!
A. Siebert
