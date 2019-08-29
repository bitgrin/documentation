---
title: Contribute
---

Thank you for trying to contribute to the documentation!👋

I promise its very easy to do, and this guide will guide you through exactly how to do it.
You don't need to download any special programs, and can do it just from the browsers text-editor. All you need is a github account which is free.

## Editing document pages
To edit any of the pages here just navigate to [the documentation page on Bitgrins GitHub](https://github.com/bitgrin/documentation/tree/master/docs)  You will be greeted with a page similiar to this  ![Image not found](/img/PageEdit1.PNG "How to find a document to edit")

Click the document you want to edit, for example this page is [docscontributing](https://github.com/bitgrin/documentation/blob/master/docs/docscontributing.md)
Then simply click the edit icon

![Image not found](/img/PageEdit2.png "Where is the edit icon?")

A GitHub text editor will appear, the text will look vagely like a normal text with the exception of Markdown styles. You can quickly edit the document and see the changes on the fly by clicking "preview changes"

⚠️This is only recommended for quick changes like adding some text or correcting typos on already existing doc pages. It's recommended to fork the repo before adding new document pages or images, read how to do that [here](#adding-images)

## Styling guide

Bitgrin docs use [GitHub-flavored Markdown syntax](https://github.github.com/gfm/).

Heres a quick guide how to use them, blocked out code is how the syntax goes and below it how it looks to everyone viewing the site

### Headers

```
# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------
```
# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------

---
#### Bookmark generation

⚠️If you look at the right side bar you can notice that bookmarks are automatically generated.  
- H1 Does not generate bookmarks and should be used as just the page title  
- H2 generates a bookmark
- H3 generates a nested bookmark below H2


---
## Styling guide
### Emphasis

```
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
```
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

---
### Line breaks

```
Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a _separate paragraph_.  
This line is also a separate paragraph, but... This line is only separated by two spaces, so it's a separate line in the _same paragraph_.
```

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a _separate paragraph_.  
This line is also a separate paragraph, but... This line is only separated by two spaces, so it's a separate line in the _same paragraph_.

⚠️Single line break has to have two spaces at the end of the first one


### Lists
```
1. First Ordered item
3. Another item
6. Ordered lists don't need to be in order to show up in order

* unordered list
  - unordered sub list
    - sub sub list

      Some text that should be aligned with the above item. (using spaces)


* Unordered list can use asterisks
- Or minuses
+ Or pluses

```

1. First Ordered item
3. Another item
6. Ordered lists don't need to be in order to show up in order

* unordered list
  - unordered sub list
    - sub sub list

      Some text that should be aligned with the above item. (using spaces)

⚠️ Nested sub-lists indicators need to exactly line up with the first letter from the previous list

* Unordered list can use asterisks
- Or minuses
+ Or pluses

---

### Links

```
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. http://www.example.com or <http://www.example.com> and sometimes example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com
```

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

⚠️ You can use references several time throughout the page

[I'm a reference-style link][arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. http://www.example.com or <http://www.example.com> and sometimes example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

---

### Images

⚠️ Images should be hosted on Bitgrins github, you can see the guide how to upload them [here](#adding-images)
```
Here's Markdowns-here logo (hover to see the title text):

Inline-style: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style: ![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"
```
Here's Markdowns-here logo (hover to see the title text):

Inline-style: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style: ![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

---

### Code

⚠️ Code blocks need to be enclosed in 
<!-- language: lang-none -->

    ```Language 
    CODE
    ```

<!-- Language: lang-none -->

    ```javascript
    var s = "JavaScript syntax highlighting";
    alert(s);
    ```

    ```python
    s = "Python syntax highlighting"
    print s
    ```

    ```
    No language indicated, so no syntax highlighting. But let's throw in a
    <b>tag</b>.
    ```
```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```


```python
s = "Python syntax highlighting"
print s
```

```
No language indicated, so no syntax highlighting. But let's throw in a
<b>tag</b>.
```

#### JSX code editable on the fly by using ```JSX live``` as a language
```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```



---

### Tables
```
Colons can be used to align columns.

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |
```

Colons can be used to align columns.

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |

---

### Blockquotes
```
> Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.
```

> Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.

---

### Inline HTML
⚠️ Inline HTML should not be used if possible or it can lead a lot of bugs, only contribute inline HTML after extensive testing on a built version

```
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
```

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

---



## Adding images

To add images simply drag and drop them to your fork of bitgrins documentation.
To fork the documentation all you need to do is
[click here](https://github.com/bitgrin/documentation)
And click ```Fork``` in the top right corner, click your account and then ok, it will be done in couple of seconds  
You can now edit your fork on the fly
Go the right image folder
```static```
then
```img```
And then simply drag and drop!

Now just [submit the changes](#commiting-the-changes)

## Adding new documentation pages

⚠️Its strongly recommended to do this on your own fork, to commit the changes at the same time.

### Create a new .md document
Correct path to do this is ```docs``` folder
then simply click "New File" name is ```FILENAME.md```

File name needs to have a title created like this

```
---
title: this is a title
---
```
In order for it to display properly, this title will be displayed on the top of the document as well as the sidebar label unless specified by ```sidebar_label: Label ```

### Edit the sidebar to display the new document
Sidebar javascript file can be found [here](https://github.com/bitgrin/documentation/blob/master/sidebars.js)

To add a doc to the sidebar, add the FILENAME part from ```FILENAME.md```

```javascript
module.exports = {
  docs: {
+   "Getting started": ["greeting"],
    "Docusaurus": ["doc1"],
    "First Category": ["doc2"],
    "Second Category": ["doc3"],
  }
};
```

The docs key in the exported object is just the name of that particular sidebar hierarchy, and can be renamed to something else. You can have multiple sidebars for different Markdown files by adding more top-level keys to the exported object.

#### Subcategories
To include subcategories in docs sidebar, use an object of the following shape
```javascript
{
  type: 'category',
  label: string, // sidebar label
  items: string[], // strings of doc ids
}
in place of a string of id. As an example, here's how we created the subcategory for "Docs" under "Guides" in this site:

// sidebars.js
module.exports = {
  docs: {
    Guides: [
      'creating-pages',
      {
        type: 'category',
        label: 'Docs',
        items: ['markdown-features', 'sidebar'],
      },
    ],
  },
};
Note: Only one layer of nestedness is allowed.
```


## Committing the changes

⚠️ Try to describe what you changes as much as you can, this will help bitgrin devs to review it faster.

To commit the changes you did to your fork of the code simply go to your repositories   
by clicking the account icon in the top right  
and "Your repositories"  
Pick Documentation
and then simply click ```New pull request```   
You will now have a chance to review all the changes you made.  
Write down the commit title as well as a in depth changes and reasons for those changes log

# Thank you!
Thank you for contributing!  
We ❤️ our community and especially people who take time of their day to improve everyone experience.