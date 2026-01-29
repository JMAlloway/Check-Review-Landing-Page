import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { SEO } from "@/components/seo";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Privacy Policy | CheckGuard"
        description="Learn how CheckGuard collects and uses information from our website and pilot program applications."
        canonical="https://getcheckguard.com/privacy"
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: January 29, 2025</p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              CheckGuard ("we," "our," or "us") operates the website getcheckguard.com and collects
              information from visitors who apply to our pilot program. This Privacy Policy explains
              what information we collect and how we use it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-medium text-gray-800 mb-3">2.1 Pilot Application Information</h3>
            <p className="text-gray-600 mb-4">When you apply to join our pilot program, we collect:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Your name and work email address</li>
              <li>Your bank name and role</li>
              <li>Approximate asset size</li>
              <li>Any feedback you choose to provide</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-3">2.2 Website Usage Information</h3>
            <p className="text-gray-600 mb-4">We automatically collect:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Device and browser information</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website or source</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Evaluate pilot program applications and contact qualified candidates</li>
              <li>Understand what community banks need from check review software</li>
              <li>Improve our website and communications</li>
              <li>Send updates about the pilot program (you can opt out anytime)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing</h2>
            <p className="text-gray-600 mb-4">
              We do not sell your information. We may share information with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Service providers:</strong> We use Formspree to process form submissions and Google Analytics to understand website usage</li>
              <li><strong>Legal requirements:</strong> If required by law or to protect our rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies and Analytics</h2>
            <p className="text-gray-600">
              We use Google Analytics to understand how visitors use our website. Google Analytics
              uses cookies to collect anonymous usage data. You can opt out of Google Analytics
              by installing the <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Retention</h2>
            <p className="text-gray-600">
              We retain pilot application information for as long as needed to evaluate your
              application and communicate about the pilot program. You can request deletion
              of your information at any time by contacting us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights</h2>
            <p className="text-gray-600 mb-4">You can:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Request access to the information we have about you</li>
              <li>Request correction or deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>
            <p className="text-gray-600 mt-4">
              To exercise these rights, contact us at privacy@getcheckguard.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy as our pilot program evolves. We'll post any
              changes on this page with an updated date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              Questions about this Privacy Policy? Contact us at:
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
