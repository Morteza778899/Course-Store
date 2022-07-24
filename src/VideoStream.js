import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import video from "./images/Car.mp4";
import cover from "./images/ab3.jpg";
import { Box } from "@mui/material";
const VideoStream = () => {
  const plyrProps = {
    source: {
      type: "video",
      title: "Example title",
      sources: [
        {
          src: video,
          type: "video/mp4",
          size: 720,
        },
        // {
        //   src: "/path/to/movie.webm",
        //   type: "video/webm",
        //   size: 1080,
        // },
      ],
      poster: cover,
    },
    options: {
      controls: [
        "play-large",
        "play",
        "progress",
        "current-time",
        "mute",
        "volume",
        "captions",
        "settings",
        "pip",
        "airplay",
        "fullscreen",
      ],
    }, // https://github.com/sampotts/plyr#options
  };
  return (
    <Box sx={{ width: 300, mx: "auto" }}>
      <Plyr {...plyrProps} />
    </Box>
  );
};
export default VideoStream;
