const people = [
	{
		name: 'Lindsay Walton',
		title: 'Front-end Developer',
		department: 'Optimization',
		email: 'lindsay.walton@example.com',
		role: 'Member',
		image:
				'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	// More people...
]

export default function Projects() {
	const rows = []
	return (
			<div className="h-screen">
				<div className="pt-8 flex justify-center items-center">
					<img
							className="inline-block h-16 w-16 rounded-full"
							src="https://avatars.githubusercontent.com/u/101694484?v=4"
							alt=""
					/>
					<div className="ml-4">
						<h3 className="text-lg leading-6 font-medium text-gray-900">ridge-kimani's projects</h3>
					</div>
				</div>
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="mt-8 flex flex-col">
					<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
							<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
								<table className="min-w-full divide-y divide-gray-300">
									<thead className="bg-gray-50">
									<tr>
										<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
											ID
										</th>
										<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
											Name
										</th>
										<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
											Description
										</th>
										<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
											Language
										</th>
										
										<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
											Updated At
										</th>
									</tr>
									</thead>
									<tbody className="divide-y divide-gray-200 bg-white">
									{people.map((person) => (
											<tr key={person.email} className="hover:bg-gray-100 hover:cursor-pointer">
												<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
														<div className="text-left font-medium text-gray-900">{person.name}</div>
												</td>
												<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
													<div className="text-gray-900 text-left">{person.title}</div>
													<div className="text-gray-500 text-left">{person.department}</div>
												</td>
												<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left">
                        <span className=" inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          Active
                        </span>
												</td>
												<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left">{person.role}</td>
												<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left">{person.role}</td>
											</tr>
									))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
	
	)
}
