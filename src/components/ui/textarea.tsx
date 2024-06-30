import * as React from "react";

import { cn } from "@lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-2xl px-6 py-5 text-xl/6 focus-visible:outline-none focus:ring-1 ring-[#434548] disabled:cursor-not-allowed disabled:opacity-50 bg-[#1E2024]  placeholder:text-[#434548] text-[#e7e7e7]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
