function searchDestination() {
    const destination = document.getElementById("destinationSearch").value.trim().toLowerCase();
    const travellers = document.getElementById("travellers").value;
    const result = document.getElementById("searchResult");
    const cards = document.querySelectorAll(".destination-card");

    if (!destination) {
        result.innerText = "Please enter a destination.";
        cards.forEach(card => card.style.display = "");
        return;
    }

    let found = false;
    cards.forEach(card => {
        const place = card.dataset.place;
        if (place.includes(destination)) {
            card.style.display = "";
            found = true;
        } else {
            card.style.display = "none";
        }
    });

    result.innerText = found
        ? `Showing ${destination} trips for ${travellers} traveller(s).`
        : `We don't have "${destination}" in our featured destinations yet. Try Paris, Bali, Dubai or Japan.`;
}

function explorePlace(place) {
    openDestination(place);
}

function bookPackage(packageName) {
    alert(`You selected the ${packageName} package. The booking form can be connected here.`);
}

function bookHotel(hotelName) {
    alert(`Booking request for ${hotelName} received!`);
}

function calculateBudget() {
    const people = Number(document.getElementById("people").value);
    const hotelCost = Number(document.getElementById("hotelCost").value);
    const nights = Number(document.getElementById("nights").value);
    const travelCost = Number(document.getElementById("travelCost").value);

    if (people < 1 || nights < 1 || hotelCost < 0 || travelCost < 0) {
        alert("Please enter valid values.");
        return;
    }

    const total = (hotelCost * nights * people) + travelCost;
    document.getElementById("totalBudget").innerText =
        "Estimated Total: ₹" + total.toLocaleString("en-IN");
}

function toggleFAQ(button) {
    const item = button.parentElement;
    item.classList.toggle("active");
    button.querySelector("span").innerText =
        item.classList.contains("active") ? "−" : "+";
}

const themeButton = document.getElementById("themeButton");
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeButton.innerText =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuButton.innerText = navLinks.classList.contains("open") ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuButton.innerText = "☰";
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill all required fields.");
        return;
    }

    alert(`Thank you ${name}! Your message has been submitted.`);
    this.reset();
});

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));


/* ================= DYNAMIC DESTINATION DATA ================= */

const destinationData = {
    Paris: {
        country: "FRANCE • EUROPE",
        tagline: "Romance, art, architecture and unforgettable city lights.",
        description: "Explore Paris beyond the Eiffel Tower with elegant boulevards, historic landmarks, museums, gardens and beautiful neighbourhoods.",
        hero: "https://images.pexels.com/photos/20413292/pexels-photo-20413292.jpeg?cs=srgb&dl=pexels-alejandro-aznar-155337093-20413292.jpg&fm=jpg",
        facts: ["🗓 Best for: 4–7 days", "🌤 Spring / Autumn", "💶 Euro", "❤️ Romantic escape"],
        places: [
            ["Eiffel Tower", "Iconic Paris landmark", "https://images.pexels.com/photos/20413292/pexels-photo-20413292.jpeg?cs=srgb&dl=pexels-alejandro-aznar-155337093-20413292.jpg&fm=jpg"],
            ["Louvre Museum", "World-famous art & history", "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=1200"],
            ["Montmartre", "Artistic streets & city views", "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1200"],
            ["Arc de Triomphe", "Historic Paris monument", "https://images.pexels.com/photos/161853/paris-france-eiffel-tower-city-161853.jpeg?auto=compress&cs=tinysrgb&w=1200"],
            ["Seine River", "Scenic riverside walks", "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1200"],
            ["Luxembourg Gardens", "Peaceful green escape", "https://images.pexels.com/photos/1582519/pexels-photo-1582519.jpeg?auto=compress&cs=tinysrgb&w=1200"]
        ]
    },
    Bali: {
        country: "INDONESIA • ASIA",
        tagline: "Tropical beaches, temples, waterfalls and island sunsets.",
        description: "Discover Bali's mix of beach escapes, rice terraces, temples, waterfalls and relaxing island culture.",
        hero: "https://images.pexels.com/photos/27566873/pexels-photo-27566873.jpeg?cs=srgb&dl=pexels-senna-sault-1725638-27566873.jpg&fm=jpg",
        facts: ["🗓 Best for: 5–8 days", "🌴 Tropical", "💰 Indonesian Rupiah", "🏝 Beach escape"],
        places: [
            ["Kelingking Beach", "Dramatic coastal scenery", "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=1200"],
            ["Ubud", "Culture, art & rice terraces", "https://images.pexels.com/photos/2474691/pexels-photo-2474691.jpeg?auto=compress&cs=tinysrgb&w=1200"],
            ["Tanah Lot", "Temple above the ocean", "https://images.pexels.com/photos/2474693/pexels-photo-2474693.jpeg?auto=compress&cs=tinysrgb&w=1200"],
            ["Tegallalang", "Lush rice terraces", "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1200"],
            ["Nusa Penida", "Island adventure", "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1200"],
            ["Bali Waterfalls", "Refreshing nature spots", "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=1200"]
        ]
    },
    Dubai: {
        country: "UNITED ARAB EMIRATES • MIDDLE EAST",
        tagline: "Futuristic skylines, golden deserts and unforgettable experiences.",
        description: "See Dubai from every angle: iconic skyscrapers, desert landscapes, waterfronts, luxury shopping and vibrant attractions.",
        hero: "https://images.pexels.com/photos/34218532/pexels-photo-34218532.jpeg?cs=srgb&dl=pexels-vishnukalanad-34218532.jpg&fm=jpg",
        facts: ["🗓 Best for: 4–6 days", "☀️ Winter is comfortable", "💰 UAE Dirham", "🏙 City + desert"],
        places: [
            ["Burj Khalifa", "World-famous skyline", "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=1200"],
            ["Palm Jumeirah", "Iconic man-made island", "https://images.pexels.com/photos/2615033/pexels-photo-2615033.jpeg?auto=compress&cs=tinysrgb&w=1200"],
            ["Dubai Marina", "Waterfront city views", "https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=1200"],
            ["Desert Safari", "Golden dunes & adventure", "https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg?auto=compress&cs=tinysrgb&w=1200"],
            ["Jumeirah Beach", "Relax beside the sea", "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1200"],
            ["Museum of the Future", "Futuristic architecture", "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1200"]
        ]
    },
    Japan: {
        country: "JAPAN • EAST ASIA",
        tagline: "Ancient traditions, peaceful temples and vibrant modern cities.",
        description: "Experience Japan through Kyoto's temples, Tokyo's energy, mountain landscapes, gardens, food and seasonal beauty.",
        hero: "https://images.pexels.com/photos/16226405/pexels-photo-16226405.jpeg?cs=srgb&dl=pexels-balazsimon-16226405.jpg&fm=jpg",
        facts: ["🗓 Best for: 7–10 days", "🌸 Spring / Autumn", "💴 Japanese Yen", "⛩ Culture + nature"],
        places: [
            ["Kyoto Temples", "Historic Japanese culture", "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1200"],
            ["Mount Fuji", "Japan's iconic mountain", "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&w=1200"],
            ["Tokyo", "Modern city energy", "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1200"],
            ["Arashiyama", "Bamboo & riverside beauty", "https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=1200"],
            ["Nara", "Temples & peaceful parks", "https://images.pexels.com/photos/161401/pexels-photo-161401.jpeg?auto=compress&cs=tinysrgb&w=1200"],
            ["Shibuya", "Bright city nightlife", "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1200"]
        ]
    }
};

