const fetch = require('node-fetch');
require('dotenv').config();

const zkaqCookie = process.env.zkaq;

//console.log(zkaqCookie);

async function sendRequest() {
  const response = await fetch("https://bbs.zkaq.cn/?user/signin", {
    "headers": {
      "accept": "application/json, text/javascript, */*; q=0.01",
      "accept-language": "zh-CN,zh;q=0.9",
      "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest",
      "cookie": zkaqCookie,
      "Referer": "https://bbs.zkaq.cn/t/31758.html",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  });

  const data = await response.json();
  console.log(data);
}

sendRequest();