const axios = require('axios');

const url = 'https://game.meituan.com/coin-marketing/customized/signIn/doSignIn?yodaReady=h5&csecplatform=4&csecversion=2.4.0&mtgsig=%7B%22a1%22%3A%221.1%22%2C%22a2%22%3A1723431349206%2C%22a3%22%3A%221340xu2wzyzz566zy885y2118y880286808551729w297958v26v5vx6%22%2C%22a5%22%3A%220LzUehsmVFoTCwnjjnyEaC57n5wW8q2M%22%2C%22a6%22%3A%22hs1.49TV2ssOSUcyHER1dSONg9KWbRKjERts8jzP6AJdoZUAC2fQ9xZQh0IgiD4nZpM3PapXcNVCCpA%2Bn6MXG5Ao5MA%3D%3D%22%2C%22x0%22%3A4%2C%22d1%22%3A%2247e06c03f2f3dd0def06ca3db513b109%22%7D';

const headers = {
    'Host': 'game.meituan.com',
    'Connection': 'keep-alive',
    'Content-Length': '4342',
    'M-TRACEID': '8639699753747850477',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090551)XWEB/11097',
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest',
    'M-APPKEY': 'fe_com.sankuai.game.xtbsignin.custom',
    'appName': 'wxMiniProgram',
    'innerSource': '10888_cdbfldt',
    'Origin': 'https://game.meituan.com',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    'Referer': 'https://game.meituan.com/game/xtb-signin/custom.html?appName=wxMiniProgram&gameType=10888&inner_source=10888_cdbfldt&title=%E7%A6%8F%E5%88%A9%E7%94%B5%E5%A0%82&mtToken=AgGHI1wPodeSr_-vsSQc5uH6bSrQwfDhTddhABlGREp9PAuTio4BQfbd7wVc3mKuyXMTGfs0nJS9WgAAAAAxIgAAAPPfdyKD3SebjEBdRappxorUZkJ8jqaQh_5dK5-exRhrQanCjs7fwjUN7o0gqOs9&userId=3105768452&__lxsdk_params=bHhjdWlkOjE5MTQ0ODFjYjkwYzgtOWEyNjczMTMwZDk1Zi0wLTAtMTkxNDQ4MWNiOTBjODthcHBubTptdF9wb3dlcl9iYW5rX2NkYnhjeDttc2lkOjE5MTQ0ODI5MDIxLTI5NWUtYTEyZi1kY2MxO3d4aWQ6b05iRHo1THJ3RHhXcC1CTDRaRTFqRUtPVmozVTtzY2VuZToxMDUzO2xvY2F0ZV9jaXR5X2lkOjE7cG46d3gzNmU1YmQ0ZmZkMmFjZTRlO3dpOjM4OTYxO3dmOmkwNDY4aWc4ODgxOGM2O2ppOjkwMTMyO2pmOmQwNzE3MzE1ZjczOGI4O3Nka19lbnY6b25saW5lO2NoOmQyVnBlR2x1O25ldDpWMGxHU1E9PTtjdDpkMmx1Wkc5M2N3PT0.&_lx_ver=3.10.0',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cookie': '_lxsdk_cuid=19144826a8cc8-0c4e343ed54d66-613d1340-1d6b98-19144826a8cbf; _lxsdk=19144826a8cc8-0c4e343ed54d66-613d1340-1d6b98-19144826a8cbf; WEBDFPID=1340xu2wzyzz566zy885y2118y880286808551729w297958v26v5vx6-2038791284683-1723431283485GSGCMQEfd79fef3d01d5e9aadc18ccd4d0c95072781; _lxsdk_s=19144826a8d-fe1-7dc-a78%7C%7C37'
};

const data = {
    "protocolId":10002,"riskParams":{"ip":"","h5_fingerprint":"H5dfp_2.4.0_tttt_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","platform":13,"uuid":"19144826a8cc8-0c4e343ed54d66-613d1340-1d6b98-19144826a8cbf"},"acToken":"5LPBhl1PMbnf0VH4_dYCLci14d6MGSmTpQrD_CbB-NvzxJVjEKW5_yHAfCUTMn8Hwcy441oR_zWC4v9rMGmnr_h7c7pCW5g55ZFABedYnVQzZAWLz9tM26PP5SMclcYamQLM0qoPyyXNj2MTi5M1VRxM4s5X7F4T170VyfHxzSHslW5ze6vU04eIhKvSfedLl6cZ8lyh8rL6eiazdju8cc6eRdFAAd05sFmuXcEiJD6IMDQ9vKy3hhWraUL-1x2ur1o8SdQIbka8pkLlFx3O2f4=","gameType":10888,"innerSource":"10888_cdbfldt"
}; // Replace with your actual data payload

axios.post(url, data, { headers })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

