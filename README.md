# init the project

```
npm create vite@latest .
```

# install shadcn

```
https://ui.shadcn.com/docs/installation/vite
install step by step
```

# router

```
npm install react-router-dom
```

# icons

```
npm install react-icons
```

# form

```
npm install react-hook-form zod @hookform/resolvers
```

```tsx
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// 1 define scheme
const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "At least one letter"),
});
// 2. ts type
type LoginSchemaType = z.infer<typeof LoginSchema>;

const LoginPage = () => {
  // 3. useForm with ts type and resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({ resolver: zodResolver(LoginSchema) });

  // 4. event onSubmit
  const onSubmit = (data: LoginSchemaType) => {
    console.log("Form Data:", data);
  };

  // 5. UI input
  // 5.1  form `onSubmit={handleSubmit(onSubmit)}`
  // 5.2  register field  `{...register("email")}`
  // 5.3  error `{errors.email ? errors.email.message : " "}`
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email:</label>
      <Input id="email" {...register("email")} />
      <p style={{ color: "red", minHeight: "1.5em" }}>
        {errors.email ? errors.email.message : " "}
      </p>

      <Button type="submit"> Submit </Button>
    </form>
  );
};
```

# form must put outside of div which with flex

```css
/* gap 生效， 1,2,3 之间间隔是 2 */
<form>
    <div className="flex flex-col gap-2">
        <...1...>
        <...2...>
        <...3...>
    </div>
</form>

/* gap 失效 1,2,3 之间间隔是 0 */
<div className="flex flex-col gap-2">
    <form>
        <...1...>
        <...2...>
        <...3...>
    </form>
</div>
```

# useEffect

useEffect runs on the initial render, even if dependencies are added.
To prevent this, leverages conditional checks directly in useEffect.

# UI jump

prevent UI from jumping by reserving space for the error message

- `min-height`

```html
<p className=" text-red-500 min-h-6"></p>
<p style={{ color: "red", minHeight: "1.5em" }}></p>
```
