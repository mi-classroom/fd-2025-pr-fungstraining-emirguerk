export class MainFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <footer class="footer">
            <div>
            <p id="kontakt">
                Prof. Christian Noss<br>
                Campus Gummersbach<br>
                Steinmüllerallee 1<br>
                51643 Gummersbach<br>
                Raum 3.241<br>
                <br>
                <i
                class="icon">email</i>chr<!-- hehe@moeep -->istian<!-- hehe@moeep -->.noss<!-- hehe@moeep -->(at)t<!-- hehe@moeep -->h-koeln.de<br>
                <i class="icon">phone</i>+49 2261-8196-6412
            </p>
            </div>
        </footer>
    `;
  }
}
