export default function HeroSection() {
  return (
    <div class="flex flex-col items-center justify-center h-screen">
      <video
        loop
        autoPlay
        playsInline
        muted
        class="h-screen w-screen object-cover absolute top-0 left-0 -z-1"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <img src="/logo-white.png" class="absolute z-10 p-4" />
      <h1>Mountain Of The Lord</h1>
      <h2>Oct 6 - 10, 2025</h2>
    </div>
  );
}
