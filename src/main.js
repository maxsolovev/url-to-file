export default function urlToFile(url, {fileName = '', fileType = ''} = {}) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.responseType = "blob";
    xhr.send();
    xhr.onload = function() {
      setTimeout(() => {
        const file = new File(
          [this.response],
          fileName || (url.toString().match(/.*\/(.+?)\./) || [])[1] || "",
          {
            type: fileType
          }
        );
        resolve(file);
      }, 0);
    };
    xhr.onerror = () => {
      reject(`${url} was not loaded`)
    }
  });
}
