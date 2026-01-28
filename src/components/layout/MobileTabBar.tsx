"use client";

import React, { FC } from "react";
import { TabBar } from "antd-mobile";
import { ShoppingBag, Layout, User, Play } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { NativeProps, withNativeProps } from "@/utils/native-props";
import { mergeProps } from "@/utils/with-default-props";

export type MobileTabBarProps = {
  onTabChange?: (key: string) => void;
} & NativeProps;

const defaultProps = {
  // Add any defaults here
};

export const MobileTabBar: FC<MobileTabBarProps> = (p) => {
  const props = mergeProps(defaultProps, p);
  const pathname = usePathname();
  const router = useRouter();

  const tabs = [
    {
      key: "/shop",
      title: "Shop",
      icon: <ShoppingBag size={22} />,
    },
    {
      key: "/gallery",
      title: "Gallery",
      icon: <Layout size={22} />,
    },
    {
      key: "/movies",
      title: "Movies",
      icon: <Play size={22} />,
    },
    {
      key: "/profile",
      title: "Profile",
      icon: <User size={22} />,
    },
  ];

  return withNativeProps(
    props,
    <div className="adm-mobile-tab-bar fixed inset-x-0 bottom-0 z-50 bg-neutral-950/80 backdrop-blur-xl border-t border-white/5 pb-safe md:hidden transform-gpu">
      <TabBar
        activeKey={pathname}
        onChange={(value) => {
          router.push(value);
          props.onTabChange?.(value);
        }}
      >
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>

      <style jsx global>{`
        .adm-mobile-tab-bar .adm-tab-bar-item {
          color: rgba(255, 255, 255, 0.5);
        }
        .adm-mobile-tab-bar .adm-tab-bar-item-active {
          color: var(--adm-color-primary);
        }
        .adm-mobile-tab-bar .adm-tab-bar-item-title {
          font-size: 10px;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.05em;
        }
      `}</style>
    </div>,
  );
};
