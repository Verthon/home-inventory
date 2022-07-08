import { Skeleton as MSkeleton } from "@mantine/core"
import { SkeletonProps } from "./Skeleton.types"

export const Skeleton = ({ children, ...props }: SkeletonProps) => {
  if (children) {
    return <MSkeleton role='progressbar' {...props} >{children}</MSkeleton>
  }

  return <MSkeleton role='progressbar' {...props} />
}