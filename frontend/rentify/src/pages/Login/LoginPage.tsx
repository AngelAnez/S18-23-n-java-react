import { Box } from "@mui/material";
import LoginForm from "../../components/LoginForm/LoginForm";

export function LoginPage() {
  return (
    <Box sx={{ backgroundColor: "background.default", position: "relative" }}>
      <LoginForm />
      <div style={{position: "absolute", bottom: 20, right: 32, border: "1px solid #40becb", borderRadius: "20px", padding: "20px", display: "flex", flexDirection: "column", gap: "10px", backgroundColor: "white", boxShadow: "0px 4px 10px rgba(0,0,0,0.4)"}}>
        <p style={{fontWeight: 600, fontSize: "18px"}}>Credenciales de Prueba</p>
        <p>
          {" "}
          <span style={{fontWeight: 600}}>Correo:</span> prueba@rentify.com
        </p>
        <p>
          {" "}
          <span style={{fontWeight: 600}}>Contraseña:</span> prueba123
        </p>
      </div>
    </Box>
  );
}

export default LoginPage;
