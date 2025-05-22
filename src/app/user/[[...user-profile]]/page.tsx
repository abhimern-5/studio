import { UserProfile } from "@clerk/nextjs";

export default function UserProfilePage() {
  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-center">
        <UserProfile path="/user" routing="path" />
      </div>
    </div>
  );
}
