import { Appbar } from "@/components/Appbar"

export default function () {
  return (
    <div>
      <Appbar></Appbar>
      <center>
        <div className="pt-10 text-4xl font-serif">
          Zapier Privacy Statement
        </div>
      </center>
      <br />
      <div className="p-4 text-2xl font-medium">Notice of Changes</div>
      <div className="pl-12 text-l">
        The Services, the Site, and our business may change from time to time.
        As a result, we may make changes to this Privacy Statement. We reserve
        the right to update or modify this Privacy Statement at any time and
        from time to time. If we make changes to this Privacy Statement, we will
        post the changes on this page and will indicate at the top of this page
        and the date these terms were last revised. If we make material changes,
        we will notify you through the Services user interface, as a pop up on
        the Site, in an email notification, or through other reasonable means.
        Your continued use of the Site or Services after the date any such
        notice constitutes your acceptance of the modifications.
      </div>

      {/* Transcribed Content */}
      <div className="p-4 text-2xl font-medium">Contacting Zapier</div>
      <div className="pl-12 text-l">
        <p>
          If you have any questions or comments about this notice, how we
          collect and use your information, your choices or rights regarding
          such use, or wish to exercise your rights, please do not hesitate to
          contact us at:
        </p>
        <p>
          <strong>Phone:</strong> (877) 381-8743
          <br />
          <strong>Email:</strong>{" "}
          <a
            href="mailto:privacy@zapier.com"
            className="text-blue-600 underline"
          >
            privacy@zapier.com
          </a>
        </p>
        <p>
          <strong>Postal Address:</strong>
          <br />
          Zapier, Inc.
          <br />
          Attn: Legal Department/Privacy
          <br />
          548 Market St. #62411, San Francisco, CA 94104-5401
          <br />
          Attn: Legal
        </p>
      </div>

      <div className="p-4 text-2xl font-medium">Change Log</div>
      <div className="pl-12 text-l">
        <p>
          <strong>Date of Change:</strong> March 4, 2021
        </p>
        <p>
          <strong>Description of Change:</strong> Updates made to the Privacy
          Statement to:
        </p>
        <ul className="list-disc list-inside pl-4">
          <li>
            Address legal and regulatory changes, including the removal of
            privacy shield references.
          </li>
          <li>
            Provide more detail about the categories of information we collect,
            the purposes for which we collect information, and the third parties
            with whom we share information.
          </li>
          <li>
            Restructured the Statement and the language to make the Statement
            easier for readers to navigate and understand.
          </li>
        </ul>
      </div>

      {/* Footer Section */}
      <div className="mt-10 py-6 border-t border-gray-300 pl-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-sm text-slate-500 font-normal">Follow us</span>
            <div className="ml-4 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                {/* Facebook SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v9h4v-9h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                {/* LinkedIn SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M16 8a6 6 0 00-12 0v12h4V8a2 2 0 114 0v12h4V8z"></path>
                  <rect x="2" y="2" width="4" height="4"></rect>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                {/* Twitter SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 2a4.48 4.48 0 00-4.46 4.65 10.66 10.66 0 01-7.79-3.95s-4 9 5 13a11.64 11.64 0 01-6.6 2c13 8 20-8 20-15.35a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                {/* YouTube SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29.94 29.94 0 001 12a29.94 29.94 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29.94 29.94 0 0023 12a29.94 29.94 0 00-.46-5.58zM9.75 15.02V8.98l5.5 3.02-5.5 3.02z"></path>
                </svg>
              </a>
              
            </div>
          </div>
          <div className="flex space-x-4 pr-10">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Pricing
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Help
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Developer Platform
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Press
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Jobs
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Enterprise
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Templates
            </a>
          </div>
        </div>
        <div className="mt-6 text-gray-500 text-sm text-center">
          <span>© 2024 Zapier Inc.</span>
          <span className="mx-2">•</span>
          <a href="#" className="hover:text-gray-700">
            Manage cookies
          </a>
          <span className="mx-2">•</span>
          <a href="#" className="hover:text-gray-700">
            Legal
          </a>
          <span className="mx-2">•</span>
          <a href="#" className="hover:text-gray-700">
            Privacy
          </a>
        </div>
      </div>
    </div>
  );
}
