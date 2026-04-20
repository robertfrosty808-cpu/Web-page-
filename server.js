const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get("/api/message", (req, res) => {
    res.json({
        lines: [
            "Hey...",
            "I know I’m not there with you today",
            "But I made this just for you ❤️",
            "Even miles apart...",
            "You mean everything to me",
            "Happy Birthday 🎉"
        ]
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
