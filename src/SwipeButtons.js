import React from "react";
import "./SwipeButtons.css";
import ReplyIcon from "@material-ui/icons/Reply";
import CloseIcon from "@material-ui/icons/Close";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <ReplyIcon fontSize="small" />
      </IconButton>
      <IconButton className="swipeButtons__left">
        <CloseIcon fontSize="small" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarIcon fontSize="small" />
      </IconButton>
      <IconButton className="swipeButtons__right">
        <FavoriteIcon fontSize="small" />
      </IconButton>
      <IconButton className="swipeButtons__lightning">
        <FlashOnIcon fontSize="small" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
