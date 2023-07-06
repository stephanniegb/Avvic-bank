function useHamburger(hamburgerRef, Menu, isMenuOpen, setIsMenuOpen) {
  const showActiveHam = () => {
    hamburgerRef.current.classList.toggle("active");
    Menu.current.classList.toggle("active");
    if (isMenuOpen) {
      setIsMenuOpen(!isMenuOpen);
    }
    if (Menu && Menu.current.classList.contains("active")) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }
  };

  const handleClick = () => {
    hamburgerRef.current.classList.remove("active");
    Menu.current.classList.remove("active");
    document.body.classList.remove("disable-scroll");
  };

  return [showActiveHam, handleClick];
}

export default useHamburger;
