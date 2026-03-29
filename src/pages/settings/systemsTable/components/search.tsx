import Button from "@/components/atoms/button";
import PlusIcon from "@/components/atoms/icons/PlusIcon";
import Select from "@/components/atoms/input/select";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function Search() {
const options: React.OptionHTMLAttributes<HTMLOptionElement>[] = [
  { label: "أحمر", value: "red" },
  { label: "أصفر", value: "yellow" },
  { label: "أخضر", value: "green" },
  { label: "أسود", value: "black" },
];

  const [loading, setLoading] = useState<boolean>(false)
  const { register, watch } = useForm({
    defaultValues: {
      color: "",
    },
  });

  useEffect(() => {

  }, [watch("color")]);

  return (
    <div className="w-full border-[#E5E7EB] border rounded-[5px]
     bg-white flex flex-row justify-between
     p-5 gap-5
     ">
      <Button loading={loading} label="إضافة" icon={<PlusIcon/>} iconPosition="right" loaderPosition="left"/>
      <Select options={options} registration={register("color")} placeholder="بحث في الألوان" />
    </div>
  );
}

export default Search;
