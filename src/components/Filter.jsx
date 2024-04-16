'use client'
import {React, useState} from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import {Checkbox} from "@nextui-org/react";

export default function Filter() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["1"]));

  const defaultContent ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
      className="px-7"
    >
      <AccordionItem key="1" aria-label="Accordion 1" title="Condition">
        <div className="flex flex-col ps-5 pb-5">
          <Checkbox>New</Checkbox>
          <Checkbox>Excellent</Checkbox>
          <Checkbox>Good</Checkbox>
          <Checkbox>Fair</Checkbox>
        </div>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Language">
        <div className="flex flex-col ps-5 pb-5">
          <Checkbox>English</Checkbox>
          <Checkbox>Hindi</Checkbox>
          <Checkbox>Punjabi</Checkbox>
        </div>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Binding">
        <div className="flex flex-col ps-5 pb-5">
          <Checkbox>Papercover</Checkbox>
          <Checkbox>Hardcover</Checkbox>
        </div>
      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 4" title="Type">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="5" aria-label="Accordion 5" title="Category">
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}
