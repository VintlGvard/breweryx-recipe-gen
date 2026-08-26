"use client";

import type { ToastType } from "./types";

interface ToastProps {
  toast: { msg: string; type: ToastType } | null;
}

export default function Toast({ toast }: ToastProps) {
  if (!toast) return null;
  return <div className={`toast-box toast-${toast.type}`}>{toast.msg}</div>;
}