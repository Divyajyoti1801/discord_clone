"use client";

import { CreateChannelModal } from "@/components/modals/create-channel-modal";
import { CreateServerModal } from "@/components/modals/create-server-modal";
import { DeleteChannelModal } from "@/components/modals/delete-channel-model";
import { DeleteServerModal } from "@/components/modals/delete-server-model";
import { EditChannelModal } from "@/components/modals/edit-channel-modal";
import { EditServerModal } from "@/components/modals/edit-server-modal";
import { InviteModal } from "@/components/modals/invite-modal";
import { LeaveServerModal } from "@/components/modals/leave-server-model";
import { MembersModal } from "@/components/modals/members-modal";
import { MessageFileModal } from "@/components/modals/message-file-modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MembersModal />
      <CreateChannelModal />
      <LeaveServerModal />
      <DeleteServerModal />
      <DeleteChannelModal />
      <EditChannelModal />
      <MessageFileModal />
    </>
  );
};
