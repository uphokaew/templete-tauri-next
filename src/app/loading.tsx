export default function Loading() {
    return (
        <div className="fixed w-full h-full z-30 cursor-pointer">
            <div className="absolute w-full h-full inset-0 bg-white opacity-80 " />
            <div className="absolute h-full w-full flex justify-center items-center z-40">
                <p className="text-3xl text-orange-500 animate-bounce">
                    Loadding Page...
                </p>
            </div>
        </div>
    );
}
