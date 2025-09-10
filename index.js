// index.js - iFlytek Proxy Server
import express from "express";

const app = express();
app.use(express.json({ limit: "10mb" }));

// Replace with your credentials from iFlytek
const APPID = "ga7999a7";
const APIKey = "a852a42b0fcc577e01676d1d0025c54c";
const APISecret = "662c513b26a1ed51bbb66d2c4516d0a2";

app.post("/asr", async (req, res) => {
  try {
    const audioBase64 = req.body.audio; // audio from Apps Script

    // For now: return dummy result (later we connect to iFlytek)
    res.json({
  overallScore: 78,
  wordScores: [
    { word: "我", score: 95 },
    { word: "在", score: 92 },
    { word: "快乐", score: 85 },
    { word: "中文", score: 88 },
    { word: "语言", score: 60 },
    { word: "中心", score: 55 },
    { word: "学习", score: 70 },
    { word: "汉语", score: 82 },

    { word: "这里", score: 90 },
    { word: "的", score: 100 },
    { word: "老师", score: 92 },
    { word: "很", score: 85 },
    { word: "有", score: 88 },
    { word: "经验", score: 70 },
    { word: "她们", score: 80 },
    { word: "用", score: 75 },
    { word: "愉快", score: 60 },
    { word: "的", score: 100 },
    { word: "方式", score: 65 },
    { word: "教", score: 70 },
    { word: "我们", score: 90 },
    { word: "说", score: 80 },
    { word: "写", score: 72 },
    { word: "听", score: 68 },
    { word: "读", score: 85 },

    { word: "每天", score: 88 },
    { word: "我", score: 95 },
    { word: "都", score: 92 },
    { word: "学到", score: 70 },
    { word: "新", score: 85 },
    { word: "单词", score: 75 },
    { word: "和", score: 100 },
    { word: "句子", score: 65 },
    { word: "虽然", score: 72 },
    { word: "有时", score: 80 },
    { word: "很难", score: 60 },
    { word: "但", score: 100 },
    { word: "我", score: 95 },
    { word: "觉得", score: 70 },
    { word: "很", score: 88 },
    { word: "有意思", score: 85 },

    { word: "老师", score: 92 },
    { word: "总是", score: 70 },
    { word: "鼓励", score: 75 },
    { word: "我们", score: 90 },
    { word: "多说", score: 60 },
    { word: "别怕", score: 65 },
    { word: "错误", score: 72 },

    { word: "她说", score: 82 },
    { word: "错误", score: 70 },
    { word: "是", score: 100 },
    { word: "学习", score: 65 },
    { word: "的一部分", score: 72 },

    { word: "现在", score: 85 },
    { word: "我", score: 92 },
    { word: "敢", score: 80 },
    { word: "说", score: 78 },
    { word: "更多", score: 72 },
    { word: "中文", score: 82 },
    { word: "了", score: 100 },
    { word: "而且", score: 88 },
    { word: "越说越自信", score: 70 },

    { word: "感谢", score: 90 },
    { word: "快乐", score: 80 },
    { word: "中文", score: 85 },
    { word: "语言", score: 72 },
    { word: "中心", score: 68 },
    { word: "的", score: 100 },
    { word: "帮助", score: 75 }
  ],
  feedback: "✅ Most words clear. ❌ Pay attention to: 语言, 中心, 学习, 句子, 有意思, 越说越自信."
});

   catch (err) {
    console.error(err);
    res.status(500).json({ error: "ASR failed" });
  }
});

app.get("/", (req, res) => {
  res.send("iFlytek Proxy is running ✅");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server started on " + port));
