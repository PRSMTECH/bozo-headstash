"use client";

import React, { FC, ReactNode } from "react";
import { ConfigProvider } from "antd-mobile";
import enUS from "antd-mobile/es/locales/en-US";

export const ThemeConfig: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ConfigProvider locale={enUS}>
      <div
        className="antd-mobile-theme-wrapper"
        style={
          {
            "--adm-color-primary": "#dc2626",
            "--adm-color-background": "#0a0a0a",
            "--adm-color-text": "#ededed",
            "--adm-font-family":
              "var(--font-display), var(--font-sans), sans-serif",
            minHeight: "100vh",
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </ConfigProvider>
  );
};
