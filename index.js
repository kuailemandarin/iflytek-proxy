import express from "express";
import cors from "cors";   // <-- ADD THIS

const app = express();
app.use(cors());           // <-- ADD THIS
app.use(express.json({ limit: "10mb" }));

// Replace with your credentials from iFlytek
const APPID = "ga7999a7";
const APIKey = "a85242ab0fcc577e01676d10025c54c";
const APISecret = "662c513b26a1ed51bbb66d2c4516d0a2";

app.post("/asr", async (req, res) => {
  try {
    const audioBase64 = req.body.audio; // audio from client

    // For now: return dummy result
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
        { word: "汉语", score: 82 }
      ],
      feedback: "✅ Most words clear. ❌ Pay attention to: 语言, 中心."
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
