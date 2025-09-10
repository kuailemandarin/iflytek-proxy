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
      transcript: "我在快乐中文语言中心学习汉语",
      score: 85,
      feedback: "✅ 我在快乐中文语言中心学习汉语<br>❌ 学 sounded unclear"
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "ASR failed" });
  }
});

app.get("/", (req, res) => {
  res.send("iFlytek Proxy is running ✅");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server started on " + port));
