export const BurgerIcon = ({ className }: { className?: string }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        {' '}
        <path d="M4 18L20 18" stroke="#000" strokeWidth="2" strokeLinecap="round"></path>{' '}
        <path d="M4 12L20 12" stroke="#000" strokeWidth="2" strokeLinecap="round"></path>{' '}
        <path d="M4 6L20 6" stroke="#000" strokeWidth="2" strokeLinecap="round"></path>{' '}
      </g>
    </svg>
  );
};
