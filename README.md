# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Konsep Penting React :

1. Components => Fungsi JavaScript yang mengembalikan Markup dan bisa dipakai sebanyaknya
2. Atomic Design => Cara Mengorganisir Project React
3. React Router => Framework React untuk berpindah path ke path lainnya dan mengatur error
4. Condional => Conditional react sama seperti di js
5. Nested Components => Cara membuat components didalam components ( Children )
6. Rendering List => Merender sebuah list ( li ) di project ini menggunakan map
7. Event Handler => Kemampuan melakukan event di project ini menggunakan onClick() yang terdapat beberapa fungsi berbeda seperti handleAddToCart, handleLogOut , DLL
8. useState => Agar component react dapat mengingat dan melakukan rerender, ex: [count, setCount]
9. useEffect => Untuk melakukan didmount (inisiasi ) & didUpdate ( fungsi untuk mengupdatae) di stateless component
10. useRef => Untuk Memanipulasi DOM. dan perhatikan penggunaan useRef yang tepat.
