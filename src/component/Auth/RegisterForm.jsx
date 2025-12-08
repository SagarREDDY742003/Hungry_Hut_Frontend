import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../state/Authentication/Action";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "",
};
const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords do not match")
    .required("Confirm password is required"),
  role: Yup.string().required("Role is required"),
});

const RegisterForm = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const { fullName, email, password, role } = values;
    dispatch(
      registerUser({ userData: { fullName, email, password, role }, navigate })
    );
  };

  return (
    <div>
      <Typography variant="h5" className="text-center">
        Register
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <Field name="fullName">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  label="Full Name"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  error={meta.touched && Boolean(meta.error)}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>

            <Field name="email">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  label="Email"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  error={meta.touched && Boolean(meta.error)}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>

            <Field name="password">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  label="Password"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  type="password"
                  error={meta.touched && Boolean(meta.error)}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>

            <Field name="confirmPassword">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  label="Confirm Password"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  type="password"
                  error={meta.touched && Boolean(meta.error)}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>

            <Field name="role">
              {({ field, meta }) => (
                <FormControl
                  fullWidth
                  margin="normal"
                  error={meta.touched && Boolean(meta.error)}
                >
                  <InputLabel>Role</InputLabel>
                  <Select {...field} label="Role">
                    <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                    <MenuItem value={"ROLE_RESTAURANT_OWNER"}>
                      Restaurant Owner
                    </MenuItem>
                  </Select>
                  {meta.touched && meta.error && (
                    <Typography variant="caption" color="error">
                      {meta.error}
                    </Typography>
                  )}
                </FormControl>
              )}
            </Field>

            <Button
              sx={{ mt: 2, padding: "1rem" }}
              fullWidth
              type="submit"
              variant="contained"
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>

      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        have an account already?
        <Button size="small" onClick={() => navigate("/account/login")}>
          login
        </Button>
      </Typography>
    </div>
  );
};

export default RegisterForm;
