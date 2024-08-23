import * as React from "react";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";
import { Typography, Box } from "@mui/material";

const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
  box-sizing: border-box;
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 4px;
  color: ${theme.palette.text.primary};
  background: ${theme.palette.background.paper};
  border: 1px solid ${theme.palette.divider};

  &:focus {
    border-color: ${theme.palette.primary.main};
    outline: none;
    box-shadow: 0 0 0 2px ${theme.palette.primary.main};
  }
`
);

export default function BasicOutlinedTextarea({ placeholder = "Message", defaultValue = "", maxRows = 4, error, helperText, ...props }) {
  return (
    <Box>
      <Textarea
        placeholder={placeholder}
        defaultValue={defaultValue}
        maxRows={maxRows}
        aria-label="maximum height"
        {...props}
        style={{
          borderColor: error ? "red" : undefined,
        }}
      />
      {helperText && (
        <Typography variant="body2" color="error" sx={{ mt: 1 }}>
          {helperText}
        </Typography>
      )}
    </Box>
  );
}
