# URL to File

### Install
`yarn add @maxsolovev/url-to-file`

or

`npm i @maxsolovev/url-to-file`

### Usage

```javascript
import urlToFile from "@maxsolovev/url-to-file";

urlToFile("http://some-url.com/some-image.png");
```

You can provide options

```javascript
urlToFile("http://some-url.com/some-image.png", {
  fileName: "i-prefer-than-name.png",
  fileType: "image/png"
});
```
