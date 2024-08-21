export default function HobbyLinks() {
  const hobbyLinks = [
    "https://www.thriftbooks.com/",
    "https://www.wanikani.com/",
  ];

  return (
    <div>
      <a href={hobbyLinks[0]}>Reading...</a>
      <a href={hobbyLinks[1]}>Japanese...</a>
    </div>
  );
}
