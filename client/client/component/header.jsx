import { useState } from 'react';

function Header(){
	const [navIsopen, setNavIsOpen] = useState(false);
	function toogle(){
		const menubar = document.getElementById('menubar');
		if(navIsopen){
			menubar.classList.add('hidden');
			menubar.classList.remove('inline-block');
			setNavIsOpen(false);
		}
		else{
			menubar.classList.remove('hidden');
			menubar.classList.add('inline-block');
			setNavIsOpen(true);
		}
	}
	return(
		<header className="border-2 border-black p-3 w-full h-auto">
			<div id="headers" className="flex flex-row items-center justify-between">
				<span className="text-lg md:text-xl font-semibold">Pengajuan Skripsi APP</span>
				<div className="flex flex-row">
					<nav id="navbar" className="flex flex-row items-center">
						<ul id="menubar" className="hidden md:flex flex-col md:flex-row gap-2 text-xl">
							<li className="p-2 hover:bg-gray-200"><a href="/">Home</a></li>
							<li className="p-2 hover:bg-gray-200"><a href="#">Daftar Judul</a></li>
							<li className="p-2 hover:bg-gray-200"><a href="#">Mahasiswa</a></li>
							<li className="p-2 hover:bg-gray-200"><a href="#">Dosen</a></li>
						</ul>
						<ul className="flex flex-row p-2 gap-2">
							<li><a href="/login">Login</a></li>
							<li><a href="/register">Register</a></li>
						</ul>
					</nav>
					<button className="inline-block md:hidden p-2 border-2 border-black" onClick={toogle}>≡</button>
				</div>
			</div>
		</header>
		)
}

export default Header;