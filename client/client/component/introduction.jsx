import ResearchImage from '../src/assets/research.png';

const Powerbutton = (props) =>{
	return(
		<a href={`${props.href}`}>
			<button id={props.name} name={props.name} className={`text-lg p-2 rounded-md ${props.className}`}>
				{props.name}
			</button>
		</a>
		);
};

function introduction(){
	return(
		<div id="introductionBox" className="flex flex-col md:flex-row w-full h-auto md:h-[450px] border-2 border-black gap-1 p-2">
			<div id="slogan" className="flex flex-col items-center justify-center gap-5 drop-shadow-xl w-full md:w-3/4 h-[400px] md:h-full p-1">
				<h3 className="text-2xl">Jelajahi Ide dan Temukan Judul Penelitian Kamu Disini!</h3>
				<div id="powerbutton" className="flex flex-row gap-2">
					<Powerbutton name="Lihat Daftar" href="#" className="bg-gray-300 hover:bg-gray-500"/>
					<Powerbutton name="Ajukan Judul" href="#" className="bg-orange-300 hover:bg-orange-500"/>
				</div>
			</div>
			<div id="introductionImages" className="w-full md:w-2/5 h-1/2 md:h-full hidden md:block object-cover">
				<img src={ResearchImage} className="w-full h-full" alt="research"/>
			</div>
		</div>
		);
}

export default introduction;