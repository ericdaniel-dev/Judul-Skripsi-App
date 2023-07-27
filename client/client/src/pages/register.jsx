function RegisterPage(){
	return(
		<div id="registerBox"  className="">
			<div id="registertemplate" className="flex flex-col gap-2 border-2 border-black w-full md:w-1/2 h-auto mx-auto p-5">
				<h3 className="text-2xl text-slate-900">Register</h3>
				<span className="text-base">Welcome, please input your details</span>
				<form method="" action="" className="flex flex-col w-3/4 mx-auto gap-2">
					<label htmlFor="email" className="text-lg">Email</label>
					<input type="text" name="email" 
						id="email" autocomplete="off" 
						placeholder="example@gmail.com" className="p-2 border-2" required/>
					<label htmlFor="username" className="text-lg">Username</label>
					<input type="text" name="username" 
						id="username" autocomplete="off" 
						placeholder="example" className="p-2 border-2" required/>
					<label htmlFor="password" className="text-lg">Password</label>
					<input type="password" name="password" 
						id="password" autocomplete="off" 
						placeholder="*****" className="p-2 border-2" required/>
					<label htmlFor="confirmpassword" className="text-lg">Confirm Password</label>
					<input type="password" name="confirmpassword" 
						id="password" autocomplete="off" 
						placeholder="*****" className="p-2 border-2" required/>
					<button type="submit" className="bg-orange-400 hover:bg-orange-600 w-1/2 mx-auto p-2">register</button>
				</form>
			</div>
		</div>
		);
}

export default RegisterPage;