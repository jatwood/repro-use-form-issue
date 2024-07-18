"use client";

import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";

export default function SubmissionState() {
  const formStatus = useFormStatus();
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const id = setTimeout(() => {
      if (!formStatus.pending) {
        setCounter(0);
        return;
      }
      setCounter(counter + 1);
    }, 1000);
    return () => clearTimeout(id);
  }, [counter, formStatus.pending]);
  return (
    <div>
      {formStatus.pending ? `Pending for ${counter} seconds` : "Not pending"}
    </div>
  );
}
