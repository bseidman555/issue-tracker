"use client";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
//  <Link href={`/issues/${issueId}/delete`}>Delete Issue</Link>
const DeleteIssueButton = async ({ issueId }: { issueId: number }) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red"></Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Confirm Delete</AlertDialog.Title>
        <AlertDialog.Description>
          Are you sure you want to delete this Issue? This action cannot be
          undone.
        </AlertDialog.Description>
        <Flex mt="4" gap="3">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button color="red">Delete Issue</Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteIssueButton;
