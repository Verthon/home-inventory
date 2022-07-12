import * as React from 'react'
import { useForm } from '@mantine/form';

import { Button } from "src/core/Button/Button"
import { DatePicker } from "src/core/DatePicker/DatePicker"
import { InputField } from "src/core/InputField/InputField"
import { Select } from "src/core/Select/Select"

import { useFetchBoxes } from "./useFetchBoxes"
import { useFetchCategories } from "./useFetchCategories"
import type { CreateFormValues } from './CreateForm.types';
import { useCreateProduct } from './useCreateProduct';
import type { AddProductPayload } from 'src/lib/supabase/supabaseClient';
import dayjs from 'dayjs';

export const CreateFormContainer = () => {
  const { status: categoriesStatus, categoriesList } = useFetchCategories()
  const { status: boxesStatus, boxesList } = useFetchBoxes()
  const { status: createProductStatus, mutate: createProduct } = useCreateProduct()
  const form = useForm<CreateFormValues>({
    initialValues: {
      productName: '',
      shortDescription: '',
      quantity: '',
      category: '',
      boxName: '',
      expiryDate: new Date(),
    },
  });

  const getCreateProductPayload = (values: CreateFormValues): AddProductPayload => {
    return {
      name: values.productName,
      short_description: values.shortDescription,
      quantity: Number(values.quantity),
      category_id: Number(values.category),
      box_id: Number(values.boxName),
      expiry_date: dayjs(values.expiryDate).format('yyyy-mm-dd'),
    }
  }

  const handleSubmit = (values: CreateFormValues) => {
    const formattedPayload = getCreateProductPayload(values);
    createProduct(formattedPayload)
  }
  const isSubmitDisabled = !form.values.productName || !form.values.quantity || !form.values.shortDescription || !form.values.category || !form.values.boxName || !form.values.expiryDate

  return <div>
    <p>Create a new product using form below</p>
    <form aria-label="form" onSubmit={form.onSubmit(handleSubmit)}>
      <InputField label="Product name" type="text" placeholder="product name" {...form.getInputProps('productName')} required />
      <InputField label="Product short description" type="text" placeholder="short description" {...form.getInputProps('shortDescription')} required />
      <InputField label="Product quantity" type="number" placeholder="quantity" {...form.getInputProps('quantity')} required />
      <Select label="Product category" name="category" placeholder="Select category" data={categoriesList} {...form.getInputProps('category')} disabled={categoriesStatus === 'loading'} required />
      <Select label="Product box" name="boxName" placeholder="Select box name" data={boxesList} {...form.getInputProps('boxName')} disabled={boxesStatus === 'loading'} required />
      <DatePicker label="Expiry date" name="expiryDate" type="text" placeholder="Expiry date" {...form.getInputProps('expiryDate')} required />

      <Button type="submit" disabled={isSubmitDisabled} loading={createProductStatus === 'loading'}>Create</Button>
    </form>
  </div>
}