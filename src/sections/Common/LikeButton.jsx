import React, { useState, useEffect } from "react";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const LikeButton = ({ productId, contentType }) => {
  const [isLiked, setIsLiked] = useState(false);
  const storageKey = `likedStatus_${contentType}_${productId}`;

  useEffect(() => {
    const likedStatus = localStorage.getItem(storageKey);
    if (likedStatus) {
      setIsLiked(JSON.parse(likedStatus));
    }
  }, [productId, storageKey]);

  const handleLikeClick = (event) => {
    setIsLiked(event.target.checked);
    localStorage.setItem(storageKey, JSON.stringify(event.target.checked));
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          icon={<FavoriteBorder style={{ color: "red" }} />}
          checkedIcon={<Favorite style={{ color: "red" }} />}
          name={`liked_${productId}`}
          checked={isLiked}
          onChange={handleLikeClick}
        />
      }
    />
  );
};

export default LikeButton;
