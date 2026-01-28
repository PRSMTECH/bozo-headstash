import React, { AriaAttributes } from "react";
import type { CSSProperties, ReactElement } from "react";
import classNames from "classnames";

export type NativeProps<S extends string = never> = {
  className?: string;
  style?: CSSProperties & Partial<Record<S, string>>;
  tabIndex?: number;
} & AriaAttributes;

export function withNativeProps<P extends NativeProps>(
  props: P,
  element: ReactElement,
) {
  const p = {
    ...(element.props as Record<string, unknown>),
  };
  if (props.className) {
    p.className = classNames(p.className as string | undefined, props.className);
  }
  if (props.style) {
    p.style = {
      ...(p.style as CSSProperties | undefined),
      ...props.style,
    };
  }
  if (props.tabIndex !== undefined) {
    p.tabIndex = props.tabIndex;
  }
  for (const key in props) {
    if (!Object.prototype.hasOwnProperty.call(props, key)) continue;
    if (key.startsWith("data-") || key.startsWith("aria-")) {
      p[key] = props[key as keyof P];
    }
  }
  return React.cloneElement(element, p);
}
