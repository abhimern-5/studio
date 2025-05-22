import { UserProfile } from "@clerk/nextjs";
import { Header } from "@/components/layout/header";

export default function UserProfilePage() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-12">
        <div className="flex justify-center">
          <UserProfile path="/user" routing="path" />
        </div>
      </main>
    </>
  );
}
