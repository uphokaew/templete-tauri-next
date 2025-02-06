'use client';

import { redirect } from 'next/navigation';

export default function NotFound() {
    return (
        <div className="w-full h-screen flex flex-col gap-4 justify-center items-center ">
            <div className="flex flex-col gap-3 justify-center items-center">
                <p className="text-4xl">404</p>
                <p className="text-xl">Page Not Found!</p>
                <button
                    className="px-4 py-2 my-4 text-white bg-red-500 rounded-md"
                    onClick={() => redirect('/')}
                >
                    Back to page
                </button>
            </div>
        </div>
    );
}
