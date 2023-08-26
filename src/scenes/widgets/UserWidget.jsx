import { Box, Typography, Divider } from "@mui/material";
import UserImage from "components/UserImage";
import Recorder from "components/Recorder";

import FlexBetween from "components/FlexBetween";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const UserWidget = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const token = useSelector((state) => state.token);

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) {
    return null;
  }

  const { firstName, lastName } = user;

  return (
    <Box>
      {/* FIRST ROW */}
      <FlexBetween gap="0.5rem" pb="1.1rem">
        <FlexBetween gap="1rem">
          <UserImage image={picturePath} />
          <Box>
            <Typography variant="h4" color="black" fontWeight="500">
              {firstName} {lastName}
            </Typography>
          </Box>
        </FlexBetween>
      </FlexBetween>

      <Divider />

      {/* THIRD ROW */}
      <Box>
        <Recorder />
      </Box>

      <Divider />
    </Box>
  );
};

export default UserWidget;
