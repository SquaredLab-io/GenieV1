import { useEffect, useState } from "react";

/**
 * Fix hydration issues
 */
export const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return { isMounted };
};
