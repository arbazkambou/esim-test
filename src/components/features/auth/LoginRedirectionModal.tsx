import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AdminRole } from "@/types/auth/LoginUserTypes";
import Link from "next/link";

interface PropsType {
  showRedirectionModal: boolean;
  setShowRedirectionModal: React.Dispatch<React.SetStateAction<boolean>>;
  adminRole: AdminRole | null;
}

function LoginRedirectionModal({
  setShowRedirectionModal,
  showRedirectionModal,
  adminRole,
}: PropsType) {
  return (
    <Dialog open={showRedirectionModal} onOpenChange={setShowRedirectionModal}>
      <DialogContent>
        <DialogHeader className="mt-2">
          <DialogTitle className="font-montserrat">
            You’re Logged In with a {adminRole?.type} Role
          </DialogTitle>
          <DialogDescription>
            Would you like to go to your {adminRole?.type} Portal or stay on
            this page?
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 flex flex-col gap-4">
          <Link
            href={`https://portal.esimcard.com/portal/?nonce=${adminRole?.nonce}`}
            className="w-full"
            onClick={() => setShowRedirectionModal(false)}
          >
            <Button className="w-full">Go to {adminRole?.type} Portal</Button>
          </Link>

          <Button
            variant={"outline"}
            onClick={() => setShowRedirectionModal(false)}
          >
            Stay on This Page
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default LoginRedirectionModal;
