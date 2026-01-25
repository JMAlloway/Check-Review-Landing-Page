import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: January 25, 2025</p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              CheckGuard ("we," "our," or "us") is committed to protecting the privacy of our customers and users.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
              visit our website getcheckguard.com and use our automated check review services.
            </p>
            <p className="text-gray-600">
              Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that
              you have read, understood, and agree to be bound by this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-medium text-gray-800 mb-3">2.1 Information You Provide</h3>
            <p className="text-gray-600 mb-4">We collect information you voluntarily provide, including:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Contact information (name, email address, phone number)</li>
              <li>Business information (bank name, role, asset size)</li>
              <li>Account credentials</li>
              <li>Communications with our support team</li>
              <li>Feedback and survey responses</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-3">2.2 Information Collected Automatically</h3>
            <p className="text-gray-600 mb-4">When you access our services, we may automatically collect:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Device information (browser type, operating system)</li>
              <li>Log data (IP address, access times, pages viewed)</li>
              <li>Usage data (features used, actions taken within the platform)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-3">2.3 Check and Financial Data</h3>
            <p className="text-gray-600">
              Our services process check images and related financial data on behalf of your institution.
              This data is processed solely to provide our check review services and is handled in accordance
              with applicable banking regulations and industry standards.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process and complete transactions</li>
              <li>Send administrative information and service updates</li>
              <li>Respond to inquiries and provide customer support</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Detect, prevent, and address technical issues or fraudulent activity</li>
              <li>Comply with legal obligations and regulatory requirements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-gray-600 mb-4">We may share your information in the following circumstances:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Service Providers:</strong> With third-party vendors who assist in providing our services, subject to confidentiality obligations</li>
              <li><strong>Legal Requirements:</strong> When required by law, subpoena, or government request</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Protection:</strong> To protect the rights, property, or safety of CheckGuard, our customers, or others</li>
            </ul>
            <p className="text-gray-600 mt-4">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organizational security measures to protect your information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Access controls and authentication requirements</li>
              <li>Regular security assessments and audits</li>
              <li>Employee training on data protection</li>
            </ul>
            <p className="text-gray-600 mt-4">
              While we strive to protect your information, no method of transmission over the Internet
              or electronic storage is completely secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Retention</h2>
            <p className="text-gray-600">
              We retain your information for as long as necessary to fulfill the purposes outlined in this
              Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.
              Financial data processed through our services is retained in accordance with applicable banking
              regulations and your institution's requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights and Choices</h2>
            <p className="text-gray-600 mb-4">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
            <p className="text-gray-600 mt-4">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cookies and Tracking Technologies</h2>
            <p className="text-gray-600">
              We use cookies and similar tracking technologies to collect information about your browsing
              activities. You can control cookie preferences through your browser settings. Note that
              disabling cookies may affect the functionality of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Third-Party Links</h2>
            <p className="text-gray-600">
              Our website may contain links to third-party websites. We are not responsible for the
              privacy practices of these external sites. We encourage you to review the privacy policies
              of any third-party sites you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Children's Privacy</h2>
            <p className="text-gray-600">
              Our services are not directed to individuals under the age of 18. We do not knowingly
              collect personal information from children. If we learn that we have collected information
              from a child, we will take steps to delete such information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
              Your continued use of our services after any changes indicates your acceptance of the
              updated Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="text-gray-600">
              <p><strong>CheckGuard</strong></p>
              <p>Email: privacy@getcheckguard.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
