"use client";

import { styles } from "@/constants/styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Control, Controller, FieldPath, useForm } from "react-hook-form";
import { Pressable, ScrollView, Text, TextInput } from "react-native";
import { z } from "zod";

const schema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(2, { error: "First name must be at least 2 Characters" })
      .max(30, { error: "First name must be under 30 characters" }),
    lastName: z
      .string()
      .trim()
      .min(2, { error: "Last name must be at least 2 Characters" })
      .max(30, { error: "Last name must be under 30 characters" }),
    email: z.email({ error: "This is not a valid email format" }).trim(),
    password: z
      .string()
      .min(8, { error: "Password must be at least 8 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.confirmPassword === data.password, {
    error: "Passwords must match",
    path: ["confirmPassword"],
  });

type data = z.infer<typeof schema>;

type FieldProps = {
  control: Control<data>;
  name: FieldPath<data>;
  placeholder: string;
  secure?: boolean;
  email?: boolean;
};

function Field({ control, name, placeholder, secure, email }: FieldProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            secureTextEntry={secure}
            keyboardType={email ? "email-address" : "default"}
            autoCapitalize={email ? "none" : "sentences"}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
          {error && <Text style={styles.errorText}>{error.message}</Text>}
        </>
      )}
    />
  );
}

export function SignUpForm() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const { control, handleSubmit, reset } = useForm<data>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit({ firstName, lastName, email }: data) {
    console.log("Submitted for:", firstName, lastName, "\nEmail: ", email);
    router.push({
      pathname: "./confirmation",
      params: { name: firstName },
    });
    reset();
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Create Account</Text>
      <Field control={control} name="firstName" placeholder="First name" />
      <Field control={control} name="lastName" placeholder="Last name" />
      <Field control={control} name="email" placeholder="Email" email />
      <Field control={control} name="password" placeholder="Password" secure />
      <Field
        control={control}
        name="confirmPassword"
        placeholder="Confirm password"
        secure
      />
      <Pressable
        onPress={handleSubmit(onSubmit)}
        onHoverIn={() => setIsHovered(true)}
        onHoverOut={() => setIsHovered(false)}
        style={[styles.button, isHovered && styles.hover]}
      >
        <Text style={styles.buttonText}> Sign Up </Text>
      </Pressable>
    </ScrollView>
  );
}
