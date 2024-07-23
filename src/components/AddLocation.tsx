import type { LocationForm } from "@/model/location";
import { createLocation } from "@/lib/actions/location";
import { useState } from "react";

export const AddLocation = () => {
  const [title, setTitle] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [tags, setTags] = useState<string[]>([]);

  const isValidForm = () => title !== undefined && address !== undefined;

  const onValidateForm = async () => {
    if (isValidForm()) {
      const locationForm: LocationForm = {
        name: title as string,
        address: address as string,
        tags,
      };
      createLocation(locationForm);
    }
  };

  return (
    <div className="group rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      <div className="flex flex-row gap-2">
        <div>
          Add new venue:
          <input
            className="text-black"
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          Address:
          <input
            className="text-black"
            type="text"
            name="address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          Tags:
          <input
            className="text-black"
            type="text"
            name="tags"
            onChange={(e) => setTags(e.target.value.split(";"))}
          />
        </div>
        <button onClick={() => onValidateForm()} disabled={!isValidForm()}>
          Add venue
        </button>
      </div>
    </div>
  );
};
