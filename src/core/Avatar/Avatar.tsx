import { Avatar as MAvatar } from "@mantine/core"

import type { AvatarProps } from "./Avatar.types"

export const Avatar = ({ radius, size, src, children, className }: AvatarProps) => {
  if (children) {
    return <MAvatar radius={radius} size={size} src={src} className={className}>{children}</MAvatar>
  }
  return <MAvatar radius={radius} size={size} src={src} className={className} />
}