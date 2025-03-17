function updateClock() {
  const now = new Date();

  let hours = now.getHours() % 12 || 12;
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  const timeParts = [
    Math.floor(hours / 10),
    hours % 10,
    Math.floor(minutes / 10),
    minutes % 10,
    Math.floor(seconds / 10),
    seconds % 10,
  ];

  const digitContainers = [
    "hours-tens",
    "hours-ones",
    "minutes-tens",
    "minutes-ones",
    "seconds-tens",
    "seconds-ones",
  ];

  digitContainers.forEach((id, index) => {
    const container = document.getElementById(id);
    const previousValue = container.getAttribute("data-last-value");

    container.innerHTML = ""; // Clear old digits

    for (let i = 0; i < 10; i++) {
      const digitElement = document.createElement("div");
      digitElement.classList.add("digit");
      digitElement.textContent = i;

      if (i === timeParts[index]) {
        digitElement.classList.add("illuminated");

        // If the number changed, add a flash effect
        if (previousValue !== String(i)) {
          digitElement.classList.add("flash");
        }

        // Apply subtle random flickering effect
        const randomFlickerTime = (Math.random() * 2 + 1.5).toFixed(2) + "s";
        digitElement.style.animationDuration = randomFlickerTime;
      }

      container.appendChild(digitElement);
    }

    container.setAttribute("data-last-value", timeParts[index]);
  });
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();