//定时领金币
const url1 = 'https://game.meituan.com/coin-marketing/customized/timedReward/receive?yodaReady=h5&csecplatform=4&csecversion=2.4.0&mtgsig=%7B%22a1%22%3A%221.1%22%2C%22a2%22%3A1723431882114%2C%22a3%22%3A%221340xu2wzyzz566zy885y2118y880286808551729w297958v26v5vx6%22%2C%22a5%22%3A%220LzUehsmVFoTCwnjYfyEaC57n5wW8q2M%22%2C%22a6%22%3A%22hs1.49TV2ssOSUcyHER1dSONg9KWbRKjERts8jzP6AJdoZUAC2fQ9xZQh0IgiD4nZpM3PapXcNVCCpA%2Bn6MXG5Ao5MA%3D%3D%22%2C%22x0%22%3A4%2C%22d1%22%3A%22d621c9e67dec3946de07d037abcdf0a8%22%7D';

const headers1 = {
    'Host': 'game.meituan.com',
    'Connection': 'keep-alive',
    'Content-Length': '4342',
    'M-TRACEID': '8639699753747850477',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090551)XWEB/11097',
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*',
    'X-Requested-With': 'XMLHttpRequest',
    'M-APPKEY': 'fe_com.sankuai.game.xtbsignin.custom',
    'appName': 'wxMiniProgram',
    'innerSource': '10888_cdbfldt',
    'Origin': 'https://game.meituan.com',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    'Referer': 'https://game.meituan.com/game/xtb-signin/custom.html?appName=wxMiniProgram&gameType=10888&inner_source=10888_cdbfldt&title=%E7%A6%8F%E5%88%A9%E7%94%B5%E5%A0%82&mtToken=AgGHI1wPodeSr_-vsSQc5uH6bSrQwfDhTddhABlGREp9PAuTio4BQfbd7wVc3mKuyXMTGfs0nJS9WgAAAAAxIgAAAPPfdyKD3SebjEBdRappxorUZkJ8jqaQh_5dK5-exRhrQanCjs7fwjUN7o0gqOs9&userId=3105768452&__lxsdk_params=bHhjdWlkOjE5MTQ0ODFjYjkwYzgtOWEyNjczMTMwZDk1Zi0wLTAtMTkxNDQ4MWNiOTBjODthcHBubTptdF9wb3dlcl9iYW5rX2NkYnhjeDttc2lkOjE5MTQ0ODI5MDIxLTI5NWUtYTEyZi1kY2MxO3d4aWQ6b05iRHo1THJ3RHhXcC1CTDRaRTFqRUtPVmozVTtzY2VuZToxMDUzO2xvY2F0ZV9jaXR5X2lkOjE7cG46d3gzNmU1YmQ0ZmZkMmFjZTRlO3dpOjM4OTYxO3dmOmkwNDY4aWc4ODgxOGM2O2ppOjkwMTMyO2pmOmQwNzE3MzE1ZjczOGI4O3Nka19lbnY6b25saW5lO2NoOmQyVnBlR2x1O25ldDpWMGxHU1E9PTtjdDpkMmx1Wkc5M2N3PT0.&_lx_ver=3.10.0',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cookie': '_lxsdk_cuid=19144826a8cc8-0c4e343ed54d66-613d1340-1d6b98-19144826a8cbf; _lxsdk=19144826a8cc8-0c4e343ed54d66-613d1340-1d6b98-19144826a8cbf; WEBDFPID=1340xu2wzyzz566zy885y2118y880286808551729w297958v26v5vx6-2038791284683-1723431283485GSGCMQEfd79fef3d01d5e9aadc18ccd4d0c95072781; _lxsdk_s=19144826a8d-fe1-7dc-a78%7C%7C37'
};

const data1 = {
    "gameType":10888,"appName":"wxMiniProgram","innerSource":"10888_cdbfldt","acToken":"5LPBhl1PMbnf0VH4_dYCLci14d6MGSmTpQrD_CbB-NvzxJVjEKW5_yHAfCUTMn8Hwcy441oR_zWC4v9rMGmnr_h7c7pCW5g55ZFABedYnVQzZAWLz9tM26PP5SMclcYamQLM0qoPyyXNj2MTi5M1VRxM4s5X7F4T170VyfHxzSHslW5ze6vU04eIhKvSfedLl6cZ8lyh8rL6eiazdju8cc6eRdFAAd05sFmuXcEiJD6IMDQ9vKy3hhWraUL-1x2ur1o8SdQIbka8pkLlFx3O2f4=","riskParams":
        {
            "ip":"","h5_fingerprint":"H5dfp_2.4.0_tttt_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","platform":13,"uuid":"19144826a8cc8-0c4e343ed54d66-613d1340-1d6b98-19144826a8cbf"
        }
    }; // Replace with your actual data payload

axios.post(url1, data1, { headers1 })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
