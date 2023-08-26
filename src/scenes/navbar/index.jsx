import { Typography, useMediaQuery, Button } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <FlexBetween padding="0.5rem 5%" backgroundColor="black">
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1.5rem,1rem, 1.25rem)"
          color="white"
          onClick={() => navigate("/home")}
          sx={{
            "&:hover": {
              color: "light",
              cursor: "pointer",
            },
          }}>
          MERN-APP
        </Typography>
      </FlexBetween>

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <Button
            size="small"
            sx={{
              backgroundColor: "white",
              color: "black",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
            onClick={() => dispatch(setLogout())}>
            Logout
          </Button>
        </FlexBetween>
      ) : (
        <FlexBetween gap="2rem">
          <Button
            size="small"
            sx={{
              backgroundColor: "white",
              color: "black",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
            onClick={() => dispatch(setLogout())}>
            Logout
          </Button>
        </FlexBetween>
      )}
    </FlexBetween>
  );
};

export default Navbar;
