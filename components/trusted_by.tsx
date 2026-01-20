export function TrustedBy() {
    return (
      <div className="flex items-center gap-4 pt-4">
        <div className="flex -space-x-2">
        {[1, 2, 3, 4].map((i) => (
            <div
            key={i}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF5733] to-orange-600 border-2 border-black"
            />
        ))}
        </div>
        <div className="text-sm">
        <div className="text-white font-semibold">Trusted by 1000+</div>
        <div className="text-white/60">fitness enthusiasts</div>
        </div>
    </div>
    );
}