"use client";

import { useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import type { ToastType } from "./types";

interface ToastProps {
  toast: { msg: string; type: ToastType } | null;
}

const emptySubscribe = () => () => {};

export default function Toast({ toast }: ToastProps) {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!toast || !mounted) return null;

  return createPortal(
    <div className={`toast-box toast-${toast.type}`} role="alert" aria-live="polite">
      {toast.msg}
    </div>,
    document.body
  );
}