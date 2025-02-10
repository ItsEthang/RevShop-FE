import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Role } from "../../enums";
import Logo from "../menu/Logo";
import ErrorMessage from "./ErrorMessage";
import InputBox from "./InputBox";
import LinkText from "./LinkText";

interface Inputs {
  username: string;
  password: string;
}

const Login = ({ role }: { role: Role }) => {
  // const [isSubmitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Flex
      direction="column"
      align="center"
      className="h-screen bg-foyellow-500 py-6 border-2 border-solid border-black"
    >
      <Logo />
      <form className="space-y-5 mt-[100px]" onSubmit={handleSubmit(onSubmit)}>
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
          <Button size="3" type="submit" variant="solid">
            Login
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default Login;
