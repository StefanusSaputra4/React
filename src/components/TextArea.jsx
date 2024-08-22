import * as React from "react";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";

const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
  box-sizing: border-box;
  width: 100%; // Menyesuaikan lebar
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 4px;
  color: ${theme.palette.text.primary}; // Warna teks mengikuti tema
  background: ${theme.palette.background.paper}; // Warna background mengikuti tema
  border: 1px solid ${theme.palette.divider}; // Warna border mengikuti tema

  &:focus {
    border-color: ${theme.palette.primary.main}; // Warna border saat fokus mengikuti tema
    outline: none;
    box-shadow: 0 0 0 2px ${theme.palette.primary.main}; // Tambahkan shadow saat fokus
  }
`
);

export default function BasicOutlinedTextarea({ placeholder = "Message", defaultValue = "", maxRows = 4, ...props }) {
  return <Textarea placeholder={placeholder} defaultValue={defaultValue} maxRows={maxRows} aria-label="maximum height" {...props} />;
}
