const first_pages = 1;
const Pagination = ({
  lastPage,
  pagesInCurrentBlock,
  setCurrenPage,
  currenPage,
}) => {
  const handleNextPage = () => {
    setCurrenPage((prevState) => {
      const nextPage = prevState + 1;
      if (nextPage <= lastPage) return nextPage
      return prevState
    });
  };

  const handleLastPage = () => setCurrenPage(lastPage);
  
  const handlePreviusPage = () => {
    setCurrenPage((prevPage) => {
      const newPage = prevPage - 1;
      if (newPage >= first_pages) return newPage;
      return prevPage;
    });
  };

  const handleFirstPage = () => setCurrenPage(first_pages);

  return (
    <ul className=" flex justify-center  gap-3 p-4 items-center ">
      <li onClick={handleFirstPage}>{"<<"} </li>
      <li onClick={handlePreviusPage}>{"<"} </li>
      {pagesInCurrentBlock.map((page) => (
        <li
          className={` p-2 ${
            currenPage === page ? "text-white bg-red-500" : ""
          }`}
          key={page}
          onClick={() => setCurrenPage(page)}
        >
          {page}
        </li>
      ))}
      <li onClick={handleNextPage}>{">"} </li>
      <li onClick={handleLastPage}>{">>"} </li>
    </ul>
  );
};

export default Pagination;
