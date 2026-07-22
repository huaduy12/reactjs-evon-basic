import useLinkNewTab from "./hooks/useLinkNewTab";

const Blog = () => {
  //   const refContent = useRef(null);
  //   useEffect(() => {
  //     if (refContent) {
  //       const links = refContent.current.querySelectorAll("a");
  //       links.forEach((element) => {
  //         element.setAttribute("target", "_blank");
  //       });
  //     }
  //   }, []);
  const { refContent } = useLinkNewTab();
  return (
    <div className="empty-content" ref={refContent}>
      <p className="mb-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam,
        illo corporis earum esse eveniet, beatae ipsam velit facere officiis cum
        quos nobis possimus dolore illum dignissimos error quidem. Debitis
        impedit libero, tempora voluptates corporis dicta. Reprehenderit animi
        vero expedita sequi sunt atque deserunt quia beatae placeat earum maxime
        Nulla tenetur magni maiores accusantium quidem voluptatem aspernatur
        explicabo adipisci nisi!
        <a href="https://google.com" className="underline">
          google.com
        </a>
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam,
        illo corporis earum esse eveniet, beatae ipsam velit facere officiis cum
        quos nobis possimus dolore illum dignissimos error quidem. Debitis
        impedit libero, tempora voluptates corporis dicta. Reprehenderit animi
        vero expedita sequi sunt atque deserunt quia beatae placeat earum maxime
        Nulla tenetur magni maiores accusantium quidem voluptatem aspernatur
        explicabo adipisci nisi!
        <a href="https://google.com" className="underline">
          google.com
        </a>
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam,
        illo corporis earum esse eveniet, beatae ipsam velit facere officiis cum
        quos nobis possimus dolore illum dignissimos error quidem. Debitis
        impedit libero, tempora voluptates corporis dicta. Reprehenderit animi
        vero expedita sequi sunt atque deserunt quia beatae placeat earum maxime
        Nulla tenetur magni maiores accusantium quidem voluptatem aspernatur
        explicabo adipisci nisi!
        <a href="https://google.com" className="underline">
          google.com
        </a>
      </p>
    </div>
  );
};

export default Blog;
