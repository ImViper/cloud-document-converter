const noop = () => {}

interface ToastOptions {
  content: string
  key?: string
  closable?: boolean
  actionText?: string
  duration?: number
  onActionClick?: () => void
  onClose?: () => void
}

export interface Toast {
  error: (options: ToastOptions) => void
  warning: (options: ToastOptions) => void
  info: (options: ToastOptions) => void
  loading: (options: ToastOptions & { keepAlive?: boolean }) => void
  success: (options: ToastOptions) => void
  remove: (key: string) => void
}

const defaultToast: Toast = {
  error: noop,
  warning: noop,
  info: noop,
  loading: noop,
  success: noop,
  remove: noop,
}

export const Toast = window.Toast ?? defaultToast

export interface User {
  language: string
}

export const User = window.User

export interface PageMain {
  blockManager: {
    /**
     * @deprecated
     */
    model?: {
      rootBlockModel: import('./docx').PageBlock
    }
    rootBlockModel: import('./docx').PageBlock
  }
}

export const PageMain = window.PageMain
