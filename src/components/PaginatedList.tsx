"use client";
import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";

type PaginatedListProps = Readonly<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  elements: any[];
  maxPerPage?: number;
}>;

const PaginatedList = ({ elements, maxPerPage = 5 }: PaginatedListProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const lastPage = Math.ceil(elements.length / maxPerPage) - 1;
  const elementToDisplay = useMemo(() => {
    const indexOfFirstElement = currentPage * maxPerPage;
    return elements.slice(
      indexOfFirstElement,
      indexOfFirstElement + maxPerPage,
    );
  }, [elements, maxPerPage, currentPage]);

  return (
    <>
      {elementToDisplay.map((value, index) => (
        <div className="mt-2 mb-2" key={index}>
          {value}
        </div>
      ))}
      {elements.length > maxPerPage && (
        <section className="mt-5 text-right">
          <button
            className="rounded-xl px-3 py-2 text-center text-primary bg-background disabled:text-gray"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 0}
          >
            <FontAwesomeIcon className="inline w-4 h-4" icon={faChevronLeft} />
          </button>
          <button
            className="rounded-xl px-3 py-2 text-primary bg-background text-center disabled:text-gray"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === lastPage}
          >
            <FontAwesomeIcon className="inline w-4 h-4" icon={faChevronRight} />
          </button>
        </section>
      )}
    </>
  );
};

export default PaginatedList;
