export default function MemberPage() {
  const members = [
    "Member 1",
    "Member 2",
    "Member 3",
    "Member 4",
    "Member 5",
    "Member 6",
    "Member 7",
    "Member 8",
    "Member 9",
    "Member 10",
    "Member 11",
    "Member 12",
  ];

  return (
    <>
      <h1>สมาชิกวง BUS</h1>
      <ul>
        {members.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </>
  );
}
