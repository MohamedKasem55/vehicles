import React from "react";
export interface IconConfig {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    width: number;
    height: number;
    strokeWidth?: number;
}
function Icon({ icon: Icon, width, height, strokeWidth }: IconConfig) {
    return <Icon width={width} height={height} strokeWidth={strokeWidth} />;
}

export default Icon;
