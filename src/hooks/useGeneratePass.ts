import { useCallback, useEffect, useState } from "react";

interface stateForm {
  length: number;
  numbers: boolean;
  characters: boolean;
}

const useGeneratePass = () => {
  const [text, setText] = useState<string>("");
  const [form, setForm] = useState<stateForm>({
    length: 8,
    numbers: false,
    characters: false,
  });

  const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => {
      if (e.target.name === "numbers" || e.target.name === "characters")
        return { ...prev, [e.target.name]: e.target.checked };
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const generateAlphabeticPassword = useCallback(() => {
    let alphabet = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    let password = "";
    if (form.numbers) alphabet += "0123456789";
    if (form.characters) alphabet += "!@#$%^&±!@#$%^*()_+";

    for (let i = 0; i < form.length; i++) {
      const randomAlphabetIndex = Math.floor(Math.random() * alphabet.length);
      password += alphabet[randomAlphabetIndex];
    }

    setText(password);
  }, [form]);

  useEffect(() => {
    generateAlphabeticPassword();
  }, [form, generateAlphabeticPassword]);

  return { text, form, handleChangeForm, generateAlphabeticPassword };
};

export default useGeneratePass;
