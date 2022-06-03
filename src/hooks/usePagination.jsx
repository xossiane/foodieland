import React, { useReducer, useEffect, useState } from "react";

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
        itensPerPage: desktopConfig.itensPerPage,
        navigationNumber: desktopConfig.navigationNumber,
        hasPageNumber: desktopConfig.hasPageNumber,
      });
    } else {
      dispatchPaginationState({
        type: "CHANGE_RESOLUTION",
        itensPerPage: mobileConfig.itensPerPage,
        navigationNumber: mobileConfig.navigationNumber,
        hasPageNumber: mobileConfig.hasPageNumber,
      });
    }
  }, [windowSize]);

  const changeCurrentPageHandler = (index) => {
    dispatchPaginationState({ type: "CHANGE__CURRENT__PAGE", value: index });
  };

  const changeNavigationItensHandler = (enteredArray) => {
    const pages = Math.ceil(enteredArray.length / paginationState.itensPerPage);
    const startIndex =
      paginationState.currentPage * paginationState.itensPerPage;
    const endIndex = paginationState.itensPerPage + startIndex;
    const lastPage = pages - 1;
    let outputArray = [];

    if (
      paginationState.currentPage + paginationState.hasPageNumber <
      lastPage
    ) {
      for (let i = 0; i < paginationState.navigationNumber; i++) {
        outputArray.push(paginationState.currentPage + i);
      }
    } else {
      for (let i = paginationState.navigationNumber; i > 0; i--) {
        outputArray.push(pages - i);
      }
    }

    return {
      navigationItems: outputArray,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  };

  return [
    paginationState,
    changeCurrentPageHandler,
    changeNavigationItensHandler,
    windowSize,
  ];
};

export default usePagination;
