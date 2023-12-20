import React, { useState, useEffect } from "react";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

const SavedButton = ({ productId, contentType }) => {
  const [isSaved, setIsSaved] = useState(false);
  const storageKey = `savedStatus_${contentType}_${productId}`;

  useEffect(() => {
    const savedStatus = localStorage.getItem(storageKey);
    if (savedStatus) {
      setIsSaved(JSON.parse(savedStatus));
    }
  }, [productId, storageKey]);

  const handleSavedClick = (event) => {
    setIsSaved(event.target.checked);
    localStorage.setItem(storageKey, JSON.stringify(event.target.checked));
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkAddIcon style={{ color: "green" }} />}
          name={`saved_${productId}`}
          checked={isSaved}
          onChange={handleSavedClick}
        />
      }
    />
  );
};

export default SavedButton;
