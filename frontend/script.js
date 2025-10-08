const form = document.getElementById("userForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // ✅ Updated backend API URL to EC2 public IP
  const res = await fetch("http://18.207.118.74:3000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email }),
  });

  if (res.ok) {
    msg.textContent = "User saved successfully!";
    msg.style.color = "#16a34a";
    form.reset();
  } else {
    msg.textContent = "Error saving user!";
    msg.style.color = "red";
  }
});
