import { Box, Button, Typography } from "@mui/material";
import { useReactMediaRecorder } from "react-media-recorder";

const Recorder = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true, audio: true });
  return (
    <Box textAlign="center">
      <Typography
        p="2rem"
        textAlign="center"
        variant="h4"
        color="primary"
        fontWeight="200">
        {status}..
      </Typography>
      <Box>
        <video src={mediaBlobUrl} controls />

        <Box>
          <Button
            onClick={startRecording}
            sx={{
              p: "1rem",
              backgroundColor: "black",
              color: "white",
              "&:hover": {
                color: "black",
              },
            }}>
            Start Recording
          </Button>
          <Button
            onClick={stopRecording}
            sx={{
              m: "1rem",
              p: "1rem",
              backgroundColor: "black",
              color: "white",
              "&:hover": {
                color: "black",
              },
            }}>
            Stop Recording
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Recorder;
