const btn = document.getElementById("loadJokeBtn");

const getJoke = async () => {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random", {
      headers: {
        Accept: "application/json",
      },
    });

    const joke = await response.json();
    document.getElementById("loadingJoke").innerHTML = joke.value;
  } catch (err) {
    console.log(err);
  }
};

btn.addEventListener("click", getJoke);
