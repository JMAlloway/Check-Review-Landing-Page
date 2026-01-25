import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { SEO } from "@/components/seo";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Terms of Service | CheckGuard"
        description="Read the terms and conditions for using CheckGuard's automated check review services. Understand your rights and responsibilities as a user."
        canonical="https://getcheckguard.com/terms"
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Last updated: January 25, 2025</p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              These Terms of Service ("Terms") govern your access to and use of the CheckGuard website,
              platform, and services (collectively, the "Services") provided by CheckGuard ("we," "our," or "us").
              By accessing or using our Services, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-600">
              If you are using the Services on behalf of a financial institution or other organization,
              you represent that you have the authority to bind that organization to these Terms, and
              "you" refers to both you individually and that organization.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Services</h2>
            <p className="text-gray-600 mb-4">
              CheckGuard provides automated check review software designed for community banks and financial
              institutions. Our Services include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Automated check image analysis and fraud detection</li>
              <li>Human-in-the-loop review workflows</li>
              <li>Compliance reporting and audit trails</li>
              <li>Integration with existing banking systems</li>
              <li>Related documentation and support services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Account Registration and Security</h2>
            <p className="text-gray-600 mb-4">
              To use certain features of the Services, you must register for an account. You agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide accurate, current, and complete registration information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Keep your password secure and confidential</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized access or security breach</li>
            </ul>
            <p className="text-gray-600 mt-4">
              We reserve the right to suspend or terminate accounts that violate these Terms or
              pose security risks.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Acceptable Use</h2>
            <p className="text-gray-600 mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Use the Services for any unlawful purpose or in violation of any applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of the Services or related systems</li>
              <li>Interfere with or disrupt the integrity or performance of the Services</li>
              <li>Reverse engineer, decompile, or disassemble any aspect of the Services</li>
              <li>Use the Services to transmit malicious code or harmful content</li>
              <li>Resell, sublicense, or share access to the Services without authorization</li>
              <li>Use the Services in any manner that could damage or overburden our infrastructure</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Processing and Confidentiality</h2>
            <p className="text-gray-600 mb-4">
              In connection with providing the Services, we may process check images, financial data,
              and other sensitive information ("Customer Data"). We agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Process Customer Data only as necessary to provide the Services</li>
              <li>Maintain appropriate security measures to protect Customer Data</li>
              <li>Not disclose Customer Data to third parties except as permitted under our Privacy Policy or by law</li>
              <li>Comply with applicable data protection laws and banking regulations</li>
            </ul>
            <p className="text-gray-600 mt-4">
              You retain all rights to your Customer Data. You grant us a limited license to use
              Customer Data solely for providing and improving the Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              The Services, including all software, algorithms, designs, text, graphics, and other content,
              are owned by CheckGuard and protected by intellectual property laws. You may not copy, modify,
              distribute, or create derivative works without our express written permission.
            </p>
            <p className="text-gray-600">
              Subject to these Terms, we grant you a limited, non-exclusive, non-transferable license to
              access and use the Services for your internal business purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Service Level and Availability</h2>
            <p className="text-gray-600 mb-4">
              We strive to maintain high availability of our Services but do not guarantee uninterrupted
              access. We may occasionally suspend the Services for maintenance, updates, or other operational
              reasons. We will provide reasonable notice when possible.
            </p>
            <p className="text-gray-600">
              Specific service level commitments may be set forth in a separate Service Level Agreement
              between you and CheckGuard.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Fees and Payment</h2>
            <p className="text-gray-600 mb-4">
              Fees for the Services are set forth in your subscription agreement or order form. Unless
              otherwise specified:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Fees are due in advance and non-refundable</li>
              <li>We may change fees upon 30 days' notice</li>
              <li>Late payments may incur interest at 1.5% per month or the maximum legal rate</li>
              <li>You are responsible for all applicable taxes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Disclaimer of Warranties</h2>
            <p className="text-gray-600 mb-4">
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
              EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-gray-600">
              We do not warrant that the Services will be uninterrupted, error-free, or completely secure.
              The Services are designed to assist with check review but do not guarantee detection of all
              fraudulent or problematic items. You remain responsible for final approval decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, CHECKGUARD SHALL NOT BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE,
              DATA, OR USE, ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES.
            </p>
            <p className="text-gray-600">
              OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING UNDER THESE TERMS SHALL NOT EXCEED THE FEES
              PAID BY YOU IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Indemnification</h2>
            <p className="text-gray-600">
              You agree to indemnify, defend, and hold harmless CheckGuard and its officers, directors,
              employees, and agents from any claims, damages, losses, and expenses (including reasonable
              attorney's fees) arising from your use of the Services, violation of these Terms, or
              infringement of any third-party rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Term and Termination</h2>
            <p className="text-gray-600 mb-4">
              These Terms remain in effect until terminated. We may terminate or suspend your access
              to the Services immediately if you breach these Terms or for other legitimate business reasons.
            </p>
            <p className="text-gray-600 mb-4">
              Upon termination:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Your right to access the Services will cease immediately</li>
              <li>We will provide reasonable assistance for data export upon request</li>
              <li>Provisions that by their nature should survive will remain in effect</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Governing Law and Disputes</h2>
            <p className="text-gray-600 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the State
              of Delaware, without regard to conflict of law principles.
            </p>
            <p className="text-gray-600">
              Any disputes arising from these Terms or the Services shall be resolved through binding
              arbitration in accordance with the rules of the American Arbitration Association, except
              that either party may seek injunctive relief in any court of competent jurisdiction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Changes to Terms</h2>
            <p className="text-gray-600">
              We may modify these Terms at any time by posting the revised Terms on our website.
              Material changes will be communicated via email or through the Services. Your continued
              use of the Services after changes become effective constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. General Provisions</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and CheckGuard regarding the Services.</li>
              <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions will continue in effect.</li>
              <li><strong>Waiver:</strong> Failure to enforce any right or provision does not constitute a waiver.</li>
              <li><strong>Assignment:</strong> You may not assign these Terms without our written consent. We may assign these Terms freely.</li>
              <li><strong>Notices:</strong> We may send notices via email to the address associated with your account.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For questions about these Terms of Service, please contact us at:
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
