import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import AppLayout from "@/app/(app)/layout";

export default function CookiePolicyPage() {
  return (
    <AppLayout>
      <div className="space-y-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-glow-primary">Cookie Policy</CardTitle>
            <CardDescription>Last Updated: {new Date().toLocaleDateString()}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/90">
            <p>
              This Cookie Policy explains how Lumina Images ("we," "us," or "our") uses cookies and similar technologies
              to recognize you when you visit our website and use our services (collectively, the "Service").
              It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>

            <h3 className="text-xl font-semibold text-glow-accent pt-4">1. What Are Cookies?</h3>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website.
              Cookies are widely used by website owners in order to make their websites work, or to work more efficiently,
              as well as to provide reporting information.
            </p>

            <h3 className="text-xl font-semibold text-glow-accent pt-4">2. Why Do We Use Cookies?</h3>
            <p>We use cookies for several reasons. Some cookies are required for technical reasons in order for our Service to operate, and we refer to these as "essential" or "strictly necessary" cookies. For example, our authentication provider, Clerk, uses cookies to manage your login sessions and keep you signed in.</p>
            <p>Other cookies enable us to track and target the interests of our users to enhance the experience on our Service. For example, we might use cookies to remember your preferences or settings.</p>
            
            <h3 className="text-xl font-semibold text-glow-accent pt-4">3. Types of Cookies We Use</h3>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>
                <strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available through our Service and to use some of its features, such as access to secure areas. Our authentication provider, Clerk (clerk.com), uses essential cookies to manage user sessions. Without these cookies, the services that you have asked for cannot be provided.
              </li>
              <li>
                <strong>Performance and Functionality Cookies:</strong> These cookies are used to enhance the performance and functionality of our Service but are non-essential to their use. However, without these cookies, certain functionality may become unavailable. (Currently, Lumina Images primarily relies on essential cookies from Clerk).
              </li>
              <li>
                <strong>Analytics and Customization Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our Service is being used or how effective our marketing campaigns are, or to help us customize our Service for you. (We may implement these in the future).
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-glow-accent pt-4">4. How Can You Control Cookies?</h3>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your browser.
              Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit www.aboutcookies.org or www.allaboutcookies.org.
            </p>
            <p>
              Please note that if you choose to disable or reject cookies, some parts of our Service may become inaccessible or not function properly. Specifically, cookies essential for authentication via Clerk are necessary for logging in and using the core features of Lumina Images.
            </p>

            <h3 className="text-xl font-semibold text-glow-accent pt-4">5. Changes to This Cookie Policy</h3>
            <p>
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>

            <h3 className="text-xl font-semibold text-glow-accent pt-4">6. Contact Us</h3>
            <p>
              If you have any questions about our use of cookies or other technologies, please email us at:
              cookies@luminaimages.example.com (Not a real email)
            </p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
