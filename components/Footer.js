"use client";

const Footer = () => {
  return (
    <footer className="bg-[#1e232c] text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo (top-left corner) */}
        <div className="pt-2">
          <div className="bg-gray-300 text-black font-bold text-2xl px-6 py-2 inline-block">
            LOGO
          </div>
        </div>

        {/* Link Columns (slightly lower and right) */}
        <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 pl-4">
          {[1, 2, 3, 4].map((col) => (
            <div key={col}>
              <h4 className="font-semibold mb-3">Lorem Ipsum</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#">Lorem Ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem Ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem Ipsum</a>
                </li>
                {col !== 4 && (
                  <li>
                    <a href="#">Lorem Ipsum</a>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
