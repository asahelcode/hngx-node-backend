import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { getDayOfTheWeek, getUTCTime, validatedUTC } from "./Helpers.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/api", (req, res) => {
  const slack_username = req.query.slack_name;
  const track = req.query.track;
  const weekday = getDayOfTheWeek();
  const utctime = getUTCTime();

  res.json({
    slack_name: slack_username,
    current_day: weekday,
    utc_time: validatedUTC(utctime),
    track: track,
    github_file_url: "https://github.com/username/repo/blob/main/file_name.ext",
    github_repo_url: "https://github.com/username/repo",
    status_code: 200,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
