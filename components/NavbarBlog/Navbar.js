import React from "react";
// import Header from '../header/Header';
import HeaderBlog from '../headerBlog/Header';

export default function Navbar (props) {
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const className = scroll > 80 ? "fixed-navbar active" : "fixed-navbar";

  return (
    <div className={ className }>
      <HeaderBlog hclass={ props.hclass } Logo={ props.Logo } topbarNone={ props.topbarNone } />
    </div>
  );
}