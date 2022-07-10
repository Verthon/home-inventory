import { DatePicker } from "src/core/DatePicker/DatePicker"
import { InputField } from "src/core/InputField/InputField"
import { Select } from "src/core/Select/Select"

export const CreateFormContainer = () => {
  return <div>
    <form aria-label="form">
      <InputField label="Product name" type="text" placeholder="product name" />
      <InputField type="text" placeholder="short description" />
      <InputField type="number" placeholder="quantity" />
      <Select name="category" placeholder="Select category" data={[]} />
      <Select name="boxName" placeholder="Select box name" data={[]} />
      <DatePicker name="expiryDate" type="text" placeholder="Expiry date" />
    </form>
  </div>
}