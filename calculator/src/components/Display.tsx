const Display = (props: { current: string }) => {
  return (
    <>
      <p>ここがディスプレイ</p>
      <p>{props.current}</p>
    </>
  );
};
export default Display;
