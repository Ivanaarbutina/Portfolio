const Check = ({ completed }: { completed: boolean }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={completed ? "#7cecd4" : "none"}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke={completed ? "green" : "gray"}
        width={24}
        className="check-icon "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
    </svg>
    </div>
  )
}

export default Check;