let viewerImages = [];
let viewerIndex = 0;

function openDestination(place) {
    const data = destinationData[place];
    if (!data) return;

    document.getElementById("destinationHeroImage").src = data.hero;
    document.getElementById("destinationHeroImage").alt = place;
    document.getElementById("destinationCountry").innerText = data.country;
    document.getElementById("destinationTitle").innerText = place;
    document.getElementById("destinationTagline").innerText = data.tagline;
    document.getElementById("destinationDescription").innerText = data.description;

    const facts = document.getElementById("destinationFacts");
    facts.innerHTML = data.facts.map(fact => `<span class="destination-fact">${fact}</span>`).join("");

    const grid = document.getElementById("placesGrid");
    grid.innerHTML = data.places.map((item, index) => `
        <div class="place-card" onclick="openImageViewer(${index})">
            <img src="${item[2]}" alt="${item[0]}" loading="lazy">
            <div class="place-card-info">
                <h4>${item[0]}</h4>
                <span>${item[1]}</span>
            </div>
        </div>
    `).join("");

    viewerImages = data.places;
    viewerIndex = 0;

    document.getElementById("destinationBookButton").onclick = () => {
        closeDestination();
        document.getElementById("contact").scrollIntoView({behavior:"smooth"});
        setTimeout(() => {
            document.getElementById("subject").value = `Trip enquiry - ${place}`;
        }, 500);
    };

    const modal = document.getElementById("destinationModal");
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
}

function closeDestination() {
    const modal = document.getElementById("destinationModal");
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

function openImageViewer(index) {
    if (!viewerImages.length) return;

    viewerIndex = index;
    const item = viewerImages[viewerIndex];

    document.getElementById("viewerImage").src = item[2];
    document.getElementById("viewerImage").alt = item[0];
    document.getElementById("viewerCaption").innerText = `${item[0]} — ${item[1]}`;

    const viewer = document.getElementById("imageViewer");
    viewer.classList.add("open");
    viewer.setAttribute("aria-hidden", "false");
}

function closeImageViewer() {
    const viewer = document.getElementById("imageViewer");
    viewer.classList.remove("open");
    viewer.setAttribute("aria-hidden", "true");
}

function changeViewerImage(direction) {
    if (!viewerImages.length) return;

    viewerIndex = (viewerIndex + direction + viewerImages.length) % viewerImages.length;
    openImageViewer(viewerIndex);
}

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeImageViewer();
        closeDestination();
    }

    if (document.getElementById("imageViewer").classList.contains("open")) {
        if (event.key === "ArrowRight") changeViewerImage(1);
        if (event.key === "ArrowLeft") changeViewerImage(-1);
    }
});
