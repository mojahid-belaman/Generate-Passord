import { FC, useCallback, useRef } from "react";
import useGeneratePass from "../hooks/useGeneratePass";

const FormGeneratePass: FC = () => {
  const refText = useRef<HTMLInputElement>(null);
  const { text, form, handleChangeForm } = useGeneratePass();

  const copyText = useCallback(() => {
    refText.current?.select();
    navigator.clipboard.writeText(refText.current?.value || "");
  }, []);

  return (
    <form className="flex flex-col gap-10">
      <div className="flex">
        <input
          ref={refText}
          type="text"
          placeholder="Create Password"
          className="flex-1 w-full px-2 rounded-tl-lg rounded-bl-lg outline-none"
          value={text}
          readOnly
        />
        <button
          type="button"
          className="bg-blue-950 hover:bg-blue-800 text-white px-4 py-1 font-semibold rounded-tr-lg rounded-br-lg outline-none"
          onClick={copyText}
        >
          copy
        </button>
      </div>
      <div className="text-orange-500 flex gap-5">
        <div className="flex items-center gap-1">
          <input
            id="length"
            name="length"
            type="range"
            min={0}
            max={30}
            step={1}
            value={form.length}
            onChange={handleChangeForm}
          />
          <label htmlFor="length" className="w-20">
            Length: {form.length}
          </label>
        </div>
        <div className="flex items-center gap-1">
          <input
            id="numbers"
            name="numbers"
            type="checkbox"
            checked={form.numbers}
            onChange={handleChangeForm}
          />
          <label htmlFor="numbers">Numbers</label>
        </div>
        <div className="flex items-center gap-1">
          <input
            id="characters"
            name="characters"
            type="checkbox"
            checked={form.characters}
            onChange={handleChangeForm}
          />
          <label htmlFor="characters">Characters</label>
        </div>
      </div>
    </form>
  );
};

export default FormGeneratePass;
