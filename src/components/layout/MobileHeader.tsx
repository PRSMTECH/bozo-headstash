"use client";

import React, { FC, useState } from "react";
import { NavBar, Popup, SearchBar, Badge } from "antd-mobile";
import { Search, ShoppingBag, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { NativeProps, withNativeProps } from "@/utils/native-props";
import { mergeProps } from "@/utils/with-default-props";

export type MobileHeaderProps = {
  title?: string | React.ReactNode;
  showSearch?: boolean;
} & NativeProps;

const defaultProps = {
  showSearch: true,
};

export const MobileHeader: FC<MobileHeaderProps> = (p) => {
  const props = mergeProps(defaultProps, p);
  const [searchVisible, setSearchVisible] = useState(false);
  const router = useRouter();

  const right = (
    <div className="flex items-center gap-4">
      {props.showSearch && (
        <Search
          size={20}
          className="text-white hover:text-red-500 transition-colors"
          onClick={() => setSearchVisible(true)}
        />
      )}
      <User
        size={20}
        className="text-white hover:text-red-500 transition-colors"
        onClick={() => router.push("/profile")}
      />
      <div className="relative" onClick={() => router.push("/cart")}>
        <ShoppingBag
          size={20}
          className="text-white hover:text-red-500 transition-colors"
        />
        <Badge content={Badge.dot} className="absolute -top-1 -right-1" />
      </div>
    </div>
  );

  return withNativeProps(
    props,
    <div className="adm-mobile-header sticky top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/5 md:hidden">
      <NavBar back={null} right={right} onBack={() => router.back()}>
        {props.title || (
          <div onClick={() => router.push("/shop")} className="cursor-pointer">
            <span className="text-lg font-black tracking-tighter uppercase text-white">
              BOZO <span className="text-red-600">HEADSTASH</span>
            </span>
          </div>
        )}
      </NavBar>

      <Popup
        visible={searchVisible}
        onMaskClick={() => setSearchVisible(false)}
        onClose={() => setSearchVisible(false)}
        position="top"
        bodyStyle={{ height: "auto", backgroundColor: "#0a0a0a" }}
      >
        <div className="p-4 pt-12">
          <SearchBar
            placeholder="SEARCH ARCHIVE..."
            showCancelButton
            onCancel={() => setSearchVisible(false)}
            onSearch={(val) => {
              console.log("Searching for:", val);
              setSearchVisible(false);
            }}
          />
          <div className="mt-4 flex flex-wrap gap-2">
            {["NEW", "HOODIES", "ACCESSORIES"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-bold text-neutral-500 border border-neutral-800 rounded px-2 py-1 uppercase"
                onClick={() => setSearchVisible(false)}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Popup>

      <style jsx global>{`
        .adm-mobile-header .adm-nav-bar {
          --adm-nav-bar-background: transparent;
          --adm-color-text: #fff;
        }
        .adm-mobile-header .adm-search-bar {
          --background: #1a1a1a;
          --color: #fff;
          --placeholder-color: #666;
        }
      `}</style>
    </div>,
  );
};
