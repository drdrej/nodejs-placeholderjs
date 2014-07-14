nodejs-placeholderjs
====================

Creates placeholder-thumbnails. Uses a config file to define thumbnails.

    author:  Andreas Siebert (aka drdrej) / touchableheroes.com
    version: 0.0.4
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

## Use-Case
* you need to create some fills with different colors to use them as placeholder in your layout-files.
* you need to resize images/create thumbnails

## Getting started

First of all you need to install placeholderjs in npm.
```
   > npm install -g placeholderjs
```

## Example placeholder-configuration
Store placeholder-configuration in ./placeholderjs.json file.

```json
{
    "version"        : 2,

    "input"           : "./img",

    "images" : [
        {
            "src"    : "test",
            "type"   : "png",

            "output"  : [{
                "path" : "./dist/dir1",
                "width"  : 100,
                "height" : 100
             }],

            "copy" : [
                "btn_example_state_on"
            ]
        },
        {
            "src"    : "test_new",
            "type"   : "png",
            "bgColor"   : "rgb(0, 10, 25)",

            "output"  : [{
                "path" : "./dist/dir2",
                "width"  : 200,
                "height" : 200
            }],

            "copy" : [
                "btn_example_state_on_2"
            ]
        }
    ]
}
```

**What placeholder will do:**
# create image if not exists
# resize image
# create copies of this image

Run placeholdersjs:
```
   > placeholderjs -c "./placeholder.json"
```


**Important:** input and output.path should be relative to directory where placeholderjs is executed.

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
