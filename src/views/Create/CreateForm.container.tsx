import { Button } from "src/core/Button/Button"
import { DatePicker } from "src/core/DatePicker/DatePicker"
import { InputField } from "src/core/InputField/InputField"
import { Select } from "src/core/Select/Select"

export const CreateFormContainer = () => {
  const categoriesOptions = [
    {
      label: 'Jams',
      value: '1',
    },
    {
      label: 'Honeys',
      value: '2',
    }
  ]
  const boxesOptions = [
    {
      label: "A1",
      value: '1'
    }
  ]

  return <div>
    <p>Create a new product using form below</p>
    <form aria-label="form">
      <InputField label="Product name" type="text" placeholder="product name" />
      <InputField label="Product short description" type="text" placeholder="short description" />
      <InputField label="Product quantity" type="number" placeholder="quantity" />
      <Select label="Product category" name="category" placeholder="Select category" data={categoriesOptions} />
      <Select label="Product box" name="boxName" placeholder="Select box name" data={boxesOptions} />
      <DatePicker label="Expiry date" name="expiryDate" type="text" placeholder="Expiry date" />

      <Button disabled>Create</Button>
    </form>
  </div>
}