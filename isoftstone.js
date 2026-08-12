(() => {
    const tablist = document.querySelector(".demo-tabs");

    if (!tablist) {
        return;
    }

    const tabs = Array.from(tablist.querySelectorAll("[data-demo-tab]"));
    const panels = Array.from(document.querySelectorAll("[data-demo-panel]"));

    const selectTab = (selectedTab, shouldFocus = false) => {
        const selectedName = selectedTab.dataset.demoTab;

        tabs.forEach((tab) => {
            const isSelected = tab === selectedTab;
            tab.classList.toggle("is-active", isSelected);
            tab.setAttribute("aria-selected", String(isSelected));
            tab.tabIndex = isSelected ? 0 : -1;
        });

        panels.forEach((panel) => {
            const isSelected = panel.dataset.demoPanel === selectedName;
            panel.hidden = !isSelected;

            if (!isSelected) {
                panel.querySelector("video")?.pause();
            }
        });

        if (shouldFocus) {
            selectedTab.focus();
        }
    };

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => selectTab(tab));

        tab.addEventListener("keydown", (event) => {
            let nextIndex = null;

            if (event.key === "ArrowRight") {
                nextIndex = (index + 1) % tabs.length;
            } else if (event.key === "ArrowLeft") {
                nextIndex = (index - 1 + tabs.length) % tabs.length;
            } else if (event.key === "Home") {
                nextIndex = 0;
            } else if (event.key === "End") {
                nextIndex = tabs.length - 1;
            }

            if (nextIndex !== null) {
                event.preventDefault();
                selectTab(tabs[nextIndex], true);
            }
        });
    });
})();
