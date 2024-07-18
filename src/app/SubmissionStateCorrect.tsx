"use client";

import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";

function SubmissionStateBody({ pending }: { pending: boolean }) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (!pending) {
      setCounter(0);
      return;
    }
    const id = setTimeout(() => {
      setCounter(counter + 1);
    }, 1000);
    return () => clearTimeout(id);
  }, [counter, pending]);
  return (
    <div>{pending ? `Pending for ${counter} seconds` : "Not pending"}</div>
  );
}

export default function SubmissionStateCorrect() {
  const formStatus = useFormStatus();
  return <SubmissionStateBody pending={formStatus.pending} />;
}
