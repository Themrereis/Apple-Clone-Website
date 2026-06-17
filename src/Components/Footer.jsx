const Footer = () => {
    return (
        <footer className="w-full mt-10 px-4 sm:px-6 lg:px-8">
            <section className="max-w-6xl mx-auto text-sm text-gray-600">
                <div className="pb-4">
                   <span className="text-blue-500 underline">More ways to shop: Find an Apple Store </span>or <span className="text-blue-500 underline ">other retailer near you.</span>
                    Or call <span className="text-blue-500 underline">000800 040 1966.</span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-4">
                    <p className="text-center md:text-left">
                        Copyright © 2026 Apple Inc. All rights reserved.
                    </p>
                    <ul className="flex flex-wrap justify-center gap-2 sm:gap-4">
                        <li>
                            <a href="#" className="hover:underline">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Terms of Use
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Sales Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Legal
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Site Map
                            </a>
                        </li>
                    </ul>

                    <div className="text-center md:text-right">
                        India
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;