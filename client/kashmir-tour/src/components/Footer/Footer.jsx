/* eslint-disable react/react-in-jsx-scope */
export function Footer() {
  return (
    <footer className="mx-auto my-4 w-full max-w-7xl px-8 py-4 text-center text-[0.8rem] text-text-secondary dark:text-d-text-secondary">
      <span>
        &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        Mohsin Manzoor Bhat. Find me on
        {' '}
        <a
          href="https://www.linkedin.com/in//"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        {' '}
        or
        {' '}
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        .
        <br />
        Powered by
        {' '}
        <a href="https://remix.run/" target="_blank" rel="noopener noreferrer">
          Remix
        </a>
        .
      </span>
    </footer>
  );
}

export default Footer;
