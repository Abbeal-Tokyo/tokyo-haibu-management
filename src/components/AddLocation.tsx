"use client";

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
    <div className="flex flex-col gap-2 left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      <p>Add Location</p>
      <div>
        Location name:
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
        Add Location
      </button>
    </div>
  );
};
