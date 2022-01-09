import './style.scss';
import { debounce } from 'lodash-es';
import styles from `./example.module.css`

console.log(debounce);

document.querySelector('#app').innerHTML = `
  <h1 class="${styles.title}">Hello Vite!!!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
