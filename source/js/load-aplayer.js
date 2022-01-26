document.addEventListener("DOMContentLoaded", function () {
  let apContainer = document.createElement("div");
  apContainer.id = "aplayer";
  document.body.append(apContainer);
  const ap = new APlayer({
    container: document.getElementById("aplayer"),
    fixed: true,
    theme: '#FADFA3',
    //lrcType: 3,
    audio: [
      {
        name: "Planetes",
        artist: "EGOIST",
        url: " https://cdn.jsdelivr.net/gh/showmaker-hub/cdn@main/aplayer/planetes.mp3",
        cover: "https://cdn.jsdelivr.net/gh/showmaker-hub/cdn@main/aplayer/planetes.jpg",
        //lrc: 'https://cdn.jsdelivr.net/gh/showmaker-hub/cdn@main/aplayer/planetes.lrc',
        theme: '#ebd0c2'
      },
    ],
  });
});