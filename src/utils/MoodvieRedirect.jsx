import { useEffect } from "react";

export function MoodvieRedirect() {
  useEffect(() => {
    window.location.replace("http://localhost:5173");
  }, []);

  return null;
}