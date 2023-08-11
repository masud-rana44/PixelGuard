function Input({label, type, name, placeholder}) {
  return (
     <div>
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {label}
        </label>
        <input
          type={type}
          name={name}
          id={name}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 active:border-orange-600"
          placeholder={placeholder}
          required
        />
      </div>
  )
}

export default Input