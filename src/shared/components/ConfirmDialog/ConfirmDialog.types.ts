import type { ReactNode } from "react";

export interface ConfirmDialogProps {
  open: boolean;
  title: string;
  description?: string;

  confirmText?: string;
  cancelText?: string;

  confirmLoading?: boolean;

  isLoading?: boolean;

  onConfirm: () => void;
  onCancel: () => void;

  icon?: ReactNode;
}