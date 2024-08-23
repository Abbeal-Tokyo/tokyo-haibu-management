"use client";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { useTranslations } from "next-intl";
import { useState } from "react";
import useEventForm from "./useEventForm";
import Form from "@/components/Form";
import FormEntry from "@/components/FormEntry";

const CreateEvent = () => {
  const t = useTranslations("events.eventTab");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    availableTypes,
    setEndDate,
    setStartDate,
    setTitle,
    setType,
    submit,
  } = useEventForm();

  return (
    <>
      <button
        className="self-end w-40 px-4 py-3 rounded-lg text-center bg-tertiary hover:scale-up-center"
        onClick={() => setIsModalOpen(true)}
      >
        {t("createEvent")}
      </button>
      <Modal
        title={t("createEvent")}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <Form
          onCancel={() => setIsModalOpen(false)}
          onValidate={() => {
            submit();
            setIsModalOpen(false);
          }}
        >
          <FormEntry label={t("eventTitle")}>
            <input
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              className="grow"
            />
          </FormEntry>
          <FormEntry label={t("eventType")}>
            <div className="grow">
              <input
                className="w-full border-none"
                list="available-types"
                onChange={(e) => setType(e.target.value)}
              />
              <datalist id="available-types">
                {availableTypes.map((type) => (
                  <option key={type} value={type} />
                ))}
              </datalist>
            </div>
          </FormEntry>
          <FormEntry label={t("startDate")}>
            <input
              type="datetime-local"
              onChange={(e) => setStartDate(new Date(e.target.value))}
            />
          </FormEntry>
          <FormEntry label={t("endDate")}>
            <input
              type="datetime-local"
              onChange={(e) => setEndDate(new Date(e.target.value))}
            />
          </FormEntry>
        </Form>
      </Modal>
    </>
  );
};

export default CreateEvent;
