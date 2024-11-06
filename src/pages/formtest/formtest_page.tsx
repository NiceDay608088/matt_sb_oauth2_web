import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

interface Post {
  id: number;
  title: string;
  content: string;
}

const LoginSchema = z.object({
  id: z.number(),
  title: z.string().min(2, { message: "title must be at least 2 characters" }),
  content: z.string().optional(),
});

type LoginSchemaType = z.infer<typeof LoginSchema>;

const FormTestPage = () => {
  const [item, setItem] = useState<Post>({
    id: 0,
    title: "",
    content: "",
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      const m = await fetch("http://localhost:5000/posts").then((r) =>
        r.json()
      );
      console.log("fetched data", m && m[0]);
      setLoading(false);
      setItem(m[0]);
    };
    loadData();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  if (loading) {
    return <div>loading...</div>;
  }

  const onSubmit = (data: LoginSchemaType) => {
    console.log("Form Data:", data);
  };

  const r = uuidv4();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          id="id"
          {...register("id")}
          value={item.id}
          onChange={(e) => setItem({ ...item, id: Number(e.target.value) })}
        />
        <p className=" min-h-6">{errors.id?.message}</p>
        <Input
          id="title"
          {...register("title")}
          value={item.title}
          onChange={(e) => setItem({ ...item, title: e.target.value })}
        />
        <p className=" min-h-6">{errors.title?.message}</p>
        <Input
          id="content"
          {...register("content")}
          value={item.content}
          onChange={(e) => setItem({ ...item, content: e.target.value })}
        />
        <p className=" min-h-6">{errors.content?.message}</p>
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
};

export default FormTestPage;
