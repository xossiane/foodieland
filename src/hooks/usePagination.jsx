import React, { useReducer } from "react";

const paginationReducer = (state, action) => {
  if (action.type === "CHANGE__CURRENT__PAGE") {
    return {
      itensPerPage: state.itensPerPage,
      currentPage: action.value,
      navigationNumber: state.navigationNumber,
      hasPageNumber: state.hasPageNumber,
    };
  }
  if (action.type === "CHANGE_RESOLUTION") {
    return {
      itensPerPage: action.itensPerPage,
      currentPage: state.currentPage,
      navigationNumber: action.navigationNumber,
      hasPageNumber: action.hasPageNumber,
    };
  }
};

const usePagination = (mobileConfig, desktopConfig) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const paginationDefaultValue = {
    itensPerPage: 3,
    currentPage: 0,
    navigationNumber: 3,
    hasPageNumber: 2,
  };

  const [paginationState, dispatchPaginationState] = useReducer(
    paginationReducer,
    paginationDefaultValue
  );

  useEffect(() => {
    let timeoutId = null;
    const updateSize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWindowSize(window.innerWidth), 150);
    };
    window.addEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (windowSize > 1024) {
      dispatchPaginationState({
        type: "CHANGE_RESOLUTION",
        itensPerPage: 6,
        navigationNumber: 5,
        hasPageNumber: 4,
      });
    } else {
      dispatchPaginationState({
        type: "CHANGE_RESOLUTION",
        itensPerPage: 3,
        navigationNumber: 3,
        hasPageNumber: 2,
      });
    }
  }, [windowSize]);

  const changeCurrentPageHandler = (index) => {
    dispatchPaginationState({ type: "CHANGE__CURRENT__PAGE", value: index });
  };

  return [paginationState, changeCurrentPageHandler];
};

export default usePagination;
