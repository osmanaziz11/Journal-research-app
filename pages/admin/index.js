import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';

function Login() {
  const userRef = useRef(null);
  const passRef = useRef(null);
  const [error, setError] = useState(false);
  const router = useRouter();
  const handleSubmit = () => {
    if (
      userRef.current.value === 'admin' &&
      passRef.current.value === 'admin'
    ) {
      router.replace('/admin/dashboard');
    } else {
      setError(true);
    }
  };

  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 text-white">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight texg">
          Admin Panel
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm shadow p-3 text-white">
        <form class="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label for="email" class="block text-sm font-medium leading-6 ">
              Username
            </label>
            <div class="mt-2">
              <input
                ref={userRef}
                name="email"
                type="text"
                autocomplete="email"
                required
                class="block w-full rounded px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 outline-none"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 "
              >
                Password
              </label>
              <div class="text-sm">
                <a
                  href="#"
                  class="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div class="mt-2">
              <input
                ref={passRef}
                name="email"
                type="password"
                autocomplete="email"
                required
                class="block w-full rounded px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 outline-none"
              />
            </div>
          </div>
          {error && (
            <p className="font-medium text-red-600">
              Invalid Username & Password
            </p>
          )}
          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 "
              onClick={handleSubmit}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
