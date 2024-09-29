import { config, getConfig, remove, removeAll } from './methods';
export type { ToastProps, ToastShowProps } from './PropsType';
declare const Toast: {
    SHORT: number;
    LONG: number;
    defaultConfig: {
        duration: number;
        onClose: () => void;
        mask: boolean;
        stackable: boolean;
    };
    getConfig: typeof getConfig;
    config: typeof config;
    show: (props: string | import("./PropsType").ToastShowProps, duration?: number, mask?: boolean) => number;
    info: (props: string | import("./PropsType").ToastShowProps, duration?: number, onClose?: () => void, mask?: boolean) => number;
    success: (props: string | import("./PropsType").ToastShowProps, duration?: number, onClose?: () => void, mask?: boolean) => number;
    fail: (props: string | import("./PropsType").ToastShowProps, duration?: number, onClose?: () => void, mask?: boolean) => number;
    offline: (props: string | import("./PropsType").ToastShowProps, duration?: number, onClose?: () => void, mask?: boolean) => number;
    loading: (props: string | import("./PropsType").ToastShowProps, duration?: number, onClose?: () => void, mask?: boolean) => number;
    remove: typeof remove;
    removeAll: typeof removeAll;
};
export default Toast;
