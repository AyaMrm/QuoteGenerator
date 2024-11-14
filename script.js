async function getRandomQuote() {
    try {
      const response = await fetch("http://localhost:3000/quotes/random"); 
      const data = await response.json();
      
      
      document.getElementById("quote-text").innerText = `"${data.text}"`;
      document.getElementById("quote-author").innerText = `— ${data.author}`;
    } catch (error) {
      document.getElementById("quote-text").innerText = "Erreur lors du chargement de la citation.";
      document.getElementById("quote-author").innerText = "";
      console.error("Erreur :", error);
    }
  }