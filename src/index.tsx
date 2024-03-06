import { Box, Grid, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import themes from "./theme";
import adminPortalTheme from "./theme/adminPortalTheme";
import mpfaPortalTheme from "./theme/mpfaPortalTheme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themes.adminPortal}>
      <App />
    </ThemeProvider>
    <ThemeProvider theme={mpfaPortalTheme}>
      <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "h1" }}>
        MPFA Portal
      </Box>
      <br></br>
      <Grid container spacing={1}>
        <Grid item xs={5} sm={9}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "h4" }}>
            Color Scheme
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              bgcolor: "primary.light",
              color: "primary.contrastText",
              p: 2,
            }}
          >
            Theme #EF841F
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              bgcolor: "primary.main",
              color: "primary.contrastText",
              p: 2,
            }}
          >
            Primary #EF841F
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              bgcolor: "secondary.main",
              color: "secondary.contrastText",
              p: 2,
            }}
          >
            Secondary #2D9FC3
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              bgcolor: "warning.main",
              color: "warning.contrastText",
              p: 2,
            }}
          >
            Additional 1 #F6354A
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              bgcolor: "success.main",
              color: "success.contrastText",
              p: 2,
            }}
          >
            Additional 2 #2FCC71
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ bgcolor: "info.main", color: "info.contrastText", p: 2 }}>
            Additional 3 #F06363
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ bgcolor: "info.light", color: "info.contrastText", p: 2 }}>
            Additional 4 #BCBCBC
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{ bgcolor: "text.primary", color: "background.paper", p: 2 }}
          >
            Text.Primary #3D4F76
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{ bgcolor: "text.secondary", color: "background.paper", p: 2 }}
          >
            Text.Secondary #9D9D9D
          </Box>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <Grid container spacing={1}>
        <Grid item xs={5} sm={9}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "h4" }}>
            Background Color
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              bgcolor: "background.default",
              color: "background.contrastText",
              p: 2,
            }}
          >
            Background #F2F2F2
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              boxShadow: 1,
              bgcolor: "background.paper",
              color: "background.contrastText",
              p: 2,
            }}
          >
            Paper #FFFFFF
          </Box>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Grid container spacing={1}>
        <Grid item xs={5} sm={9}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "h4" }}>
            Button Color Scheme
          </Box>
        </Grid>
        <Grid item xs={5} sm={9}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body2" }}>
            Primary Button
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              paddingLeft: 5,
              paddingTop: 2,
              paddingBottom: 2,
              backgroundColor: "primaryButtonColor1.main",
              "&:hover": { backgroundColor: "primaryButtonColor1.light" },
              color: "primaryButtonColor1.contrastText",
            }}
          >
            PrimaryButton1 / primaryButtonColor1.main / #EF841F
            <br></br>
            <br></br>
            PrimaryButton1Hover / primaryButtonColor1.light / #EF9F1F
          </Box>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <Grid container spacing={1}>
        <Grid item xs={5} sm={9}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body2" }}>
            Secondary Button
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              paddingLeft: 5,
              paddingTop: 2,
              paddingBottom: 2,
              border: 2,
              borderColor: "primaryButtonColor1.main",
              color: "primaryButtonColor1.main",
              "&:hover": {
                borderColor: "primaryButtonColor1.light",
                backgroundColor: "primaryButtonColor1.light",
                color: "primaryButtonColor1.contrastText",
              },
            }}
          >
            SecondaryOutlinedButton1 / primaryButtonColor1.main / #EF841F
            <br></br>
            <br></br>
            SecondaryOutlinedButton1Hover / primaryButtonColor1.light / #EF9F1F
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              paddingLeft: 5,
              paddingTop: 2,
              paddingBottom: 2,
              border: 2,
              borderColor: "primaryButtonColor2.main",
              color: "primaryButtonColor2.main",
              "&:hover": {
                borderColor: "primaryButtonColor2.light",
                backgroundColor: "primaryButtonColor2.light",
                color: "primaryButtonColor2.contrastText",
              },
            }}
          >
            SecondaryOutlinedButton2 / primaryButtonColor2.main / #2D9FC3
            <br></br>
            <br></br>
            SecondaryOutlinedButton2Hover / primaryButtonColor2.light / #1DB0DE
          </Box>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <Grid container spacing={1}>
        <Grid item xs={5} sm={9}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body2" }}>
            Secondary Button: Alert
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              paddingLeft: 5,
              paddingTop: 2,
              paddingBottom: 2,
              border: 2,
              backgroundColor: "secondaryButtonColor1.main",
              "&:hover": { backgroundColor: "secondaryButtonColor1.light" },
              color: "secondaryButtonColor1.contrastText",
            }}
          >
            SecondaryButton1 / secondaryButtonColor1.main / #CF2E76
            <br></br>
            <br></br>
            SecondaryButton1Hover / secondaryButtonColor1.light / #EB3E8B
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              paddingLeft: 5,
              paddingTop: 2,
              paddingBottom: 2,
              border: 2,
              display: "flex",
              borderColor: "secondaryButtonColor2.main",
              color: "secondaryButtonColor2.main",
              "&:hover": {
                backgroundColor: "secondaryButtonColor2.main",
                color: "secondaryButtonColor2.contrastText",
              },
            }}
          >
            SecondaryButton2 / Outlined / secondaryButtonColor2.main / #F06363
            <br></br>
            <br></br>
            SecondaryButton2Hover / secondaryButtonColor2.main / #F06363
          </Box>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <Grid container spacing={1}>
        <Grid item xs={5} sm={9}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body2" }}>
            Secondary Button: Approve
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              paddingLeft: 5,
              paddingTop: 2,
              paddingBottom: 2,
              backgroundColor: "secondaryButtonColor3.main",
              "&:hover": { backgroundColor: "secondaryButtonColor3.light" },
              color: "secondaryButtonColor3.contrastText",
            }}
          >
            SecondaryButton3 / secondaryButtonColor3.main / #2FCC71
            <br></br>
            <br></br>
            SecondaryButton3Hover / secondaryButtonColor3.light / #57E392
          </Box>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Grid container spacing={3}>
        <Grid item xs={5} sm={12}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "h4" }}>
            Typography{" "}
          </Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body1" }}>
            Heading 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box sx={{ typography: "h1" }}>H1/Roboto/42px/300/#E67E23</Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body1" }}>
            Heading 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box sx={{ typography: "h2" }}>H2/Roboto/26px/700/#E67E23</Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body1" }}>
            Heading 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box sx={{ typography: "h3" }}>H3/Roboto/20px/700/#2C90AD</Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body1" }}>
            Heading 4
          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box sx={{ typography: "h4" }}>H4/Roboto/19px/700/#42526E</Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body1" }}>
            Heading 5
          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box sx={{ typography: "h5" }}>H5/Roboto/14px/500/#2D9FC3</Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body1" }}>
            Body
          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box sx={{ typography: "body1" }}>Body/Roboto/14px/400/#42526E</Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body1" }}>
            Input Field Text
          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box sx={{ typography: "body2" }}>
            InputField/Roboto/16px/700/#3D4F76
          </Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body1" }}>
            Input Field Hints
          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box sx={{ typography: "caption" }}>
            InputField/Roboto/16px/Italic/300/#9D9D9D
          </Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body1" }}>
            Input Field Alert
          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box sx={{ typography: "overline" }}>
            InputField/Roboto/12px/500/#F6354A
          </Box>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Grid container spacing={3}>
        <Grid item xs={5} sm={12}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "h4" }}>
            Spacing{" "}
          </Box>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Box
            sx={{
              paddingTop: 3,
              paddingBottom: 4,
              paddingRight: 3,
              paddingLeft: 3,
              boxShadow: 3,
              width: "1080px",
              height: "574px",
              bgcolor: (theme) =>
                theme.palette.mode === "light" ? "#ffffff" : "#f2f2f2",
              color: (theme) =>
                theme.palette.mode === "light" ? "#EF841F" : "grey.800",
              textAlign: "left",
              borderRadius: "15px",
              fontSize: "26px",
              fontWeight: "700",
            }}
          >
            paddingTop: 3,
            <br></br>
            paddingBottom: 4,
            <br></br>
            paddingRight: 3,
            <br></br>
            paddingLeft: 3,
            <br></br>
            <br></br>
            boxShadow: 3,
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    <ThemeProvider theme={adminPortalTheme}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "h1" }}>
        Admin Portal
      </Box>
      <br></br>
      <Grid container spacing={1}>
        <Grid item xs={5} sm={9}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "h4" }}>
            Color Scheme
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              bgcolor: "primary.light",
              color: "primary.contrastText",
              p: 2,
            }}
          >
            Theme #0D6A88
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              bgcolor: "primary.main",
              color: "primary.contrastText",
              p: 2,
            }}
          >
            Primary #009CCD
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              bgcolor: "secondary.main",
              color: "secondary.contrastText",
              p: 2,
            }}
          >
            Secondary #EF841F
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              bgcolor: "warning.main",
              color: "warning.contrastText",
              p: 2,
            }}
          >
            Additional 1 #F6354A
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              bgcolor: "success.main",
              color: "success.contrastText",
              p: 2,
            }}
          >
            Additional 2 #2FCC71
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ bgcolor: "info.main", color: "info.contrastText", p: 2 }}>
            Additional 3 #777777
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ bgcolor: "info.light", color: "info.contrastText", p: 2 }}>
            Additional 4 #ED562D
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ bgcolor: "info.dark", color: "info.contrastText", p: 2 }}>
            Additional 5 #EF9F1F
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              bgcolor: "additionalColor6.main",
              color: "additionalColor6.contrastText",
              p: 2,
            }}
          >
            Additional 6 #FFEB00
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{ bgcolor: "text.primary", color: "background.paper", p: 2 }}
          >
            Text.Primary #3d4f76
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{ bgcolor: "text.secondary", color: "background.paper", p: 2 }}
          >
            Text.Secondary #9D9D9D
          </Box>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <Grid container spacing={1}>
        <Grid item xs={5} sm={9}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "h4" }}>
            Background Color
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              bgcolor: "background.default",
              color: "background.contrastText",
              p: 2,
            }}
          >
            Background #F3F9F9
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              boxShadow: 1,
              bgcolor: "background.paper",
              color: "background.contrastText",
              p: 2,
            }}
          >
            Paper #FFFFFF
          </Box>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Grid container spacing={1}>
        <Grid item xs={5} sm={9}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "h4" }}>
            Button Color Scheme
          </Box>
        </Grid>
        <Grid item xs={5} sm={9}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body2" }}>
            Primary Button
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              paddingLeft: 5,
              paddingTop: 2,
              paddingBottom: 2,
              backgroundColor: "primaryButtonColor1.main",
              "&:hover": { backgroundColor: "primaryButtonColor1.light" },
              color: "primaryButtonColor1.contrastText",
            }}
          >
            PrimaryButton1 / primaryButtonColor1.main / #EF841F
            <br></br>
            <br></br>
            PrimaryButton1Hover / primaryButtonColor1.light / #EF9F1F
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              paddingLeft: 5,
              paddingTop: 2,
              paddingBottom: 2,
              backgroundColor: "primaryButtonColor2.main",
              "&:hover": { backgroundColor: "primaryButtonColor2.light" },
              color: "primaryButtonColor2.contrastText",
            }}
          >
            PrimaryButton2 / primaryButtonColor2.main / #2D9FC3
            <br></br>
            <br></br>
            PrimaryButton2Hover / primaryButtonColor2.light / #1DB0DE
          </Box>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <Grid container spacing={1}>
        <Grid item xs={5} sm={9}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body2" }}>
            Secondary Button
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              paddingLeft: 5,
              paddingTop: 2,
              paddingBottom: 2,
              border: 2,
              borderColor: "primaryButtonColor1.main",
              color: "primaryButtonColor1.main",
              "&:hover": {
                borderColor: "primaryButtonColor1.light",
                backgroundColor: "primaryButtonColor1.light",
                color: "primaryButtonColor1.contrastText",
              },
            }}
          >
            SecondaryOutlinedButton1 / primaryButtonColor1.main / #EF841F
            <br></br>
            <br></br>
            SecondaryOutlinedButton1Hover / primaryButtonColor1.light / #EF9F1F
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              paddingLeft: 5,
              paddingTop: 2,
              paddingBottom: 2,
              border: 2,
              borderColor: "primaryButtonColor2.main",
              color: "primaryButtonColor2.main",
              "&:hover": {
                borderColor: "primaryButtonColor2.light",
                backgroundColor: "primaryButtonColor2.light",
                color: "primaryButtonColor2.contrastText",
              },
            }}
          >
            SecondaryOutlinedButton2 / primaryButtonColor2.main / #2D9FC3
            <br></br>
            <br></br>
            SecondaryOutlinedButton2Hover / primaryButtonColor2.light / #1DB0DE
          </Box>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <Grid container spacing={1}>
        <Grid item xs={5} sm={9}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body2" }}>
            Secondary Button: Alert
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              paddingLeft: 5,
              paddingTop: 2,
              paddingBottom: 2,
              border: 2,
              backgroundColor: "secondaryButtonColor1.main",
              "&:hover": { backgroundColor: "secondaryButtonColor1.light" },
              color: "secondaryButtonColor1.contrastText",
            }}
          >
            SecondaryButton1 / secondaryButtonColor1.main / #CF2E76
            <br></br>
            <br></br>
            SecondaryButton1Hover / secondaryButtonColor1.light / #EB3E8B
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              paddingLeft: 5,
              paddingTop: 2,
              paddingBottom: 2,
              border: 2,
              display: "flex",
              borderColor: "secondaryButtonColor2.main",
              color: "secondaryButtonColor2.main",
              "&:hover": {
                backgroundColor: "secondaryButtonColor2.main",
                color: "secondaryButtonColor2.contrastText",
              },
            }}
          >
            SecondaryButton2 / Outlined / secondaryButtonColor2.main / #F06363
            <br></br>
            <br></br>
            SecondaryButton2Hover / secondaryButtonColor2.main / #F06363
          </Box>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <Grid container spacing={1}>
        <Grid item xs={5} sm={9}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body2" }}>
            Secondary Button: Approve
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              paddingLeft: 5,
              paddingTop: 2,
              paddingBottom: 2,
              backgroundColor: "secondaryButtonColor3.main",
              "&:hover": { backgroundColor: "secondaryButtonColor3.light" },
              color: "secondaryButtonColor3.contrastText",
            }}
          >
            SecondaryButton3 / secondaryButtonColor3.main / #2FCC71
            <br></br>
            <br></br>
            SecondaryButton3Hover / secondaryButtonColor3.light / #57E392
          </Box>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Grid container spacing={3}>
        <Grid item xs={5} sm={12}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "h4" }}>
            Typography{" "}
          </Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body1" }}>
            Heading 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box sx={{ typography: "h1" }}>H1/Roboto/42px/300/#009CCD</Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body1" }}>
            Heading 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box sx={{ typography: "h2" }}>H2/Roboto/26px/500/#009CCD</Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body1" }}>
            Heading 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box sx={{ typography: "h3" }}>H3/Roboto/22px/700/#EF9F1F</Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body1" }}>
            Heading 4
          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box sx={{ typography: "h4" }}>H4/Roboto/20px/500/#009CCD</Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body1" }}>
            Heading 5
          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box sx={{ typography: "h5" }}>H5/Roboto/14px/700/#3D4F76</Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body1" }}>
            Body
          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box sx={{ typography: "body1" }}>Body/Roboto/14px/400/#42526E</Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body1" }}>
            Input Field Text
          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box sx={{ typography: "body2" }}>
            InputField/Roboto/16px/700/#3D4F76
          </Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body1" }}>
            Input Field Hints
          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box sx={{ typography: "caption" }}>
            InputField/Roboto/16px/Italic/300/#9D9D9D
          </Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "body1" }}>
            Input Field Alert
          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box sx={{ typography: "overline" }}>
            InputField/Roboto/12px/500/#F6354A
          </Box>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Grid container spacing={3}>
        <Grid item xs={5} sm={12}>
          <Box sx={{ paddingTop: 1, paddingLeft: 2, typography: "h4" }}>
            Spacing{" "}
          </Box>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Box
            sx={{
              paddingTop: 3,
              paddingBottom: 4,
              paddingRight: 3,
              paddingLeft: 3,
              boxShadow: 3,
              width: "1080px",
              height: "574px",
              bgcolor: (theme) =>
                theme.palette.mode === "light" ? "#ffffff" : "#f2f2f2",
              color: (theme) =>
                theme.palette.mode === "light" ? "#EF841F" : "grey.800",
              textAlign: "left",
              borderRadius: "15px",
              fontSize: "26px",
              fontWeight: "700",
            }}
          >
            paddingTop: 3,
            <br></br>
            paddingBottom: 4,
            <br></br>
            paddingRight: 3,
            <br></br>
            paddingLeft: 3,
            <br></br>
            <br></br>
            boxShadow: 3,
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
