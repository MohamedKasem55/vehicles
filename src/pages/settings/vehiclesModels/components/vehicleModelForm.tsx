import Button from "@/components/atoms/button";
import SaveIcon from "@/components/atoms/icons/SaveIcon";
import Input from "@/components/atoms/input/input";
import Select from "@/components/atoms/input/select";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  vehicleModel: z
    .string()
    .min(3, "اسم المركبة بالعربي يجب أن يكون 3 أحرف على الأقل"),
  vehicleName: z
    .string()
    .min(3, "اسم المركبة بالانجليزي يجب أن يكون 3 أحرف على الأقل"),
});
const options: React.OptionHTMLAttributes<HTMLOptionElement>[] = [
  { label: "تويوتا", value: "toyota" },
  { label: "هوندا", value: "honda" },
];

export type IVehicleModelForm = z.infer<typeof schema>;

function VehicleModelForm() {
  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
  } = useForm<IVehicleModelForm>({
    defaultValues: {
      vehicleModel: "",
      vehicleName: "",
    },
    resolver: zodResolver(schema),
    mode: "onBlur",
  });
  const onSubmit = (data: IVehicleModelForm) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full bg-white flex flex-col p-5 gap-5 justify-center! items-center!"
    >
      <div className="w-full flex flex-row gap-5">
        <Input
          label="طراز المركبة"
          placeholder="ادخل طراز المركبة"
          registration={register("vehicleModel")}
          error={errors.vehicleModel}
        />
        <Select
          label="اسم المركبة"
          placeholder="ادخل اسم المركبة"
          registration={register("vehicleName")}
          error={errors.vehicleName}
          options={options}
        />
      </div>
      <Button
        disabled={!isValid}
        type="submit"
        label="حفظ"
        icon={<SaveIcon />}
        className="h-10 w-25.25"
      />
    </form>
  );
}

export default VehicleModelForm;
