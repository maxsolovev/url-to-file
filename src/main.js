import mime from "mime-types";

export default function urlToFile(url, { fileName = "", fileType = "" } = {}) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.responseType = "blob";
    xhr.send();
    xhr.onload = function() {
      setTimeout(() => {
        const fName =
          fileName ||
          url.substring(url.lastIndexOf("/") + 1).replace(/((\?|#).*)?$/, "") ||
          "";
        const file = new File([this.response], fName, {
          type: fileType || mime.lookup(fName)
        });
        resolve(file);
      }, 0);
    };
    xhr.onerror = () => {
      reject(`${url} was not loaded`);
    };
  });
}
