import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { SEO } from "@/components/seo";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Terms of Service | CheckGuard"
        description="Terms and conditions for using the CheckGuard website and applying to our pilot program."
        canonical="https://getcheckguard.com/terms"
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Last updated: January 29, 2025</p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              These Terms of Service ("Terms") govern your use of the CheckGuard website at
              getcheckguard.com and your application to our pilot program. By using this website,
              you agree to these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Website Use</h2>
            <p className="text-gray-600 mb-4">
              This website provides information about CheckGuard and allows you to apply for our
              pilot program. You agree to use this website only for lawful purposes and in
              accordance with these Terms.
            </p>
            <p className="text-gray-600">You agree not to:</p>
            <ul className="list-disc pl-6 text-gray-600 mt-2 space-y-2">
              <li>Use the website in any way that violates applicable laws</li>
              <li>Attempt to interfere with the website's operation</li>
              <li>Submit false or misleading information in your pilot application</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Pilot Program Applications</h2>
            <p className="text-gray-600 mb-4">
              Submitting an application does not guarantee acceptance into the pilot program.
              We select pilot participants at our discretion based on factors including bank size,
              location, and fit with our program goals.
            </p>
            <p className="text-gray-600">
              If accepted, you will receive a separate pilot agreement that will govern your
              participation in the program, including any use of CheckGuard software.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-600">
              All content on this website—including text, graphics, logos, and images—is owned by
              CheckGuard or our licensors and is protected by intellectual property laws. You may
              not copy, modify, or distribute our content without permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Disclaimer</h2>
            <p className="text-gray-600 mb-4">
              This website and its content are provided "as is" for informational purposes.
              We make no warranties about the accuracy or completeness of the information presented.
            </p>
            <p className="text-gray-600">
              The features and capabilities described on this website represent our product vision.
              Actual functionality may vary during the pilot program as we continue development
              based on participant feedback.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600">
              To the maximum extent permitted by law, CheckGuard shall not be liable for any
              indirect, incidental, or consequential damages arising from your use of this
              website or reliance on any information provided here.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to Terms</h2>
            <p className="text-gray-600">
              We may update these Terms from time to time. Changes will be posted on this page
              with an updated date. Your continued use of the website after changes are posted
              constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Governing Law</h2>
            <p className="text-gray-600">
              These Terms are governed by the laws of the State of Delaware, without regard to
              conflict of law principles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              Questions about these Terms? Contact us at:
            </p>
            <div className="text-gray-600">
              <p><strong>CheckGuard</strong></p>
              <p>Email: legal@getcheckguard.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
