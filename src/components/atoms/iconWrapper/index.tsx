import React from "react";
import Icon, { IconConfig } from "../icon";
export interface IconWrapperConfig {
  iconConfig: IconConfig;
  customClasses: string;
}
function IconWrapper({ iconConfig, customClasses }: IconWrapperConfig) {
  return (
    <div
      className={`${customClasses} flex flex-row items-center justify-center`}
    >
      <Icon
        icon={iconConfig.icon}
        width={iconConfig.width}
        height={iconConfig.height}
        strokeWidth={iconConfig.strokeWidth}
      />
    </div>
  );
}

export default IconWrapper;
