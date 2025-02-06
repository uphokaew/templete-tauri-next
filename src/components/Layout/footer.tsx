import Link from "next/link";

export default function Footer() {
	return (
		<footer className="p-4 text-center bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
			<p className="text-md">
				Create by Github <Link href="https://github.com/uphokaew/" className="underline">uphokaew</Link>
			</p>
		</footer>
	);
}