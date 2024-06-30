"use client"; // Error components must be Client Components

import { Button } from "@components/ui/button";
import { NextPage } from "next";
import { useEffect } from "react";

interface PropsType {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error: NextPage<PropsType> = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="page-center items-center justify-center">
      <h2 className="font-sans-manrope text-4xl tracking-wide">Something went wrong!</h2>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        variant={"secondary"}
      >
        Try again
      </Button>
    </div>
  );
};

export default Error;
