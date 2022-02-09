import { Button } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
export function Login() {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  return (
    <div
      style={{
        placeItems: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Button
      size="lg"
        onClick={() => {
          signInWithGoogle();
        }}
      >
        Sign In
      </Button>
    </div>
  );
}
