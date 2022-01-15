function Container(props) {
  return (
    <div className="2xl:container 2xl:mx-auto sm:px-4 md:px-8 px-2">
      {props.children}
    </div>
  );
}

export default Container;
