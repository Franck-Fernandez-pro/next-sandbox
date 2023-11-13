import { ConnectButton } from './ConnectButton';

export default function Navbar() {
  return (
    <nav className="fixed -mt-20 -mx-9 p-5 flex justify-end w-full gap-3">
      {/* <Link href="/me">
        <FaUser />
      </Link> */}
      <ConnectButton />
    </nav>
  );
}
