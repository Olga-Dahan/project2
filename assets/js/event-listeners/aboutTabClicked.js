export function aboutTabClicked() {
    const html = `
    <br>
    <h3>About me</h3>
        <p>My name is Olga Dahan</p>
        <p>I am studying at John Bryce college for Full Stack Web Development</p>
        <p>I have already learned HTML, CSS, Bootstrap, JavaScript, jQuery, Ajax, Rest API, TypeScript</p>
        <p>This website is my second project</p>
        <p>The project presents information from the cryptocurrency world</p>
        <img src="./assets/images/myPhoto.JPG">
    `;
    document.getElementById('about-tab-pane').innerHTML = html;
}
