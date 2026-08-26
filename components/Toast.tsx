"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { ToastType } from "./types";

interface ToastProps {
  toast: { msg: string; type: ToastType } | null;
}

export default function Toast({ toast }: ToastProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!toast || !mounted) return null;

  return createPortal(
    <div className={`toast-box toast-${toast.type}`} role="alert" aria-live="polite">
      {toast.msg}
    </div>,
    document.body
  );
}