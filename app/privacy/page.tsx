import { Footer } from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">
            Last updated: February 11, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-muted-foreground mb-4">
                At Stride (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our website and services.
              </p>
              <p className="text-muted-foreground">
                By using Stride, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">1. Information You Provide</h3>
              <p className="text-muted-foreground mb-3">
                We collect information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Contact Information:</strong> Email address when you join our waitlist, submit feedback, or contact support</li>
                <li><strong>Feedback & Support Requests:</strong> Feature requests, bug reports, and any information you provide in support communications</li>
                <li><strong>Account Information:</strong> When the service launches, we will collect registration details such as name, email, and password</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">2. Automatically Collected Information</h3>
              <p className="text-muted-foreground mb-3">
                When you visit our website or use our services, we may automatically collect:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Device Information:</strong> Browser type, operating system, screen resolution (when you opt-in during bug reports)</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device identifiers, referring URLs</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">3. Desktop Application Data</h3>
              <p className="text-muted-foreground mb-3">
                When using the Stride desktop application:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Free Plan (Local Storage):</strong> All data is stored locally on your device. We do not collect or access this data</li>
                <li><strong>Pro/Team/Business Plans (Cloud Sync):</strong> Task data, project information, time entries, and settings are synced to our servers to enable cross-device functionality</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-3">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Service Delivery:</strong> To provide, maintain, and improve our services</li>
                <li><strong>Communication:</strong> To send you updates, respond to inquiries, and provide customer support</li>
                <li><strong>Product Development:</strong> To understand how users interact with our services and develop new features</li>
                <li><strong>Bug Fixing:</strong> To diagnose and fix technical issues, especially when you opt-in to share device information</li>
                <li><strong>Security:</strong> To detect, prevent, and address technical issues, fraud, and security vulnerabilities</li>
                <li><strong>Legal Compliance:</strong> To comply with legal obligations and enforce our terms of service</li>
              </ul>
            </div>

            {/* Data Sharing and Disclosure */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Data Sharing and Disclosure</h2>
              <p className="text-muted-foreground mb-3">
                We do not sell your personal data. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Service Providers:</strong> With third-party vendors who help us operate our services (e.g., hosting, analytics, email services)</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share specific information</li>
              </ul>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
              <p className="text-muted-foreground mb-3">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Waitlist Data:</strong> Retained until service launch, then deleted or migrated to active accounts</li>
                <li><strong>Feedback & Bug Reports:</strong> Retained for up to 2 years or until resolved</li>
                <li><strong>Account Data:</strong> Retained while your account is active, plus 30 days after deletion for recovery purposes</li>
                <li><strong>Free Plan Data:</strong> Stored locally on your device only; we do not retain this data</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-3">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data (right to be forgotten)</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Objection:</strong> Object to certain types of processing</li>
                <li><strong>Withdrawal of Consent:</strong> Withdraw consent for data processing at any time</li>
              </ul>
              <p className="text-muted-foreground">
                To exercise these rights, please contact us at{' '}
                <a href="mailto:privacy@stridetime.app" className="text-primary hover:underline">
                  privacy@stridetime.app
                </a>
                . We will respond to your request within 30 days.
              </p>
            </div>

            {/* Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Security</h2>
              <p className="text-muted-foreground mb-3">
                We implement appropriate technical and organizational measures to protect your personal data, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Encryption of data in transit (HTTPS/TLS) and at rest</li>
                <li>Regular security assessments and penetration testing</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection and privacy</li>
              </ul>
              <p className="text-muted-foreground">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Children&apos;s Privacy</h2>
              <p className="text-muted-foreground">
                Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal data, please contact us at{' '}
                <a href="mailto:privacy@stridetime.app" className="text-primary hover:underline">
                  privacy@stridetime.app
                </a>
                , and we will delete such information.
              </p>
            </div>

            {/* International Data Transfers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">International Data Transfers</h2>
              <p className="text-muted-foreground">
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We ensure appropriate safeguards are in place to protect your data in accordance with this privacy policy.
              </p>
            </div>

            {/* Cookies and Tracking */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground mb-3">
                We use cookies and similar tracking technologies to improve your experience:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
              <p className="text-muted-foreground">
                You can control cookies through your browser settings. However, disabling cookies may affect website functionality.
              </p>
            </div>

            {/* Third-Party Services */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
              <p className="text-muted-foreground mb-3">
                Our services may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Contact Us */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-3">
                If you have any questions, concerns, or requests regarding this privacy policy or our data practices, please contact us:
              </p>
              <div className="bg-muted/30 p-6 rounded-lg">
                <p className="text-muted-foreground mb-2">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:privacy@stridetime.app" className="text-primary hover:underline">
                    privacy@stridetime.app
                  </a>
                </p>
                <p className="text-muted-foreground mb-2">
                  <strong>Support:</strong>{' '}
                  <a href="mailto:support@stridetime.app" className="text-primary hover:underline">
                    support@stridetime.app
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <strong>Website:</strong>{' '}
                  <a href="https://stridetime.app" className="text-primary hover:underline">
                    stridetime.app
                  </a>
                </p>
              </div>
            </div>

            {/* GDPR & CCPA Specific Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Additional Rights for EU and California Residents</h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">EU Residents (GDPR)</h3>
              <p className="text-muted-foreground mb-3">
                If you are located in the European Economic Area (EEA), you have additional rights under the General Data Protection Regulation (GDPR), including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Right to lodge a complaint with a supervisory authority</li>
                <li>Right to data portability in a structured, machine-readable format</li>
                <li>Right to object to processing based on legitimate interests</li>
                <li>Right to restriction of processing in certain circumstances</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">California Residents (CCPA)</h3>
              <p className="text-muted-foreground mb-3">
                If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA), including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Right to know what personal information we collect, use, disclose, and sell</li>
                <li>Right to delete personal information we have collected</li>
                <li>Right to opt-out of the sale of personal information (we do not sell personal information)</li>
                <li>Right to non-discrimination for exercising your CCPA rights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
