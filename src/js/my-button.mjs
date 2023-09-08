import {LitElement, html, css} from 'lit';

class MyButton extends LitElement {
	static styles = css`
		b {
			color: red;
		}
	`;

	static properties = {
		name: {}
	};

	render() {
		return html`Hello <b>${this.name}</b>!`;
	}
}

customElements.define('my-button', MyButton);
