import * as React from 'react'
import { useForm } from '@mantine/form';

import { Button } from "src/core/Button/Button"
import { DatePicker } from "src/core/DatePicker/DatePicker"
import { InputField } from "src/core/InputField/InputField"
import { Select } from "src/core/Select/Select"

import { useFetchBoxes } from "./useFetchBoxes"
import { useFetchCategories } from "./useFetchCategories"
import type { CreateFormValue } from './CreateForm.types';

export const CreateFormContainer = () => {
  const { status: categoriesStatus, categoriesList } = useFetchCategories()
  const { status: boxesStatus, boxesList } = useFetchBoxes()
  const form = useForm<CreateFormValue>({
    initialValues: {
      productName: '',
      shortDescription: '',
      quantity: '',
      category: '',
      boxName: '',
      expiryDate: new Date(),
    },
  });

  const isSubmitDisabled = !form.values.productName || !form.values.quantity || !form.values.shortDescription || !form.values.category || !form.values.boxName || !form.values.expiryDate

  return <div>
    <p>Create a new product using form below</p>
    <form aria-label="form">
      <InputField label="Product name" type="text" placeholder="product name" {...form.getInputProps('productName')} required />
      <InputField label="Product short description" type="text" placeholder="short description" {...form.getInputProps('shortDescription')} required />
      <InputField label="Product quantity" type="number" placeholder="quantity" {...form.getInputProps('quantity')} required />
      <Select label="Product category" name="category" placeholder="Select category" data={categoriesList} {...form.getInputProps('category')} disabled={categoriesStatus === 'loading'} />
      <Select label="Product box" name="boxName" placeholder="Select box name" data={boxesList} {...form.getInputProps('boxName')} disabled={boxesStatus === 'loading'} />
      <DatePicker label="Expiry date" name="expiryDate" type="text" placeholder="Expiry date" {...form.getInputProps('shortDescription')} required />

      <Button disabled={isSubmitDisabled}>Create</Button>
    </form>
  </div>
}