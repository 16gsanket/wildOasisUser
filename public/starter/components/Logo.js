function Logo() {
  return (
    <Link href="/" className='flex items-center gap-4 z-10 bg-green-400'>
      <img src="/logo.png/" height={60} width={60} alt='The Wild Oasisi'/>
      <span className="text-xl font-extrabold text-red-900">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
