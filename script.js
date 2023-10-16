function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    window.scrollTo({
        behavior: 'smooth',
        top: section.offsetTop
    });
}
