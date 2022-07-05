import { Container as MContainer } from "@mantine/core"

import type { ContainerProps } from "./Container.types"

export const Container = ({children}: ContainerProps) => {
  return <MContainer>{children}</MContainer>
}