const express = require("express");
const cors = require("cors");
const app = express();

// 设置允许跨域
app.use(cors());

// 能解析urlencode格式的post请求体参数
app.use(express.urlencoded());
// 能解析json格式的请求体
app.use(express.json());

app.get("/productone", (req, res) => {
  setTimeout(() => {
    res.send(["ZW摸奶第一式", "ZCss三连第一式", "JD到处找基波"]);
  }, 1000 + Math.random() * 2000);
});

app.get("/producttwo", (req, res) => {
  setTimeout(() => {
    res.send([
      {
        id: 1,
        name: "product2.1",
      },
      {
        id: 2,
        name: "product2.2",
      },
      {
        id: 3,
        name: "product2.3",
      },
    ]);
  }, 1000 + Math.random() * 2000);
});

app.listen(4000, () => {
  console.log("server app start on port 4000");
});
