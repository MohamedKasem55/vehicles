import React from "react";
import { FieldLabel } from "@/components/atoms/field";
import { Input } from "@/components/atoms/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  username: z.string().min(3, "اسم المستخدم يجب أن يكون 3 أحرف على الأقل"),
  password: z.string().min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل"),
});

type FormData = z.infer<typeof schema>;

function Login() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors ,isValid},
  } = useForm<FormData>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(schema),
    mode:'onBlur'
  });
  const submitHandler = ()=>{
    navigate("/dashboard")
  }
  return (
    <div className="bg-[#104731] w-full flex-1 flex flex-col items-center justify-center">
      <div className="bg-[#F1F1F2] rounded-lg flex flex-col items-center justify-center p-10 g-2 m-w-[370px]">
        <div className="text-[#104731] font-[Inter] font-bold text-5xl ">
          نظام المركبات
        </div>
        <div className="text-[#436D5D] font-[Inter] font-bold text-[32px] ">
          تسجيل الدخول
        </div>
        <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit(submitHandler,submitHandler)}>
          <div className="flex flex-col gap-1">
            <FieldLabel
              htmlFor="username"
              className="text-[#154130] font-medium font-[tajwal] text-[16px] leading-[100%] tracking-[-0.28px]"
            >
              اسم المستخدم :
            </FieldLabel>
            <Input
              {...register("username")}
              id="username"
              type="text"
              placeholder="اسم المستخدم"
              className={`w-full h-[45px] rounded-[14px] bg-white placeholder:text-gray 
                ${!errors.username?'border-2 border-[#E2E6E7]':'border border-red-500'}`}
            />
            {errors.username && (
              <span className="text-red-500 text-sm text-right">
                {errors.username.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <FieldLabel
              htmlFor="username"
              className="text-[#154130] font-medium font-[tajwal] text-[16px] leading-[100%] tracking-[-0.28px] "
            >
              {" "}
              كلمة المرور :
            </FieldLabel>
            <Input
              {...register("password")}
              id="password"
              type="password"
              placeholder="كلمة المرور"
              className={`w-full h-[45px] rounded-[14px] bg-white placeholder:text-gray 
                ${!errors.password?'border-2 border-[#E2E6E7]':'border border-red-500'}`}
            />
            {errors.password && (
              <span className="text-red-500 text-sm text-right">
                {errors.password.message}
              </span>
            )}
          </div>
        <button disabled={!isValid && false} type="submit" className="w-full h-[46px] !bg-[#104731] text-white
         disabled:!bg-gray-300 disabled:!text-gray-500 disabled:!cursor-not-allowed hover:opacity-70
         shadow-lg shadow-gray-500/50   hover:shadow-xl hover:shadow-gray-600/50  transition-shadow
         ">
          تسجيل الدخول
        </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
