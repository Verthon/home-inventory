import * as React from "react";
import { useForm, zodResolver } from "@mantine/form";
import dayjs from "dayjs";
import { z } from 'zod';

import type { AddProductPayload } from "src/lib/supabase/supabaseClient";
import { Button } from "src/core/Button/Button";
import { DatePicker } from "src/core/DatePicker/DatePicker";
import { InputField } from "src/core/InputField/InputField";
import { NumberInputField } from "src/core/NumberInputField/NumberInputField";
import { Select } from "src/core/Select/Select";

import { useFetchBoxes } from "./useFetchBoxes";
import { useFetchCategories } from "./useFetchCategories";
import type { CreateFormValues } from "./CreateForm.types";
import { useCreateProduct } from "./useCreateProduct";

export const CreateFormContainer = () => {
  const { status: categoriesStatus, categoriesList } = useFetchCategories();
  const { status: boxesStatus, boxesList } = useFetchBoxes();
  const { status: createProductStatus, mutate: createProduct } =
    useCreateProduct();
  const schema = z.object({
    productName: z.string().min(2, { message: 'Name should have at least 2 letters' }),
    shortDescription: z.string().min(15, { message: 'Short description should have at lease 15 letters' }).max(250, { message: 'Max 250 characters is supported for description' }),
    quantity: z.number().min(1, { message: 'You have to add at least one product' }).max(100, { message: 'Max 100 products is supported for one product' }),
  });
  const form = useForm<CreateFormValues>({
    schema: zodResolver(schema),
    initialValues: {
      productName: "",
      shortDescription: "",
      quantity: "",
      category: "",
      boxName: "",
      expiryDate: new Date(),
    },
  });

  const getCreateProductPayload = (
    values: CreateFormValues
  ): AddProductPayload => {
    return {
      name: values.productName,
      short_description: values.shortDescription,
      quantity: Number(values.quantity),
      category_id: Number(values.category),
      box_id: Number(values.boxName),
      expiry_date: dayjs(values.expiryDate).format("yyyy-mm-dd"),
    };
  };

  const handleSubmit = (values: CreateFormValues) => {
    const formattedPayload = getCreateProductPayload(values);
    createProduct(formattedPayload);
  };

  const isProductSubmitting = createProductStatus === 'loading'
  const isBoxSelectDisabled = isProductSubmitting || boxesStatus === 'loading'
  const isCategorySelectDisabled = isProductSubmitting || categoriesStatus === 'loading'

  const handleInputValidation = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const inputName = e.target.name
    form.validateField(inputName)
  }

  const isSubmitDisabled =
    !form.values.productName ||
    !form.values.quantity ||
    !form.values.shortDescription ||
    !form.values.category ||
    !form.values.boxName ||
    !form.values.expiryDate;

  return (
    <div>
      <p>Create a new product, all fields are mandatory</p>
      <form aria-label="form" onSubmit={form.onSubmit(handleSubmit)}>
        <InputField
          label="Product name"
          name="productName"
          type="text"
          placeholder="Product name"
          {...form.getInputProps("productName")}
          disabled={isProductSubmitting}
          required
          onBlur={handleInputValidation}
        />
        <InputField
          label="Product short description"
          type="text"
          name="shortDescription"
          placeholder="Short description"
          disabled={isProductSubmitting}
          {...form.getInputProps("shortDescription")}
          required
          onBlur={handleInputValidation}
        />
        <NumberInputField
          label="Product quantity"
          placeholder="Quantity"
          name="quantity"
          {...form.getInputProps("quantity")}
          disabled={isProductSubmitting}
          required
          onBlur={handleInputValidation}
        />
        <Select
          label="Product category"
          name="category"
          placeholder="Select category"
          data={categoriesList}
          {...form.getInputProps("category")}
          disabled={isCategorySelectDisabled}
          required
        />
        <Select
          label="Product box"
          name="boxName"
          placeholder="Select box name"
          data={boxesList}
          {...form.getInputProps("boxName")}
          disabled={isBoxSelectDisabled}
          required
        />
        <DatePicker
          label="Expiry date"
          name="expiryDate"
          type="text"
          placeholder="Expiry date"
          {...form.getInputProps("expiryDate")}
          disabled={isProductSubmitting}
          minDate={dayjs().toDate()}
          required
        />

        <Button
          type="submit"
          disabled={isSubmitDisabled}
          loading={isProductSubmitting}
        >
          Create
        </Button>
      </form>
    </div>
  );
};
