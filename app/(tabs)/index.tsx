import { FC, useState } from "react";
import { Alert, KeyboardAvoidingView, Platform } from "react-native";

import { VStack } from "@/components/ui/vstack";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlError,
  FormControlErrorText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const TabOneScreen: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const nameError = name.trim().length < 2 ? "Введите минимум 2 символа" : "";
  const emailError =
    email && !emailRe.test(email) ? "Неверный формат email" : "";
  const isValid = !nameError && !emailError && name.trim() && email.trim();

  const onSubmit = () => {
    setSubmitted(true);
    if (!isValid) return;
    Alert.alert("OK", `Name: ${name}\nEmail: ${email}`);
    setName("");
    setEmail("");
    setSubmitted(false);
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white"
      behavior={Platform.select({ ios: "padding", android: undefined })}
    >
      <VStack className="flex-1 px-6 py-8 gap-6">
        <Text className="text-2xl font-semibold">Demo Form (gluestack-ui)</Text>

        <FormControl isInvalid={!!nameError && submitted}>
          <FormControlLabel>
            <FormControlLabelText>Имя</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              value={name}
              onChangeText={setName}
              placeholder="Ваше имя"
              returnKeyType="next"
            />
          </Input>
          {!!nameError && submitted && (
            <FormControlError>
              <FormControlErrorText>{nameError}</FormControlErrorText>
            </FormControlError>
          )}
        </FormControl>

        <FormControl isInvalid={!!emailError && submitted}>
          <FormControlLabel>
            <FormControlLabelText>Email</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              value={email}
              onChangeText={setEmail}
              placeholder="you@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="done"
              onSubmitEditing={onSubmit}
            />
          </Input>
          {!!emailError && submitted && (
            <FormControlError>
              <FormControlErrorText>{emailError}</FormControlErrorText>
            </FormControlError>
          )}
        </FormControl>

        <Button className="mt-2" isDisabled={!isValid} onPress={onSubmit}>
          <ButtonText>Отправить</ButtonText>
        </Button>
      </VStack>
    </KeyboardAvoidingView>
  );
};

export default TabOneScreen;
