import Radio, { RadioProps } from "@mui/material/Radio";
import { styled } from "@mui/material/styles";
import * as React from "react";
import trusteePortalTheme from "../../theme/trusteePortalTheme";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 14,
  height: 14,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 2px rgb(62 62 62 / 0%)"
      : "inset 0 0 0 2px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: "#FAFAFA",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: trusteePortalTheme.palette.primary.main,
  backgroundImage: "linear-gradient(180deg,hsla(0,0%,0%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 14,
    height: 14,
    backgroundImage: "radial-gradient(#fff,#fff 15%,transparent 30%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: trusteePortalTheme.palette.primary.main,
  },
});

function RadioButton(props: RadioProps) {
  return (
    <Radio
      sx={{
        "&:hover": {
          bgcolor: "transparent",
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

export default RadioButton;
