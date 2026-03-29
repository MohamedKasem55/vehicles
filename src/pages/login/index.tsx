import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import Input from "@/components/atoms/input/input";
import Button from "@/components/atoms/button";

const schema = z.object({
  username: z.string().min(3, "اسم المستخدم يجب أن يكون 3 أحرف على الأقل"),
  password: z.string().min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل"),
});

type FormData = z.infer<typeof schema>;

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(schema),
    mode: "onBlur",
  });
  const submitHandler = () => {
    navigate("/dashboard");
  };
  return (
    <div className="bg-[#104731] w-full flex-1 flex flex-col items-center justify-center">
      <div className="bg-[#F1F1F2] rounded-lg flex flex-col items-center justify-center p-10 g-2 m-w-[370px]">
        <div className="text-[#104731] font-[Inter] font-bold text-5xl ">
          نظام المركبات
        </div>
        <div className="text-[#436D5D] font-[Inter] font-bold text-[32px] ">
          تسجيل الدخول
        </div>
        <form
          className="flex flex-col gap-6 w-full"
          onSubmit={handleSubmit(submitHandler, submitHandler)}
        >
          <div className="flex flex-col gap-1">
            <Input
              label=" اسم المستخدم :"
              type="text"
              registration={register("username")}
              placeholder="اسم المستخدم"
              labelCustomClasses="!text-[#154130] "
              inputCustomClasses={`w-full h-[45px] border-2 border-[#E2E6E7]`}
              error={errors.username}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Input
              registration={register("password")}
              type="password"
              label="كلمة المرور :"
              placeholder="كلمة المرور"
              labelCustomClasses="!text-[#154130] "
              inputCustomClasses={`w-full h-[45px] border-2 border-[#E2E6E7]`}
              error={errors.username}
            />
          </div>
          <Button
            disabled={!isValid && false}
            type="submit"
            label="تسجيل الدخول"
            className="w-full h-[46px] bg-[#104731]! shadow-lg shadow-gray-500/50  transition-shadow"
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
