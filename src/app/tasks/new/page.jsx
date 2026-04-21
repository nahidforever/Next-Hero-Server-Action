"use client";


import { newTaskAction } from "@/lib/action";
import {
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  Modal,
  Button,
  Form,
  FieldError,
} from "@heroui/react";

const NewTasks = () => {
  return (
    <div className="w-1/2 mx-auto">
      <h2 className="text-4xl">Add a new Tasks</h2>

      <Form action={newTaskAction} className="flex flex-col gap-4">
        <TextField
          isRequired
          minLength={5}
          validate={(value) => {
            if (value.length < 5) {
              return "Title must be at least 5 characters or longer";
            }
          }}
          className="w-full"
          name="title"
          type="text"
        >
          <Label>Title</Label>
          <Input placeholder="Enter your task title" />
          <FieldError />
        </TextField>
        <TextField className="w-full" name="description" type="text">
          <Label>Description</Label>
          <Input placeholder="Enter your task description" />
        </TextField>

        <Select name="priority" className="w-[256px]" placeholder="Select one">
          <Label>Priority</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="low" textValue="low">
                Low
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="medium" textValue="medium">
                Medium
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="high" textValue="high">
                High
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>

        <Select name="status" className="w-[256px]" placeholder="Select one">
          <Label>Status</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="pending" textValue="pending">
                Pending
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="progress" textValue="progress">
                Progress
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="completed" textValue="completed">
                Completed
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>

        <TextField className="w-full" name="assignedTo">
          <Label>Assigned To</Label>
          <Input placeholder="Task Assigned To" />
        </TextField>

        <Modal.Footer>
          <Button slot="close" variant="secondary">
            Cancel
          </Button>
          <Button slot="close" type="submit">
            Submit Task
          </Button>
        </Modal.Footer>
      </Form>
    </div>
  );
};

export default NewTasks;
