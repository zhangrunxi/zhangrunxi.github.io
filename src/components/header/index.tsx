"use client";

import Link from "next/link";
import { NavDesktopMenu } from "./nav-desktop-menu";
import { NavMobileMenu } from "./nav-mobile-menu";
import GithubIcon from "@/components/icons/github";
import XiaohongshuIcon from "@/components/icons/xiaohongshu";
import XIcon from "@/components/icons/x";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
//import { SquareTerminal } from "lucide-react";
import { config } from "@/lib/config";
import WechatIcon from "@/components/icons/wechat";
import { useState } from "react";

export function Header() {
  const [showWechat, setShowWechat] = useState(false);
  const pathname = usePathname();
  const isBlogPage = pathname.includes("/blog/");

  const socialLinks = [
    { title: "Github", key: "github", icon: <GithubIcon /> },
    { title: "X", key: "x", icon: <XIcon /> },
    { title: "Xiaohongshu", key: "xiaohongshu", icon: <XiaohongshuIcon /> },
  ]
    .map(item => ({
      title: item.title,
      href: config.social && config.social[item.key as keyof typeof config.social],
      icon: item.icon
    }))
    .filter(link => !!link.href);

  return (
    <header className="pt-4">
      <motion.div
        initial={{ maxWidth: "48rem" }}
        animate={{ maxWidth: isBlogPage ? "72rem" : "48rem" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={cn("container mx-auto flex h-16 items-center justify-between md:px-4", isBlogPage ? "max-w-4xl xl:max-w-6xl" : "max-w-3xl")}
      >
        {/* Mobile navigation */}
        <NavMobileMenu />

        {/* Logo */}
        <Link href="/" title="Home" className="flex items-center gap-4 md:order-first">
          <img
            src={config.author.avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover border border-gray-200 shadow"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:block">
          <NavDesktopMenu />
        </div>

        {/* Right side buttons */}
        <div className="flex items-center space-x-2 md:space-x-8 mr-4">
          {socialLinks.map((link) => (
            <Link key={link.title} href={link.href} title={link.title}>
              {link.icon}
            </Link>
          ))}
          {/* WeChat icon button */}
          {config.social.wechat && (
            <button
              type="button"
              title="微信公众号"
              onClick={() => setShowWechat(true)}
              className="focus:outline-none"
            >
              <WechatIcon className="w-7 h-7" />
            </button>
          )}
        </div>
      </motion.div>
      {/* WeChat QR Modal */}
      {showWechat && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setShowWechat(false)}>
          <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <img src={config.social.wechat} alt="微信公众号二维码" className="w-48 h-48 object-contain mb-2" />
            <div className="text-center text-gray-700">扫码关注我的微信公众号</div>
            <button className="mt-4 px-4 py-1 rounded bg-gray-200 hover:bg-gray-300 text-gray-700" onClick={() => setShowWechat(false)}>关闭</button>
          </div>
        </div>
      )}
    </header >
  );
}
