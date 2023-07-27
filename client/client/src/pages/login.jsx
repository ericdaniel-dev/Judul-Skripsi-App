function LoginPage(){
	return(
		<div id="LoginBox"  className="">
			<div id="logintemplate" className="flex flex-col gap-2 border-2 border-black w-full md:w-1/2 h-auto mx-auto p-5">
				<h3 className="text-2xl text-slate-900">Login</h3>
				<span className="text-base">Welcome, please input your details</span>
				<form method="" action="" className="flex flex-col w-3/4 mx-auto gap-2">
					<label htmlFor="username" className="text-lg">Username</label>
					<input type="text" name="username" 
						id="username" autoComplete="off" 
						placeholder="example" className="p-2 border-2" required/>
					<label htmlFor="password" className="text-lg">Password</label>
					<input type="password" name="password" 
						id="password" autoComplete="off" 
						placeholder="*****" className="p-2 border-2" required/>
					<button type="submit" className="bg-orange-400 hover:bg-orange-600 w-1/2 mx-auto p-2">Login</button>
				</form>
			</div>
		</div>
		);
}

export default LoginPage;