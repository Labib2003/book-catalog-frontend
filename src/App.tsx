import { ReactNode, useEffect } from "react";
import { AuthState, saveAuth } from "./redux/features/auth/authSlice";
import { useAppDispatch } from "./redux/hooks";
function App({ children }: { children: ReactNode }) {

  return <div>{children}</div>;
}

export default App;
