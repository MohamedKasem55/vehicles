import Button from "@/components/atoms/button";
import SaveIcon from "@/components/atoms/icons/SaveIcon";
import Input from "@/components/atoms/input/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {z} from "zod";

const schema = z.object({
  vehicleArName: z
    .string()
    .min(3, "اسم المركبة بالعربي يجب أن يكون 3 أحرف على الأقل"),
  vehicleEnName: z
    .string()
    .min(3, "اسم المركبة بالانجليزي يجب أن يكون 3 أحرف على الأقل"),
});

export type IVehicleCompanyForm = z.infer<typeof schema>;

function VehicleComapnyForm() {
  const { 
    formState: { errors, isValid },
    register,
     handleSubmit
     } = useForm<IVehicleCompanyForm>({
    defaultValues: {
      vehicleArName: "",
      vehicleEnName: "",
    },
    resolver: zodResolver(schema),
    mode:"onBlur"
  });
  const onSubmit = (data: IVehicleCompanyForm) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full bg-white flex flex-col p-5 gap-5 justify-center! items-center!"
    >
      <div className="w-full flex flex-row gap-5">
        <Input
          label="اسم المركبة بالعربي"
          placeholder="ادخل اسم المركبة بالعربي"
          registration={register("vehicleArName")}
          error={errors.vehicleArName}
        />
        <Input
          label="اسم لمركبة بالانجليزي"
          placeholder="ادخل اسم المركبة بالانجليزي"
          registration={register("vehicleEnName")}
          error={errors.vehicleEnName}

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

export default VehicleComapnyForm;
