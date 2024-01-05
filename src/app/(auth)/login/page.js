import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  Typography,
  Container,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import Image from "next/image";
import Gap from "@/components/Gap";
import MainButton from "@/components/button/MainButton";

export default function page() {
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item md={8}>
            <Box className="login-left-page" position={"relative"}>
              <Box className="circle1">
                <Image
                  src={"/image/login-image1.svg"}
                  width={182}
                  height={184}
                  alt="login-image1"
                />
              </Box>

              <Box className="circle2">
                <Typography
                  fontSize={"22px"}
                  fontWeight={500}
                  color={"customTextColor.main"}
                >
                  PREDIKTIF, <br></br> RESPONSIBILITAS, <br></br> TRANSPARANSI
                  BERKEADILAN
                </Typography>
              </Box>
              <Box className="circle3"></Box>
              <Box className="putaran">
                <Image
                  src={"/image/reserve.svg"}
                  width={85}
                  height={130}
                  alt="reserve"
                />
              </Box>
              <Box className="putaran2">
                <Image
                  src={"/image/penyidik.svg"}
                  width={85}
                  height={130}
                  alt="reserve"
                />
              </Box>
              <Box className="putaran3">
                <Image
                  src={"/image/pusiknas.svg"}
                  width={85}
                  height={130}
                  alt="reserve"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item md={4} my={"86px"}>
            <Box className="main-shadow" sx={{ p: "30px", width: '575px' }}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  fontSize={"34px"}
                  fontWeight={500}
                  color={"custom.dark"}
                >
                  E-PPNS PRESISI
                </Typography>
                <Typography
                  fontSize={"20px"}
                  fontWeight={500}
                  color={"#3A354199"}
                >
                  Layanan Penyidik Pegawai Negeri Sipil
                </Typography>
                <Box display={"flex"} justifyContent={"center"} my={"52px"}>
                  <Image
                    src={"/image/login-image.svg"}
                    width={294}
                    height={161}
                    alt="login-image"
                  />
                </Box>
              </Box>
              <Card className="login-card">
                <CardHeader
                  titleTypographyProps={{
                    fontSize: "20px",
                    fontWeight: 500,
                  }}
                  title="Login"
                  sx={{
                    bgcolor: "#32BAFF14",
                  }}
                />
                <CardContent>
                  <form>
                    <Box>
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                      />
                      <Gap height={"30px"} width={""}></Gap>
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        type="password"
                      />
                      <Gap height={"65px"} width={""}></Gap>
                      <MainButton />
                    </Box>
                  </form>
                </CardContent>
              </Card>
              <Box textAlign={"center"} mt={"52px"}>
                <Typography color={"#3A354199"} fontSize={"14px"}>
                  BIRO KORWAS PPNS BARESKRIM POLRI <br></br> Copyright 2024©
                  Pusiknas{" "}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
