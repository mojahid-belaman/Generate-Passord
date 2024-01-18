import FormGeneratePass from "./FormGeneratePass";

function GeneratePassword() {
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-xl text-white tracking-wider border p-2 rounded">Password Generator</h1>
      <FormGeneratePass />
    </div>
  );
}

export default GeneratePassword;
