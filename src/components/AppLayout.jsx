import { useState } from "react";
import { Link } from "react-router-dom";

function AppLayout() {
  const [post, setPost] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit() {}

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">Create Post</span>
      </h1>
      <p className="desc text-left">
        Discover and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Image URL:
          </span>

          <input
            type="text"
            placeholder="https://example.com/your-image-url.jpg"
            className="form_input"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Upload File:
          </span>

          <label className="form__file-input">
            Upload
            <input type="file" accept="image/*" className="hidden" />
          </label>
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {isSubmitting ? `isSubmitting...` : "Create"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AppLayout;
