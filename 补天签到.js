const fetch = require('node-fetch');
require('dotenv').config();

const btCookie = process.env.btCookie;

console.log(btCookie);

async function sendRequest() {
  const response = await fetch("https://www.butian.net/WhiteHat/Sign/userCheckin", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "zh-CN,zh;q=0.9",
      "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryEgXIvlkmLBUMYn6O",
      "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "cookie": btCookie,
      "Referer": "https://www.butian.net/WhiteHat/Center/space",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": `------WebKitFormBoundaryEgXIvlkmLBUMYn6O
            Content-Disposition: form-data; name="ajax"

            1
            ------WebKitFormBoundaryEgXIvlkmLBUMYn6O
            Content-Disposition: form-data; name="token"

            0c3dc52766fb62155ace60225eb9e985ee01f358
            ------WebKitFormBoundaryEgXIvlkmLBUMYn6O
            Content-Disposition: form-data; name="sign_date"

            2024-07-30
            ------WebKitFormBoundaryEgXIvlkmLBUMYn6O--\r\n`,
    "method": "POST"
  });

  const data = await response.json();
  console.log(data);
}

sendRequest();