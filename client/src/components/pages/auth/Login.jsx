import { Link } from "react-router-dom";

import AuthWrapper from "../../../assets/styles/auth/AuthStyle";
import Logo from "../../utilities/general/Logo";
import AuthInput from "../../utilities/auth/AuthInput";

const Login = () => {
  return (
    <AuthWrapper>
      <div className="auth--container">
        <Logo isLarge={true} />
        <div className="auth--input-container">
          <form>
            <AuthInput name="email" placeholder="Email" />
            <AuthInput name="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
          <p>
            Don&apos;t have an account? <Link to="/register">Sign up</Link>
          </p>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Login;
