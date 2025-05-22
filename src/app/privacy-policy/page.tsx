
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import AppLayout from "@/app/(app)/layout";
import { ClientSideDateString } from "@/components/common/client-side-date-string";

export default function PrivacyPolicyPage() {
  return (
    <AppLayout>
      <div className="space-y-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-glow-primary">Privacy Policy</CardTitle>
            <CardDescription>Last Updated: <ClientSideDateString /></CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/90">
            <p>
              Lumina Images ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when you use our website and services (collectively, the "Service").
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Service.
            </p>
            
            <h3 className="text-xl font-semibold text-glow-accent pt-4">1. Information We Collect</h3>
            <p>
              We may collect personal information that you voluntarily provide to us when you register on the Service,
              express an interest in obtaining information about us or our products and services, when you participate
              in activities on the Service, or otherwise when you contact us.
            </p>
            <p>
              The personal information that we collect depends on the context of your interactions with us and the Service,
              the choices you make, and the products and features you use. The personal information we collect may include the following:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li><strong>Personal Data:</strong> Name, email address, and other similar contact data.</li>
              <li><strong>Authentication Data:</strong> Usernames, passwords, and other information for authentication and account access, managed via Clerk.</li>
              <li><strong>Usage Data:</strong> Information about how you use our Service, such as prompts entered and images generated. This data is used to improve our AI models and service.</li>
            </ul>

            <h3 className="text-xl font-semibold text-glow-accent pt-4">2. How We Use Your Information</h3>
            <p>
              We use the information we collect or receive:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>To create and manage your account.</li>
              <li>To provide, operate, and maintain our Service.</li>
              <li>To improve, personalize, and expand our Service.</li>
              <li>To understand and analyze how you use our Service.</li>
              <li>To develop new products, services, features, and functionality.</li>
              <li>To communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the Service, and for marketing and promotional purposes.</li>
              <li>To process your transactions.</li>
              <li>To find and prevent fraud.</li>
            </ul>

            <h3 className="text-xl font-semibold text-glow-accent pt-4">3. Sharing Your Information</h3>
            <p>
              We do not sell your personal information. We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include: payment processing, data analysis, email delivery, hosting services, customer service, and marketing efforts.
            </p>
            <p>Specifically, user authentication is handled by Clerk (clerk.com). Please refer to Clerk's privacy policy for details on how they handle your authentication data.</p>
            <p>AI image generation may be processed by third-party AI model providers (e.g., Google AI). Prompts and generated images may be shared with these providers as necessary to provide the service. We strive to use providers that respect user privacy.</p>


            <h3 className="text-xl font-semibold text-glow-accent pt-4">4. Security of Your Information</h3>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information.
              While we have taken reasonable steps to secure the personal information you provide to us, please be aware
              that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission
              can be guaranteed against any interception or other type of misuse.
            </p>

            <h3 className="text-xl font-semibold text-glow-accent pt-4">5. Your Data Rights</h3>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. Please contact us to exercise these rights.
            </p>

            <h3 className="text-xl font-semibold text-glow-accent pt-4">6. Changes to This Privacy Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated
              "Last Updated" date and the updated version will be effective as soon as it is accessible.
            </p>

            <h3 className="text-xl font-semibold text-glow-accent pt-4">7. Contact Us</h3>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
              privacy@luminaimages.example.com (Not a real email)
            </p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
