function useToggleModal(elementRef, activeModal, setActiveModal) {
  const toggleModal = (id) => {
    elementRef.current.classList.toggle("active");
    console.log(elementRef);
    if (activeModal === id) {
      setActiveModal(null);
    } else {
      setActiveModal(id);
    }
    if (elementRef.current.classList.contains("active")) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }
  };
  return [toggleModal];
}

export default useToggleModal;
