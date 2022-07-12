import { Select as MSelect } from '@mantine/core';

import type { SelectProps } from './Select.types';

export const Select = ({ ...props }: SelectProps) => {
  return <MSelect {...props} />
}