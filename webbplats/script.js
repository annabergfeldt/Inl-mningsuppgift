// Hämtar alla produkter och knapparna från HTML
const products = document.querySelectorAll(".product");
const prevButton = document.querySelector(".slider-prev");
const nextButton = document.querySelector(".slider-next");

// Hämtar hela produktsektionen
const productSection = document.querySelector(".products");

// Kopplar varje produkt till en bakgrundsfärg
const flavourColors = ["flavour-mango", "flavour-apple", "flavour-watermelon"];

// Håller reda på vilken produkt som visas
let currentProduct = 0;

// Visar vald produkt och byter bakgrundsfärg
function showProduct(index) {
  // Visar den aktuella produkten
  products.forEach((product, i) => {
    product.classList.toggle("is-active", i === index);
  });

  // Tar bort den tidigare bakgrundsfärgen
  productSection.classList.remove(...flavourColors);

  // Lägger till färgen för den valda smaken
  productSection.classList.add(flavourColors[index]);
}

// Bläddrar till nästa produkt
nextButton.addEventListener("click", () => {
  currentProduct = (currentProduct + 1) % products.length;
  showProduct(currentProduct);
});

// Bläddrar till föregående produkt
prevButton.addEventListener("click", () => {
  currentProduct = (currentProduct - 1 + products.length) % products.length;
  showProduct(currentProduct);
});

// Hämtar nyhetsbrevsformuläret och meddelandeområdet
const newsletterForm = document.querySelector("#newsletter-form");
const formMessage = document.querySelector("#form-message");

// Skapar ett tackmeddelande när formuläret skickas
newsletterForm.addEventListener("submit", function (event) {
  // Förhindrar att sidan laddas om
  event.preventDefault();

  // Skapar ett nytt HTML-element för tackmeddelandet
  const thankYouMessage = document.createElement("p");

  thankYouMessage.textContent =
    "Tack för att du vill hänga med i LIMÓ:s värld!";

  // Visar tackmeddelandet
  formMessage.replaceChildren(thankYouMessage);

  // Tömmer e-postfältet
  newsletterForm.reset();

  // Skapar 40 bubblor som stiger över skärmen
  for (let i = 0; i < 40; i++) {
    const bubble = document.createElement("span");

    bubble.classList.add("celebration-bubble");

    // Ger varje bubbla en slumpmässig storlek
    const size = Math.random() * 40 + 15;

    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    // Sprider bubblorna över skärmens bredd
    bubble.style.left = Math.random() * 100 + "%";

    // Ger bubblorna olika hastigheter
    bubble.style.animationDuration = Math.random() * 3 + 3 + "s";

    // Gör att bubblorna startar vid olika tillfällen
    bubble.style.animationDelay = Math.random() * 0.5 + "s";

    // Lägger till bubblan på hemsidan
    document.body.appendChild(bubble);

    // Tar bort bubblan när animationen är färdig
    bubble.addEventListener("animationend", function () {
      bubble.remove();
    });
  }
});
