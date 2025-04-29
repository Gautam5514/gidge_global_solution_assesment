import { useState } from "react";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";

function Home() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-6">Welcome to Task Tracker</h1>

            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                {isLogin ? <Login /> : <Signup />}
                <p className="mt-4 text-center text-sm text-gray-600">
                    {isLogin ? (
                        <>
                            Don't have an account?{" "}
                            <button
                                className="text-blue-600 hover:underline"
                                onClick={() => setIsLogin(false)}
                            >
                                Sign up
                            </button>
                        </>
                    ) : (
                        <>
                            Already have an account?{" "}
                            <button
                                className="text-blue-600 hover:underline"
                                onClick={() => setIsLogin(true)}
                            >
                                Login
                            </button>
                        </>
                    )}
                </p>
            </div>
        </div>
    );
}

export default Home;
