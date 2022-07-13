import type { AvatarProps as MAvatarProps } from "@mantine/core";

export type AvatarProps = {
  size?: MAvatarProps<unknown>['size']
  radius?: MAvatarProps<unknown>['radius']
  src?: MAvatarProps<unknown>['src']
  children?: MAvatarProps<unknown>['children']
  className?: MAvatarProps<unknown>['className']
};