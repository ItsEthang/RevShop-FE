import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Role } from "../../enums";
import apiClient from "../../services/api-client";
import Logo from "../menu/Logo";
import ErrorCallout from "./ErrorCallout";
import ErrorMessage from "./ErrorMessage";
import InputBox from "./InputBox";
import LinkText from "./LinkText";

interface Inputs {
  username: string;
  password: string;
}

interface Token {
  token: string;
}

const Login = ({ role }: { role: Role }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setSubmitting(true);
      const response = await apiClient.post<Token>("/auth/login", data);
      console.log(response.data.token);
      navigate("/products");
    } catch {
      setError("Due to an error. You cannot login at this time");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Flex
      direction="column"
      align="center"
      className="h-screen bg-foyellow-500 py-6 border-2 border-solid border-black"
    >
      <Logo />

      <form className="space-y-5 mt-[100px]" onSubmit={handleSubmit(onSubmit)}>
        {error && <ErrorCallout error={error} />}
        <Flex align="center" justify="center" direction="column" gap="5">
          <Text className="font-extrabold text-xl">
            {role === Role.BUYER ? "Shopper Login" : "Seller Login"}
          </Text>
          <InputBox>
            <TextField.Root
              size="3"
              defaultValue=""
              placeholder="Enter your username"
              {...register("username", { required: true })}
            ></TextField.Root>
            <ErrorMessage>{errors.username?.message}</ErrorMessage>
          </InputBox>
          <InputBox>
            <TextField.Root
              size="3"
              defaultValue=""
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            ></TextField.Root>
            <ErrorMessage>{errors.username?.message}</ErrorMessage>
          </InputBox>
          <Link
            to={`/${
              role === Role.BUYER ? "register/buyer" : "register/seller"
            }`}
          >
            <LinkText>
              {role === Role.BUYER ? "Shopper" : "Seller"}? Register here!
            </LinkText>
          </Link>
          <Button size="3" type="submit" variant="solid" loading={isSubmitting}>
            Login
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default Login;
