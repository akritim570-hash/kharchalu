const locationList = document.getElementById("locationList");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageNumbers = document.getElementById("pageNumbers");

const itemsPerPage = 6;

let currentPage = 1;

// Sort pandels by area alphabetically (A–Z)
const sortedData = [...data].sort((a, b) => {
    return (a.area || "").localeCompare(
        b.area || "",
        undefined,
        { sensitivity: "base" }
    );
});

let filteredData = sortedData;

// Search pandels by name, Bengali name, area, or keywords
function filterLocations() {
    const query = searchInput.value.trim().toLowerCase();

    filteredData = sortedData.filter(item => {
        const searchableText = [
            item.name,
            item.bengali_name,
            item.area,
            item.search
        ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();

        return searchableText.includes(query);
    });

    // Reset pagination when searching
    currentPage = 1;

    renderLocations();
}

// Create and display location cards
function renderLocations() {
    locationList.replaceChildren();
    pageNumbers.replaceChildren();

    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Keep current page within valid limits
    if (currentPage > totalPages) {
        currentPage = Math.max(1, totalPages);
    }

    const startIndex = (currentPage - 1) * itemsPerPage;

    const currentItems = filteredData.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    // Update result count
    resultCount.textContent = totalItems
        ? `Showing ${startIndex + 1}–${startIndex + currentItems.length} of ${totalItems} pandels`
        : "No pandels found";

    // Show empty state
    if (totalItems === 0) {
        const empty = document.createElement("div");
        empty.className = "no-results";

        const icon = document.createElement("span");
        icon.className = "no-results-icon";
        icon.textContent = "🔎";
        icon.setAttribute("aria-hidden", "true");

        const message = document.createElement("p");
        message.textContent =
            "No pandels found. Try another name or location.";

        empty.append(icon, message);
        locationList.appendChild(empty);
    }

    // Generate location cards
    currentItems.forEach(item => {
        const card = document.createElement("a");
        card.className = "location-item searchable";
        card.href = item.location || "#";

        // Open selected location in a new tab
        card.target = "_blank";
        card.rel = "noopener noreferrer";

        card.setAttribute(
            "aria-label",
            `View ${item.name} - ${item.area}`
        );

        // Pandel icon
        const icon = document.createElement("div");
        icon.className = "location-icon";
        icon.textContent = "🛕";
        icon.setAttribute("aria-hidden", "true");

        // Location information
        const info = document.createElement("div");
        info.className = "location-info";

        // Pandel name
        const title = document.createElement("h3");
        title.textContent = item.name;
        info.appendChild(title);

        // Bengali name (if available)
        if (item.bengali_name) {
            const bengali = document.createElement("span");
            bengali.textContent = item.bengali_name;
            info.appendChild(bengali);
        }

        // Area name
        const area = document.createElement("span");
        area.textContent = item.area || "";
        info.appendChild(area);

        // Arrow icon
        const arrow = document.createElement("div");
        arrow.className = "arrow";
        arrow.textContent = "→";
        arrow.setAttribute("aria-hidden", "true");

        card.append(icon, info, arrow);
        locationList.appendChild(card);
    });

    // Previous button
    prevBtn.disabled = currentPage <= 1;

    // Next button
    nextBtn.disabled =
        totalPages === 0 || currentPage >= totalPages;

    // Generate numbered pagination
    for (let page = 1; page <= totalPages; page++) {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "page-number";
        button.textContent = page;

        if (page === currentPage) {
            button.classList.add("active");
            button.setAttribute("aria-current", "page");
        }

        button.addEventListener("click", () => {
            currentPage = page;
            renderLocations();
        });

        pageNumbers.appendChild(button);
    }
}

// Previous page
prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderLocations();
    }
});

// Next page
nextBtn.addEventListener("click", () => {
    const totalPages = Math.ceil(
        filteredData.length / itemsPerPage
    );

    if (currentPage < totalPages) {
        currentPage++;
        renderLocations();
    }
});

// Search while typing
searchInput.addEventListener("input", filterLocations);

// Initial display
renderLocations();