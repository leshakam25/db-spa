import s from "./contact.module.css";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import {
  Alert,
  Button,
  Container,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

function ContactForm() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          bgcolor: "#F5F5F5",
          width: "100%",
          height: "80%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: " 32px",
        }}
      >
        <FormControl>
          <Box sx={{ m: 1 }} className="subtitleColor">
            Let’s talk about anything you need
          </Box>

          <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <TextField
              {...register("name", {
                required: "Name/company is Required",
                minLength: {
                  value: 2,
                  message: "min 2 symbols ",
                },
              })}
              variant="standard"
              id="outlined"
              label="Your name/company name"
              sx={{ p: 1, m: 1, width: "100%", bgcolor: "#ffffff" }}
              size="large"
            />
            <TextField
              {...register("phoneEmail", {
                required: "Phone/Email is Required",
                minLength: {
                  value: 2,
                  message: "min 2 symbols",
                },
              })}
              variant="standard"
              id="outlined-password-input"
              label="Phone/E-mail"
              type="text"
              autoComplete="current-password"
              sx={{
                p: 1,
                m: 1,
                width: "100%",
                bgcolor: "#ffffff",
                border: "none",
              }}
              size="large"
            />
          </Box>
          <TextField
            {...register("message", {
              required: "Message is Required",
              minLength: {
                value: 2,
                message: "min 2 symbols",
              },
            })}
            variant="standard"
            id="outlined-password-input"
            label="Message"
            type="text"
            multiline
            rows={4}
            sx={{ p: 1, m: 1, bgcolor: "#ffffff" }}
            size="large"
          />
          <Box
            sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
          >
            <Button
              className="button1"
              type="submit"
              disabled={!isValid}
              sx={{
                color: "#ffffff",
                m: 1,
                width: "138px",
              }}
            >
              SUBMIT
            </Button>
            <Box sx={{ m: 1 }}>
              {errors?.name && (
                <Alert variant="filled" severity="error">
                  {errors?.name?.message || "Error!"}
                </Alert>
              )}
            </Box>
            <Box sx={{ m: 1 }}>
              {errors?.phoneEmail && (
                <Alert variant="filled" severity="error">
                  {errors?.phoneEmail?.message || "Error!"}
                </Alert>
              )}
            </Box>
            <Box sx={{ m: 1 }}>
              {errors?.message && (
                <Alert variant="filled" severity="error">
                  {errors?.message?.message || "Error!"}
                </Alert>
              )}
            </Box>
          </Box>
        </FormControl>
      </Box>
    </form>
  );
}

export default ContactForm;
