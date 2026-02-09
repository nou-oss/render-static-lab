function sayHello() {
  alert("Hell Cloud-Native Lab! This site scales to zero");
  // Simulate environment variable
  const SITE_NAME = "Render Lab";
  // Use it in your site
  console.log(`Site deployed on ${SITE_NAME}`);
  // Example: display in HTML
  document.addEventListener("DOMContentLoaded", () => {
    const info = document.createElement("p");
    info.textContent = `This site is deployed on ${SITE_NAME}`;
    document.body.appendChild(info);
  });
}

