"use client";
import { useRef, useState } from "react";
import type { ReactNode } from "react";

// DOC: https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-automatic/
type TabsProps = Readonly<{
  tabs: {
    id: string;
    idPanel: string;
    title: string;
    content: ReactNode;
  }[];
}>;

const Tabs = ({ tabs }: TabsProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedId = tabs[selectedIndex].id;
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const handleClick = (index: number) => setSelectedIndex(index);
  const handleKey = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const tabsLength = tabs.length;
    const first = 0;
    const last = tabsLength - 1;
    switch (event.key) {
      case "ArrowLeft":
        setSelectedIndex(index === first ? last : index - 1);
        tabRefs.current[index === first ? last : index - 1]?.focus();
        break;
      case "ArrowRight":
        setSelectedIndex(index === last ? first : index + 1);
        tabRefs.current[index === last ? first : index + 1]?.focus();
        break;

      case "Home":
        setSelectedIndex(first);
        tabRefs.current[first]?.focus();
        break;

      case "End":
        setSelectedIndex(last);
        tabRefs.current[last]?.focus();
        break;

      default:
        break;
    }
  };
  return (
    <>
      <div role="tablist" className="tab">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            className="tablinks active rounded-t-lg px-4 py-3 mr-0.5 text-center bg-tertiary"
            role="tab"
            aria-selected={tab.id === selectedId ? true : false}
            tabIndex={tab.id === selectedId ? 0 : -1}
            aria-controls={tab.idPanel}
            onClick={() => handleClick(index)}
            onKeyDown={(keyboardEvent) => handleKey(keyboardEvent, index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      {tabs.map((tab) => (
        <div
          className="border-[23px] border-solid border-tertiary"
          style={{ display: tab.id === selectedId ? "block" : "none" }}
          key={tab.idPanel}
          id={tab.idPanel}
          role="tabpanel"
          aria-labelledby={tab.id}
          tabIndex={0}
        >
          {tab.content}
        </div>
      ))}
    </>
  );
};

export default Tabs;
