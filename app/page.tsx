import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main className="flex min-h-screen flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-sm">
          {/* Profile Section */}
          <div className="mb-16 flex flex-col items-center">
            {/* Profile Picture */}
            <div className="mb-8">
              <Image
                src="/images/Ahmed2.png"
                alt="Ahmed Ghziel"
                width={120}
                height={120}
                className="rounded-full border-2 border-white/10 object-cover"
                priority
              />
            </div>

            {/* Name */}
            <h1 className="text-2xl font-semibold text-white mb-2 tracking-tight">
              Dr. Ahmed Ghziel
            </h1>

            {/* Title */}
            <p className="text-gray-400 text-sm font-normal">Dentist</p>
          </div>

          {/* Links Section */}
          <div className="space-y-3 mb-12">
            {/* Website Link */}
            <a
              href="https://ahmedghziel.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-full px-6 py-4 bg-white rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              <svg
                className="w-5 h-5 mr-3 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              <span className="text-gray-900 font-medium">Visit Website</span>
            </a>

            {/* Phone Link */}
            <a
              href="tel:+995599423129"
              className="group flex items-center justify-center w-full px-6 py-4 bg-white rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              <svg
                className="w-5 h-5 mr-3 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-gray-900 font-medium">Call Me</span>
            </a>

            {/* Email Link */}
            <a
              href="mailto:ahmedghziel@gmail.com"
              className="group flex items-center justify-center w-full px-6 py-4 bg-white rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              <svg
                className="w-5 h-5 mr-3 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-gray-900 font-medium">Email Me</span>
            </a>

            {/* Social Media Link */}
            <a
              href="https://link.me/ahmadghziel"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-full px-6 py-4 bg-white rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              <svg
                className="w-5 h-5 mr-3 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
              <span className="text-gray-900 font-medium">Social Media</span>
            </a>
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-gray-500">
            <p>© 2025 Ahmed Ghziel</p>
          </div>
        </div>
      </main>
    </div>
  );
}
