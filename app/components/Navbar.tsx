export default function Navbar() {
  return (
    <header className="backdrop-blur-sm bg-black/30 text-white sticky top-0 z-10">
      {/* Section */}
      <section className="container mx-auto max-w-screen-lg p-4 flex justify-center items-center">
        <h1 className="text-3xl font-medium">
          <a href="#">Next Blog</a>
        </h1>
      </section>
      {/* End Section */}
    </header>
  );
}
