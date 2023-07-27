function daftarjudul(){
	return(
		<div id="daftarjudulBox" className="border-2 border-black p-3 w-full">
			<h2 className="text-2xl">Daftar Judul</h2>
			<div id="daftarjudul">
				<table className="table table-auto border-2 border-black divide-x divide-y divide-black p-1 w-full">
					<thead>
						<tr>
							<th>Judul Penelitian</th>
							<th>Deskripsi</th>
							<th>Pengaju</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody className="text-sm md:text-base">
						<tr>
							<td>Testing ReactJS dengan ViteJS</td>
							<td>Cara melakukan testing ReactJS dengan ViteJS</td>
							<td>Eric</td>
							<td>Pending</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		);
}

export default daftarjudul;