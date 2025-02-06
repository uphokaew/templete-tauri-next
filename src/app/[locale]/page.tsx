'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { invoke } from '@tauri-apps/api/core';
import Footer from '@/components/Layout/footer';

export default function HomePage() {
	const [message, setMessage] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);

	async function greet() {
		if (inputRef.current) {
			const response = await invoke('greet', {
				name: inputRef.current.value,
			});
			setMessage(response as string);
		}
	}

	return (
		<div className="mx-auto">
			<div className="h-screen flex flex-col justify-center items-center gap-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
				<div className="flex items-center gap-8">
					<Image src="/tauri.svg" className="w-20 md:w-32" width={200} height={200} alt="Tauri logo" />
					<p className="text-4xl text-white font-bold">X</p>
					<Image src="/next-js-seeklogo.svg" className="w-20 md:w-32" width={200} height={200} alt="Next.js logo" />
				</div>

				<div className="flex flex-col justify-center items-center bg-white bg-opacity-60 p-8 rounded-xl shadow-lg">
					<div className="flex w-full gap-4 justify-center items-center mb-6">
						<input
							ref={inputRef}
							type="text"
							placeholder="Enter your name"
							className="p-2 border rounded-md w-48 md:w-72"
						/>
						<button onClick={greet} className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
							Check
						</button>
					</div>
					{message && <p className="mt-4 text-lg text-gray-800">{message}</p>}
				</div>
			</div>
			<Footer />
		</div>
	);
}
