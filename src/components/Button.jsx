function Button({ text, ...rest }) {
  return (
    <button
      type="submit"
      className="w-full text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      {...rest}
    >
      {text}
    </button>
  );
}

export default Button;
