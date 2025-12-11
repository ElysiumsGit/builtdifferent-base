import { Box, Button, Typography } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { useRef, useState } from "react";

export default function ImageUploadBox() {
  const [images, setImages] = useState([]);
  const inputRef = useRef();

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);

    const newImages = files.map((file) => ({
      url: URL.createObjectURL(file),
      file,
    }));

    setImages((prev) => [...prev, ...newImages]);
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Box display="flex" gap={2}>
      <Box
        onClick={() => inputRef.current.click()}
        sx={{
          width: 150,
          height: 150,
          border: "2px dashed #d0d0d0",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "#aaa",
        }}
      >
        <input
          type="file"
          multiple
          hidden
          accept="image/*"
          ref={inputRef}
          onChange={handleUpload}
        />

        <ImageIcon sx={{ fontSize: 40, color: "#bdbdbd" }} />
        <Typography fontSize={12}>upload images</Typography>
      </Box>

      {images.map((img, index) => (
        <Box
          display="flex"
          gap={1}
          flexWrap="wrap"
          sx={{
            width: 150,
            height: 150,
            border: "2px solid #d0d0d0",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#aaa",
          }}
        >
          <img
            key={index}
            src={img.url}
            alt="preview"
            style={{
              width: 100,
              height: 100,
              objectFit: "cover",
              borderRadius: 8,
            }}
          />

          <Button onClick={() => removeImage(index)}>X</Button>
        </Box>
      ))}
    </Box>
  );
}
