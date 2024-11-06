import Oauth2Button from "@/components/login/Oauth2Button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "At least one letter"),
});

type LoginSchemaType = z.infer<typeof LoginSchema>;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginSchemaType) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="w-screen px-5 flex flex-col gap-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <div>
            <label htmlFor="email">Email:</label>
            <Input id="email" {...register("email")} />
            <p className=" text-red-500 min-h-6">
              {errors.email ? errors.email.message : " "}
            </p>
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Input id="password" type="password" {...register("password")} />
            <p className=" text-red-500 min-h-6">
              {errors.password ? errors.password.message : " "}
            </p>
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </div>
      </form>
      <div className="gap-4 flex">
        <Oauth2Button
          title="Google"
          url="http://localhost:8080/api/v1/oauth2/authorize/google"
        />
        <Oauth2Button
          title="Github"
          url="http://localhost:8080/api/v1/oauth2/authorize/github"
        />
      </div>
    </div>
  );
};

export default LoginPage;
