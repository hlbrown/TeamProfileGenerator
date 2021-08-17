const style = `
html, body {
    max-width: 100% !important;
    overflow-x: hidden !important;
}
body {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.banner-bar {
    background-color: rgb(212, 157, 162);
    width: 100%;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
}
h1 {
    font-family: 'Indie Flower';
    color:rgb(51, 62, 124);
    font-size: 4vw;
}
p {
    font-family: 'Indie Flower', sans-serif;
    position: relative;
    left: 12px;
}
h2 {
    font-family:'Indie Flower', sans-serif;
    position: relative;
    font-size: 17px;
    left: 12px;
    color:rgb(51, 62, 124);
}
.member-card {
    width: 300px;
    height: 34vh;
    margin-bottom: 5vh;
    background-color: rgb(229, 225, 238);
    box-shadow: 2px 5px rgb(51, 62, 124);
    border-radius: 10px;
}
.card-container {
    position: absolute;
    top: 26vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 60vw;
}
.card-top {
    background-color: rgb(212, 157, 162);
    width: 246px;
    border-radius: 0 10px 10px 0;
  
}
.card-bottom {
    display: flex;
    flex-direction: column;
    align-content: center;
}

`

module.exports = style;