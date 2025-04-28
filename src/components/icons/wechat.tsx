import * as React from "react";

export default function WechatIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      {/* 绿色圆角方块背景 */}
      <rect x="4" y="4" width="40" height="40" rx="10" fill="#7BB32E"/>
      {/* 大气泡 */}
      <ellipse cx="22" cy="28" rx="10" ry="8" fill="#fff"/>
      {/* 小气泡 */}
      <ellipse cx="32" cy="20" rx="7" ry="6" fill="#fff"/>
      {/* 大气泡眼睛 */}
      <circle cx="19" cy="28" r="1.2" fill="#000"/>
      <circle cx="25" cy="28" r="1.2" fill="#000"/>
      {/* 小气泡眼睛 */}
      <circle cx="30" cy="20" r="1" fill="#000"/>
      <circle cx="34" cy="20" r="1" fill="#000"/>
    </svg>
  );
} 