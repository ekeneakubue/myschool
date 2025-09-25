import HeroBackgroundClient from "./components/HeroBackgroundClient";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative isolate">
          <HeroBackgroundClient
            images={[
              { src: "/images/gv1.jpg", alt: "Graceville campus graphic 1" },
              { src: "/images/gv2.jpeg", alt: "Graceville campus graphic 2" },
              { src: "/images/gv1.jpg", alt: "Graceville campus graphic 3" },
            ]}
            intervalMs={5000}
          />
          <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
            <p className="text-sm uppercase tracking-wider text-emerald-200 font-semibold drop-shadow">
              Welcome To
            </p>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow">
              Graceville Elementary School Nsukka
            </h1>
            <p className="mt-4 max-w-2xl text-neutral-100 drop-shadow">
              Our learning environment is the best around Nsukka.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-white hover:bg-emerald-700"
              >
                Contact Us
          </a>
          <a
                href="#about"
                className="inline-flex items-center rounded-full border border-white/80 px-6 py-3 text-white hover:bg-white/10"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision History */}
      <section id="about" className="py-14 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="text-2xl font-bold">Mission</div>
            <p className="mt-3 text-sm text-neutral-700">
              We are committed to provide quality education whose standard is
              second to none in a secure, supportive and stimulating learning
              environment for children in the age range of 2.6 to 11.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="text-2xl font-bold">Vision</div>
            <p className="mt-3 text-sm text-neutral-700">
              To equip learners with independent, problem solving, thinking and
              communication skills in line with the 21st century.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="text-2xl font-bold">History</div>
            <p className="mt-3 text-sm text-neutral-700">
              Graceville Elementary is a private, non-denominational Christian Primary
              School. The foundation stone of the school was laid in July 2004 and the
              school opened its doors on 29 September 2004, offering education to boys
              and girls aged 2½ – 11.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 gap-6 text-center">
          <div className="rounded-lg border p-6">
            <div className="text-4xl font-extrabold">800</div>
            <div className="mt-1 text-sm text-neutral-600">Students</div>
          </div>
          <div className="rounded-lg border p-6">
            <div className="text-4xl font-extrabold">120</div>
            <div className="mt-1 text-sm text-neutral-600">Teachers/ Staff</div>
          </div>
          <div className="rounded-lg border p-6">
            <div className="text-4xl font-extrabold">13</div>
            <div className="mt-1 text-sm text-neutral-600">Years Completed</div>
          </div>
        </div>
      </section>

      {/* About excerpt */}
      <section className="py-14 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold">About Us</h2>
            <p className="mt-4 text-neutral-700">
              We are very proud of our school, the learning environment, the facilities
              and quality of teaching and of course, our friendly and supportive staff,
              families and Advisory Board Members.
            </p>
            <div className="mt-6">
              <a href="#contact" className="text-emerald-700 hover:underline">
                Contact Us
              </a>
            </div>
          </div>
          <div className="rounded-xl bg-emerald-600/10 border border-emerald-200 p-8">
            <p className="text-sm text-emerald-900">
              Our environment is tucked in a serene location, away from noise, and
              ideal for learning.
            </p>
          </div>
        </div>
      </section>

      {/* Placeholder anchors for nav */}
      <div id="news" />
      <div id="gallery" />
      <div id="portal" />
    </div>
  );
}

// (Client slider is imported dynamically above.)
